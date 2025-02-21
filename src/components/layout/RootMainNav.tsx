import { docsConfig } from "@/config/docs"
import { cn } from "@/lib/utils"
import { INavItem } from "@/types/Navigation"
import { Link, useLocation } from "react-router"
import { Icons } from "../common/Icons"

const RootMainNav = ({ navItems }: { navItems: INavItem[] }
) => {
    const { pathname } = useLocation()
    return (
        <div className="mr-4 hidden md:flex">
            <Link to="/" className="mr-4 flex items-center gap-2 lg:mr-6">
                <Icons.logo className="size-4" />
                <span className="hidden font-bold lg:inline-block">
                    {docsConfig.websiteName}
                </span>
            </Link>
            <nav className="flex items-center gap-4 text-sm xl:gap-6">
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