// src/animations/lenis.ts
import Lenis from "@studio-freight/lenis";

export type LenisOptions = ConstructorParameters<typeof Lenis>[0];

export function setupLenis(options?: LenisOptions) {
  const lenis = new Lenis({
    // 你可以按需调：值越小越“粘”，越大越跟手
    lerp: 0.08,
    smoothWheel: true,
    ...options,
  });

  let rafId = 0;

  const raf = (time: number) => {
    lenis.raf(time);
    rafId = requestAnimationFrame(raf);
  };

  rafId = requestAnimationFrame(raf);

  const destroy = () => {
    cancelAnimationFrame(rafId);
    lenis.destroy();
  };

  return { lenis, destroy };
}
