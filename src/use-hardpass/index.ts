import { useRef, useState, useEffect } from 'react';
import hardpass from 'hardpass';

function useHardpass() {
  const [value, setValue] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const handleHardpassInput = (event: Event) => {
    const el = event.target as HTMLInputElement
    setValue(hardpass(el.value))
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
