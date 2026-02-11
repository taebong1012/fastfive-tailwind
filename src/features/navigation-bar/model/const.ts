import type { NavigationMenu } from '@/features/navigation-bar/model/type';

export const NAVIGATION_MENU: Record<string, NavigationMenu> = {
    home: {
        menuName: '🎉2월 이벤트',
        menuHref: '/event_2026_rentfree_contact',
        categories: [
            {
                categoryId: 'event',
                categoryName: '이벤트',
                links: [
                    {
                        linkId: 'six_months_free_office',
                        linkName: '(30팀 한정) 6개월 무료 사무실 🐎',
                        linkHref: '/',
                    },
                    {
                        linkId: 'office_over_20',
                        linkName: '(20인 이상) 오피스 초특가',
                        linkHref: '/',
                    },
                    {
                        linkId: 'pre_reservation',
                        linkName: '(오픈 예정 지점) 사전예약',
                        linkHref: '/',
                    },
                    {
                        linkId: 'lowest_price_office',
                        linkName: '오늘의 최저가 사무실 💸',
                        linkHref: '/',
                    },
                ],
            },
            {
                categoryId: 'program',
                categoryName: '프로그램',
                links: [
                    {
                        linkId: 'partner_program',
                        linkName: '수익 창출! 파트너스 프로그램 🪙',
                        linkHref: '/',
                    },
                    {
                        linkId: 'free_parking_program',
                        linkName: '패파 무료 주차 프로그램',
                        linkHref: '/',
                    },
                    {
                        linkId: 'weekend_tour_program',
                        linkName: '패파 주말투어 프로그램',
                        linkHref: '/',
                    },
                    {
                        linkId: 'full_option_it_support',
                        linkName: '풀옵션 IT 서포트 오피스 프로그램',
                        linkHref: '/',
                    },
                    {
                        linkId: 'studio_program',
                        linkName: '촬영이 많다면 스튜디오 프로그램',
                        linkHref: '/',
                    },
                    {
                        linkId: 'short_term_lease',
                        linkName: '즉시 입주 초단기 임대 프로그램',
                        linkHref: '/',
                    },
                ],
            },
            {
                categoryId: 'new_branch',
                categoryName: '신규 지점',
                links: [
                    {
                        linkId: 'new_branch_half_price',
                        linkName: '신규 지점 50% 특가',
                        linkHref: '/',
                        isNew: true,
                    },
                ],
            },
        ],
    },
    branch_map: {
        menuName: '지점 위치',
        menuHref: '/branch_map',
        categories: [],
    },
    introduction_fastfive: {
        menuName: '패파 소개',
        menuHref: '/introduction',
        categories: [
            {
                categoryId: 'company_proposal',
                categoryName: '기업별 제안',
                links: [
                    {
                        linkId: 'startup',
                        linkName: '스타트업',
                        linkHref: '/',
                    },
                    {
                        linkId: 'sme',
                        linkName: '중소기업',
                        linkHref: '/',
                    },
                    {
                        linkId: 'enterprise',
                        linkName: '대기업',
                        linkHref: '/',
                    },
                    {
                        linkId: 'regional_company',
                        linkName: '지방소재 기업',
                        linkHref: '/',
                    },
                    {
                        linkId: 'foreign_company',
                        linkName: '외국계 기업',
                        linkHref: '/',
                    },
                    {
                        linkId: 'solo_company',
                        linkName: '1인 기업',
                        linkHref: '/',
                    },
                ],
            },
            {
                categoryId: 'fastfive_features',
                categoryName: '패파만의 특징',
                links: [
                    {
                        linkId: 'core_summary',
                        linkName: '패파 핵심 요약',
                        linkHref: '/',
                    },
                    {
                        linkId: 'cost',
                        linkName: '비용',
                        linkHref: '/',
                    },
                    {
                        linkId: 'contract',
                        linkName: '계약',
                        linkHref: '/',
                    },
                    {
                        linkId: 'space_facility',
                        linkName: '공간/시설',
                        linkHref: '/',
                    },
                    {
                        linkId: 'location',
                        linkName: '위치',
                        linkHref: '/',
                    },
                    {
                        linkId: 'service',
                        linkName: '서비스',
                        linkHref: '/',
                    },
                    {
                        linkId: 'welfare_benefit',
                        linkName: '복지 베네핏',
                        linkHref: '/',
                    },
                    {
                        linkId: 'business_benefit',
                        linkName: '비즈니스 베네핏',
                        linkHref: '/',
                    },
                    {
                        linkId: 'daycare',
                        linkName: '직장어린이집',
                        linkHref: '/',
                    },
                    {
                        linkId: 'pet_friendly',
                        linkName: '펫 프렌들리',
                        linkHref: '/',
                    },
                    {
                        linkId: 'space_design_philosophy',
                        linkName: '공간 디자인 철학',
                        linkHref: '/',
                    },
                ],
            },
            {
                categoryId: 'faq',
                categoryName: 'FAQ',
                links: [
                    {
                        linkId: 'common_misunderstanding',
                        linkName: '자주 하는 오해',
                        linkHref: '/',
                    },
                ],
            },
        ],
    },
    product_introduction: {
        menuName: '상품 안내',
        menuHref: '/product',
        categories: [
            {
                categoryId: 'office',
                categoryName: '오피스',
                links: [
                    {
                        linkId: 'independent_office',
                        linkName: '독립형 오피스',
                        linkHref: '/',
                    },
                    {
                        linkId: 'independent_office_premium',
                        linkName: '독립형 오피스 프리미엄',
                        linkHref: '/',
                    },
                    {
                        linkId: 'full_floor_office',
                        linkName: '전층형 오피스',
                        linkHref: '/',
                    },
                    {
                        linkId: 'custom_office',
                        linkName: '맞춤형 오피스',
                        linkHref: '/',
                    },
                    {
                        linkId: 'single_room_reservation',
                        linkName: '1인실 바로 예약',
                        linkHref: '/',
                    },
                ],
            },
            {
                categoryId: 'desk',
                categoryName: '데스크',
                links: [
                    {
                        linkId: 'lounge_office_membership',
                        linkName: '라운지 오피스 멤버십',
                        linkHref: '/',
                    },
                    {
                        linkId: 'open_desk',
                        linkName: '오픈 데스크',
                        linkHref: '/',
                    },
                    {
                        linkId: 'focus_desk',
                        linkName: '포커스 데스크',
                        linkHref: '/',
                    },
                ],
            },
            {
                categoryId: 'solution',
                categoryName: '솔루션',
                links: [
                    {
                        linkId: 'space_subscription',
                        linkName: '공간 구독 서비스',
                        linkHref: '/',
                        iconSrc:
                            'https://media.licdn.com/dms/image/v2/D560BAQE71S2mgAdnMw/company-logo_200_200/company-logo_200_200/0/1718869581822/fastfive_logo?e=2147483647&v=beta&t=J6H86j-DXt7tpSaeLUZwKgBCCToxB-lJElsAtbmeJ58',
                    },
                    {
                        linkId: 'headquarters_setup',
                        linkName: '사옥 구축',
                        linkHref: '/',
                        iconSrc:
                            'https://play-lh.googleusercontent.com/I8PptwXol4ptUuQ1PxcOFAJaS3n2aNKrS5BVF9ou083oKGNOif-Ae-9cdwF5jH-3qbo',
                    },
                    {
                        linkId: 'office_interior',
                        linkName: '사무실 인테리어',
                        linkHref: '/',
                        iconSrc:
                            'https://media.licdn.com/dms/image/v2/D560BAQE71S2mgAdnMw/company-logo_200_200/company-logo_200_200/0/1718869581822/fastfive_logo?e=2147483647&v=beta&t=J6H86j-DXt7tpSaeLUZwKgBCCToxB-lJElsAtbmeJ58',
                    },
                    {
                        linkId: 'it_consulting',
                        linkName: '종합 IT 컨설팅',
                        linkHref: '/',
                        iconSrc:
                            'https://play-lh.googleusercontent.com/I8PptwXol4ptUuQ1PxcOFAJaS3n2aNKrS5BVF9ou083oKGNOif-Ae-9cdwF5jH-3qbo',
                    },
                    {
                        linkId: 'building_inquiry',
                        linkName: '건물 입점 문의',
                        linkHref: '/',
                        iconSrc:
                            'https://media.licdn.com/dms/image/v2/D560BAQE71S2mgAdnMw/company-logo_200_200/company-logo_200_200/0/1718869581822/fastfive_logo?e=2147483647&v=beta&t=J6H86j-DXt7tpSaeLUZwKgBCCToxB-lJElsAtbmeJ58',
                    },
                ],
            },
        ],
    },
    large_office_product: {
        menuName: '20인 이상 추천',
        menuHref: '/largeoffice_product',
        categories: [
            {
                categoryId: 'large_office_event',
                categoryName: '이벤트',
                links: [
                    {
                        linkId: 'over_20_special_price',
                        linkName: '20인 이상 초특가',
                        linkHref: '/',
                        isNew: false,
                    },
                    {
                        linkId: 'moving_interior_management',
                        linkName: '이사-인테리어-관리 한 번에 해결',
                        linkHref: '/',
                        isNew: false,
                    },
                    {
                        linkId: 'visit_consultation',
                        linkName: '부담없는 방문 상담 신청 🤞',
                        linkHref: '/',
                        isNew: false,
                    },
                ],
            },
            {
                categoryId: 'large_office_recommend',
                categoryName: '추천',
                links: [
                    {
                        linkId: 'medium_large_office_plan',
                        linkName: '중대형 사무실 플랜',
                        linkHref: '/',
                        isNew: false,
                    },
                    {
                        linkId: 'free_parking_office',
                        linkName: '무료 주차 사무실',
                        linkHref: '/',
                        isNew: false,
                    },
                    {
                        linkId: 'rental_vs_fastfive',
                        linkName: '임대 사무실 VS 패파',
                        linkHref: '/',
                        isNew: false,
                    },
                    {
                        linkId: 'no_deposit_short_term',
                        linkName: '보증금 없는 단기 임대',
                        linkHref: '/',
                        isNew: false,
                    },
                ],
            },
            {
                categoryId: 'large_office_cost',
                categoryName: '비용',
                links: [
                    {
                        linkId: 'office_cost_saving',
                        linkName: '오피스 비용 절감',
                        linkHref: '/',
                        isNew: false,
                    },
                    {
                        linkId: 'office_cost_calculator',
                        linkName: '사무실 비용 셀프 계산기',
                        linkHref: '/',
                        isNew: false,
                    },
                ],
            },
        ],
    },
    blog: {
        menuName: '블로그',
        menuHref: '/blog',
        categories: [],
    },
};
