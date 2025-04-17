"use client";

import { useLoading } from "@/stores/useLoading";
import { useEffect } from "react";

let renderStart: Date | null = null;
let renderEnd: Date | null = null;

/**
 * 이 컴포넌트가 마운트되는 시점 - 렌더링 시작
 */
export function RenderStartTrigger() {
  const { startLoading } = useLoading();
  useEffect(() => {
    renderStart = new Date();
    startLoading();
    console.log("렌더링 시작");
  }, []);

  return null;
}

/**
 * 이 컴포넌트가 마운트되는 시점 - 렌더링 완료
 */
export function RenderEndTrigger() {
  const { endLoading } = useLoading();

  useEffect(() => {
    setTimeout(() => {
      endLoading();
      renderEnd = new Date();
      console.log(`렌더링 완료, 소요 시간: ${renderEnd!.getTime() - renderStart!.getTime()}ms`);
    }, 10);
  }, []);

  return null;
}
