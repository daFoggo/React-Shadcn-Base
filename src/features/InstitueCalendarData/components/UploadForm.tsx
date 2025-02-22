"use client"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { FileScan } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { IFormData } from "../types/Formdata"
import { IUploadFormProps } from "../types/UploadForm"
import { formSchema } from "../utils/constants"


const UploadForm = ({ onUpload, loading }: IUploadFormProps) => {
    const [open, setOpen] = useState(false)

    const form = useForm<IFormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            files: undefined,
        },
    })

    const handleSubmit = async (data: IFormData) => {
        try {
            await onUpload(data)
            form.reset()
            setOpen(false)
        } catch (error) {
            console.error("Upload failed:", error)
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="w-fit">
                    Update institute calendar
                    <FileScan className="size-4" />
                </Button>
            </DialogTrigger>
            <DialogContent className="p-4 rounded-md w-[90%] sm:max-w-[625px]">
                <DialogHeader>
                    <DialogTitle>Upload new institue calendar</DialogTitle>
                    <DialogDescription>Only .docx files are allowed.</DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="files"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Calendar File</FormLabel>
                                    <FormControl>
                                        <Input type="file" accept=".docx" onChange={(e) => field.onChange(e.target.files)} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <DialogFooter>
                            <Button type="submit" isLoading={loading}>
                                {loading ? "Uploading..." : "Upload"}
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}

export default UploadForm


