import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { cn } from "../utils/helpers";

export const ThemeToggle = ({ theme, setTheme }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={cn(
        "relative flex h-10 w-10 items-center justify-center rounded-full",
        "bg-secondary hover:bg-accent transition-colors",
        "border border-border"
      )}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === "dark" ? 370 : 0,
          scale: theme === "dark" ? 1 : 0.8,
        }}
        transition={{ duration: 0.3 }}
      >
        {theme === "dark" ? (
          <Moon className="h-5 w-5 text-primary" />
        ) : (
          <Sun className="h-5 w-5 text-primary" />
        )}
      </motion.div>
    </motion.button>
  );
};
