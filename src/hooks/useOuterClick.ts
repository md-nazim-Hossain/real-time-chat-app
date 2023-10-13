import { useEffect, MutableRefObject } from 'react';
export const useOuterClick = (
  ref: MutableRefObject<HTMLDivElement | null>,
  callback: Function
) => {
  useEffect(() => {
    const clickHandler = (event: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(event.target as HTMLDivElement)
      ) {
        callback();
      }
    };
    document.addEventListener('click', clickHandler, true);
    return () => {
      document.removeEventListener('click', clickHandler, true);
    };
  }, [ref, callback]);
};
