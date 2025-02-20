import { useAuth } from "@/contexts/AuthContext"
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
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container-wrapper">
                <div className="container flex h-14 items-center">
                    <RootMainNav />
                    <RootMobileNav />
                    <div className="flex flex-1 items-center justify-between gap-2 md:justify-end">
                        <div className="w-full flex-1 md:w-auto md:flex-none">
                            <RootCommandMenu />
                        </div>
                        <nav className="flex items-center gap-2">
                            <ThemeSwitcher />
                            {
                                !isAuthenticated ? (
                                    <Button onClick={() => navigate("/auth/login")}>
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