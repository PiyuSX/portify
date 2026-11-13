"use client"

import React from "react"
import { FlickeringGrid } from "./ui/flickering-grid"

const Top = () => {
    return (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-45"
            style={{
                maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 100%)"

            }}
        >
            <FlickeringGrid
                className="h-full w-full"
                squareSize={2}
                gridGap={3}
                flickerChance={0.15}
                color="rgb(128, 128, 128)"
                maxOpacity={0.55}
            />
        </div>
    )
}

export default Top