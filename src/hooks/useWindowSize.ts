import { useState, useEffect } from 'react';

type StateType = {
    width: number,
    height: number
}

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState<StateType>({
      width: 0,
      height: 0,
    });

    useEffect(() => {
      const handleResize = () => {
        setWindowSize({
          width: window.screen.width,
          height: window.screen.height
        });
      }

      window.addEventListener('resize', handleResize);

      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
}

export default useWindowSize;