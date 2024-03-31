"use client"
import { lastUpdatesData } from "@/data/last-updates";
import { AnimeCard } from "@/components/home/last-updates/card";
import { Button } from "@/components/ui/button";
import { useAnimeStore } from "@/store/anime-store";

export const LastUpdates = () => {

    const { updateAnime } = useAnimeStore(state => state);

    return (
        <section className='grid w-full grid-cols-2 gap-5 mt-10 lg:grid-cols-6 md:grid-cols-4'>
            <h1 className="my-2 text-lg font-semibold tracking-tight col-span-full lg:text-3xl md:text-2xl text-secondary-foreground">Últimas atualizações</h1>
            {lastUpdatesData.map(anime => (
                <AnimeCard
                    key={anime.id}
                    id={anime.id}
                    image={anime.image}
                    title={anime.title}
                    episode={anime.episode}
                    setAnimeToWatch={() => updateAnime(anime)}
                />
            ))}
            <div className="col-span-full flex items-center ">
                <Button className="lg:text-lg md:text-base text-sm font-semibold mx-auto bg-primary-foreground text-foreground">Ver mais</Button>
            </div>
        </section>
    );

}