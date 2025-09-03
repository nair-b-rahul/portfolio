"use client";

import React from "react";
import starsBg from "@/assets/stars.png";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    return (
        <div
            className="min-h-screen w-full"
            style={{
                backgroundImage: `url(${starsBg.src})`,
                backgroundRepeat: "repeat",
                backgroundSize: "contain",
                backgroundColor: "black",
            }}
        >
            {children}
        </div>
    );
}
