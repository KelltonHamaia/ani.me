import { Input } from "@/components/ui/input";

export const MenuLinks = () => {
    return (
        <div className="items-center hidden gap-10 lg:flex">
            <a href="#" className="text-lg font-medium cursor-pointer hover:text-primary hover:border-b-2 hover:border-b-primary">Início</a>
            <a href="#" className="text-lg font-medium cursor-pointer hover:text-primary hover:border-b-2 hover:border-b-primary">Lista</a>
            <a href="#" className="text-lg font-medium cursor-pointer hover:text-primary hover:border-b-2 hover:border-b-primary">Gêneros</a>
            <a href="#" className="text-lg font-medium cursor-pointer hover:text-primary hover:border-b-2 hover:border-b-primary">Novos episódios</a>
            <Input
                type="text"
                placeholder="Pesquisar"
                className="px-3 py-2 rounded-full outline-none bg-primary-foreground placeholder:text-primary max-w-fit"
            />
        </div>
    );
}
