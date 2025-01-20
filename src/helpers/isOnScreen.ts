import { RefObject, useEffect, useMemo, useState } from "react";

export const useIsOnScreen = (
  ref: RefObject<HTMLElement> | RefObject<null> | null
) => {
  const [isIntersecting, setIntersecting] = useState<boolean>(false);
  const [intersectionRatio, setIntersectionRatio] = useState<number | null>(
    null
  );

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) => {
        console.log("entry: ", entry);
        setIntersecting(entry.isIntersecting);
        setIntersectionRatio(entry.intersectionRatio);
      }),
    [ref]
  );

  useEffect(() => {
    console.log("useIsOnScreen ref: ", ref);
    if (ref?.current) {
      observer.observe(ref.current);
      return () => observer.disconnect();
    }
  }, []);

  return { isIntersecting, intersectionRatio };
};
