import { Button } from "@/components/ui/button"
import { Drawer, DrawerContent, DrawerDescription, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { docsConfig } from "@/config/docs"
import { INavItem } from "@/types/Navigation"
import { Menu } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router"

const RootMobileNav = ({ navItems }: { navItems: INavItem[] }) => {
    const [open, setOpen] = useState(false)

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button
                    variant="ghost"
                    className="-ml-2 mr-2 h-8 w-8 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                >
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </DrawerTrigger>
            <DrawerContent className="max-h-[60vh] p-0">
                <DrawerTitle className="mx-6 my-2 font-bold">
                    {docsConfig.websiteName}</DrawerTitle>
                <DrawerDescription></DrawerDescription>
                <div className="overflow-auto p-6">
                    <div className="flex flex-col space-y-3">
                        {
                            navItems.map((item, index) => (
                                <MobileLink href={item.href || "/"} onOpenChange={setOpen} key={index}>
                                    {item.title}
                                </MobileLink>
                            ))
                        }
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    )
}

export default RootMobileNav

interface IMobileLinkProps {
    href: string
    onOpenChange?: (open: boolean) => void
    children: React.ReactNode
    className?: string
}

const MobileLink = ({ href, onOpenChange, className, children }: IMobileLinkProps) => {
    return (
        <Link to={href} className={`text-base ${className || ""}`} onClick={() => onOpenChange?.(false)}>
            {children}
        </Link>
    )
}

