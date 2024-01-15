interface FooterDataItem {
  [section: string]: string[];
}

interface FooterDataProps {
  titles: FooterDataItem;
}

interface iconsProps {
  name: string;
  image: string;
  link: string;
}

export const footerData: FooterDataProps[] = [
  {
    titles: {
      Features: [
        'Link Shortening',
        'Branded Links',
        'Analytics'
      ],
      Resources: [
        'Blog',
        'Developers',
        'Support'
      ],
      Company: [
        'About',
        'Our Team',
        'Contact'
      ],
    }
  },
];

export const icons: iconsProps[] = [
  {
    name: 'Facebook',
    image: '/images/icon-facebook.svg',
    link: 'https://facebook.com'
  },
  {
    name: 'Twitter',
    image: '/images/icon-twitter.svg',
    link: 'https://twitter.com'
  },
  {
    name: 'Pinterest',
    image: '/images/icon-pinterest.svg',
    link: 'https://pinterest.com'
  },
  {
    name: 'Instagram',
    image: '/images/icon-instagram.svg',
    link: 'https://instagram.com'
  },
]
