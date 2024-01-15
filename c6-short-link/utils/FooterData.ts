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
          name: "Blog",
          link: "/",
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
    name: "Facebook",
    image: "/images/icon-facebook.svg",
    link: "https://facebook.com",
  },
  {
    name: "Twitter",
    image: "/images/icon-twitter.svg",
    link: "https://twitter.com",
  },
  {
    name: "Pinterest",
    image: "/images/icon-pinterest.svg",
    link: "https://pinterest.com",
  },
  {
    name: "Instagram",
    image: "/images/icon-instagram.svg",
    link: "https://instagram.com",
  },
];
