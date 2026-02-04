import { useEffect, useRef } from "react";
import gsap from "gsap";

type UseDrawerGsapOptions = {
  isOpen: boolean;
  durationIn?: number; // 打开时长
  durationOut?: number; // 关闭时长
  overlayFade?: number; // 遮罩淡入淡出时长
  easeIn?: string;
  easeOut?: string;
  drawerFromXPercent?: number; // 右侧抽屉默认 100
};

export function useDrawerGsap(
  overlayRef: React.RefObject<HTMLElement | null>,
  drawerRef: React.RefObject<HTMLElement | null>,
  options: UseDrawerGsapOptions,
) {
  const {
    isOpen,
    durationIn = 0.35,
    durationOut = 0.3,
    overlayFade = 0.25,
    easeIn = "power3.out",
    easeOut = "power3.inOut",
    drawerFromXPercent = 100,
  } = options;

  const initedRef = useRef(false);

  // 初始化一次
  useEffect(() => {
    const overlay = overlayRef.current;
    const drawer = drawerRef.current;
    if (!overlay || !drawer) return;

    if (initedRef.current) return;
    initedRef.current = true;

    gsap.set(drawer, { xPercent: drawerFromXPercent });
    gsap.set(overlay, { autoAlpha: 0 });

    overlay.style.pointerEvents = "none";
  }, [drawerFromXPercent, drawerRef, overlayRef]);

  // 每次开关播放
  useEffect(() => {
    const overlay = overlayRef.current;
    const drawer = drawerRef.current;
    if (!overlay || !drawer) return;

    gsap.killTweensOf([overlay, drawer]);

    if (isOpen) {
      overlay.style.pointerEvents = "auto";

      const tl = gsap.timeline({ defaults: { ease: easeIn } });
      tl.to(overlay, { autoAlpha: 1, duration: overlayFade }, 0).to(
        drawer,
        { xPercent: 0, duration: durationIn },
        0,
      );
      return;
    }

    const tl = gsap.timeline({
      defaults: { ease: easeOut },
      onComplete: () => {
        overlay.style.pointerEvents = "none";
      },
    });

    tl.to(
      drawer,
      { xPercent: drawerFromXPercent, duration: durationOut },
      0,
    ).to(overlay, { autoAlpha: 0, duration: overlayFade }, 0.05);
  }, [
    isOpen,
    durationIn,
    durationOut,
    overlayFade,
    easeIn,
    easeOut,
    drawerFromXPercent,
    overlayRef,
    drawerRef,
  ]);
}
