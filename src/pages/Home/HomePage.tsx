import { Input } from "@/shared";
import { Header } from "@/widgets";

export function HomePage() {
  return (
    <div>
      <Header />
      <Input
        label="Дата"
        icon="Calendar"
        placeholder="Дата"
        appearance="unboxed"
      />
      <Input
        label="Папка"
        icon="Folder"
        placeholder="Папка"
        appearance="unboxed"
      />
    </div>
  );
}
