import { IBreadcrumbContext } from '@/types/BreadcrumbContext';
import { IBreadcrumbItem } from '@/types/BreadcrumbItem';
import React, { createContext, useContext, useState } from 'react';

const BreadcrumbContext = createContext<IBreadcrumbContext | undefined>(undefined);

export const BreadcrumbProvider = ({ children }: { children: React.ReactNode }) => {
    const [breadcrumbs, setBreadcrumbs] = useState<IBreadcrumbItem[]>([]);

    const updateBreadcrumb = (path: string, newTitle: string) => {
        setBreadcrumbs(prev =>
            prev.map(item =>
                item.path === path ? { ...item, title: newTitle } : item
            )
        );
    };

    return (
        <BreadcrumbContext.Provider value={{ breadcrumbs, setBreadcrumbs, updateBreadcrumb }}>
            {children}
        </BreadcrumbContext.Provider>
    );
};

export const useBreadcrumb = () => {
    const context = useContext(BreadcrumbContext);
    if (!context) {
        throw new Error('useBreadcrumb must be used within a BreadcrumbProvider');
    }
    return context;
};