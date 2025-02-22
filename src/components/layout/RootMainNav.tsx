import { docsConfig } from "@/config/docs"
import { cn } from "@/lib/utils"
import { INavItem } from "@/types/Navigation"
import { Link, useLocation } from "react-router"
import { Icons } from "../common/Icons"

const RootMainNav = ({ navItems }: { navItems: INavItem[] }
) => {
    const { pathname } = useLocation()
    return (
        <div className="hidden md:flex mr-4">
            <Link to="/" className="flex items-center gap-2 mr-4 lg:mr-6">
                <Icons.logo className="size-4" />
                <span className="hidden lg:inline-block font-bold">
                    {docsConfig.websiteName}
                </span>
            </Link>
            <nav className="flex items-center gap-4 xl:gap-6 text-sm">
                {
                    navItems.map((item: INavItem, index: number) => (
                        <Link
                            to={item.href ?? '/dashboard'}
                            className={cn(
                                "transition-colors hover:text-foreground/80",
                                pathname === item.href ? "text-foreground" : "text-foreground/80"
                            )}
                            key={index}
                        >
                            {item.title}
                        </Link>
                    ))
                }
            </nav>
        </div>
    )
}

export default RootMainNav