import Features from "@/features/Auth/components/Features"
import Hero from "@/features/Auth/components/Hero"
import LogoGrid from "@/features/Auth/components/LogoGrid"

const Landing = () => {
  return (
    <div className="px-6 sm:p-0">
      <Hero />
      <LogoGrid />
      <Features />
    </div>
  )
}

export default Landing