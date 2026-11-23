import cn from "classnames";

import { Icon } from "../Icon/Icon";
import type { IButtonProps } from "./Button.types";
import styles from "./Button.module.css";

export function Button({
  children,
  className,
  appereance = "primary",
  size = "m",
  icon,
}: IButtonProps) {
  const IconComponent = icon ? Icon[icon] : null;

  return (
    <button
      className={cn(styles.button, styles[appereance], styles[size], {
        className,
      })}
    >
      {IconComponent && <IconComponent className={styles.icon} />}
      {children}
    </button>
  );
}
