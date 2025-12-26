import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useThemeStore } from '@/store/themeStore';

export default function ThemeToggle() {
  const { theme, toggleTheme, setTheme } = useThemeStore();

  // Initialize theme on mount
  useEffect(() => {
    const root = document.documentElement;
    const savedTheme = sessionStorage.getItem('theme') as 'dark' | 'light' | null;
    const initialTheme = savedTheme || 'dark';
    
    setTheme(initialTheme);
    
    if (initialTheme === 'light') {
      root.classList.add('light-mode');
      root.classList.remove('dark-mode');
    } else {
      root.classList.add('dark-mode');
      root.classList.remove('light-mode');
    }
  }, [setTheme]);

  // Apply theme to document when it changes
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light-mode');
      root.classList.remove('dark-mode');
    } else {
      root.classList.add('dark-mode');
      root.classList.remove('light-mode');
    }
  }, [theme]);

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-14 h-14 rounded-full flex items-center justify-center overflow-hidden group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      aria-label="Toggle theme"
    >
      {/* Gradient Background - Dynamic based on theme */}
      <motion.div
        className="absolute inset-0 rounded-full"
        initial={false}
        animate={{
          background:
            theme === 'dark'
              ? 'linear-gradient(135deg, #3700B3 0%, #6200EE 50%, #BB86FC 100%)'
              : 'linear-gradient(135deg, #E8D5F2 0%, #F3E5F5 50%, #F5E6FF 100%)',
        }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      />

      {/* Glow Effect on Hover */}
      <motion.div
        className="absolute inset-0 rounded-full blur-lg opacity-0 group-hover:opacity-100"
        animate={{
          background:
            theme === 'dark'
              ? 'radial-gradient(circle, rgba(187, 134, 252, 0.4), transparent)'
              : 'radial-gradient(circle, rgba(98, 0, 238, 0.2), transparent)',
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Icon Container */}
      <motion.div
        className="relative z-10 flex items-center justify-center"
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 0 : 180,
        }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {theme === 'dark' ? (
          <Moon
            size={24}
            className="text-white drop-shadow-lg"
            fill="white"
          />
        ) : (
          <Sun
            size={24}
            className="text-[#3700B3] drop-shadow-lg"
            fill="currentColor"
          />
        )}
      </motion.div>

      {/* Subtle Border */}
      <motion.div
        className="absolute inset-0 rounded-full border-2"
        animate={{
          borderColor:
            theme === 'dark'
              ? 'rgba(255, 255, 255, 0.2)'
              : 'rgba(55, 0, 179, 0.3)',
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Ripple Effect on Click */}
      <motion.div
        className="absolute inset-0 rounded-full"
        initial={{ scale: 1, opacity: 0 }}
        animate={{ scale: 1.5, opacity: 0 }}
        transition={{ duration: 0.6 }}
        key={theme}
        style={{
          background:
            theme === 'dark'
              ? 'rgba(187, 134, 252, 0.3)'
              : 'rgba(98, 0, 238, 0.2)',
        }}
      />
    </motion.button>
  );
}
