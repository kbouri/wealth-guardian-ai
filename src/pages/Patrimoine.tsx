import { useState } from "react";
import { Header } from "@/components/Header";
import { PatrimoineOverviewCard } from "@/components/PatrimoineOverviewCard";
import { LignePatrimoineItem } from "@/components/LignePatrimoineItem";
import { AlerteCard } from "@/components/AlerteCard";
import { CoachIAPreview } from "@/components/CoachIAPreview";
import { CoachIAChat } from "@/components/CoachIAChat";
import { portefeuilleLignes, alertesCoach } from "@/data/mockData";
import { TrendingUp, DollarSign, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";

const Patrimoine = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-6 py-8">
        {/* Quick Actions */}
        <div className="flex gap-3 mb-8">
          <Button className="bg-champagne text-anthracite hover:bg-champagne-muted">
            <DollarSign className="w-4 h-4 mr-2" />
            Acheter
          </Button>
          <Button
            variant="outline"
            className="border-champagne text-champagne hover:bg-champagne/10"
          >
            <TrendingUp className="w-4 h-4 mr-2" />
            Vendre
          </Button>
          <Button
            variant="outline"
            className="border-champagne text-champagne hover:bg-champagne/10"
          >
            <Calculator className="w-4 h-4 mr-2" />
            Simuler Crédit
          </Button>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column - Patrimoine Overview */}
          <div className="lg:col-span-5">
            <PatrimoineOverviewCard />
          </div>

          {/* Middle Column - Lignes Portefeuille */}
          <div className="lg:col-span-4 space-y-4">
            <div className="mb-4">
              <h2 className="text-xl font-serif text-foreground mb-1">
                Lignes Principales
              </h2>
              <p className="text-sm text-muted-foreground">
                Performance en temps réel
              </p>
            </div>
            <div className="space-y-3">
              {portefeuilleLignes.slice(0, 6).map((ligne) => (
                <LignePatrimoineItem key={ligne.id} ligne={ligne} />
              ))}
            </div>
            <button className="w-full text-sm text-champagne hover:text-champagne-muted transition-colors flex items-center justify-center gap-2 group mt-4 py-2">
              Voir toutes les lignes
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </div>

          {/* Right Column - Coach IA & Alertes */}
          <div className="lg:col-span-3 space-y-4">
            <CoachIAPreview onOpenChat={() => setIsChatOpen(true)} />

            <div className="mb-4">
              <h3 className="text-lg font-serif text-foreground mb-1">
                Alertes & Recommandations
              </h3>
              <p className="text-xs text-muted-foreground">
                {alertesCoach.length} nouvelles
              </p>
            </div>

            <div className="space-y-3">
              {alertesCoach.map((alerte) => (
                <AlerteCard key={alerte.id} alerte={alerte} />
              ))}
            </div>
          </div>
        </div>
      </main>

      {isChatOpen && <CoachIAChat onClose={() => setIsChatOpen(false)} />}
    </div>
  );
};

export default Patrimoine;
