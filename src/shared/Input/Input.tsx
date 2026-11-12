import cn from "classnames";

import type { IInputProps } from "./Input.types";
import styles from "./Input.module.css";
import { Icon } from "../Icon/Icon";
import { useId } from "react";

export function Input({
  appearance = "boxed",
  icon,
  placeholder,
  label,
  name,
}: IInputProps) {
  const IconComponent = icon && Icon[icon];
  const inputId = useId();

  if (appearance === "unboxed") {
    return (
      <div className={styles.unboxedWrapper}>
        {IconComponent && <IconComponent />}
        <label className={styles.label} htmlFor={inputId}>
          {label}
        </label>
        <input
          name={name}
          id={inputId}
          placeholder={placeholder}
          className={cn(styles.input, styles.unboxedInput, styles[appearance])}
        />
      </div>
    );
  }
  return (
    <div className={cn(styles.wrapper)}>
      <label className={styles.label} htmlFor={inputId}>
        {label}
      </label>
      <div className={styles.inputWrapper}>
        {IconComponent && <IconComponent className={styles.icon} />}
        <input
          name={name}
          id={inputId}
          placeholder={placeholder}
          className={cn(styles.input, styles[appearance], {
            [styles.hasIcon]: Boolean(icon),
          })}
        />
      </div>
    </div>
  );
}
