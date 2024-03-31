import { MostWatchedAnimesData } from "@/data/most-watched";
export const MostWatchedAnimes = () => {
    return (
        <aside className='hidden w-auto ml-4 lg:flex lg:flex-col'>
            <h2 className="flex flex-col h-12 text-xl font-semibold my-2">
                Mais assistidos
            </h2>
            {MostWatchedAnimesData.map(item => (
                <div key={item.id} className="flex gap-4 mb-8 bg-primary-foreground">
                    <img src={item.image} alt={item.title} className="object-cover object-top h-24 w-28" />
                    <div className="flex flex-col p-4">
                        <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
                        <span className="font-semibold text-muted-foreground">{item.year}</span>
                    </div>
                </div>
            ))}
        </aside>
    );
}

