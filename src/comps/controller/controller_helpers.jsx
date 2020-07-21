import {useRef, useState, useEffect} from 'react';

export let CONTROLLER = [];

export const sort = (nums) => {
  if (!Array.isArray(nums)) {
    return -1;
  }
  if (nums.length < 2) {
    return nums;
  }
  let swapped = false,
    temp = 0,
    count = -1,
    arrLength = 0;

  do {
    count++;
    swapped = false;
    arrLength = nums.length - 1 - count;
    for (let i = 0; i <= arrLength; i++) {
      if (nums[i] > nums[i + 1]) {
        temp = nums[i + 1];
        nums[i + 1] = nums[i];
        nums[i] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return nums;
};

export function useHover() {
  const [value, setValue] = useState(false);

  const ref = useRef(null);

  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener('mouseover', handleMouseOver);
      node.addEventListener('mouseout', handleMouseOut);

      return () => {
        node.removeEventListener('mouseover', handleMouseOver);
        node.removeEventListener('mouseout', handleMouseOut);
      };
    }
  }, []);

  return [ref, value];
}
