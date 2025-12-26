/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './public/**/*.html'],
    theme: {
        extend: {
            fontSize: {
                xs: ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.025em', fontWeight: '400' }],
                sm: ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.025em', fontWeight: '400' }],
                base: ['1rem', { lineHeight: '1.5rem', letterSpacing: '0.025em', fontWeight: '400' }],
                lg: ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '0.025em', fontWeight: '400' }],
                xl: ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '0.025em', fontWeight: '500' }],
                '2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '0.025em', fontWeight: '500' }],
                '3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '0.025em', fontWeight: '600' }],
                '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '0.025em', fontWeight: '700' }],
                '5xl': ['3rem', { lineHeight: '1', letterSpacing: '0.025em', fontWeight: '700' }],
                '6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '0.025em', fontWeight: '700' }],
                '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '0.025em', fontWeight: '700' }],
                '8xl': ['6rem', { lineHeight: '1', letterSpacing: '0.025em', fontWeight: '700' }],
                '9xl': ['8rem', { lineHeight: '1', letterSpacing: '0.025em', fontWeight: '700' }],
            },
            fontFamily: {
                heading: "space grotesk",
                paragraph: "roboto"
            },
            colors: {
                'dark-purple': '#3700B3',
                'light-purple': '#6200EE',
                'whatsapp-green': '#25D366',
                destructive: 'var(--destructive)',
                'destructive-foreground': 'var(--destructive-foreground)',
                background: 'var(--background)',
                secondary: 'var(--secondary)',
                foreground: 'var(--foreground)',
                'secondary-foreground': 'var(--secondary-foreground)',
                'primary-foreground': 'var(--primary-foreground)',
                primary: 'var(--primary)',
                'text-primary': 'var(--text-primary)',
                'text-secondary': 'var(--text-secondary)',
                'text-tertiary': 'var(--text-tertiary)',
                'border-light': 'var(--border-light)',
                'border-medium': 'var(--border-medium)',
                'surface-light': 'var(--surface-light)',
                'surface-medium': 'var(--surface-medium)',
            },
        },
    },
    future: {
        hoverOnlyWhenSupported: true,
    },
    plugins: [require('@tailwindcss/container-queries'), require('@tailwindcss/typography')],
}
