import { ArrowUpRight } from "lucide-react";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "ghost-outline";
  asChild?: boolean;
  withArrow?: boolean;
};

export const NeonButton = forwardRef<HTMLButtonElement, Props>(
  ({ className, variant = "primary", withArrow = true, children, ...rest }, ref) => {
    const base = "inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300";
    const variants = {
      primary:
        "bg-gradient-primary text-primary-foreground shadow-[0_8px_30px_hsl(55_100%_60%/0.35)] hover:shadow-[0_12px_40px_hsl(55_100%_60%/0.55)] hover:-translate-y-0.5",
      outline:
        "border border-border text-foreground hover:border-primary hover:text-primary bg-background/40 backdrop-blur",
      "ghost-outline":
        "border border-primary/60 text-primary hover:bg-primary/10",
    };
    return (
      <button ref={ref} className={cn(base, variants[variant], className)} {...rest}>
        {children}
        {withArrow && <ArrowUpRight className="w-4 h-4" />}
      </button>
    );
  }
);
NeonButton.displayName = "NeonButton";
