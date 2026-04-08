import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-[20px] border border-transparent bg-white p-6 md:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgba(26,50,99,0.12)]",
        className
      )}
      {...props}
    />
  )
)
Card.displayName = "Card"

export { Card }
