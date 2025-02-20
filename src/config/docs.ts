import { IDocsConfig } from "@/types/DocsConfig";

export const docsConfig: IDocsConfig = {
  websiteName: "React Shadcn Base",
  authorName: "Foggo",
  authorUrl: "https://github.com/daFoggo",
  projectUrl: "https://github.com/daFoggo/React-Shadcn-Base",
  mainNav: [
    {
      title: "Dashboard",
      href: "/dashboard",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
        },
      ],
    },
  ],
};
