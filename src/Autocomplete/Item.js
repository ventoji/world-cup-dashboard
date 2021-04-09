import React, { useEffect, useRef, useCallback } from 'react';

const Item = ({
  className,
  suggestion,
  focus,
  index,
  setFocus,
  onClick,
  onKeyDown,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    console.log('FOCUS', focus);
    //   console.log('INDEX', index);
    if (focus) {
      // Move element into view when it is focused
      ref.current.focus();
    }
  }, [focus]);

  const handleKeyPress = useCallback(
    (e) => {
      // console.log('ITEM',index);
      setFocus(index);
      onKeyDown(e);
    },
    [index, onKeyDown, setFocus],
  );

  const handleSelect = useCallback(
    (e) => {
      // alert(`${suggestion}`);
      // setting focus to that element when it is selected
      setFocus(index);
      onClick(e);
    },
    [onClick, index, setFocus],
  ); // sugesstion

  return (
    <li
      className={focus ? className : ''}
      tabIndex={focus ? 0 : -1}
      ref={ref}
      onClick={handleSelect}
      onKeyDown={handleKeyPress}
    >
      {suggestion}
    </li>
  );
};

export default Item;
