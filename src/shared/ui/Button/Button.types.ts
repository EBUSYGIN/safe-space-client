import type { IconType } from "../Icon/Icon";

export interface IButtonProps extends React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> {
  icon?: IconType;
  appereance?: "primary" | "secondary" | "ghost";
  size?: "s" | "m" | "l";
}
