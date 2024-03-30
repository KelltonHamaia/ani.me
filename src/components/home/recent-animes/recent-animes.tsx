import { recentAnimesData } from "@/data/recent-animes";
import { RecentAnimeCard } from "@/components/home/recent-animes/card";

export const RecentAnimes = () => {
    return (
        <section className='grid w-full grid-cols-2 gap-5 mt-10 lg:grid-cols-6 md:grid-cols-4'>
            <h1 className="lg:text-3xl md:text-2xl text-lg font-semibold col-span-full">Animes recentes</h1>
            {recentAnimesData.map(anime => (
                <RecentAnimeCard
                    key={anime.id}
                    image={anime.image}
                    title={anime.title}
                />
            ))}
        </section>
    );
}
