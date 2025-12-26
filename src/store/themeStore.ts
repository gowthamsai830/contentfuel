import { create } from 'zustand';

type Theme = 'dark' | 'light';

interface ThemeStore {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeStore>((set) => {
  // Initialize theme from sessionStorage or default to 'dark'
  const initialTheme = (typeof window !== 'undefined' 
    ? sessionStorage.getItem('theme') as Theme | null 
    : null) || 'dark';

  return {
    theme: initialTheme,
    setTheme: (theme: Theme) => {
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('theme', theme);
      }
      set({ theme });
    },
    toggleTheme: () => {
      set((state) => {
        const newTheme = state.theme === 'dark' ? 'light' : 'dark';
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('theme', newTheme);
        }
        return { theme: newTheme };
      });
    },
  };
});
