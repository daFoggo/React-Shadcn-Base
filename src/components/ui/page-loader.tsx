import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"

interface IPageLoaderProps {
    className?: string
    size?: "sm" | "md" | "lg"
    text?: string
}

export function PageLoader({ className, size = "md", text = "Loading..." }: IPageLoaderProps) {
    const sizeClasses = {
        sm: "h-4 w-4",
        md: "h-8 w-8",
        lg: "h-12 w-12",
    }

    return (
        <div className={cn("flex min-h-[50vh] flex-col items-center justify-center gap-4", className)}>
            <div className="relative">
                <Loader2 className={cn("animate-spin text-primary", sizeClasses[size])} />
                <div className="absolute inset-0 opacity-30 animate-pulse">
                    <Loader2 className={cn("text-primary/30", sizeClasses[size])} />
                </div>
            </div>
            {text && <p className="font-medium text-muted-foreground text-sm">{text}</p>}
        </div>
    )
}

