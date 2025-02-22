import { docsConfig } from "@/config/docs";

const Hero = () => {
    return (
        <section className="mx-auto pt-20 w-full max-w-5xl text-center">
            <h1 className="mb-6 font-bold text-4xl md:text-6xl">{docsConfig.websiteName}</h1>
            <div className="bg-muted mb-6 rounded-lg w-full aspect-[2/1]" />
            <p className="mb-4 text-muted-foreground">
                A simple project base for React application
                <br />
                with Shadcn/ui component library.
            </p>
        </section>
    )
}

export default Hero;