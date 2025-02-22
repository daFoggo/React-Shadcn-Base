import { useAuth } from "@/contexts/AuthContext"
import { routeConfig } from "@/routes/config"
import { INavItem } from "@/types/Navigation"
import { LogIn } from "lucide-react"
import { useNavigate } from "react-router"
import ThemeSwitcher from "../common/ThemeSwitcher"
import UserMenu from "../common/UserMenu"
import { Button } from "../ui/button"
import RootCommandMenu from "../ui/root-command-menu"
import RootMainNav from "./RootMainNav"
import RootMobileNav from "./RootMobileNav"

const RootHeader = () => {
    const { isAuthenticated, user, } = useAuth();
    const navigate = useNavigate();
    const navItems: INavItem[] = [
        {
            title: routeConfig.dashboard.title,
            href: routeConfig.dashboard.path,
        }
    ];
    return (
        <header className="top-0 z-50 sticky bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b w-full">
            <div className="container-wrapper">
                <div className="flex items-center h-14 container">
                    <RootMainNav navItems={navItems} />
                    <RootMobileNav navItems={navItems} />
                    <div className="flex flex-1 justify-between md:justify-end items-center gap-2">
                        <div className="flex-1 md:flex-none w-full md:w-auto">
                            <RootCommandMenu navItems={navItems} />
                        </div>
                        <nav className="flex items-center gap-2">
                            <ThemeSwitcher />
                            {
                                !isAuthenticated ? (
                                    <Button onClick={() => navigate(routeConfig.auth.children.login.path)}>
                                        Login
                                        <LogIn className="size-4" />
                                    </Button>
                                ) : (
                                    <UserMenu user={user} />
                                )
                            }
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default RootHeader