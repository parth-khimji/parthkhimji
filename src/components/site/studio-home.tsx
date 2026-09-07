import { useEffect, useMemo, useState, type FormEvent } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Atmosphere, Intro, useReveal } from "@/components/site/effects";
import { services, stats, steps, studio, works } from "@/lib/studio";
import { cn } from "@/lib/utils";

const nav = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#studio", label: "Studio" },
  { href: "#contact", label: "Contact" },
];

const filters = [
  { id: "all", label: "All" },
  { id: "ai", label: "AI" },
  { id: "vfx", label: "VFX" },
  { id: "motion", label: "Motion" },
  { id: "ads", label: "Ads" },
] as const;

export function StudioHome() {
  useReveal();
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("all");
  const [sent, setSent] = useState(false);
  const [active, setActive] = useState<(typeof works)[number] | null>(null);

  const shown = useMemo(
    () => (filter === "all" ? works : works.filter((w) => w.filter === filter)),
    [filter],
  );

  useEffect(() => {
    document.body.style.overflow = open || active ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, active]);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const brief = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      brand: String(data.get("brand") ?? ""),
      need: String(data.get("need") ?? ""),
      note: String(data.get("note") ?? ""),
      at: new Date().toISOString(),
    };
    const prior = JSON.parse(localStorage.getItem("cc-briefs") ?? "[]") as unknown[];
    localStorage.setItem("cc-briefs", JSON.stringify([brief, ...prior].slice(0, 20)));
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <div className="relative min-h-dvh bg-bg text-fg">
      <Atmosphere />
      <Intro />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-line/80 bg-bg/75 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[4.5rem] sm:px-8">
          <a href="#top" className="flex items-baseline gap-2">
            <span className="font-display text-xl italic leading-none sm:text-2xl">Credence</span>
            <span className="text-[10px] tracking-[0.28em] text-muted uppercase">Chronicle</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors duration-200 hover:text-fg">
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full bg-fg px-4 py-2 text-xs tracking-[0.18em] text-accent-fg uppercase transition-transform duration-150 ease-out hover:bg-accent active:scale-[0.96]"
            >
              Brief us
            </a>
          </nav>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full border border-line text-fg md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </header>

      {open ? (
        <div className="fixed inset-0 z-40 bg-bg/96 pt-20 md:hidden">
          <nav className="flex flex-col gap-2 px-6">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-4 font-display text-4xl italic"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}

      <main id="top">
        <Hero />

        <section className="overflow-hidden border-y border-line py-4">
          <div className="marquee-track text-[11px] tracking-[0.32em] text-muted uppercase">
            {Array.from({ length: 2 }).map((_, i) => (
              <p key={i} className="flex shrink-0 gap-10 pr-10">
                <span>Generative AI</span>
                <span className="text-accent">·</span>
                <span>VFX</span>
                <span className="text-accent">·</span>
                <span>Motion Graphics</span>
                <span className="text-accent">·</span>
                <span>Instagram Ads</span>
                <span className="text-accent">·</span>
                <span>Muscat, Oman</span>
                <span className="text-accent">·</span>
                <span>Reels & Stories</span>
                <span className="text-accent">·</span>
              </p>
            ))}
          </div>
        </section>

        <section id="work" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="reveal mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-[11px] tracking-[0.32em] text-accent uppercase">Selected work</p>
              <h2 className="font-display text-4xl italic leading-none sm:text-6xl">The reel, not the pitch.</h2>
            </div>
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter work">
              {filters.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  role="tab"
                  aria-selected={filter === f.id}
                  onClick={() => setFilter(f.id)}
                  className={cn(
                    "h-11 rounded-full border px-4 text-xs tracking-[0.16em] uppercase transition-[background,color,border-color] duration-200",
                    filter === f.id
                      ? "border-fg bg-fg text-accent-fg"
                      : "border-line bg-transparent text-muted hover:text-fg",
                  )}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((work, i) => (
              <button
                key={work.slug}
                type="button"
                data-hot
                onClick={() => setActive(work)}
                className="reveal group text-left"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="overflow-hidden rounded-xl bg-elevated">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={work.image}
                      alt=""
                      className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent opacity-80" />
                    <span className="absolute top-4 left-4 rounded-full border border-line bg-bg/55 px-3 py-1 text-[10px] tracking-[0.18em] text-fg uppercase backdrop-blur-sm">
                      {work.kind}
                    </span>
                    <span className="absolute right-4 bottom-4 text-fg opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <ArrowUpRight className="size-5" />
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-3 px-4 py-4">
                    <div>
                      <p className="font-display text-2xl italic leading-tight">{work.title}</p>
                      <p className="mt-1 text-sm text-muted">{work.client}</p>
                    </div>
                    <p className="text-xs tracking-[0.14em] text-subtle uppercase">{work.year}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section id="services" className="border-y border-line bg-surface">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
            <div className="reveal mb-14 max-w-2xl">
              <p className="mb-3 text-[11px] tracking-[0.32em] text-accent uppercase">Capabilities</p>
              <h2 className="font-display text-4xl italic leading-none sm:text-6xl">Three crafts. One cut.</h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
                We make advertisements for creators and brands who live on Instagram — stills that stop the
                thumb, motion that holds, and VFX that never looks like a plugin.
              </p>
            </div>
            <div className="grid gap-px bg-line sm:grid-cols-2">
              {services.map((s, i) => (
                <article
                  key={s.id}
                  className="reveal group bg-surface p-7 sm:p-10"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <p className="text-[11px] tracking-[0.28em] text-subtle uppercase">{s.index}</p>
                  <h3 className="mt-6 font-display text-3xl italic transition-colors duration-300 group-hover:text-accent sm:text-4xl">
                    {s.title}
                  </h3>
                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">{s.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="reveal mb-14">
            <p className="mb-3 text-[11px] tracking-[0.32em] text-accent uppercase">How we work</p>
            <h2 className="font-display text-4xl italic leading-none sm:text-6xl">From brief to feed.</h2>
          </div>
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li key={step.n} className="reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <p className="font-display text-5xl text-line italic">{step.n}</p>
                <h3 className="mt-4 text-sm tracking-[0.2em] uppercase">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="border-y border-line">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:grid-cols-4 sm:px-8">
            {stats.map((stat) => (
              <div key={stat.label} className="reveal">
                <p className="font-display text-5xl italic tabular-nums">
                  {stat.value}
                  <span className="text-accent">{stat.suffix}</span>
                </p>
                <p className="mt-2 text-xs tracking-[0.18em] text-muted uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="studio" className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2">
          <div className="reveal overflow-hidden rounded-xl">
            <img src="/stills/studio.jpg" alt="Credence Chronicle studio volume wall" className="aspect-video size-full object-cover" />
          </div>
          <div className="reveal">
            <p className="mb-3 text-[11px] tracking-[0.32em] text-accent uppercase">The studio</p>
            <h2 className="font-display text-4xl italic leading-none sm:text-5xl">Made in Muscat. Built for the feed.</h2>
            <p className="mt-6 text-base leading-relaxed text-muted">
              Credence Chronicle is a small studio in Oman working with founders, creators, and brand teams
              who need advertisements that look expensive — without a three-month agency calendar. We
              generate, composite, and motion-design in the same room.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Gulf light, desert scale, and a finishing standard that holds up next to international work.
              If it does not survive a muted scroll, it does not ship.
            </p>
            <p className="mt-8 text-sm tracking-[0.16em] text-subtle uppercase">
              {studio.city}, {studio.country}
            </p>
          </div>
        </section>

        <section id="contact" className="border-t border-line bg-surface">
          <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1fr_1.1fr]">
            <div className="reveal">
              <p className="mb-3 text-[11px] tracking-[0.32em] text-accent uppercase">Start a brief</p>
              <h2 className="font-display text-4xl italic leading-none sm:text-6xl">Tell us the first frame.</h2>
              <p className="mt-5 max-w-md text-muted">
                Product drop, tourism film, creator ad pack — send the offer and the platform. We reply from
                Muscat within one working day.
              </p>
              <div className="mt-10 space-y-3 text-sm">
                <p className="text-muted">
                  Studio
                  <span className="mt-1 block text-fg">{studio.email}</span>
                </p>
                <p className="text-muted">
                  Instagram
                  <span className="mt-1 block text-fg">{studio.instagram}</span>
                </p>
              </div>
            </div>

            {sent ? (
              <div className="reveal flex min-h-80 flex-col justify-center rounded-xl border border-line bg-bg px-8 py-12">
                <p className="text-[11px] tracking-[0.28em] text-accent uppercase">Received</p>
                <p className="mt-4 font-display text-4xl italic">The brief is on the desk.</p>
                <p className="mt-4 max-w-sm text-muted">
                  We will write back with a first-frame plan and a date. Keep an eye on your inbox.
                </p>
                <button
                  type="button"
                  className="mt-8 self-start rounded-full border border-line px-5 py-3 text-xs tracking-[0.18em] uppercase transition-colors duration-200 hover:border-fg"
                  onClick={() => setSent(false)}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form className="reveal grid gap-4" onSubmit={onSubmit}>
                <Field name="name" label="Name" required />
                <Field name="email" label="Email" type="email" required />
                <Field name="brand" label="Brand or handle" />
                <label className="grid gap-2 text-xs tracking-[0.16em] text-muted uppercase">
                  What do you need
                  <select
                    name="need"
                    className="h-12 rounded-lg border border-line bg-bg px-4 text-sm tracking-normal text-fg normal-case outline-none focus:border-accent"
                    defaultValue="Instagram ads"
                  >
                    <option>Generative AI</option>
                    <option>VFX</option>
                    <option>Motion graphics</option>
                    <option>Instagram ads</option>
                    <option>Full campaign</option>
                  </select>
                </label>
                <label className="grid gap-2 text-xs tracking-[0.16em] text-muted uppercase">
                  The first frame
                  <textarea
                    name="note"
                    rows={5}
                    required
                    className="resize-y rounded-lg border border-line bg-bg px-4 py-3 text-sm leading-relaxed tracking-normal text-fg normal-case outline-none focus:border-accent"
                    placeholder="Product, offer, ratio, deadline…"
                  />
                </label>
                <button
                  type="submit"
                  className="mt-2 h-12 rounded-full bg-fg text-sm tracking-[0.2em] text-accent-fg uppercase transition-transform duration-150 ease-out hover:bg-accent active:scale-[0.96]"
                >
                  Send brief
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="font-display text-2xl italic">Credence Chronicle</p>
          <p className="text-xs tracking-[0.16em] text-subtle uppercase">
            Muscat, Oman · Generative AI · VFX · Motion
          </p>
          <a href="#top" className="text-xs tracking-[0.18em] text-muted uppercase hover:text-fg">
            Back to top
          </a>
        </div>
      </footer>

      {active ? (
        <div
          className="fixed inset-0 z-50 grid place-items-end bg-bg/80 p-4 backdrop-blur-sm sm:place-items-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="work-title"
          onClick={() => setActive(null)}
        >
          <article
            className="grid max-h-[92dvh] w-full max-w-4xl overflow-hidden rounded-2xl border border-line bg-surface sm:grid-cols-2"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={active.image} alt="" className="aspect-[3/4] size-full max-h-[42vh] object-cover sm:max-h-none" />
            <div className="flex flex-col justify-between p-6 sm:p-8">
              <div>
                <p className="text-[11px] tracking-[0.28em] text-accent uppercase">{active.kind}</p>
                <h3 id="work-title" className="mt-3 font-display text-4xl italic">
                  {active.title}
                </h3>
                <p className="mt-2 text-muted">{active.client}</p>
                <p className="mt-6 text-sm leading-relaxed text-muted">
                  {active.format} · {active.year}. Built as a mute-first advertisement — hook, product, and
                  close in under fifteen seconds, with stills cut from the same world.
                </p>
              </div>
              <div className="mt-8 flex items-center justify-between">
                <a
                  href="#contact"
                  onClick={() => setActive(null)}
                  className="rounded-full bg-fg px-5 py-3 text-xs tracking-[0.16em] text-accent-fg uppercase"
                >
                  Brief a similar film
                </a>
                <button
                  type="button"
                  className="size-11 rounded-full border border-line"
                  aria-label="Close"
                  onClick={() => setActive(null)}
                >
                  <X className="mx-auto size-4" />
                </button>
              </div>
            </div>
          </article>
        </div>
      ) : null}
    </div>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-xs tracking-[0.16em] text-muted uppercase">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        className="h-12 rounded-lg border border-line bg-bg px-4 text-sm tracking-normal text-fg normal-case outline-none focus:border-accent"
      />
    </label>
  );
}

function Hero() {
  const line = "Films that stop the thumb.";
  const words = line.split(" ");

  return (
    <section className="relative min-h-dvh overflow-hidden pt-16">
      <img
        src="/stills/studio.jpg"
        alt=""
        className="absolute inset-0 size-full object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg/55 to-bg" />
      <div className="relative mx-auto flex min-h-[calc(100dvh-4rem)] max-w-6xl flex-col justify-end px-5 pb-16 sm:px-8 sm:pb-20">
        <div className="mb-8 flex items-center gap-3 text-[11px] tracking-[0.28em] text-muted uppercase">
          <span className="live-dot" />
          Studio open · Muscat
        </div>
        <h1 className="max-w-4xl font-display text-[12vw] leading-[0.9] italic sm:text-7xl md:text-8xl">
          {words.map((word, i) => (
            <span key={word} className="word mr-[0.28em]">
              <span style={{ animationDelay: `${180 + i * 90}ms` }}>{word}</span>
            </span>
          ))}
        </h1>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
          {studio.tagline} Generative AI, VFX, and motion graphics for Instagram and brand advertising —
          directed from Oman.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#work"
            className="inline-flex h-12 items-center rounded-full bg-fg px-6 text-xs tracking-[0.2em] text-accent-fg uppercase transition-transform duration-150 hover:bg-accent active:scale-[0.96]"
          >
            View work
          </a>
          <a
            href="#contact"
            className="inline-flex h-12 items-center rounded-full border border-line px-6 text-xs tracking-[0.2em] uppercase transition-colors duration-200 hover:border-fg"
          >
            Start a brief
          </a>
        </div>
      </div>
    </section>
  );
}
