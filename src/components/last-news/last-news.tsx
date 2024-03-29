import { Banner } from "./banner";

export const LastNews = () => {
    return (
        <section className='w-full'>
            <h1 className="text-4xl text-primary">Últimas novidades!</h1>
            <p className="text-lg text-muted-foreground">O que você vai assistir hoje?</p>
            <Banner />
        </section>
    );
}
