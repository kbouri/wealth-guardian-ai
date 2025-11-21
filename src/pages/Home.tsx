import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Users, TrendingUp, Shield, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { userData } from "@/data/mockData";

const Home = () => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-serif text-champagne mb-6 leading-tight">
            Votre patrimoine,
            <br />
            géré intelligemment
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Une plateforme complète pour gérer votre patrimoine et accéder à un réseau
            d'experts sélectionnés par BNP Paribas
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/patrimoine">
              <Button className="bg-champagne text-white hover:bg-champagne-muted h-14 px-8 text-base w-full sm:w-auto">
                Accéder à mon patrimoine
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/profil-investisseur">
              <Button className="bg-jade text-white hover:bg-jade-light h-14 px-8 text-base w-full sm:w-auto">
                Définir mon profil investisseur
              </Button>
            </Link>
          </div>
          <div className="mt-4 flex justify-center">
            <Link to="/experts">
              <Button
                variant="outline"
                className="border-champagne text-champagne hover:bg-champagne/10 h-12 px-6 text-base"
              >
                Consulter les experts
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white backdrop-blur-sm border border-border/50 rounded-lg p-8 text-center">
              <TrendingUp className="w-12 h-12 text-champagne mx-auto mb-4" />
              <p className="text-3xl font-mono text-champagne font-bold mb-2">
                {formatCurrency(userData.patrimoine)}
              </p>
              <p className="text-sm text-muted-foreground">Patrimoine Total</p>
            </div>
            <div className="bg-white backdrop-blur-sm border border-border/50 rounded-lg p-8 text-center">
              <BarChart3 className="w-12 h-12 text-jade mx-auto mb-4" />
              <p className="text-3xl font-mono text-jade font-bold mb-2">
                +{userData.performance}%
              </p>
              <p className="text-sm text-muted-foreground">Performance ce mois</p>
            </div>
            <div className="bg-white backdrop-blur-sm border border-border/50 rounded-lg p-8 text-center">
              <Shield className="w-12 h-12 text-champagne mx-auto mb-4" />
              <p className="text-3xl font-mono text-champagne font-bold mb-2">
                Protégé
              </p>
              <p className="text-sm text-muted-foreground">Par BNP Paribas</p>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif text-champagne text-center mb-12">
            Nos Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Gestion Patrimoine */}
            <Link
              to="/patrimoine"
              className="group bg-white backdrop-blur-sm border border-border/50 rounded-lg p-10 hover:border-champagne/50 transition-all hover:shadow-premium"
            >
              <BarChart3 className="w-16 h-16 text-champagne mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-serif text-champagne mb-4">
                Gestion de Patrimoine
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Visualisez et gérez votre patrimoine en temps réel : actions, immobilier,
                liquidités. Bénéficiez des recommandations de notre coach IA pour optimiser
                vos investissements.
              </p>
              <div className="flex items-center text-champagne group-hover:gap-2 transition-all">
                <span className="text-sm font-medium">Accéder</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Annuaire Experts */}
            <Link
              to="/experts"
              className="group bg-white backdrop-blur-sm border border-border/50 rounded-lg p-10 hover:border-champagne/50 transition-all hover:shadow-premium"
            >
              <Users className="w-16 h-16 text-champagne mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-serif text-champagne mb-4">
                Annuaire d'Experts
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Accédez à notre réseau d'experts partenaires BNP : comptables, avocats,
                fiscalistes. Trouvez le professionnel adapté à vos besoins et prenez
                rendez-vous directement.
              </p>
              <div className="flex items-center text-champagne group-hover:gap-2 transition-all">
                <span className="text-sm font-medium">Découvrir</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Conseil Croissance & Cession */}
            <Link
              to="/conseil"
              className="group bg-white backdrop-blur-sm border border-border/50 rounded-lg p-10 hover:border-champagne/50 transition-all hover:shadow-premium"
            >
              <Building2 className="w-16 h-16 text-champagne mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-serif text-champagne mb-4">
                Conseil Croissance & Cession
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Accompagnement stratégique pour vos projets d'acquisition et de cession
                d'entreprise. Expertise M&A et transmission patrimoniale.
              </p>
              <div className="flex items-center text-champagne group-hover:gap-2 transition-all">
                <span className="text-sm font-medium">En savoir plus</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
