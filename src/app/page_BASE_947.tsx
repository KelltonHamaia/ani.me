import { Header } from "@/components/header/header";
import { LastNews } from "@/components/last-news/last-news";

const Page = () => {

    return (
        <div className='container min-h-screen mx-auto lg:max-w-screen-xl md:max-w-2xl'>
            <Header />
            <LastNews />
        </div>
    );

}

export default Page;