import { useEffect, useRef, useState } from "react";

export function Atmosphere() {
  const ring = useRef<HTMLDivElement>(null);
  const [fine, setFine] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setFine(finePointer && !reduce);
    if (!finePointer || reduce) return;

    const el = ring.current;
    if (!el) return;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      const hot = (e.target as HTMLElement | null)?.closest("a, button, [data-hot]");
      el.classList.toggle("is-hot", Boolean(hot));
    };

    const tick = () => {
      x += (tx - x) * 0.22;
      y += (ty - y) * 0.22;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const bar = document.getElementById("scroll-progress");
    if (!bar) return;
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max <= 0 ? 0 : window.scrollY / max;
      bar.style.setProperty("--progress", String(p));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <div className="scan" aria-hidden="true" />
      <div id="scroll-progress" className="progress-bar" aria-hidden="true" />
      {fine ? <div ref={ring} className="cursor-ring" aria-hidden="true" /> : null}
    </>
  );
}

export function Intro() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = window.setTimeout(() => setDone(true), reduce ? 0 : 1600);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <div className={done ? "intro is-done" : "intro"} aria-hidden={done}>
      <div className="text-center">
        <p className="mb-4 text-[11px] tracking-[0.42em] text-muted uppercase">Muscat · 2026</p>
        <p className="font-display text-5xl italic leading-none text-fg sm:text-7xl">Credence</p>
        <p className="mt-2 font-display text-5xl leading-none text-accent sm:text-7xl">Chronicle</p>
      </div>
    </div>
  );
}

export function useReveal() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
}
