import { type LucideIcon } from "lucide-react";

interface PageBannerProps {
  icon: LucideIcon;
  title: string;
  highlight: string;
  description: string;
}

const PageBanner = ({ icon: Icon, title, highlight, description }: PageBannerProps) => {
  return (
    <section className="bg-hero py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent/10 blur-3xl" />
      <div className="relative container mx-auto px-4 text-center">
        <div className="w-16 h-16 rounded-2xl bg-primary-foreground/10 flex items-center justify-center mx-auto mb-6">
          <Icon className="w-8 h-8 text-accent" />
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">
          {title} <span className="text-gradient">{highlight}</span>
        </h1>
        <p className="text-primary-foreground/60 text-lg max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
};

export default PageBanner;
