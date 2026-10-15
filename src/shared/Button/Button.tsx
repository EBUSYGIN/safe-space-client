import cn from "classnames";

import { Icon } from "../Icon/Icon";
import type { IButtonProps } from "./Button.types";
import styles from "./Button.module.css";

export function Button({ children, className, icon, color }: IButtonProps) {
  const IconComponent = icon ? Icon[icon] : null;

  return (
    <button className={cn(styles.button, styles[color], { className })}>
      {IconComponent && <IconComponent className={styles.icon} />}
      {children}
    </button>
  );
}
