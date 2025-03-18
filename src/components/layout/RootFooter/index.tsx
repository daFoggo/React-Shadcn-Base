import { appConfig } from "@/routes/config"
import { Link } from "react-router"

const RootFooter = () => {
    return (
        <footer className="py-6 md:py-0 border-t">
            <div className="container-wrapper">
                <div className="py-4 container">
                    <div className="text-muted-foreground text-sm md:text-left text-center text-balance leading-loose">
                        Built by{" "}
                        <Link
                            to={appConfig.authorUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium underline underline-offset-4"
                        >
                            {appConfig.authorName}
                        </Link>
                        . The source code is available on{" "}
                        <Link
                            to={appConfig.projectUrl}
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