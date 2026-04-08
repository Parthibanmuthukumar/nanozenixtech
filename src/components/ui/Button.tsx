import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: "default" | "outline" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    // Basic standard variants
    const baseStyle = "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50"
    
    const variants = {
      default: "bg-accent text-white hover:bg-[#128a77] shadow-md hover:shadow-lg",
      outline: "border border-accent text-accent hover:bg-accent/10 bg-transparent",
      ghost: "hover:bg-accent/10 text-dark hover:text-accent",
      link: "text-accent underline-offset-4 hover:underline",
    }
    
    const sizes = {
      default: "h-10 px-6 py-2",
      sm: "h-9 px-4 text-xs",
      lg: "h-12 px-8 text-base",
      icon: "h-10 w-10",
    }

    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(baseStyle, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
