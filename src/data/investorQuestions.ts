import { Question, Answer, InvestorProfile } from "@/types/investorProfile";

export const investorQuestions: Question[] = [
  // ===== SITUATION PERSONNELLE (5 questions) =====
  {
    id: 'q1',
    category: 'situation',
    question: 'Quelle est votre tranche de revenus annuels nets ?',
    type: 'single',
    required: true,
    options: [
      { label: 'Moins de 30 000 €', value: 'rev1', points: { capacity: 5 } },
      { label: '30 000 € - 50 000 €', value: 'rev2', points: { capacity: 10 } },
      { label: '50 000 € - 80 000 €', value: 'rev3', points: { capacity: 15 } },
      { label: '80 000 € - 120 000 €', value: 'rev4', points: { capacity: 20 } },
      { label: 'Plus de 120 000 €', value: 'rev5', points: { capacity: 25 } },
    ]
  },
  {
    id: 'q2',
    category: 'situation',
    question: 'Quelle est votre capacité d\'épargne mensuelle ?',
    type: 'single',
    required: true,
    options: [
      { label: 'Moins de 200 €', value: 'ep1', points: { capacity: 5, risk: 5 } },
      { label: '200 € - 500 €', value: 'ep2', points: { capacity: 10, risk: 10 } },
      { label: '500 € - 1 000 €', value: 'ep3', points: { capacity: 15, risk: 15 } },
      { label: '1 000 € - 2 000 €', value: 'ep4', points: { capacity: 20, risk: 18 } },
      { label: 'Plus de 2 000 €', value: 'ep5', points: { capacity: 25, risk: 20 } },
    ]
  },
  {
    id: 'q3',
    category: 'situation',
    question: 'Quel est votre patrimoine financier actuel (hors résidence principale) ?',
    type: 'single',
    required: true,
    options: [
      { label: 'Moins de 20 000 €', value: 'pat1', points: { capacity: 5, risk: 5 } },
      { label: '20 000 € - 50 000 €', value: 'pat2', points: { capacity: 10, risk: 10 } },
      { label: '50 000 € - 150 000 €', value: 'pat3', points: { capacity: 15, risk: 15 } },
      { label: '150 000 € - 300 000 €', value: 'pat4', points: { capacity: 20, risk: 18 } },
      { label: 'Plus de 300 000 €', value: 'pat5', points: { capacity: 25, risk: 20 } },
    ]
  },
  {
    id: 'q4',
    category: 'situation',
    question: 'Êtes-vous propriétaire de votre résidence principale ?',
    type: 'single',
    required: true,
    options: [
      { label: 'Non, je suis locataire', value: 'log1', points: { capacity: 5 } },
      { label: 'Oui, avec un crédit en cours', value: 'log2', points: { capacity: 10 } },
      { label: 'Oui, sans crédit', value: 'log3', points: { capacity: 15 } },
      { label: 'Oui, et je possède d\'autres biens', value: 'log4', points: { capacity: 20 } },
    ]
  },
  {
    id: 'q5',
    category: 'situation',
    question: 'Dans combien d\'années prévoyez-vous de partir à la retraite ?',
    type: 'single',
    required: true,
    options: [
      { label: 'Moins de 5 ans', value: 'ret1', points: { risk: 5 } },
      { label: '5 à 10 ans', value: 'ret2', points: { risk: 10 } },
      { label: '10 à 20 ans', value: 'ret3', points: { risk: 15 } },
      { label: '20 à 30 ans', value: 'ret4', points: { risk: 20 } },
      { label: 'Plus de 30 ans', value: 'ret5', points: { risk: 25 } },
    ]
  },

  // ===== CONNAISSANCE ET EXPÉRIENCE (6 questions) =====
  {
    id: 'q6',
    category: 'knowledge',
    question: 'Comment évaluez-vous votre niveau de connaissance des marchés financiers ?',
    type: 'single',
    required: true,
    options: [
      { label: 'Débutant - Je découvre l\'investissement', value: 'know1', points: { knowledge: 10 } },
      { label: 'Intermédiaire - Je comprends les concepts de base', value: 'know2', points: { knowledge: 20 } },
      { label: 'Avancé - Je suis les marchés régulièrement', value: 'know3', points: { knowledge: 30 } },
      { label: 'Expert - J\'ai une expérience approfondie', value: 'know4', points: { knowledge: 40 } },
    ]
  },
  {
    id: 'q7',
    category: 'knowledge',
    question: 'Quels produits financiers détenez-vous actuellement ?',
    description: 'Sélectionnez tous les produits que vous détenez',
    type: 'multiple',
    required: true,
    options: [
      { label: 'Livrets réglementés (Livret A, LDDS)', value: 'prod1', points: { knowledge: 2 } },
      { label: 'Assurance-vie en fonds euros', value: 'prod2', points: { knowledge: 3 } },
      { label: 'Assurance-vie en unités de compte', value: 'prod3', points: { knowledge: 5 } },
      { label: 'PEA ou compte-titres', value: 'prod4', points: { knowledge: 7 } },
      { label: 'Actions en direct', value: 'prod5', points: { knowledge: 8 } },
      { label: 'Obligations', value: 'prod6', points: { knowledge: 6 } },
      { label: 'ETF / Trackers', value: 'prod7', points: { knowledge: 7 } },
      { label: 'Produits structurés', value: 'prod8', points: { knowledge: 10 } },
      { label: 'Cryptomonnaies', value: 'prod9', points: { knowledge: 9 } },
      { label: 'Aucun', value: 'prod0', points: { knowledge: 0 } },
    ]
  },
  {
    id: 'q8',
    category: 'knowledge',
    question: 'À quelle fréquence effectuez-vous des opérations d\'investissement ?',
    type: 'single',
    required: true,
    options: [
      { label: 'Jamais ou très rarement', value: 'freq1', points: { knowledge: 3 } },
      { label: 'Une à deux fois par an', value: 'freq2', points: { knowledge: 6 } },
      { label: 'Mensuellement', value: 'freq3', points: { knowledge: 9 } },
      { label: 'Hebdomadairement ou plus', value: 'freq4', points: { knowledge: 12 } },
    ]
  },
  {
    id: 'q9',
    category: 'knowledge',
    question: 'Quel est le montant total de vos investissements au cours des 3 dernières années ?',
    type: 'single',
    required: true,
    options: [
      { label: 'Moins de 5 000 €', value: 'vol1', points: { knowledge: 3 } },
      { label: '5 000 € - 20 000 €', value: 'vol2', points: { knowledge: 6 } },
      { label: '20 000 € - 50 000 €', value: 'vol3', points: { knowledge: 9 } },
      { label: '50 000 € - 100 000 €', value: 'vol4', points: { knowledge: 12 } },
      { label: 'Plus de 100 000 €', value: 'vol5', points: { knowledge: 15 } },
    ]
  },
  {
    id: 'q10',
    category: 'knowledge',
    question: 'Comprenez-vous la notion de diversification de portefeuille ?',
    type: 'single',
    required: true,
    options: [
      { label: 'Non, je ne connais pas ce concept', value: 'div1', points: { knowledge: 0 } },
      { label: 'J\'en ai entendu parler mais je ne suis pas sûr', value: 'div2', points: { knowledge: 5 } },
      { label: 'Oui, je comprends son importance', value: 'div3', points: { knowledge: 10 } },
      { label: 'Oui, et je l\'applique activement', value: 'div4', points: { knowledge: 15 } },
    ]
  },
  {
    id: 'q11',
    category: 'knowledge',
    question: 'Suivez-vous l\'actualité économique et financière ?',
    type: 'single',
    required: true,
    options: [
      { label: 'Jamais', value: 'actu1', points: { knowledge: 0 } },
      { label: 'Occasionnellement', value: 'actu2', points: { knowledge: 5 } },
      { label: 'Régulièrement', value: 'actu3', points: { knowledge: 8 } },
      { label: 'Quotidiennement', value: 'actu4', points: { knowledge: 12 } },
    ]
  },

  // ===== TOLÉRANCE AU RISQUE (7 questions) =====
  {
    id: 'q12',
    category: 'risk',
    question: 'Avez-vous déjà subi des pertes importantes sur vos investissements ?',
    type: 'single',
    required: true,
    options: [
      { label: 'Non, je n\'ai jamais investi', value: 'loss1', points: { risk: 5 } },
      { label: 'Non, mes investissements sont stables', value: 'loss2', points: { risk: 10 } },
      { label: 'Oui, mais cela ne m\'a pas affecté', value: 'loss3', points: { risk: 20 } },
      { label: 'Oui, et j\'ai appris à gérer mes émotions', value: 'loss4', points: { risk: 18 } },
      { label: 'Oui, et j\'ai préféré arrêter', value: 'loss5', points: { risk: 3 } },
    ]
  },
  {
    id: 'q13',
    category: 'risk',
    question: 'Si votre portefeuille perdait 20% de sa valeur en un mois, que feriez-vous ?',
    type: 'single',
    required: true,
    options: [
      { label: 'Je vendrais immédiatement tout', value: 'react1', points: { risk: 0 } },
      { label: 'Je réduirais significativement mon exposition', value: 'react2', points: { risk: 5 } },
      { label: 'Je conserverais mes positions', value: 'react3', points: { risk: 15 } },
      { label: 'Je profiterais de l\'occasion pour investir davantage', value: 'react4', points: { risk: 25 } },
    ]
  },
  {
    id: 'q14',
    category: 'risk',
    question: 'Préférez-vous :',
    type: 'single',
    required: true,
    options: [
      { label: 'Un gain certain de 1 000 €', value: 'pref1', points: { risk: 5 } },
      { label: '50% de chance de gagner 2 500 €, 50% de ne rien gagner', value: 'pref2', points: { risk: 15 } },
      { label: '25% de chance de gagner 5 000 €, 75% de ne rien gagner', value: 'pref3', points: { risk: 20 } },
      { label: '10% de chance de gagner 15 000 €, 90% de ne rien gagner', value: 'pref4', points: { risk: 25 } },
    ]
  },
  {
    id: 'q15',
    category: 'risk',
    question: 'Quelle évolution de portefeuille vous conviendrait le mieux ?',
    description: 'Sur un an, quelle volatilité acceptez-vous ?',
    type: 'single',
    required: true,
    options: [
      { label: 'Graphique A : +2% stable (très faible risque)', value: 'graph1', points: { risk: 5 } },
      { label: 'Graphique B : +5% avec légères variations (risque modéré)', value: 'graph2', points: { risk: 12 } },
      { label: 'Graphique C : +10% avec fortes variations (risque élevé)', value: 'graph3', points: { risk: 20 } },
      { label: 'Graphique D : +15% avec très fortes variations (risque très élevé)', value: 'graph4', points: { risk: 25 } },
    ]
  },
  {
    id: 'q16',
    category: 'risk',
    question: 'Quelle est votre priorité principale ?',
    type: 'single',
    required: true,
    options: [
      { label: 'Préserver mon capital à tout prix', value: 'prio1', points: { risk: 5 } },
      { label: 'Obtenir un rendement régulier même modeste', value: 'prio2', points: { risk: 10 } },
      { label: 'Équilibrer croissance et sécurité', value: 'prio3', points: { risk: 15 } },
      { label: 'Maximiser la croissance de mon capital', value: 'prio4', points: { risk: 25 } },
    ]
  },
  {
    id: 'q17',
    category: 'risk',
    question: 'Combien de temps pouvez-vous immobiliser votre capital ?',
    type: 'single',
    required: true,
    options: [
      { label: 'Moins de 1 an', value: 'time1', points: { risk: 5 } },
      { label: '1 à 3 ans', value: 'time2', points: { risk: 10 } },
      { label: '3 à 5 ans', value: 'time3', points: { risk: 15 } },
      { label: '5 à 10 ans', value: 'time4', points: { risk: 20 } },
      { label: 'Plus de 10 ans', value: 'time5', points: { risk: 25 } },
    ]
  },
  {
    id: 'q18',
    category: 'risk',
    question: 'Quelle perte maximale seriez-vous prêt à accepter sur votre investissement ?',
    type: 'single',
    required: true,
    options: [
      { label: 'Aucune perte - 0%', value: 'maxloss1', points: { risk: 0 } },
      { label: 'Perte limitée - jusqu\'à 5%', value: 'maxloss2', points: { risk: 8 } },
      { label: 'Perte modérée - jusqu\'à 15%', value: 'maxloss3', points: { risk: 15 } },
      { label: 'Perte importante - jusqu\'à 30%', value: 'maxloss4', points: { risk: 20 } },
      { label: 'Perte très importante - plus de 30%', value: 'maxloss5', points: { risk: 25 } },
    ]
  },

  // ===== OBJECTIFS (3 questions) =====
  {
    id: 'q19',
    category: 'objectives',
    question: 'Quels sont vos objectifs d\'investissement ?',
    description: 'Sélectionnez tous vos objectifs',
    type: 'multiple',
    required: true,
    options: [
      { label: 'Préserver mon capital', value: 'obj1', points: { risk: 3 } },
      { label: 'Générer des revenus réguliers', value: 'obj2', points: { risk: 8 } },
      { label: 'Faire croître mon capital', value: 'obj3', points: { risk: 15 } },
      { label: 'Préparer ma retraite', value: 'obj4', points: { risk: 12 } },
      { label: 'Financer un projet (immobilier, études)', value: 'obj5', points: { risk: 10 } },
      { label: 'Transmettre un patrimoine', value: 'obj6', points: { risk: 8 } },
      { label: 'Optimiser ma fiscalité', value: 'obj7', points: { risk: 10 } },
    ]
  },
  {
    id: 'q20',
    category: 'objectives',
    question: 'Quel est votre horizon d\'investissement principal ?',
    type: 'single',
    required: true,
    options: [
      { label: 'Très court terme (moins de 1 an)', value: 'hor1', points: { risk: 5 } },
      { label: 'Court terme (1 à 3 ans)', value: 'hor2', points: { risk: 10 } },
      { label: 'Moyen terme (3 à 7 ans)', value: 'hor3', points: { risk: 15 } },
      { label: 'Long terme (7 à 15 ans)', value: 'hor4', points: { risk: 20 } },
      { label: 'Très long terme (plus de 15 ans)', value: 'hor5', points: { risk: 25 } },
    ]
  },
  {
    id: 'q21',
    category: 'objectives',
    question: 'Quelle part de votre patrimoine souhaitez-vous investir en produits risqués ?',
    type: 'single',
    required: true,
    options: [
      { label: 'Aucune - 0%', value: 'alloc1', points: { risk: 0 } },
      { label: 'Très faible - moins de 10%', value: 'alloc2', points: { risk: 5 } },
      { label: 'Faible - 10% à 30%', value: 'alloc3', points: { risk: 12 } },
      { label: 'Modérée - 30% à 50%', value: 'alloc4', points: { risk: 18 } },
      { label: 'Importante - plus de 50%', value: 'alloc5', points: { risk: 25 } },
    ]
  },

  // ===== CAPACITÉ À SUBIR DES PERTES (4 questions) =====
  {
    id: 'q22',
    category: 'capacity',
    question: 'Combien de personnes sont à votre charge financièrement ?',
    type: 'single',
    required: true,
    options: [
      { label: 'Aucune', value: 'dep1', points: { capacity: 20 } },
      { label: '1 personne', value: 'dep2', points: { capacity: 15 } },
      { label: '2 personnes', value: 'dep3', points: { capacity: 10 } },
      { label: '3 personnes ou plus', value: 'dep4', points: { capacity: 5 } },
    ]
  },
  {
    id: 'q23',
    category: 'capacity',
    question: 'Quel pourcentage de vos revenus est consacré à des charges fixes (loyer, crédits, etc.) ?',
    type: 'single',
    required: true,
    options: [
      { label: 'Moins de 30%', value: 'charges1', points: { capacity: 20 } },
      { label: '30% à 50%', value: 'charges2', points: { capacity: 15 } },
      { label: '50% à 70%', value: 'charges3', points: { capacity: 10 } },
      { label: 'Plus de 70%', value: 'charges4', points: { capacity: 5 } },
    ]
  },
  {
    id: 'q24',
    category: 'capacity',
    question: 'Pourriez-vous faire face à une dépense imprévue de 5 000 € ?',
    type: 'single',
    required: true,
    options: [
      { label: 'Non, cela serait très difficile', value: 'imprev1', points: { capacity: 5 } },
      { label: 'Difficilement, en puisant dans mes économies', value: 'imprev2', points: { capacity: 10 } },
      { label: 'Oui, sans trop de difficulté', value: 'imprev3', points: { capacity: 18 } },
      { label: 'Oui, facilement', value: 'imprev4', points: { capacity: 25 } },
    ]
  },
  {
    id: 'q25',
    category: 'capacity',
    question: 'Quelle est la stabilité de vos revenus ?',
    type: 'single',
    required: true,
    options: [
      { label: 'Très instables (entrepreneur, free-lance)', value: 'stab1', points: { capacity: 10 } },
      { label: 'Variables (commissions, primes)', value: 'stab2', points: { capacity: 15 } },
      { label: 'Stables (salaire fixe)', value: 'stab3', points: { capacity: 20 } },
      { label: 'Très stables (fonctionnaire, retraité)', value: 'stab4', points: { capacity: 25 } },
    ]
  },

  // ===== PROFIL ESG (3 questions) =====
  {
    id: 'q26',
    category: 'esg',
    question: 'Souhaitez-vous prendre en compte des critères de durabilité (ESG) dans vos investissements ?',
    description: 'Critères Environnementaux, Sociaux et de Gouvernance',
    type: 'single',
    required: true,
    options: [
      { label: 'Non, cela ne m\'intéresse pas', value: 'esg1', points: { esg: 0 } },
      { label: 'Peut-être, si cela ne réduit pas mes rendements', value: 'esg2', points: { esg: 5 } },
      { label: 'Oui, c\'est important pour moi', value: 'esg3', points: { esg: 15 } },
      { label: 'Oui, c\'est une priorité absolue', value: 'esg4', points: { esg: 25 } },
    ]
  },
  {
    id: 'q27',
    category: 'esg',
    question: 'Quelles thématiques ESG sont prioritaires pour vous ?',
    description: 'Sélectionnez toutes celles qui vous intéressent',
    type: 'multiple',
    required: false,
    options: [
      { label: 'Réduction des émissions de gaz à effet de serre', value: 'theme1', points: { esg: 3 } },
      { label: 'Protection de la biodiversité', value: 'theme2', points: { esg: 3 } },
      { label: 'Gestion responsable de l\'eau', value: 'theme3', points: { esg: 3 } },
      { label: 'Respect des normes internationales du travail', value: 'theme4', points: { esg: 3 } },
      { label: 'Égalité femmes-hommes', value: 'theme5', points: { esg: 3 } },
      { label: 'Bonne gouvernance d\'entreprise', value: 'theme6', points: { esg: 3 } },
      { label: 'Exclusion de secteurs controversés (tabac, armement)', value: 'theme7', points: { esg: 3 } },
      { label: 'Aucune préférence particulière', value: 'theme0', points: { esg: 0 } },
    ]
  },
  {
    id: 'q28',
    category: 'esg',
    question: 'Quel pourcentage minimum de votre portefeuille souhaitez-vous consacrer aux investissements durables ?',
    type: 'single',
    required: false,
    options: [
      { label: 'Aucun', value: 'perc1', points: { esg: 0 } },
      { label: '5% à 10%', value: 'perc2', points: { esg: 5 } },
      { label: '10% à 25%', value: 'perc3', points: { esg: 10 } },
      { label: '25% à 50%', value: 'perc4', points: { esg: 15 } },
      { label: 'Plus de 50%', value: 'perc5', points: { esg: 20 } },
      { label: '100%', value: 'perc6', points: { esg: 25 } },
    ]
  },
];

