import { Input } from "@/components/ui/input";
import Link from "next/link";

export const MenuLinks = () => {
    return (
        <nav className="items-center hidden gap-10 lg:flex">
            <Link href="/" className="text-lg font-medium cursor-pointer hover:text-primary hover:border-b-2 hover:border-b-primary">Início</Link>
            <Link href="#" className="text-lg font-medium cursor-pointer hover:text-primary hover:border-b-2 hover:border-b-primary">Lista</Link>
            <Link href="#" className="text-lg font-medium cursor-pointer hover:text-primary hover:border-b-2 hover:border-b-primary">Gêneros</Link>
            <Link href="#" className="text-lg font-medium cursor-pointer hover:text-primary hover:border-b-2 hover:border-b-primary">Novos episódios</Link>
            <Input
                type="text"
                placeholder="Pesquisar"
                className="px-3 py-2 rounded-full outline-none dark:bg-primary-foreground placeholder:text-primary max-w-fit mr-2"
            />
        </nav>
    );
}
