import { useState } from "react";
import { Header } from "@/components/Header";
import { PatrimoineOverviewCard } from "@/components/PatrimoineOverviewCard";
import { LignePatrimoineItem } from "@/components/LignePatrimoineItem";
import { CoachIAChat } from "@/components/CoachIAChat";
import { portefeuilleLignes } from "@/data/mockData";
import { TrendingUp, DollarSign, Calculator, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

const Patrimoine = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-6 py-8">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-serif text-champagne mb-2">
              Gestion de Patrimoine
            </h1>
            <p className="text-muted-foreground">
              Vue consolidée de vos actifs et investissements
            </p>
          </div>

          <Button
            onClick={() => setIsChatOpen(true)}
            className="bg-champagne text-anthracite hover:bg-champagne-muted h-12 px-6"
          >
            <Bot className="w-5 h-5 mr-2" />
            Coach IA & Analyses
          </Button>
        </div>

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

        {/* Main Content - 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Patrimoine Overview */}
          <div>
            <PatrimoineOverviewCard />
          </div>

          {/* Right Column - Lignes Portefeuille */}
          <div className="space-y-4">
            <div className="mb-4">
              <h2 className="text-xl font-serif text-foreground mb-1">
                Lignes Principales
              </h2>
              <p className="text-sm text-muted-foreground">
                Performance en temps réel
              </p>
            </div>
            <div className="space-y-3">
              {portefeuilleLignes.slice(0, 8).map((ligne) => (
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
        </div>
      </main>

      {isChatOpen && <CoachIAChat onClose={() => setIsChatOpen(false)} />}
    </div>
  );
};

export default Patrimoine;
