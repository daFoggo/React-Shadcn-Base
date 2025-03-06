import { cn } from "@/lib/utils"
import { NavItem } from "@/routes/config"
import { type DialogProps } from "@radix-ui/react-dialog"
import { Laptop, LinkIcon, Moon, Sun } from 'lucide-react'
import { useCallback, useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { useTheme } from "../common/ThemeProvider"
import { Button } from "./button"
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "./command"

const RootCommandMenu = ({ navItems, ...props }: {
    navItems: NavItem[];
} & DialogProps) => {
    const [open, setOpen] = useState(false)
    const { setTheme } = useTheme()
    const navigate = useNavigate()

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
                if (
                    (e.target instanceof HTMLElement && e.target.isContentEditable) ||
                    e.target instanceof HTMLInputElement ||
                    e.target instanceof HTMLTextAreaElement ||
                    e.target instanceof HTMLSelectElement
                ) {
                    return
                }

                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    const runCommand = useCallback((command: () => unknown) => {
        setOpen(false)
        command()
    }, [])

    return (
        <>
            <Button
                variant="outline"
                className={cn(
                    "relative w-full justify-start rounded-[0.5rem] bg-muted/50 text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-56 xl:w-64"
                )}
                onClick={() => setOpen(true)}
                {...props}
            >
                <span className="hidden lg:inline-flex">Search information...</span>
                <span className="lg:hidden inline-flex">Search...</span>
                <kbd className="hidden top-[0.3rem] right-[0.3rem] absolute sm:flex items-center gap-1 bg-muted opacity-100 px-1.5 border rounded h-5 font-mono font-medium text-[10px] pointer-events-none select-none">
                    <span className="text-xs">⌘</span>K
                </kbd>
            </Button>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Links">
                        {navItems
                            .filter((navItem) => !navItem.isExternal)
                            .map((navItem) => (
                                <CommandItem
                                    key={navItem.id}
                                    value={navItem.title}
                                    onSelect={() => {
                                        runCommand(() => navigate(navItem.path))
                                    }}
                                >
                                    <LinkIcon className="mr-2 w-4 h-4" />
                                    {navItem.title}
                                </CommandItem>
                            ))}
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Theme">
                        <CommandItem onSelect={() => runCommand(() => setTheme("light"))}>
                            <Sun className="mr-2 w-4 h-4" />
                            Light
                        </CommandItem>
                        <CommandItem onSelect={() => runCommand(() => setTheme("dark"))}>
                            <Moon className="mr-2 w-4 h-4" />
                            Dark
                        </CommandItem>
                        <CommandItem onSelect={() => runCommand(() => setTheme("system"))}>
                            <Laptop className="mr-2 w-4 h-4" />
                            System
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    )
}

export default RootCommandMenu;