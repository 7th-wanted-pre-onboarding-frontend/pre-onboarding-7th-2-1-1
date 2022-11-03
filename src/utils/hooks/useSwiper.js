import { useCallback, useEffect, useRef } from 'react';

const position = {
  scrollLeft: 0,
  clientX: 0,
  scrollY: 0
};

let isMoving = false;

export default function useSwiper(props) {
  const ref = useRef(null);
  const dependencies = props?.dependencies || [ref.current];

  useEffect(() => {
    const node = ref.current;

    if (node) {
      node.addEventListener('wheel', onMouseWheel);
      node.addEventListener('mousedown', onMouseDown);
    }

    return () => {
      if (node) {
        node.removeEventListener('wheel', onMouseWheel);
        node.removeEventListener('mousedown', onMouseDown);
      }
    };
  }, [dependencies, ref.current]);

  const onMouseWheel = useCallback(
    (event) => {
      let wheelingTimer = null;

      event.preventDefault();

      return (function closure() {
        if (wheelingTimer === null) {
          position.scrollY = window.scrollY;
          window.addEventListener('scroll', noscroll);
        }

        const delta = event.deltaY;
        ref.current.scrollLeft += delta;

        clearTimeout(wheelingTimer);
        wheelingTimer = setTimeout(() => {
          wheelingTimer = null;
          window.removeEventListener('scroll', noscroll);
        }, 250);
      })();
    },
    [ref.current]
  );

  const noscroll = function closure() {
    window.scrollTo(0, position.scrollY);
    return false;
  };

  const onMousemove = useCallback(
    (event) => {
      if (isMoving && ref.current) {
        const diff = event.clientX - position.clientX;
        ref.current.scrollLeft = position.scrollLeft - diff;
      }
    },
    [ref.current]
  );

  const onMouseDown = useCallback(
    (event) => {
      let waiting = false;

      return (function closure() {
        if (!waiting) {
          position.scrollLeft = ref.current.scrollLeft;
          position.clientX = event.clientX;

          document.addEventListener('mousemove', onMousemove);
          document.addEventListener('mouseup', onMouseup);
          waiting = true;
          isMoving = true;

          setTimeout(() => {
            waiting = false;
          }, 250);
        }
      })();
    },
    [ref.current]
  );

  const onMouseup = useCallback(() => {
    document.removeEventListener('mousemove', onMouseDown);
    document.removeEventListener('mouseup', onMouseup);
    isMoving = false;
  }, [ref.current]);

  return ref;
}
