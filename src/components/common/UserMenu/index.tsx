import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { useAuth } from '@/contexts/AuthContext'
import { IUserMenuProps } from './type'
import { LogOut, Settings, User } from 'lucide-react'

const UserMenu = ({ user, variant = 'default' }: IUserMenuProps) => {
    const { logout } = useAuth()
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant={variant}
                    className="relative p-0 rounded-full size-8 overflow-hidden"
                >
                    <Avatar className="size-8 antialiased">
                        <AvatarImage
                            src={user?.image}
                            alt={user.name}
                            className="object-cover"
                        />
                        <AvatarFallback className="bg-primary/10 text-sm">
                            {user.name.charAt(0)}
                        </AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                        <p className="font-medium text-sm line-clamp-1 leading-none">{user.name}</p>
                        <p className="text-muted-foreground text-xs line-clamp-1 leading-none">
                            {user.role}
                        </p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <User className="mr-2 size-4" />
                        <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Settings className="mr-2 size-4" />
                        <span>Setting</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout}>
                    <LogOut className="mr-2 size-4" />
                    <span>Logout</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserMenu