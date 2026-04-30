import { Link } from "react-router-dom";

export const Logo = ({ withText = true }: { withText?: boolean }) => (
  <Link to="/" className="flex items-center gap-2.5 group">
    <span className="relative inline-flex items-center justify-center w-10 h-10">
      <svg viewBox="0 0 48 48" className="w-10 h-10 drop-shadow-[0_0_12px_hsl(55_100%_60%/0.6)]">
        <defs>
          <linearGradient id="aGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="hsl(95 80% 55%)" />
            <stop offset="100%" stopColor="hsl(55 100% 60%)" />
          </linearGradient>
        </defs>
        <path d="M24 6 L42 42 L32 42 L28 33 L20 33 L24 24 L26 28 L24 22 L14 42 L6 42 Z"
              fill="url(#aGrad)" stroke="url(#aGrad)" strokeWidth="0.5" strokeLinejoin="round"/>
      </svg>
    </span>
    {withText && (
      <div className="leading-none">
        <div className="text-base font-extrabold tracking-wide text-foreground">ARENEX</div>
        <div className="text-[10px] tracking-[0.3em] text-primary mt-0.5">TECHWORKS</div>
      </div>
    )}
  </Link>
);
