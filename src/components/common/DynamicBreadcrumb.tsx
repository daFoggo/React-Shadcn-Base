import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useBreadcrumb } from '@/contexts/BreadcrumbContext';
import React from 'react';

const DynamicBreadcrumb = () => {
    const { breadcrumbs } = useBreadcrumb();

    return (
        <Breadcrumb>
            <BreadcrumbList>
                {breadcrumbs.map((item, index) => (
                    <React.Fragment key={item.path}>
                        <BreadcrumbItem className="hidden md:block">
                            {item.isPage ? (
                                <BreadcrumbPage>{item.title}</BreadcrumbPage>
                            ) : (
                                <BreadcrumbLink href={item.path}>
                                    {item.title}
                                </BreadcrumbLink>
                            )}
                        </BreadcrumbItem>
                        {index < breadcrumbs.length - 1 && (
                            <BreadcrumbSeparator className="hidden md:block" />
                        )}
                    </React.Fragment>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    );
};

export default DynamicBreadcrumb;