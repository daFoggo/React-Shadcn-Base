
import { cn } from "@/lib/utils"
import { NavItem, appConfig } from "@/routes/config"
import { Link, useLocation } from "react-router"
import { Icons } from "../common/Icons"

const RootMainNav = ({ navItems }: { navItems: NavItem[] }) => {
    const { pathname } = useLocation()

    return (
        <div className="hidden md:flex mr-4">
            <Link to="/" className="flex items-center gap-2 mr-4 lg:mr-6">
                <Icons.logo className="size-4" />
                <span className="hidden lg:inline-block font-bold">
                    {appConfig.name}
                </span>
            </Link>
            <nav className="flex items-center gap-4 xl:gap-6 text-sm">
                {
                    navItems.map((item: NavItem) => (
                        <Link
                            to={item.path}
                            className={cn(
                                "transition-colors hover:text-foreground/80",
                                pathname === item.path ? "text-foreground" : "text-foreground/80"
                            )}
                            key={item.id}
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