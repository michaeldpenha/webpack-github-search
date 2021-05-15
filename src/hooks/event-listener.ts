import { useRef, useEffect } from 'react';

/**
 * This function will call the handler when the element is clicked
 * @param eventName 'mousedown'
 * @param handler  '() => {}'
 * @param element 'document'
 */

export const useEventListener = (
  eventName: string,
  handler: EventListener,
  element: HTMLElement | Window | Document,
) => {
  const savedHandler = useRef<EventListener>();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const isSupported = element && element.addEventListener;

    if (!isSupported) {
      return;
    }

    const eventListener = (event: Event) => {
      if (savedHandler.current) savedHandler.current(event);
    };

    if (element) {
      element.addEventListener(eventName, eventListener);
    }

    return () => {
      if (element) {
        element.removeEventListener(eventName, eventListener);
      }
    };
  }, [eventName, element]);
};
