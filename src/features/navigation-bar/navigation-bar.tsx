import { useState } from 'react';
import { useNavigate } from 'react-router';

import { NavigationButton } from '@/features/navigation-bar/ui/navigation-button';
import { NavigationCategorySection } from '@/features/navigation-bar/ui/navigation-category-section';

import { NAVIGATION_MENU } from '@/features/navigation-bar/model/const';
import type { NavigationMenus } from '@/features/navigation-bar/model/type';

import { Container } from '@/shared/ui/container';

export const NavigationBar = () => {
    const navigate = useNavigate();

    const [hoverTab, setHoverTab] = useState<keyof NavigationMenus | null>(null);

    return (
        <nav className="relative h-[72px]" onMouseLeave={() => setHoverTab(null)}>
            <Container variant="navigation" className="border-b border-gray-200">
                {/* 로고 */}
                <a href="/">
                    <img
                        className="mr-[46px] w-[132px] object-contain"
                        src="https://fastfive.co.kr/wp-content/themes/fastfive/assets/images/layout/ff_logo_new.png"
                        alt="FASTFIVE LOGO"
                    />
                </a>

                {/* 네비게이션 버튼들 */}
                {Object.entries(NAVIGATION_MENU).map(([id, config]) => (
                    <NavigationButton
                        key={id}
                        name={config.menuName}
                        onClick={() => navigate(config.menuHref)}
                        onMouseEnter={() => setHoverTab(id)}
                    />
                ))}
            </Container>

            {/* hover 시 등장 섹션 */}
            {hoverTab && (
                <NavigationCategorySection categories={NAVIGATION_MENU[hoverTab].categories} />
            )}
        </nav>
    );
};
