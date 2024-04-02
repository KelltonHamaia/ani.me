import { RelatedAnimesData } from "@/data/related";
import { RelatedCard } from "@/components/anime-page/related-card";

export const Related = () => {

    return (
        <section className='my-5 border-t border-border grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
            <h2 className="lg:text-3xl md:text-xl text-lg font-semibold py-5 col-span-full">Relacionados</h2>

            {RelatedAnimesData.map(anime => (
                <RelatedCard
                    key={anime.id}
                    image={anime.image}
                    title={anime.title}
                />
            ))}
        </section>
    );
}
