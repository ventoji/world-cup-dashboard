import React, { useEffect, useRef } from 'react';
import './Focus.css';

const Focus = () => {
  let myRef = useRef(null);

  const moveFocus = () => {
    const node = myRef.current;
    console.log(node);
    node.addEventListener('keydown', function (e) {
      const active = document.activeElement;
      if (e.keyCode === 40 && active.nextSibling) {
        active.nextSibling.focus();
      }
      if (e.keyCode === 38 && active.previousSibling) {
        active.previousSibling.focus();
      }
    });
  };
  useEffect(() => {
    moveFocus();
  });
  return (
    <div ref={myRef}>
      <div tabIndex="0">First</div>
      <div tabIndex="1">Second</div>
      <div tabIndex="2">Third</div>
    </div>
  );
};

export default Focus;
