import { options } from "@/data/filter-list";
import { Badge } from "@/components/ui/badge";

export const Filter = () => {

    return (
        <nav className="flex gap-5 py-5 overflow-y-auto scrollbar-thin scrollbar-track-primary-foreground scrollbar-thumb-primary">
            {options.map(letter => (
                <li key={letter.value}>
                    <Badge
                        variant={`${letter.value === "Todos" ? "default" : "outline"}`}
                        className={`px-5 sm:px-10 sm:py-2 cursor-pointer hover:text-white text-sm md:text-lg`}
                    >
                        {letter.value}
                    </Badge>
                </li>
            ))}
        </nav>
    );

}
