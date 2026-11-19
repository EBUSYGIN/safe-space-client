import type { IconType } from "../Icon/Icon";

export interface ISelectProps {
  className?: string;
  label?: string;
  error?: string;
  icon?: IconType;
  options: IOption[];
  selectedOption: IOption;
  onChange: (option: IOption) => void;
}

export interface IOption {
  name: string;
  value: string;
}
