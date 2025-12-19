import { NavLink } from "@/components/NavLink";
import { cn } from "@/lib/utils";

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-card/80 backdrop-blur-md border-b border-border/40 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Home Link */}
          <NavLink
            to="/"
            className={cn(
              "font-heading text-xl md:text-2xl text-foreground hover:text-primary transition-colors duration-300"
            )}
            activeClassName="text-primary"
          >
            For Ayesha
          </NavLink>

          {/* Navigation Links */}
          <div className="flex items-center gap-4 md:gap-6">
            <NavLink
              to="/diet-care"
              className={cn(
                "font-body text-sm md:text-base text-muted-foreground hover:text-foreground transition-colors duration-300 hover-underline"
              )}
              activeClassName="text-primary"
            >
              Diet & Care
            </NavLink>
            <NavLink
              to="/gentle-path"
              className={cn(
                "font-body text-sm md:text-base text-muted-foreground hover:text-foreground transition-colors duration-300 hover-underline"
              )}
              activeClassName="text-primary"
            >
              A Gentle Path
            </NavLink>
            <NavLink
              to="/distance-with-trust"
              className={cn(
                "font-body text-sm md:text-base text-muted-foreground hover:text-foreground transition-colors duration-300 hover-underline"
              )}
              activeClassName="text-primary"
            >
              Distance, With Trust
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

