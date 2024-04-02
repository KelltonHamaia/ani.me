import { useAnimeStore } from "@/store/anime-store";

export const AnimeInfo = () => {

    const { anime } = useAnimeStore(state => state);

    return (
        <section className='w-full flex lg:py-10 py-5'>
            <img
                src={anime.image}
                alt={anime.title}
                className="h-80 w-64 object-cover object-top rounded-lg lg:block hidden"
            />
            <div className="flex-1 flex lg:flex-col md:flex-row flex-col lg:px-6 lg:py-4 gap-5">
                <div className="flex flex-col gap-2">
                    <p className="font-semibold lg:text-base text-sm tracking-wider">
                        Duração: <span className="text-muted-foreground font-normal">24 Min.</span>
                    </p>
                    <p className="font-semibold lg:text-base text-sm tracking-wider">
                        Estúdio:  <span className="text-muted-foreground font-normal">{anime.studio}</span>
                    </p>
                    <p className="font-semibold lg:text-base text-sm tracking-wider">
                        Gênero:
                        <span className="text-muted-foreground font-normal">
                            {` ${anime.genre.join(", ")}`}
                        </span>
                    </p>
                </div>
                <div className="tracking-wider md:flex-1">
                    <h2 className="font-semibold lg:py-4 pb-2 lg:text-base text-sm">Sinopse</h2>
                    <p className="text-muted-foreground text-balance md:text-base text-sm">{anime.synopsis}</p>
                </div>
            </div>
        </section>
    );

}
