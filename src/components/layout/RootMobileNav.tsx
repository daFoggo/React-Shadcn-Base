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
                    className="md:hidden hover:bg-transparent focus-visible:bg-transparent mr-2 -ml-2 px-0 focus-visible:ring-0 focus-visible:ring-offset-0 size-8 text-base"
                >
                    <Menu className="w-6 h-6" />
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </DrawerTrigger>
            <DrawerContent className="p-0 max-h-[60vh]">
                <DrawerTitle className="mx-6 my-2 font-bold">
                    {docsConfig.websiteName}</DrawerTitle>
                <DrawerDescription></DrawerDescription>
                <div className="p-6 overflow-auto">
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

