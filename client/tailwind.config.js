/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'bg-primary': '#F7F5F2',
                'bg-card': '#FFFFFF',
                'bg-card-hover': '#FDF9F6',
                'accent-primary': '#E8614D',
                'accent-secondary': '#F5A88E',
                'accent-glow': '#FFD6CC',
                'navy': '#1B2340',
                'text-primary': '#1B2340',
                'text-muted': '#7A7F99',
                'border': '#E8E4DF',
                'success': '#2DD4A0',
                'purple': '#7C5CBF',
                'purple-light': '#EDE8F7',
            },
            fontFamily: {
                sans: ['"DM Sans"', 'sans-serif'],
                headings: ['"Syne"', 'sans-serif'],
                mono: ['"DM Mono"', 'monospace'],
            },
            boxShadow: {
                'card': '0 2px 20px rgba(27,35,64,0.07)',
                'card-hover': '0 8px 40px rgba(232,97,77,0.15)',
                'glow': '0 0 30px rgba(232,97,77,0.25)',
            },
            backgroundImage: {
                'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E\")",
            }
        },
    },
    plugins: [],
}
