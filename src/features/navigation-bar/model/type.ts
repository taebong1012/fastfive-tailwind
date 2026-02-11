export type NavigationLink = {
    linkId: string;
    linkName: string;
    linkHref: string;
    isNew?: boolean;
    iconSrc?: string;
};

export type NavigationCategory = {
    categoryId: string;
    categoryName: string;
    links: NavigationLink[];
};

export type NavigationMenu = {
    menuName: string;
    menuHref: string;
    categories: NavigationCategory[];
};

export type NavigationMenus = Record<string, NavigationMenu>;
