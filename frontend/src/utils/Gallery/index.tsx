export type WorkItem = {
  id: number;
  title: string;
  publicId: string; 
  tags: string[];
};

export const works: WorkItem[] = [
  {
    id: 1,
    title: "Garden Design",
    publicId: "ChatGPT_Image_Feb_10_2026_10_31_17_PM_ibi5hn",
    tags: ["Garden Design", "Landscaping"]
  },
  {
    id: 2,
    title: "Lawn Service",
    publicId: "IMG_20250327_124403900_btcvs9",
    tags: ["Lawn", "Maintenance"]
  },
  {
    id: 3,
    title: "Lawn Service",
    publicId: "ChatGPT_Image_Feb_10_2026_10_45_01_PM_tojq3o",
    tags: ["Lawn", "Garden Care"]
  },
  {
    id: 4,
    title: "Lawn Service",
    publicId: "IMG_20250402_115747993_kuxp1s",
    tags: ["Lawn", "Maintenance"]
  },
  {
    id: 5,
    title: "Lawn Service",
    publicId: "IMG_20250217_120953906_nt4qvi",
    tags: ["Plants", "Garden Care"]
  },
  {
    id: 6,
    title: "Lawn Service",
    publicId: "ChatGPT_Image_Feb_10_2026_10_31_23_PM_wmbaiq",
    tags: ["Landscaping", "Design"]
  },
  {
    id: 7,
    title: "Lawn Service",
    publicId: "ChatGPT_Image_Feb_10_2026_10_31_11_PM_kdcuqs",
    tags: ["Lawn", "Outdoor"]
  },
  {
    id: 8,
    title: "Lawn Service",
    publicId: "469483120_1980459809134554_8281589681754990999_n.heic_skp5zl",
    tags: ["Plants", "Decoration"]
  },
  {
    id: 9,
    title: "Lawn Service",
    publicId: "469494141_8767689379966258_8244021030371532319_n.heic_e8trly",
    tags: ["Balcony", "Plants"]
  }
];
