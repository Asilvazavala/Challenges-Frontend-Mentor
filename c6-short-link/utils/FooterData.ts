interface FooterDataItem {
  [section: string]: titlesProps[];
}

interface FooterDataProps {
  titles: FooterDataItem;
}

interface iconsProps {
  name: string;
  image: string;
  link: string;
}

interface titlesProps {
  name: string;
  link: string;
}

export const footerData: FooterDataProps[] = [
  {
    titles: {
      Features: [
        {
          name: "Link Shortening",
          link: "/#ShortLink",
        },
        {
          name: "Branded Links",
          link: "/#features",
        },
        {
          name: "Pricing",
          link: "/pricing",
        },
      ],
      Resources: [
        {
          name: "Dashboard",
          link: "/dashboard",
        },
        {
          name: "Developers",
          link: "/",
        },
        {
          name: "Support",
          link: "/",
        },
      ],
    },
  },
];

export const icons: iconsProps[] = [
  {
    name: "Portfolio",
    image: "/images/icon-portfolio.svg",
    link: "https://as-work.vercel.app/",
  },
  {
    name: "Linkedin",
    image: "/images/icon-linkedin.svg",
    link: "https://www.linkedin.com/in/antonio-silva-developer/",
  },
  {
    name: "Github",
    image: "/images/icon-github.svg",
    link: "https://github.com/Asilvazavala",
  },
];