// Logique de scoring
export const calculateProfile = (answers: Answer[]): InvestorProfile => {
  let riskScore = 0;
  let knowledgeScore = 0;
  let capacityScore = 0;
  let esgScore = 0;

  // Parcourir toutes les réponses
  answers.forEach(answer => {
    const question = investorQuestions.find(q => q.id === answer.questionId);
    if (!question || !question.options) return;

    if (Array.isArray(answer.value)) {
      // Pour les questions à choix multiples
      answer.value.forEach(val => {
        const option = question.options?.find(opt => opt.value === val);
        if (option?.points) {
          riskScore += option.points.risk || 0;
          knowledgeScore += option.points.knowledge || 0;
          capacityScore += option.points.capacity || 0;
          esgScore += option.points.esg || 0;
        }
      });
    } else {
      // Pour les questions à choix unique
      const option = question.options.find(opt => opt.value === answer.value);
      if (option?.points) {
        riskScore += option.points.risk || 0;
        knowledgeScore += option.points.knowledge || 0;
        capacityScore += option.points.capacity || 0;
        esgScore += option.points.esg || 0;
      }
    }
  });

  // Normaliser les scores sur 100
  const normalizedRisk = Math.min(100, (riskScore / 175) * 100); // Max théorique: ~175 points
  const normalizedKnowledge = Math.min(100, (knowledgeScore / 100) * 100); // Max théorique: ~100 points
  const normalizedCapacity = Math.min(100, (capacityScore / 115) * 100); // Max théorique: ~115 points

  // Déterminer le profil de risque
  let riskProfile: InvestorProfile['riskProfile'];
  if (normalizedRisk < 20) riskProfile = 'sécuritaire';
  else if (normalizedRisk < 40) riskProfile = 'défensif';
  else if (normalizedRisk < 60) riskProfile = 'équilibré';
  else if (normalizedRisk < 80) riskProfile = 'dynamique';
  else riskProfile = 'offensif';

  // Règle de cohérence : ajuster si capacité très faible
  if (normalizedCapacity < 30 && (riskProfile === 'offensif' || riskProfile === 'dynamique')) {
    riskProfile = 'équilibré';
  }

  // Déterminer le niveau de connaissance
  let knowledgeLevel: InvestorProfile['knowledgeLevel'];
  if (normalizedKnowledge < 35) knowledgeLevel = 'novice';
  else if (normalizedKnowledge < 70) knowledgeLevel = 'informé';
  else knowledgeLevel = 'expérimenté';

  // Déterminer la capacité à subir des pertes
  let lossCapacity: InvestorProfile['lossCapacity'];
  if (normalizedCapacity < 20) lossCapacity = 'très faible';
  else if (normalizedCapacity < 40) lossCapacity = 'faible';
  else if (normalizedCapacity < 60) lossCapacity = 'moyenne';
  else if (normalizedCapacity < 80) lossCapacity = 'élevée';
  else lossCapacity = 'très élevée';

  // Extraire les objectifs
  const objectivesAnswer = answers.find(a => a.questionId === 'q19');
  const objectives = Array.isArray(objectivesAnswer?.value) 
    ? objectivesAnswer.value.map(val => {
        const opt = investorQuestions.find(q => q.id === 'q19')?.options?.find(o => o.value === val);
        return opt?.label || '';
      }).filter(Boolean)
    : [];

  // Extraire l'horizon d'investissement
  const horizonAnswer = answers.find(a => a.questionId === 'q20');
  const horizonValue = horizonAnswer?.value as string;
  const horizonOption = investorQuestions.find(q => q.id === 'q20')?.options?.find(o => o.value === horizonValue);
  const investmentHorizon = horizonOption?.label || '';

  // Extraire les préférences ESG
  const esgActiveAnswer = answers.find(a => a.questionId === 'q26');
  const esgActive = esgActiveAnswer?.value !== 'esg1';
  
  const esgThemesAnswer = answers.find(a => a.questionId === 'q27');
  const esgThemes = Array.isArray(esgThemesAnswer?.value)
    ? esgThemesAnswer.value
        .filter(val => val !== 'theme0')
        .map(val => {
          const opt = investorQuestions.find(q => q.id === 'q27')?.options?.find(o => o.value === val);
          return opt?.label || '';
        })
        .filter(Boolean)
    : [];

  const esgPercAnswer = answers.find(a => a.questionId === 'q28');
  const esgPercValue = esgPercAnswer?.value as string;
  const esgPercOption = investorQuestions.find(q => q.id === 'q28')?.options?.find(o => o.value === esgPercValue);
  const minPercentage = esgPercValue === 'perc1' ? 0 :
                       esgPercValue === 'perc2' ? 5 :
                       esgPercValue === 'perc3' ? 10 :
                       esgPercValue === 'perc4' ? 25 :
                       esgPercValue === 'perc5' ? 50 :
                       esgPercValue === 'perc6' ? 100 : 0;

  return {
    riskProfile,
    knowledgeLevel,
    lossCapacity,
    objectives,
    investmentHorizon,
    esgPreferences: {
      active: esgActive,
      themes: esgThemes,
      minPercentage
    },
    scores: {
      risk: Math.round(normalizedRisk),
      knowledge: Math.round(normalizedKnowledge),
      capacity: Math.round(normalizedCapacity)
    }
  };
};
