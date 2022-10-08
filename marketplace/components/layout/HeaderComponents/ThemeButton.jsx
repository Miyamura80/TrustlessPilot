import { useTheme } from 'next-themes';
import { FaSun, FaMoon } from 'react-icons/fa';

export function ThemeButton() {
  const { theme, setTheme } = useTheme();
  return (
    <>
    <button className="block dark:hidden bg-blue-800 px-4 py-2 text-white hover:scale-105 duration-200 rounded-2xl shadow-md" onClick={() => setTheme('dark')}>
      <FaMoon size={26}/>
    </button>
    <button className="hidden dark:block bg-blue-800 px-4 py-2 text-white hover:scale-105 duration-200 rounded-2xl" onClick={() => setTheme('light')}>
      <FaSun size={26}/>
    </button>
    </>
  )
}
