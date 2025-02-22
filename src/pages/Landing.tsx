import Features from "@/components/layout/Features"
import Hero from "@/components/layout/Hero"
import LogoGrid from "@/components/layout/LogoGrid"

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