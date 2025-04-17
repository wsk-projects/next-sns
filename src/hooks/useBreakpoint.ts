"use client";

import { useEffect, useState } from "react";

type Breakpoint = "tiny" | "xs" | "sm" | "md" | "lg" | "xl";

const breakpointQueries: Record<Breakpoint, string> = {
  tiny: "(min-width: 320px)",
  xs: "(min-width: 480px)",
  sm: "(min-width: 640px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 1024px)",
  xl: "(min-width: 1280px)",
};

/**
 * 현재 화면 크기에 해당하는 브레이크포인트를 반환하는 커스텀 훅
 * @returns 현재 활성화된 Breakpoint (e.g. "sm", "lg", "xl")
 */
export function useBreakpoint(): Breakpoint {
  const [current, setCurrent] = useState<Breakpoint>("tiny");

  // 각 Breakpoint에 대한 미디어 쿼리 객체
  const queries = Object.entries(breakpointQueries).map(([key, query]) => ({
    breakpoint: key as Breakpoint, // Breakpoint
    mql: window.matchMedia(query), // MediaQueryList
  }));

  const actions = {
    /**
     * 현재 활성화된 Breakpoint 계산
     */
    calculateBreakpoint: (): Breakpoint => {
      const matchedPoints = queries.filter(({ mql }) => mql.matches); // 현재 만족하는 모든 Breakpoint 식별
      if (matchedPoints.length > 0) {
        return matchedPoints[matchedPoints.length - 1].breakpoint; // 가장 큰 Breakpoint 반환
      }
      return "tiny"; // 기본값; 가장 작은 Breakpoint
    },
    /**
     * 현재 state 업데이트
     */
    update: (): void => {
      setCurrent(actions.calculateBreakpoint());
    },
    /**
     * 미디어 쿼리 이벤트 리스너 추가
     */
    addEventListeners: (): void => {
      queries.forEach(({ mql }) => {
        mql.addEventListener("change", actions.update);
      });
    },
    /**
     * 미디어 쿼리 이벤트 리스너 제거
     */
    removeEventListeners: (): void => {
      queries.forEach(({ mql }) => {
        mql.removeEventListener("change", actions.update);
      });
    },
  };

  useEffect(() => {
    actions.update();
    actions.addEventListeners();

    return () => {
      actions.removeEventListeners();
    };
  }, []);

  return current;
}
