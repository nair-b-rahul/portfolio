"use client";

import React from "react";
import starsBg from "@/assets/stars.png";
import {motion} from "framer-motion";

export function ThemeProvider({children}: { children: React.ReactNode }) {
    return (
        <motion.div className="min-h-screen w-full z-10"
                    style={{
                        backgroundImage: `url(${starsBg.src})`,
                        backgroundRepeat: "repeat",
                        backgroundSize: "contain",
                        backgroundColor: "black",
                    }}
                    animate={{
                        backgroundPositionX: ["0px", "1000px"]
                    }}
                    transition={{
                        repeat:Infinity,
                        ease:"linear",
                        duration:60,
                    }}
        >
            {children}
        </motion.div>
    );
}
