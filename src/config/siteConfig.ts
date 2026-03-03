export const PAGES = [
  {
    title: "Home",
    href: "#",
  },
  {
    title: "Categorias",
    href: "#",
  },
  {
    title: "Ofertas",
    href: "#",
  },
  {
    title: "Contato",
    href: "#",
  },
];

const createSiteConfig = () => {
  const url = "https://karolwojtyla.dev";
  const links = {
    x: "https://www.saio.app/x",
    instagram: "https://www.saio.app/instagram",
    linkedin: "https://www.saio.app/linkedin",
    threads: "https://www.saio.app/threads",
    facebook: "https://www.saio.app/facebook",
    tiktok: "https://www.saio.app/tiktok",
  };

  return {
    name: "Karol Wojtyla | Software Engineer",
    description:
      "Engenheiro de Software especialista em transformar experiências digitais com tecnologia",
    ogImage: `${url}/og.jpg`,
    links,
    url,
  };
};

export const siteConfig = createSiteConfig();
