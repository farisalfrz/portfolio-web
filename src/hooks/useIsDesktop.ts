"use client";

import { useState, useEffect } from 'react';

export const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
      setIsDesktop(hasFinePointer);
    };

    checkDevice();
  }, []);

  return isDesktop;
};