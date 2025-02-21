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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className={`w-full aspect-[4/3] bg-muted rounded-lg ${imageOrder}`} />
            <div className={`${contentOrder} ${!imageOnRight ? "md:pl-8" : ""}`}>
                <h2 className="text-3xl font-bold mb-4">{title}</h2>
                <p className="text-muted-foreground mb-4">{description}</p>
                {showButton && <Button variant="default">Read More</Button>}
            </div>
        </div>
    )
}

const Features = () => {
    return (
        <section className="w-full max-w-5xl mx-auto pb-20 space-y-32">
            <Feature
                title="Easy setup"
                description="Get started with a few simple commands."
                imageOnRight={true}
            />
            <Feature
                title="Everything is here"
                description="Intergrate with essential tools and libraries like React Router, SWR and more."
            />
        </section>
    )
}

export default Features