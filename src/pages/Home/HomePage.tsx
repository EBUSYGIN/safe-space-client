import { Input } from "@/shared";
import { Header } from "@/widgets";

export function HomePage() {
  return (
    <div>
      <Header />
      <Input label="Имя" icon="Folder" placeholder="Папки" />
    </div>
  );
}
