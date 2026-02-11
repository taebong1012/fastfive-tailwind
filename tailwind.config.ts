import type { Config } from 'tailwindcss';

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Pretendard Variable', 'Pretendard', 'system-ui', 'sans-serif'],
            },
            fontWeight: {
                thin: '100',
                extralight: '200',
                light: '300',
                normal: '400',
                medium: '500',
                semibold: '600',
                bold: '700',
                extrabold: '800',
                black: '900',
            },
            lineHeight: {
                none: '1',
                tight: '1.25',
                snug: '1.375',
                normal: '1.5',
                relaxed: '1.625',
                loose: '2',
                '3': '0.75rem',
                '4': '1rem',
                '5': '1.25rem',
                '6': '1.5rem',
                '7': '1.75rem',
                '8': '2rem',
                '9': '2.25rem',
                '10': '2.5rem',
            },
            colors: {
                primary: '#3b82f6',
                secondary: '#6366f1',
                accent: '#f59e0b',
            },
            textColor: {
                primary: '#1a1a1a',
                secondary: '#4b5563',
                tertiary: '#9ca3af',
                disabled: '#d1d5db',
                inverse: '#ffffff',
                link: '#3b82f6',
                success: '#16a34a',
                warning: '#d97706',
                error: '#dc2626',
            },
        },
    },
    plugins: [],
} satisfies Config;
