import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useState } from "react"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { IAvatarGroupProps } from "../types/AvatarGroupdProps"

const ViewImage = ({ row }: IAvatarGroupProps) => {
    const [open, setOpen] = useState(false)

    return (
        <Dialog>
            <DialogTrigger asChild>
                <div
                    className="flex -space-x-4 transition-all duration-200 cursor-pointer"
                    onClick={() => setOpen(true)}
                >
                    {row?.img.map((img, index) => (
                        <Avatar
                            key={index}
                            className="border-2 border-background size-8 antialiased hover:scale-110 transition-transform"
                            style={{
                                zIndex: row.img.length - index,
                                transform: `translateX(${index * 4}px)`,
                            }}
                        >
                            <AvatarImage src={img} alt={`${row.name} ${index + 1}`} className="object-cover" />
                            <AvatarFallback className="bg-primary/10 text-sm">{row.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                    ))}
                </div>
            </DialogTrigger>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle>{row.name}</DialogTitle>
                        <DialogDescription>Identification images of {row.name}</DialogDescription>
                    </DialogHeader>
                    <div className="flex justify-center items-center p-12">

                        <Carousel className="w-full max-w-xs">
                            <CarouselContent>
                                {row?.img.map((img, index) => (
                                    <CarouselItem key={index}>
                                        <div className="p-1">
                                            <div className="flex justify-center items-center p-2 aspect-square">
                                                <LazyLoadImage
                                                    src={img || "/placeholder.svg"}
                                                    alt={`${row.name} ${index + 1}`}
                                                    className="rounded-lg w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
                </DialogContent>
            </Dialog>
        </Dialog>
    )
}

export default ViewImage
