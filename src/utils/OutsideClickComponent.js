import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

export default function OutsideClickComponent({ children, handleActiveButton }) {
  const wrapperRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        handleActiveButton('no-active');
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleActiveButton]);

  return <div ref={wrapperRef}>{children}</div>;
}

OutsideClickComponent.propTypes = {
  children: PropTypes.element.isRequired
};

