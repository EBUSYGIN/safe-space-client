import type { IconType } from "../Icon/Icon";

export interface IButtonProps extends React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> {
  icon?: IconType;
  color: "blue" | "ghost";
}
