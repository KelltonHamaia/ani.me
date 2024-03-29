import { Header } from "@/components/header/header";
import { LastNews } from "@/components/last-news/last-news";
import { LastUpdates } from "@/components/last-updates/last-updates";
import { RecentAnimes } from "@/components/recent-animes/recent-animes";

const Page = () => {

    return (
        <div className='container min-h-screen mx-auto lg:max-w-screen-xl md:max-w-2xl py-5'>
            <Header />
            <LastNews />
            <LastUpdates />
            <RecentAnimes />
        </div>
    );

}

export default Page;