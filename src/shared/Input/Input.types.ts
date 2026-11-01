import type { IconType } from "../Icon/Icon";

export interface IInputProps extends React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> {
  appearance?: "boxed" | "unboxed";
  icon?: IconType;
  label: string;
}
