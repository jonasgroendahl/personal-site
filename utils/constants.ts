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
    name: "Learn Chinese",
    description:
      "Personal project to assist me in learning chinese every day. Open source.",
    platforms: ["iOS", "Android"],
    gh: "https://github.com/jonasgroendahl/learn-chinese-one-word",
    img:
      "https://ampla-edu.com/wp-content/uploads/2019/08/x105441.jpg.pagespeed.ic_.jhdYNzpzy9.jpg",
  },
  {
    name: "10TEN10",
    description:
      "Weight loss solution for trainers and users. 10 people, 10 weeks, 10% body weight.",
    platforms: ["iOS", "Android", "Web", "Web App"],
    img:
      "https://naughty-lewin-2de274.netlify.app/static/media/10ten10-09%20%20copy.ae6fca85.png",
  },
  {
    name: "Services around me",
    description:
      "Hackathon project that involed into a free app for helping and trading skills/items between users.",
    platforms: ["iOS", "Android", "Web"],
    img:
      "https://play-lh.googleusercontent.com/SeoE0sobIKm9JCDkkwdggWKdPGXRWNS2JH2CXutP4TUqrwXkglewYFoKj1xOnevHoMw=w3786-h3116-rw",
  },
  {
    name: "YouTube",
    description:
      "Videos about web and mobile development. Educational content.",
    link: "https://www.youtube.com/channel/UCVrchtz0z4it4JZjIS1D03A",
    img:
      "https://yt3.ggpht.com/ytc/AAUvwnjDwLJeWs_jcgoVvQpC7YZxWMwP-N__UH-98dxGyw=s900-c-k-c0x00ffffff-no-rj",
    platforms: [],
  },
];
