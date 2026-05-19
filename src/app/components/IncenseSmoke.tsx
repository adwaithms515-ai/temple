import { motion } from "motion/react";

export const IncenseSmoke = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`absolute bottom-0 flex flex-col items-center opacity-80 pointer-events-none z-10 ${className}`}>
      {/* Smoke particles */}
      <div className="relative w-16 h-80">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 w-6 h-6 rounded-full bg-white/30 blur-[8px]"
            initial={{ y: 0, x: 16, scale: 1, opacity: 0 }}
            animate={{
              y: [-10, -150, -300],
              x: [16, 16 + (Math.random() * 40 - 20), 16 + (Math.random() * 80 - 40)],
              scale: [1, 3, 7],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.7,
              ease: "easeOut",
            }}
          />
        ))}
      </div>
      
      {/* Agarbatti stick */}
      <div className="w-1.5 h-24 bg-gradient-to-t from-[#4a1510] to-[#8a3c26] rounded-t-full shadow-lg relative">
        {/* Burning tip (ember) */}
        <div className="absolute -top-1 -left-0.5 w-2.5 h-2.5 bg-[#ff4500] rounded-full animate-pulse shadow-[0_0_15px_rgba(255,69,0,0.8)]"></div>
      </div>
      
      {/* Agarbatti Stand */}
      <div className="w-10 h-3 bg-gradient-to-b from-[#d97706] to-[#78350f] rounded-t-lg border-b-2 border-[#4a1510] shadow-xl"></div>
    </div>
  );
};
