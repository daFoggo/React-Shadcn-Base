import { Loader2 } from "lucide-react"

const PageLoader = () => {
    return (
        <div className="w-full h-screen flex flex-col gap-4 items-center justify-center">
            <Loader2 className="size-8 animate-spin" />
            <p className="font-semibold">Loading...</p>
        </div>
    )
}

export default PageLoader