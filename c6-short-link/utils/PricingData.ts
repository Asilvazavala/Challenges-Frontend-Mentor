interface benefitsProps {
  icon: string;
  benefit: string;
}

interface pricingDataProps {
  name: string;
  price: number;
  benefits: benefitsProps[];
}

export const pricingData: pricingDataProps[] = [
  {
    name: "Free plan",
    price: 0,
    benefits: [
      {
        icon: "/svg/active-check.svg",
        benefit: "Shorter links",
      },
      {
        icon: "/svg/active-check.svg",
        benefit: "Integration help",
      },
      {
        icon: "/svg/inactive-check.svg",
        benefit: "Save links in a Database",
      },
      {
        icon: "/svg/inactive-check.svg",
        benefit: "API Access",
      },
      {
        icon: "/svg/inactive-check.svg",
        benefit: "Complete documentation",
      },
      {
        icon: "/svg/inactive-check.svg",
        benefit: "24×7 phone & email support",
      },
    ],
  },
  {
    name: "Standard plan",
    price: 49,
    benefits: [
      {
        icon: "/svg/active-check.svg",
        benefit: "Shorter links",
      },
      {
        icon: "/svg/active-check.svg",
        benefit: "Integration help",
      },
      {
        icon: "/svg/active-check.svg",
        benefit: "Save links in a Database",
      },
      {
        icon: "/svg/active-check.svg",
        benefit: "API Access",
      },
      {
        icon: "/svg/inactive-check.svg",
        benefit: "Complete documentation",
      },
      {
        icon: "/svg/inactive-check.svg",
        benefit: "24×7 phone & email support",
      },
    ],
  },
  {
    name: "Full plan",
    price: 79,
    benefits: [
      {
        icon: "/svg/active-check.svg",
        benefit: "Shorter links",
      },
      {
        icon: "/svg/active-check.svg",
        benefit: "Integration help",
      },
      {
        icon: "/svg/active-check.svg",
        benefit: "Save links in a Database",
      },
      {
        icon: "/svg/active-check.svg",
        benefit: "API Access",
      },
      {
        icon: "/svg/active-check.svg",
        benefit: "Complete documentation",
      },
      {
        icon: "/svg/active-check.svg",
        benefit: "24×7 phone & email support",
      },
    ],
  },
];
