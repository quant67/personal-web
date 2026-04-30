"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

import { type Locale } from "@/lib/site-content";

const INTRO_STORAGE_KEY = "personal-web-home-intro-v4";
const INTRO_DURATION_MS = 2600;
const INTRO_FADE_MS = 360;

const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

type HomepageIntroOverlayProps = {
  locale: Locale;
  onActiveChange?: (active: boolean) => void;
};

export function HomepageIntroOverlay({
  locale,
  onActiveChange,
}: HomepageIntroOverlayProps) {
  const dismissedRef = useRef(false);
  const [shouldRender, setShouldRender] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  const finishIntro = () => {
    if (dismissedRef.current || typeof window === "undefined") {
      return;
    }

    dismissedRef.current = true;
    window.localStorage.setItem(INTRO_STORAGE_KEY, "seen");
    setIsVisible(false);

    window.setTimeout(() => {
      setShouldRender(false);
    }, INTRO_FADE_MS);
  };

  useIsomorphicLayoutEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncIntroState = () => {
      if (media.matches) {
        dismissedRef.current = true;
        setShouldRender(false);
        setIsVisible(false);
        return;
      }

      const params = new URLSearchParams(window.location.search);
      const forced = params.get("intro") === "1";
      const skipped = params.get("intro") === "0";
      const hasSeen = window.localStorage.getItem(INTRO_STORAGE_KEY) === "seen";
      const nextVisible = forced || (!skipped && !hasSeen);

      if (nextVisible) {
        window.scrollTo(0, 0);
      }

      dismissedRef.current = false;
      setShouldRender(nextVisible);
      setIsVisible(nextVisible);
    };

    syncIntroState();
    media.addEventListener("change", syncIntroState);

    return () => {
      media.removeEventListener("change", syncIntroState);
    };
  }, []);

  useEffect(() => {
    onActiveChange?.(shouldRender && isVisible);

    return () => {
      onActiveChange?.(false);
    };
  }, [isVisible, onActiveChange, shouldRender]);

  useEffect(() => {
    if (!shouldRender || typeof window === "undefined") {
      return;
    }

    const timeoutId = window.setTimeout(finishIntro, INTRO_DURATION_MS);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [shouldRender]);

  if (!shouldRender) {
    return null;
  }

  return (
    <div
      className="homepage-intro-overlay native-intro"
      data-visible={isVisible}
      aria-hidden={!isVisible}
    >
      <button
        type="button"
        className="homepage-intro-skip"
        tabIndex={isVisible ? 0 : -1}
        onClick={finishIntro}
      >
        {locale === "zh" ? "进入首页" : "Enter site"}
      </button>
      <div className="native-intro-stage">
        <div className="native-intro-avatar-wrap">
          <div className="native-intro-avatar">
            <Image
              src="/avatar.jpeg"
              alt=""
              fill
              sizes="(min-width: 1181px) 24rem, (min-width: 901px) 21rem, (min-width: 641px) 16rem, (min-width: 421px) 18rem, 15rem"
              priority
              className="native-intro-avatar-image"
            />
          </div>
        </div>

        <div className="native-intro-copy">
          <p className="native-intro-kicker">AI Native</p>
          <h1 className="native-intro-title" lang="zh-CN">
            从零开始的AI Native生活
          </h1>
        </div>
      </div>
    </div>
  );
}
