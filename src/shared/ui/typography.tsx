import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

import { type VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/shared/lib/helper';

const typographyVariants = cva('', {
    variants: {
        variant: {
            default: 'text-base font-normal leading-relaxed',
            description: 'text-sm font-normal leading-normal',
            label: 'text-lg font-medium leading-loose',
            link: 'text-md font-medium leading-loose text-secondary hover:font-semibold hover:text-primary',
        },
    },
    defaultVariants: {
        variant: 'default',
    },
});

const variantTagMap: Record<string, ElementType> = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    subtitle1: 'p',
    subtitle2: 'p',
    body1: 'p',
    body2: 'p',
    caption: 'span',
    overline: 'span',
};

type TypographyProps<T extends ElementType = 'p'> = VariantProps<typeof typographyVariants> & {
    children: ReactNode;
    as?: T;
    className?: string;
} & Omit<ComponentPropsWithoutRef<T>, 'children' | 'className'>;

export const Typography = <T extends ElementType = 'p'>({
    children,
    variant = 'default',
    as,
    className,
    ...rest
}: TypographyProps<T>) => {
    const Component = as || variantTagMap[variant ?? 'body1'] || 'p';

    return (
        <Component className={cn(typographyVariants({ variant }), className)} {...rest}>
            {children}
        </Component>
    );
};
