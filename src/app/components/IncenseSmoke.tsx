import { motion } from "motion/react";

export const IncenseSmoke = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`absolute bottom-0 pointer-events-none z-10 ${className}`}>
      <motion.img
        src="/agarbatti.png"
        alt="Realistic 4K Agarbatti Smoke"
        className="w-48 md:w-64 h-auto mix-blend-screen opacity-90"
        initial={{ opacity: 0.85 }}
        animate={{ opacity: [0.85, 1, 0.85], scale: [1, 1.02, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};
