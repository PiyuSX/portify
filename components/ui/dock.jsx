"use client";
import React, { useRef } from "react";
import { cva } from "class-variance-authority";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

import { cn } from "@/lib/utils"

const DEFAULT_SIZE = 40
const DEFAULT_MAGNIFICATION = 60
const DEFAULT_DISTANCE = 140
const DEFAULT_DISABLEMAGNIFICATION = false

const dockVariants = cva(
  "supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 flex h-max w-[58px] flex-col items-center justify-center gap-2 rounded-2xl border p-2 backdrop-blur-md"
)

const Dock = React.forwardRef((
  {
    className,
    children,
    iconSize = DEFAULT_SIZE,
    iconMagnification = DEFAULT_MAGNIFICATION,
    disableMagnification = DEFAULT_DISABLEMAGNIFICATION,
    iconDistance = DEFAULT_DISTANCE,
    direction = "middle",
    ...props
  },
  ref
) => {
  const mouseY = useMotionValue(Infinity)

  const renderChildren = () => {
    return React.Children.map(children, (child) => {
      if (React.isValidElement(child) && child.type === DockIcon) {
        return React.cloneElement(child, {
          ...child.props,
          mouseY: mouseY,
          size: iconSize,
          magnification: iconMagnification,
          disableMagnification: disableMagnification,
          distance: iconDistance,
        });
      }
      return child
    });
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => mouseY.set(e.clientY)}
      onMouseLeave={() => mouseY.set(Infinity)}
      {...props}
      className={cn(dockVariants({ className }), {
        // in a column, these align icons horizontally (left / center / right)
        "items-start": direction === "top",
        "items-center": direction === "middle",
        "items-end": direction === "bottom",
      })}>
      {renderChildren()}
    </motion.div>
  );
})

Dock.displayName = "Dock"

const DockIcon = ({
  size = DEFAULT_SIZE,
  magnification = DEFAULT_MAGNIFICATION,
  disableMagnification,
  distance = DEFAULT_DISTANCE,
  mouseY,
  className,
  children,
  ...props
}) => {
  const ref = useRef(null)
  const padding = Math.max(6, size * 0.2)
  const defaultMouseY = useMotionValue(Infinity)

  const distanceCalc = useTransform(mouseY ?? defaultMouseY, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { y: 0, height: 0 }
    return val - bounds.y - bounds.height / 2
  })

  const targetSize = disableMagnification ? size : magnification

  const sizeTransform = useTransform(distanceCalc, [-distance, 0, distance], [size, targetSize, size])

  const scaleSize = useSpring(sizeTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })

  return (
    <motion.div
      ref={ref}
      style={{ width: scaleSize, height: scaleSize, padding }}
      className={cn(
        "flex aspect-square cursor-pointer items-center justify-center rounded-full",
        disableMagnification && "hover:bg-muted-foreground transition-colors",
        className
      )}
      {...props}>
      <div>{children}</div>
    </motion.div>
  );
}

DockIcon.displayName = "DockIcon"

export { Dock, DockIcon, dockVariants }