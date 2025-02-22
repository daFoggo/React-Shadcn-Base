import { Loader2 } from "lucide-react"

const PageLoader = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-4 w-full h-screen">
            <Loader2 className="size-8 animate-spin" />
            <p className="font-semibold">Loading...</p>
        </div>
    )
}

export default PageLoader