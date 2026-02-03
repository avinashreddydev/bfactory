import { MenuGrid } from "@/components/menu/MenuGrid";
import { Button } from "@/components/ui/button";
import { VisitUs } from "@/components/home/VisitUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-background pb-20">
      {/* Menu Section */}
      <section className="container mx-auto px-4 py-16 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Our Signature Menu</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Choose from our selection of premium family packs and single servings.
          </p>
        </div>

        <MenuGrid />
      </section>

      {/* Visit Us Section */}
      <VisitUs />
    </main>
  );
}
