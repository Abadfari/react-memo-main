import React, { useRef, useState } from "react";
import styles from "./ToolTipComponent.module.css";

const ToolTipComponent = ({ children, text, customClass }) => {
  const refSetTimeout = useRef();
  const [showToolTip, setShowToolTip] = useState(false);
  const toolTipClasses = customClass ? `${styles.tooltip} ${customClass}` : `${styles.tooltip}`;
  const onMouseEnterHandler = () => {
    refSetTimeout.current = setTimeout(() => {
      setShowToolTip(true);
    }, 750);
  };
  const onMouseLeaveHandler = () => {
    clearTimeout(refSetTimeout.current);
    setShowToolTip(false);
  };
  return (
    <div className={styles.container} onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
      {children}
      {showToolTip && <div className={toolTipClasses}>{text}</div>}
    </div>
  );
};

export default ToolTipComponent;
