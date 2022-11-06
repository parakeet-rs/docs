import { useEffect, useState } from 'react';
import { debounce } from 'lodash';

const getViewportWidth = () => window.outerWidth;

export const BREAK_POINT_SMALL = 576;
export const BREAK_POINT_MEDIUM = 768;
export const BREAK_POINT_LARGE = 992;
export const BREAK_POINT_XLARGE = 1200;

export function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(getViewportWidth);

  useEffect(() => {
    const handleResize = debounce(() => {
      setWindowWidth(getViewportWidth);
    }, 200);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
}
