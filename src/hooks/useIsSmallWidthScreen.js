import { useEffect, useState } from 'react';
import { debounce } from 'lodash';
import useIsBrowser from '@docusaurus/useIsBrowser';

export const BREAK_POINT_SMALL = 576;
export const BREAK_POINT_MEDIUM = 768;
export const BREAK_POINT_LARGE = 992;
export const BREAK_POINT_XLARGE = 1200;

const getViewportWidth = () => window.outerWidth;
const getDefaultViewportWidth = () => BREAK_POINT_LARGE;

export function useWindowWidth() {
  const isBrowser = useIsBrowser();
  const cachedGetCurrentViewpoerWidth = isBrowser
    ? getViewportWidth
    : getDefaultViewportWidth;
  const [windowWidth, setWindowWidth] = useState(cachedGetCurrentViewpoerWidth);

  useEffect(() => {
    setWindowWidth(cachedGetCurrentViewpoerWidth);
  }, [isBrowser]);

  useEffect(() => {
    const handleResize = debounce(() => {
      setWindowWidth(cachedGetCurrentViewpoerWidth);
    }, 200);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
}
