import { Button } from "@/components/ui/button"

const Feature = ({ title, description, imageOnRight = false, showButton = false }: {
    title: string
    description: string
    imageOnRight?: boolean
    showButton?: boolean
}) => {
    const contentOrder = imageOnRight ? "md:order-1" : ""
    const imageOrder = imageOnRight ? "md:order-2" : ""

    return (
        <div className="items-center gap-8 grid grid-cols-1 md:grid-cols-2">
            <div className={`w-full aspect-[4/3] bg-muted rounded-lg ${imageOrder}`} />
            <div className={`${contentOrder} ${!imageOnRight ? "md:pl-8" : ""}`}>
                <h2 className="mb-4 font-bold text-3xl">{title}</h2>
                <p className="mb-4 text-muted-foreground">{description}</p>
                {showButton && <Button variant="default">Read More</Button>}
            </div>
        </div>
    )
}

const Features = () => {
    return (
        <section className="space-y-32 mx-auto pb-20 w-full max-w-5xl">
            <Feature
                title="Easy setup"
                description="Get started with a few simple commands."
                imageOnRight={true}
            />
            <Feature
                title="Everything is here"
                description="Intergrate with essential tools and libraries like React Router, Axios, SWR and more."
            />
        </section>
    )
}

export default Features