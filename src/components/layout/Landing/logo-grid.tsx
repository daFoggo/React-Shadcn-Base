import { Icons } from "@/components/common/Icons"

const LogoItem = ({ icon: Icon }: {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}) => (
    <div className="flex justify-center items-center">
        <Icon className="size-8 text-muted-foreground" />
    </div>
)

const LogoGrid = () => {
    const logos = [Icons.react, Icons.vite, Icons.logo]

    return (
        <section className="py-16 w-full">
            <div className="gap-8 grid grid-cols-3 mx-auto px-4 max-w-4xl">
                {logos.map((logo, index) => (
                    <LogoItem key={index} icon={logo} />
                ))}
            </div>
        </section>
    )
}

export default LogoGrid