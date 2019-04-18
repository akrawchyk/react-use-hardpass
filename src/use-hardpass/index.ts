import * as React from 'react';
import { useRef, useState, useEffect } from 'react';
import hardpass from 'hardpass';

// interface Listener {
//   addEventListener(name: string, handler: (event?: any) => void, ...args: any[]): void;
//   removeEventListener(name: string, handler: (event?: any) => void): void;
// }

function useHardpass() {
  const [value, setValue] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const handleHardpassInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(hardpass(event.target.value))
  };

  useEffect(() => {
    const node = ref.current

    if (!node) {
      return
    }

    node.addEventListener('input', handleHardpassInput);

    return () => {
      node.removeEventListener('input', handleHardpassInput);
    };
  });

  return [ref, value];
}

export default useHardpass
