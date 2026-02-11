import type { Config } from 'tailwindcss';

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Pretendard', 'system-ui', 'sans-serif'],
            },
            colors: {
                primary: '#3b82f6',
                secondary: '#6366f1',
                accent: '#f59e0b',
            },
        },
    },
    plugins: [],
} satisfies Config;
