import type { SiteConfig } from "@/lib/types";

const IG = "https://www.instagram.com/p/";

export const site: SiteConfig = {
  name: "Aniee's Kitchenette",
  tagline: "Homemade tea time snacks, biryani boxes, and event catering in Brampton.",
  category: "Home kitchen and catering",
  schemaType: "FoodEstablishment",
  area: "Brampton, ON",
  siteUrl: "https://aniees-kitchenette.vercel.app",

  theme: {
    preset: "warm-food",
    colors: { accent: "#3f6f73" },
  },
  logo: "/images/logo.png",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Home kitchen in Brampton",
    headline: "Savour the flavours of homemade goodness",
    subhead: "Tea time snacks, biryani boxes, Beef Nihari, desserts, and catering for your gatherings. Send us a DM to place your order.",
    images: [
      { src: "/images/biryani-boxes.jpg", alt: "Individual biryani boxes packed fresh" },
      { src: "/images/tea-time-sandwiches.jpg", alt: "Tea time sandwiches and fries on a tray" },
      { src: "/images/nihari-haleem.jpg", alt: "Beef Nihari in a catering tray" },
    ],
    secondaryCta: { label: "See the food", href: "#gallery" },
  },

  highlights: ["Certified in food safety and handling", "Homemade with care", "Event and party catering", "Orders by Instagram DM"],

  about: {
    title: "Made with care for your table",
    body: [
      "Aniee's Kitchenette is a home kitchen in Brampton making tea time snacks, appetizers, desserts, side dishes, and more.",
      "Every grain of rice, every piece of chicken, and every spice is prepared with care to bring authentic flavour to your table. Thank you for letting us be part of your special moments.",
    ],
    image: { src: "/images/biryani-trays.jpg", alt: "Catering trays of biryani" },
  },

  menu: {
    title: "What we make",
    intro: "A few of our favourites. Message us with your date and guest count and we will put your order together.",
    variant: "cards",
    showPrices: false,
    priceNote: "Message us for a quote on your order and guest count.",
    groups: [
      {
        title: "Our kitchen",
        items: [
          { name: "Tea time snacks and appetizers", description: "Make tea time a little fancy, a lot delicious.", image: { src: "/images/tea-time-sandwiches.jpg", alt: "Tea time sandwiches" }, href: IG + "DdKV1bRqB0G/" },
          { name: "Biryani boxes", description: "Individual boxes packed fresh and ready to serve, or catering trays.", image: { src: "/images/biryani-boxes.jpg", alt: "Biryani boxes" }, href: IG + "DbbhrN7qAIc/" },
          { name: "Beef Nihari and Beef Haleem", description: "Rich, hearty, and made to satisfy.", image: { src: "/images/nihari-haleem.jpg", alt: "Beef Nihari" }, href: IG + "DcPOOyzKwa0/" },
          { name: "Desserts and side dishes", description: "Sweet finishes and sides to round out your spread." },
          { name: "Breakfast buffet and event catering", description: "A spread with something for everyone for your next gathering.", href: IG + "DdPavp7Krbc/" },
        ],
      },
    ],
  },

  gallery: {
    title: "From our kitchen",
    items: [
      { src: "/images/biryani-boxes.jpg", width: 540, height: 960, alt: "Biryani boxes", caption: "Biryani boxes", href: IG + "DbbhrN7qAIc/" },
      { src: "/images/tea-time-sandwiches.jpg", width: 540, height: 960, alt: "Tea time sandwiches", caption: "Tea time", href: IG + "DdKV1bRqB0G/" },
      { src: "/images/nihari-haleem.jpg", width: 640, height: 640, alt: "Beef Nihari", caption: "Beef Nihari and Haleem", href: IG + "DcPOOyzKwa0/" },
      { src: "/images/chilli-chicken.jpg", width: 540, height: 960, alt: "Saucy chicken dish", caption: "Chinese favourites", href: IG + "DcmZ4OkK0p2/" },
      { src: "/images/biryani-trays.jpg", width: 540, height: 960, alt: "Biryani catering trays", caption: "Ready for your gathering", href: IG + "DaDlKInusMP/" },
      { src: "/images/game-day-platter.jpg", width: 540, height: 960, alt: "Game day food platters", caption: "Game day food", href: IG + "DZnf3qmqYNa/" },
    ],
  },

  instagram: {
    handle: "anieeskitchenette_brampton",
    embeds: [IG + "DbbhrN7qAIc/"],
    embedsTitle: "Fresh from Instagram",
  },

  order: {
    title: "Order in a quick DM",
    intro: "We take orders through Instagram. Tap the button to copy a starter message, then paste it into the chat.",
    dmMessage: "Hi Aniee's Kitchenette! I would like to order...\nItems:\nDate needed:\nNumber of guests:\nPickup or delivery:",
    links: [],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I order?", a: "Send us a DM on Instagram with what you would like, your date, and your guest count. We will reply with a quote." },
    { q: "Do you cater events?", a: "Yes. We make biryani boxes, breakfast buffets, and party trays for gatherings and events." },
    { q: "Where are you located?", a: "We are a home kitchen in Brampton, Ontario." },
  ],

  contact: {
    area: "Brampton, Ontario",
    socials: [],
  },

  seo: {
    title: "Aniee's Kitchenette | Home kitchen and catering in Brampton",
    description: "Homemade tea time snacks, biryani boxes, Beef Nihari, desserts, and event catering in Brampton, Ontario. Order by Instagram DM for a quote.",
    keywords: ["home kitchen Brampton", "biryani catering Brampton", "tea time snacks Brampton", "Beef Nihari Brampton"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
