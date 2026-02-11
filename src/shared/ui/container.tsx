import type { ReactNode } from 'react';

import { type VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/shared/lib/helper';

const containerVariants = cva('mx-auto w-full', {
    variants: {
        variant: {
            default: '',
            navigation: 'max-w-[1920px] px-12 flex items-center h-full',
            marketingSection: 'px-auto flex flex-col items-center py-20',
        },
    },
    defaultVariants: {
        variant: 'default',
    },
});

type ContainerProps = VariantProps<typeof containerVariants> & {
    children: ReactNode;
    className?: string;
};

export const Container = ({ children, variant, className }: ContainerProps) => {
    return <div className={cn(containerVariants({ variant }), className)}>{children}</div>;
};
