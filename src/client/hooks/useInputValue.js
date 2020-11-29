import { useState } from 'react';

export default function useInputValue(initialValue = '') {
  const [value, setValue] = useState(initialValue);

  return [value, setValue, e => setValue(e.target.value)];
}
