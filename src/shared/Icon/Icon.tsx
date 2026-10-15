import Calendar from "@assets/calendar.svg?react";
import Folder from "@assets/folder-icon.svg?react";
import Plus from "@assets/plus.svg?react";
import Archive from "@assets/archive.svg";
import Logo from "@assets/logo.svg?react";

export const Icon = {
  Calendar,
  Folder,
  Plus,
  Archive,
  Logo,
};

export type IconType = keyof typeof Icon;
