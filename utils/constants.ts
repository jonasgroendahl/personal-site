export type IProject = {
  name: string;
  description: string;
  platforms: string[];
  gh?: string;
  img: string;
  link?: string;
};

export const PROJECTS: IProject[] = [
  {
    name: "Nordens reneste kommune",
    description:
      "Cross-platform map application to draw and mark areas on a map. Used by Tønder Kommune.",
    platforms: ["Web app", "iOS", "Android"],
    gh: "https://github.com/jonasgroendahl/skridtogskrald-web",
    img: "https://static.wixstatic.com/media/78e40700dbdb478e997aa3cbcbe2e8aa.jpg/v1/fill/w_737,h_1590,al_t,q_85,usm_0.66_1.00_0.01/78e40700dbdb478e997aa3cbcbe2e8aa.webp",
  },
  {
    name: "Learn Chinese",
    description:
      "Personal project to assist me in learning chinese every day. Open source.",
    platforms: ["iOS", "Android"],
    gh: "https://github.com/jonasgroendahl/learn-chinese-one-word",
    img: "https://ampla-edu.com/wp-content/uploads/2019/08/x105441.jpg.pagespeed.ic_.jhdYNzpzy9.jpg",
  },
  {
    name: "10TEN10",
    description:
      "Weight loss solution for trainers and users. 10 people, 10 weeks, 10% body weight.",
    platforms: ["iOS", "Android", "Web", "Web App"],
    img: "data:image/png;base64,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",
  },
  {
    name: "Services around me",
    description:
      "Hackathon project that involed into a free app for helping and trading skills/items between users.",
    platforms: ["iOS", "Android", "Web"],
    img: "https://play-lh.googleusercontent.com/SeoE0sobIKm9JCDkkwdggWKdPGXRWNS2JH2CXutP4TUqrwXkglewYFoKj1xOnevHoMw=w3786-h3116-rw",
  },
  {
    name: "YouTube",
    description:
      "Videos about web and mobile development. Educational content.",
    link: "https://www.youtube.com/channel/UCVrchtz0z4it4JZjIS1D03A",
    img: "https://yt3.ggpht.com/ytc/AAUvwnjDwLJeWs_jcgoVvQpC7YZxWMwP-N__UH-98dxGyw=s900-c-k-c0x00ffffff-no-rj",
    platforms: [],
  },
];
