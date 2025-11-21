import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface CorrelationAnalysisDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface CorrelationData {
  asset1: string;
  asset2: string;
  correlation: number;
  risk: "Faible" | "Modéré" | "Élevé";
  recommendation: string;
}

const correlationData: CorrelationData[] = [
  {
    asset1: "Actions Tech",
    asset2: "Actions Sectorielles",
    correlation: 0.78,
    risk: "Élevé",
    recommendation: "Diversification recommandée",
  },
  {
    asset1: "Immobilier Paris",
    asset2: "Immobilier Province",
    correlation: 0.65,
    risk: "Modéré",
    recommendation: "Surveillance nécessaire",
  },
  {
    asset1: "Actions Tech",
    asset2: "Obligations",
    correlation: -0.12,
    risk: "Faible",
    recommendation: "Excellent équilibre",
  },
  {
    asset1: "Crypto",
    asset2: "Actions Tech",
    correlation: 0.54,
    risk: "Modéré",
    recommendation: "Ajuster l'allocation",
  },
  {
    asset1: "Immobilier",
    asset2: "Liquidités",
    correlation: 0.08,
    risk: "Faible",
    recommendation: "Bonne diversification",
  },
  {
    asset1: "Actions",
    asset2: "Crypto",
    correlation: 0.48,
    risk: "Modéré",
    recommendation: "Considérer réduction crypto",
  },
];

export const CorrelationAnalysisDialog = ({
  open,
  onOpenChange,
}: CorrelationAnalysisDialogProps) => {
  const getCorrelationColor = (correlation: number) => {
    const abs = Math.abs(correlation);
    if (abs >= 0.7) return "text-red-600 dark:text-red-400";
    if (abs >= 0.4) return "text-orange-600 dark:text-orange-400";
    return "text-green-600 dark:text-green-400";
  };

  const getRiskBadgeVariant = (risk: string) => {
    if (risk === "Élevé") return "destructive";
    if (risk === "Modéré") return "secondary";
    return "outline";
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif">
            Analyse des Corrélations
          </DialogTitle>
          <DialogDescription>
            Matrice de corrélation entre vos différents actifs patrimoniaux
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div className="bg-muted/50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-foreground mb-2">
              Coefficient de corrélation global
            </h3>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-mono font-bold text-champagne">
                0.42
              </span>
              <span className="text-sm text-muted-foreground">
                (Diversification satisfaisante)
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Un coefficient proche de 0 indique une bonne diversification. Au-dessus de 0.7, vos actifs évoluent de manière trop similaire.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-foreground mb-3">
              Analyse détaillée par paires d'actifs
            </h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Actif 1</TableHead>
                  <TableHead>Actif 2</TableHead>
                  <TableHead className="text-center">Corrélation</TableHead>
                  <TableHead className="text-center">Niveau de risque</TableHead>
                  <TableHead>Recommandation</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {correlationData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{row.asset1}</TableCell>
                    <TableCell className="font-medium">{row.asset2}</TableCell>
                    <TableCell className="text-center">
                      <span
                        className={`font-mono font-bold text-lg ${getCorrelationColor(
                          row.correlation
                        )}`}
                      >
                        {row.correlation > 0 ? "+" : ""}
                        {row.correlation.toFixed(2)}
                      </span>
                    </TableCell>
                    <TableCell className="text-center">
                      <Badge variant={getRiskBadgeVariant(row.risk) as any}>
                        {row.risk}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {row.recommendation}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
            <h4 className="text-sm font-medium text-blue-900 dark:text-blue-100 mb-2">
              Points d'attention
            </h4>
            <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1.5">
              <li>
                • Forte corrélation Actions Tech / Actions Sectorielles (0.78) - Envisager une réduction de l'exposition tech
              </li>
              <li>
                • Corrélation modérée Immobilier Paris / Province (0.65) - Exposition géographique à surveiller
              </li>
              <li>
                • Excellente décorrélation Actions Tech / Obligations (-0.12) - Maintenir cet équilibre
              </li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
