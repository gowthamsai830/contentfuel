import { create } from 'zustand';

type Theme = 'dark' | 'light';

interface ThemeStore {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeStore>((set) => {
  return {
    theme: 'dark',
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
