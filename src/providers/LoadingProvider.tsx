"use client";

import LoadingOverlay from "@/components/ui/overlay/LoadingOverlay";
import { constants } from "@/constants/constant";
import { useLoading } from "@/stores/useLoading";
import { consoleUtil } from "@/utils/consoleUtil";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

/**
 * 지연 로딩 프로바이더
 */
export default function LoadingProvider() {
  const pathname = usePathname();
  const prevPathnameRef = useRef<string | null>(null);
  const { isLoading, startLoading, endLoading } = useLoading();
  const isLoadingRef = useRef<boolean>(isLoading);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    isLoadingRef.current = isLoading;
  }, [isLoading]);

  useEffect(() => {
    const isTransition = prevPathnameRef.current !== pathname;

    if (!isTransition) return;

    const loadingStartThresholdMs = constants.LOADING_START_THREHSOLD; // 로딩 지연 시작 시간
    const loadingMinimumDurationMs = constants.LOADING_MINIMUM_DURATION; // 최소 로딩 시간

    // 로딩 지연 시작
    const delayTimer = setTimeout(() => {
      consoleUtil.log("[LoadingProvider] 로딩 지연 시작, 현재 로딩 상태", isLoadingRef.current);
      if (isLoadingRef.current) {
        consoleUtil.log("[LoadingProvider] 로딩 오버레이 시작");
        setIsVisible(true);
        startLoading();

        setTimeout(() => {
          endLoading();
          setIsVisible(false);
          consoleUtil.log("[LoadingProvider] 로딩 오버레이 종료");
        }, loadingMinimumDurationMs);
      }
    }, loadingStartThresholdMs);

    return () => {
      clearTimeout(delayTimer);
    };
  }, [pathname]);

  return <>{isVisible && <LoadingOverlay />}</>;
}
