import React from "react";
import classNames from "classnames";
import styles from "./Button.module.css";

const SignUp = ({ icon, hasIconRight, title, onClick, primary }) => {
  return (
    <button
      className={classNames([
        styles.button,
        primary ? styles.primaryBG : styles.normalBG,
        hasIconRight && styles.reverse,
      ])}
      onClick={onClick}
      aria-label="*"
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

export default SignUp;