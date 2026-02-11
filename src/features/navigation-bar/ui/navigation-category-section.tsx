import { NavigationCategory } from '@/features/navigation-bar/ui/navigation-category';

import type { NavigationCategory as NavigationCategoryType } from '@/features/navigation-bar/model/type';

import { Container } from '@/shared/ui/container';

type NavigationCategorySectionProps = {
    categories: NavigationCategoryType[];
};

export const NavigationCategorySection = ({ categories }: NavigationCategorySectionProps) => {
    return (
        <div className="absolute top-full left-0 z-999 w-full bg-white py-8">
            <Container variant="navigation" className="h-fit items-start pl-[246px]">
                {categories.map((category) => (
                    <NavigationCategory category={category}></NavigationCategory>
                ))}
            </Container>
        </div>
    );
};
