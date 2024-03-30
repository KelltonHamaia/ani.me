import { ThemeProvider } from "@/components/theme-provider";
import { Inter as FontSans } from "next/font/google"
const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Header } from "@/components/home/header/header";

type Props = {
    children: ReactNode
}
const EpisodeLayout = ({ children }: Props) => {
    return (
        <main className={cn(
            "min-h-screen bg-background font-sans antialiased container mx-auto lg:max-w-screen-xl md:max-w-2xl",
            fontSans.variable
        )}>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <Header />
                {children}
            </ThemeProvider>
        </main>
    )
}

export default EpisodeLayout;