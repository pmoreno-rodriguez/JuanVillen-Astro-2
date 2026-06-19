// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "JuanVillen";
export const SITE_DESCRIPTION = "Narración Oral Profesional";
const BASE_URL = import.meta.env.BASE_URL;

export const NAV_MENU = [
  {
    url: `${BASE_URL}`,
    title: "Inicio",
  },
  {
    url: "#",
    title: "Quién soy",
  },
  {
    url: `${BASE_URL}service`,
    title: "Sesiones",
  },
  {
    url: `${BASE_URL}team`,
    title: "Team",
  },
  {
    url: `${BASE_URL}blog`,
    title: "Blog",
  },
  {
    url: `${BASE_URL}contact`,
    title: "Contacto",
  },
];
