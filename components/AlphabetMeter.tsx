// File: components/AlphabetMeter.tsx
'use client';

import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';

// --- UPAR KA SARA CODE (mulberry32, RollingChar) SAME RAKHEIN ---
/* ... (mulberry32, hashStr, getFixedReelForChar, RollingChar definitions remain unchanged) ... */
/* -------------------------------------------
  Utils: deterministic RNG (seeded by key)
  ------------------------------------------- */
function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function hashStr(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/* -------------------------------------------
  6-fixed-letter reel generator per char
  ------------------------------------------- */
function getFixedReelForChar(char: string, seedKey: string): string[] | null {
  const isUpper = /[A-Z]/.test(char);
  const isLower = /[a-z]/.test(char);
  if (!isUpper && !isLower) return null;

  const baseSet = (isUpper ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : 'abcdefghijklmnopqrstuvwxyz').split('');
  const seed = hashStr(seedKey);
  const rnd = mulberry32(seed);

  const target = char;
  const chosen = new Set<string>([target]);
  while (chosen.size < 6) {
    chosen.add(baseSet[Math.floor(rnd() * baseSet.length)]);
  }
  const arr = Array.from(chosen);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  const withoutTarget = arr.filter((c) => c !== target);
  return [...withoutTarget, target];
}

/* -------------------------------------------
  RollingChar: odometer spin with 6-fixed reel
  ------------------------------------------- */
const RollingChar: React.FC<{
  char: string;
  duration?: number;
  delay?: number;
  loops?: number;
  reelKey: string;
}> = ({ char, duration = 1200, delay = 100, loops = 2, reelKey }) => {
  if (char === ' ') return <span>{'\u00A0'}</span>;
  const reel = useMemo(() => getFixedReelForChar(char, reelKey), [char, reelKey]);
  const measRef = useRef<HTMLSpanElement | null>(null);
  const [widthPx, setWidthPx] = useState<number | null>(null);
  const [heightPx, setHeightPx] = useState<number | null>(null);
  const [ready, setReady] = useState(false);
  const [start, setStart] = useState(false);
  const [done, setDone] = useState(false);
  const { displayArr, targetIndex } = useMemo(() => {
    if (!reel) return { displayArr: [char], targetIndex: 0 };
    const base = reel;
    const arr: string[] = [];
    const cycles = Math.max(1, loops);
    for (let i = 0; i < cycles - 1; i++) arr.push(...base);
    arr.push(base[base.length - 1]);
    return { displayArr: arr, targetIndex: arr.length - 1 };
  }, [reel, char, loops]);
  useEffect(() => {
    if (!measRef.current) return;
    const r = measRef.current.getBoundingClientRect();
    setWidthPx(Math.ceil(r.width));
    setHeightPx(r.height);
    setReady(true);
  }, [char]);
  useEffect(() => {
    if (!ready) return;
    const t = setTimeout(() => setStart(true), delay);
    return () => clearTimeout(t);
  }, [ready, delay]);
  const onTransitionEnd = () => setDone(true);
  if (!reel) {
    return (
      <span
        className="inline-block align-baseline transition-opacity"
        style={{
          opacity: start ? 1 : 0,
          transitionDuration: `${duration}ms`,
          transitionDelay: `${delay}ms`,
          fontKerning: 'normal',
          fontFeatureSettings: '"kern" 1',
          textRendering: 'optimizeLegibility',
        }}
        onTransitionEnd={onTransitionEnd}
      >
        {char}
      </span>
    );
  }
  if (done) return <>{char}</>;
  return (
    <span className="inline-block align-baseline">
      <span ref={measRef} aria-hidden="true" className="invisible absolute pointer-events-none" style={{ position: 'absolute' }}>
        {char}
      </span>
      {ready && (
        <span
          className="relative inline-block overflow-hidden align-baseline"
          style={{
            width: `${widthPx ?? 0}px`,
            height: `${heightPx ?? 0}px`,
            lineHeight: 1,
            verticalAlign: 'baseline',
            opacity: start ? 1 : 0,
            transition: `opacity ${duration}ms`,
            transitionDelay: `${delay}ms`,
            fontKerning: 'normal',
            fontFeatureSettings: '"kern" 1',
            textRendering: 'optimizeLegibility',
          }}
        >
          <span
            className="block will-change-transform"
            style={{
              transform: start && heightPx != null ? `translate3d(0,-${targetIndex * heightPx}px,0)` : 'translate3d(0,0,0)',
              transitionProperty: 'transform',
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              transitionDuration: `${duration}ms`,
              transitionDelay: `${delay}ms`,
            }}
            onTransitionEnd={onTransitionEnd}
          >
            {displayArr.map((c, i) => (<span key={i} className="block leading-none">{c}</span>))}
          </span>
        </span>
      )}
    </span>
  );
};


/* -------------------------------------------
  RollingLine: per-line font-size lock (px)
  ------------------------------------------- */
const RollingLine: React.FC<{
  text: string;
  delay?: number;
  duration?: number;
  loops?: number;
  className?: string;
}> = ({ text, delay = 100, duration = 1200, loops = 2, className }) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [fontSizePx, setFontSizePx] = useState<string | null>(null);
  useLayoutEffect(() => {
    if (!ref.current) return;
    const cs = getComputedStyle(ref.current);
    setFontSizePx(cs.fontSize);
  }, []);
  return (
    <span
      ref={ref}
      // --- UPDATE: justify-center add kiya ---
      className={`flex flex-row flex-wrap justify-center ${className || ''}`}
      aria-label={text}
      style={{
        fontSize: fontSizePx ?? undefined,
        fontKerning: 'normal',
        fontFeatureSettings: '"kern" 1',
        textRendering: 'optimizeLegibility',
      }}
    >
      {text.split('').map((ch, i) => {
        if (ch === ' ') return <span key={i}>{'\u00A0'}</span>;
        const seedKey = `${text}|idx:${i}|char:${ch}|v3`;
        return (<RollingChar key={i} char={ch} delay={delay} duration={duration} loops={loops} reelKey={seedKey} />);
      })}
    </span>
  );
};

// --- Props define karna ---
interface AlphabetMeterProps {
  line1: string;
  line2: string;
}

const AlphabetMeter: React.FC<AlphabetMeterProps> = ({ line1, line2 }) => {
  return (
    // Wrapper div (waisa hi hai)
    <div className="flex flex-col items-center">
      <h2
        // Styling classes (waisi hi hain)
        className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 mb-2 md:mb-4 min-h-[1.2em]"
      >
        <RollingLine text={line1} />
      </h2>
      <h3
        // Styling classes (waisi hi hain)
        className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-blue-600 min-h-[1.2em]"
      >
        <RollingLine text={line2} />
      </h3>
    </div>
  );
};

export default AlphabetMeter;