import { RefObject, useEffect, useMemo, useState } from "react";

export const useIsOnScreen = (
  ref: RefObject<HTMLElement> | RefObject<null> | null,
  scrollPosition: number
) => {
  const [isIntersecting, setIntersecting] = useState<boolean>(false);
  const [intersectionRatio, setIntersectionRatio] = useState<number | null>(
    null
  );
  const [screenYPosition, setScreenYPosition] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
      setIntersectionRatio(entry.intersectionRatio);
      setScreenYPosition(entry.boundingClientRect.bottom);
    });

    if (ref?.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref, scrollPosition]);

  return { isIntersecting, intersectionRatio, screenYPosition };
};
