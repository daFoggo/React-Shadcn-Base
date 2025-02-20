import { docsConfig } from "@/config/docs"
import { Link } from "react-router"


const RootFooter = () => {
    return (
        <footer className="border-t py-6 md:py-0">
            <div className="container-wrapper">
                <div className="container py-4">
                    <div className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
                        Built by{" "}
                        <Link
                            to={docsConfig.authorUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium underline underline-offset-4"
                        >
                            {docsConfig.authorName}
                        </Link>
                        . The source code is available on{" "}
                        <Link
                            to={docsConfig.projectUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium underline underline-offset-4"
                        >
                            GitHub
                        </Link>
                        .
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default RootFooter