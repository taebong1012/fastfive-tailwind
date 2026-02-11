import type { NavigationCategory as NavigationCategoryType } from '@/features/navigation-bar/model/type';

import { Typography } from '@/shared/ui/typography';

type NavigationCategoryProps = {
    category: NavigationCategoryType;
};

export const NavigationCategory = ({ category }: NavigationCategoryProps) => {
    return (
        <div className="flex w-[260px] flex-col items-start justify-start">
            <Typography variant="label">{category.categoryName}</Typography>

            <div className="flex flex-col">
                {category.links.map((link) => (
                    <Typography as="a" href={link.linkHref} variant="link">
                        {link.linkName}
                    </Typography>
                ))}
            </div>
        </div>
    );
};
