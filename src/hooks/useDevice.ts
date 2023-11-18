import { useEffect, useRef, useState } from "react";

/**
 * @returns object {isMobile}
 * @description detect whether your device is mobile or not
 */
export function useDeviceDetect() {
  const [isMobile, setMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const userAgent =
      typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    const mobile = Boolean(
      userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
      )
    );
    setMobile(mobile);
  }, []);

  return { isMobile };
}
