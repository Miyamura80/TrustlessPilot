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
    <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.9 }}>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "light" ? (
          <MdDarkMode size="34" />
        ) : (
          <BsFillSunFill size="34" />
        )}
      </button>
    </motion.div>
  );
}
