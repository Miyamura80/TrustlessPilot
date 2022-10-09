import { useTheme } from "next-themes";
import { MdDarkMode } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function DarkModeButton() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="hover:scale-105 duration-200 mx-3">
        {theme === "light" ? (
          <MdDarkMode size="45" />
        ) : (
          <BsFillSunFill size="45" />
        )}
      </button>
  );
}
