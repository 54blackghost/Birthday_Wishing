export type PricingTier = {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
};

export const pricingTiers: PricingTier[] = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    description: "Perfect for getting started",
    features: [
      "Collect up to 10 wishes",
      "Basic album view",
      "30-second video preview",
      "Standard quality",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: "$9.99",
    description: "Most popular choice",
    features: [
      "Unlimited wishes",
      "HD album download",
      "Full-length HD video",
      "Background music",
      "Custom themes",
      "Priority support",
    ],
    popular: true,
  },
  {
    id: "pro",
    name: "Pro",
    price: "$19.99",
    description: "The ultimate celebration",
    features: [
      "Everything in Premium",
      "4K video quality",
      "AI-enhanced montage",
      "Multiple video styles",
      "Printed photo book",
      "Lifetime cloud storage",
    ],
  },
];

export const landingPricing: PricingTier[] = [
  {
    id: "basic",
    name: "Basic",
    price: "Free",
    description: "Get started for free",
    features: [
      "Shareable birthday link",
      "Collect text wishes",
      "Basic album view",
      "30-sec video preview",
    ],
  },
  {
    id: "premium-landing",
    name: "Premium",
    price: "$9.99",
    description: "Unlock the full experience",
    features: [
      "All media types",
      "HD video montage",
      "Custom themes & music",
      "Unlimited wishes",
      "Download & share",
      "Priority support",
    ],
    popular: true,
  },
];
