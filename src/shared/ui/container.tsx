import type { ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/lib/helper';

const containerVariants = cva('mx-auto w-full', {
    variants: {
        variant: {
            default: '',
            navigation: 'h-[72px] max-w-[1920px] px-12 flex items-center',
        },
    },
    defaultVariants: {
        variant: 'default',
    },
});

interface ContainerProps extends VariantProps<typeof containerVariants> {
    children: ReactNode;
    className?: string;
}

export const Container = ({ children, variant, className }: ContainerProps) => {
    return <div className={cn(containerVariants({ variant }), className)}>{children}</div>;
};
