import React from "react";
import classNames from "classnames";
import styles from "./Button.module.css";

const EquipButton = ({ icon, hasIconRight, title, onClick, primary }) => {
  return (
    <button
      className={classNames([
        styles.button,
        primary ? styles.primaryBG : styles.blackBG,
        hasIconRight && styles.reverse,
      ])}
      onClick={onClick}
    >
      {!!icon && (
        <span
          className={classNames([
            styles.icon,
            hasIconRight && styles.iconRight,
          ])}
        >
          {icon}
        </span>
      )}
      <span>{title}</span>
    </button>
  );
};

export default EquipButton;