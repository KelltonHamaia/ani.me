import { Banner } from "@/components/home/last-news/banner";

export const LastNews = () => {
    return (
        <section className='w-full'>
            <h1 className="lg:text-4xl text-2xl  text-primary">Últimas novidades!</h1>
            <p className="lg:text-lg text-sm text-muted-foreground">O que você vai assistir hoje?</p>
            <Banner />
        </section>
    );
}
