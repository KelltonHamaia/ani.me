import { Menu, Search } from "lucide-react";
import { Filter } from "@/components/header/filter-options";
import { MenuLinks } from "@/components/header/menu-options";
import { ThemeSwitch } from "../theme-switch";

export const Header = () => {
    return (
        <header className='w-full py-5'>
            <div className="flex items-center py-2">
                <h1 className="flex-1 text-2xl font-medium cursor-pointer text-primary">Ani.me</h1>
                <MenuLinks />
                <ThemeSwitch />
                <div className="flex items-center gap-5 lg:hidden">
                    <Search />
                    <Menu />
                </div>
            </div>
            <Filter />
        </header>
    );
}
