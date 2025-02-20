import { Icons } from "@/components/common/Icons"

const LogoItem = ({ icon: Icon }: {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}) => (
    <div className="flex items-center justify-center">
        <Icon className="w-8 h-8 text-muted-foreground" />
    </div>
)

const LogoGrid = () => {
    const logos = [Icons.react, Icons.vite, Icons.logo]

    return (
        <section className="w-full py-16">
            <div className="max-w-4xl mx-auto px-4 grid grid-cols-3 gap-8">
                {logos.map((logo, index) => (
                    <LogoItem key={index} icon={logo} />
                ))}
            </div>
        </section>
    )
}

export default LogoGrid