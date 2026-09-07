export const studio = {
  name: "Credence Chronicle",
  city: "Muscat",
  country: "Oman",
  email: "studio@credencechronicle.om",
  instagram: "@credencechronicle",
  tagline: "Films for the feed. Craft for the brand.",
};

export const services = [
  {
    id: "ai",
    index: "01",
    title: "Generative AI",
    body: "Campaign worlds, product stills, and character systems generated, directed, and finished to print and reel spec. Not prompts — art direction.",
  },
  {
    id: "vfx",
    index: "02",
    title: "VFX",
    body: "Compositing, set extensions, product impossibility, and finishing that survives a 15-second vertical cut and a 6K hero plate.",
  },
  {
    id: "motion",
    index: "03",
    title: "Motion Graphics",
    body: "Type, packs, and kinetic systems for launches, drops, and always-on brand channels. Built to loop, mute-proof, and sell.",
  },
  {
    id: "ads",
    index: "04",
    title: "Instagram Ads",
    body: "Reels, carousels, and paid units designed for the thumb — hooks in the first frame, offers that hold, and edits that travel.",
  },
] as const;

export const works = [
  {
    slug: "amber-veil",
    title: "Amber Veil",
    client: "Maison Ruya",
    kind: "Generative AI",
    filter: "ai",
    format: "Reel + stills",
    image: "/stills/perfume.jpg",
    year: "2026",
  },
  {
    slug: "gulf-line",
    title: "The Gulf Line",
    client: "Visit Oman",
    kind: "VFX",
    filter: "vfx",
    format: "60s / 15s cutdowns",
    image: "/stills/oman.jpg",
    year: "2026",
  },
  {
    slug: "chain-room",
    title: "Chain Room",
    client: "Atelier Noor",
    kind: "Motion",
    filter: "motion",
    format: "Drop film",
    image: "/stills/fashion.jpg",
    year: "2025",
  },
  {
    slug: "saffron-plate",
    title: "Saffron Plate",
    client: "Dar al-Mazaq",
    kind: "Ads",
    filter: "ads",
    format: "Stories pack",
    image: "/stills/table.jpg",
    year: "2026",
  },
  {
    slug: "corniche-night",
    title: "Corniche Night",
    client: "Qasr Motor",
    kind: "VFX",
    filter: "vfx",
    format: "Teaser",
    image: "/stills/auto.jpg",
    year: "2025",
  },
  {
    slug: "serum-01",
    title: "Serum 01",
    client: "Amal Lab",
    kind: "Generative AI",
    filter: "ai",
    format: "Product film",
    image: "/stills/serum.jpg",
    year: "2026",
  },
] as const;

export const steps = [
  {
    n: "01",
    title: "Brief",
    body: "Audience, offer, platform, and the one frame that has to land. We write the shot list before we open a tool.",
  },
  {
    n: "02",
    title: "World",
    body: "Look development, generative plates, and motion tests. You see the world before we spend the finish.",
  },
  {
    n: "03",
    title: "Cut",
    body: "Edit, VFX, sound, and type — built for mute-first viewing and paid placements.",
  },
  {
    n: "04",
    title: "Ship",
    body: "Ratio packs, captions, and a version matrix so the same idea can live as a reel, story, and still.",
  },
] as const;

export const stats = [
  { value: 48, suffix: "+", label: "Campaigns shipped" },
  { value: 12, suffix: "", label: "Brand worlds built" },
  { value: 9, suffix: "s", label: "Average first-hook" },
  { value: 24, suffix: "h", label: "Rush window" },
] as const;
