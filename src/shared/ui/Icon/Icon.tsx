import Archive from "@assets/archive.svg?react";
import ArchiveRestore from "@assets/archive-restore.svg?react";
import ArrowLeft from "@assets/arrow-left.svg?react";
import ArrowRight from "@assets/arrow-right.svg?react";
import Calendar from "@assets/calendar.svg?react";
import Check from "@assets/check.svg?react";
import ChevronDown from "@assets/chevron-down.svg?react";
import Clock from "@assets/clock.svg?react";
import Download from "@assets/download.svg?react";
import EntryArrowRight from "@assets/entry-arrow-right.svg?react";
import Folder from "@assets/folder.svg?react";
import Info from "@assets/info.svg?react";
import Logo from "@assets/logo.svg?react";
import Monitor from "@assets/monitor.svg?react";
import Moon from "@assets/moon.svg?react";
import Plus from "@assets/plus.svg?react";
import PlusSmall from "@assets/plus-small.svg?react";
import Search from "@assets/search.svg?react";
import Sun from "@assets/sun.svg?react";
import Trash from "@assets/trash.svg?react";
import Upload from "@assets/upload.svg?react";

export const Icon = {
  Archive,
  ArchiveRestore,
  ArrowLeft,
  ArrowRight,
  Calendar,
  Check,
  ChevronDown,
  Clock,
  Download,
  EntryArrowRight,
  Folder,
  Info,
  Logo,
  Monitor,
  Moon,
  Plus,
  PlusSmall,
  Search,
  Sun,
  Time: Clock,
  Trash,
  Upload,
};

export type IconType = keyof typeof Icon;
