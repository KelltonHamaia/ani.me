import { useAnimeStore } from "@/store/anime-store";

export const AnimeInfo = () => {

    const { anime } = useAnimeStore(state => state);

    return (
        <section className='flex w-full py-5 lg:py-10'>
            <img
                src={anime.image}
                alt={anime.title}
                className="hidden object-cover object-top w-64 rounded-lg h-80 lg:block"
            />
            <div className="flex flex-col flex-1 gap-5 lg:flex-col md:flex-row lg:px-6 lg:py-4">
                <div className="flex flex-col gap-2 md:flex-1">
                    <p className="text-sm font-semibold tracking-wider lg:text-base">
                        Duração: <span className="font-normal text-muted-foreground">24 Min.</span>
                    </p>
                    <p className="text-sm font-semibold tracking-wider lg:text-base">
                        Estúdio:  <span className="font-normal text-muted-foreground">{anime.studio}</span>
                    </p>
                    <p className="text-sm font-semibold tracking-wider lg:text-base">
                        Gênero:
                        <span className="font-normal text-muted-foreground">
                            {` ${anime.genre.join(", ")}`}
                        </span>
                    </p>
                </div>
                <div className="tracking-wider md:flex-1">
                    <h2 className="pb-2 text-sm font-semibold lg:py-4 lg:text-base">Sinopse</h2>
                    <p className="text-sm text-muted-foreground text-balance md:text-base">{anime.synopsis}</p>
                </div>
            </div>
        </section>
    );

}
