import { docsConfig } from "@/config/docs";

const Hero = () => {
    return (
        <section className="w-full max-w-5xl mx-auto pt-20 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{docsConfig.websiteName}</h1>
            <div className="w-full aspect-[2/1] bg-muted rounded-lg mb-6" />
            <p className="text-muted-foreground mb-4">
                A simple project base for React application
                <br />
                with Shadcn/ui component library.
            </p>
        </section>
    )
}

export default Hero;