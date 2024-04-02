import { Menu, Search } from "lucide-react";
import { Filter } from "@/components/home/header/filter-options";
import { MenuLinks } from "@/components/home/header/menu-options";
import { ThemeSwitch } from "../../theme-switch";
import Link from "next/link";

export const Header = () => {
    return (
        <header className='w-full py-5'>
            <div className="flex items-center py-2">
                <h1 className="flex-1 text-2xl font-medium cursor-pointer text-primary">
                    <Link href={"/"}>Ani.me</Link>
                </h1>
                <MenuLinks />
                <ThemeSwitch />
                <div className="flex items-center gap-5 lg:hidden ml-4">
                    <Search />
                    <Menu />
                </div>
            </div>
            <Filter />
        </header>
    );
}
