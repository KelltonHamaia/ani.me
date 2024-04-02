import { Header } from "@/components/home/header/header";
import { LastNews } from "@/components/home/last-news/last-news";
import { LastUpdates } from "@/components/home/last-updates/last-updates";
import { RecentAnimes } from "@/components/home/recent-animes/recent-animes";
import { Copyright } from "@/components/copyright/copyright";

const Page = () => {
    return (
        <div className='container min-h-screen mx-auto lg:max-w-screen-xl md:max-w-2xl'>
            <Header />
            <LastNews />
            <LastUpdates />
            <RecentAnimes />
            <Copyright />
        </div>
    );
}

export default Page;