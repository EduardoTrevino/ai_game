"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
    indicatorClassName?: string
    transition?: {
      duration: number
      ease: string
      delay?: number
    }
  }
>(({ className, value, indicatorClassName, transition, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn("relative h-4 w-full overflow-hidden rounded-full bg-secondary", className)}
    {...props}
  >
    <motion.div
      className={cn("h-full w-full flex-1 bg-primary transition-all", indicatorClassName)}
      style={{
        transform: `translateX(-${100 - (value || 0)}%)`,
      }}
      initial={{ transform: "translateX(-100%)" }}
      animate={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      transition={transition || { duration: 0.5, ease: "easeOut" }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }

