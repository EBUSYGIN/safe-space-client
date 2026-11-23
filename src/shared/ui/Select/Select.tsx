import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";

import { Icon } from "../Icon/Icon";

import styles from "./Select.module.css";
import type { ISelectProps } from "./Select.types";

export function Select({
  options,
  label,
  icon,
  selectedOption,
  onChange,
}: ISelectProps) {
  const IconComponent = icon ? Icon[icon] : null;

  return (
    <div className={styles.selectWrapper}>
      <span className={styles.label}>{label}</span>
      <Listbox value={selectedOption} onChange={onChange} by="value">
        <ListboxButton className={styles.selectButton}>
          {selectedOption?.name}
          {IconComponent && <IconComponent />}
        </ListboxButton>
        <ListboxOptions
          anchor="bottom"
          className={styles.selectOptions}
          transition
        >
          {options.map((option) => (
            <ListboxOption
              key={option.value}
              value={option}
              className={styles.selectOption}
            >
              {option.name}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
}
