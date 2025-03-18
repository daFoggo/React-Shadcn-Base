
import LogoGrid from "@/components/layout/Landing/logo-grid"
import Features from "./features"
import Hero from "./hero"

const Landing = () => {
    return (
        <div className="sm:p-0 px-6">
            <Hero />
            <LogoGrid />
            <Features />
        </div>
    )
}

export default Landing