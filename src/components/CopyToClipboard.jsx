import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { copyToClipboard, cn } from "../utils/helpers";

export const CopyToClipboard = ({ text, className }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const success = await copyToClipboard(text);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleCopy}
      className={cn(
        "flex items-center gap-2 px-4 py-2 rounded-lg",
        "bg-secondary hover:bg-accent border border-border",
        "transition-colors duration-200",
        className
      )}
    >
      <span className="text-sm font-mono text-foreground/80">{text}</span>
      <motion.div
        initial={false}
        animate={{ rotate: copied ? 360 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <Copy className="h-4 w-4 text-foreground/60" />
        )}
      </motion.div>
    </motion.button>
  );
};
