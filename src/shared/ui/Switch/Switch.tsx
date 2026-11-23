import { Field, Switch as HeadlessUiSwitch, Label } from "@headlessui/react";

import type { ISwitchProps } from "./Switch.types";
import styles from "./Switch.module.css";

export function Switch({ onChange, value, label, ...props }: ISwitchProps) {
  return (
    <Field className={styles.field}>
      <Label className={styles.label}>{label}</Label>
      <HeadlessUiSwitch
        checked={value}
        onChange={onChange}
        className={styles.switch}
        {...props}
      />
    </Field>
  );
}
