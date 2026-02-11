import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

import { type VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/shared/lib/helper';

const typographyVariants = cva('', {
    variants: {
        variant: {
            label: 'text-lg font-medium leading-loose',
            link: 'text-md font-medium leading-loose text-secondary hover:font-semibold hover:text-primary',

            // 밑에는 gpt가 예시로 만들어 준 것
            h1: 'text-4xl font-bold leading-tight',
            h2: 'text-3xl font-bold leading-tight',
            h3: 'text-2xl font-semibold leading-snug',
            h4: 'text-xl font-semibold leading-snug',
            subtitle1: 'text-lg font-medium leading-normal',
            subtitle2: 'text-base font-medium leading-normal',
            body1: 'text-base font-normal leading-relaxed',
            body2: 'text-sm font-normal leading-relaxed',
            caption: 'text-xs font-normal leading-normal',
            overline: 'text-xs font-semibold uppercase tracking-wider leading-normal',
        },
    },
    defaultVariants: {
        variant: 'body1',
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
    variant = 'body1',
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
