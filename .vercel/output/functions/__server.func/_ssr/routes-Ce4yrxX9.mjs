import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as ArrowUpRight, r as Menu, t as X } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Ce4yrxX9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Atmosphere() {
	const ring = (0, import_react.useRef)(null);
	const [fine, setFine] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const finePointer = window.matchMedia("(pointer: fine)").matches;
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		setFine(finePointer && !reduce);
		if (!finePointer || reduce) return;
		const el = ring.current;
		if (!el) return;
		let x = window.innerWidth / 2;
		let y = window.innerHeight / 2;
		let tx = x;
		let ty = y;
		let raf = 0;
		const onMove = (e) => {
			tx = e.clientX;
			ty = e.clientY;
			const hot = e.target?.closest("a, button, [data-hot]");
			el.classList.toggle("is-hot", Boolean(hot));
		};
		const tick = () => {
			x += (tx - x) * .22;
			y += (ty - y) * .22;
			el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
			raf = requestAnimationFrame(tick);
		};
		window.addEventListener("pointermove", onMove, { passive: true });
		raf = requestAnimationFrame(tick);
		return () => {
			window.removeEventListener("pointermove", onMove);
			cancelAnimationFrame(raf);
		};
	}, []);
	(0, import_react.useEffect)(() => {
		const bar = document.getElementById("scroll-progress");
		if (!bar) return;
		const onScroll = () => {
			const max = document.documentElement.scrollHeight - window.innerHeight;
			const p = max <= 0 ? 0 : window.scrollY / max;
			bar.style.setProperty("--progress", String(p));
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grain",
			"aria-hidden": "true"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "scan",
			"aria-hidden": "true"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			id: "scroll-progress",
			className: "progress-bar",
			"aria-hidden": "true"
		}),
		fine ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: ring,
			className: "cursor-ring",
			"aria-hidden": "true"
		}) : null
	] });
}
function Intro() {
	const [done, setDone] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const t = window.setTimeout(() => setDone(true), reduce ? 0 : 1600);
		return () => window.clearTimeout(t);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: done ? "intro is-done" : "intro",
		"aria-hidden": done,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-4 text-[11px] tracking-[0.42em] text-muted uppercase",
					children: "Muscat · 2026"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-5xl italic leading-none text-fg sm:text-7xl",
					children: "Credence"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 font-display text-5xl leading-none text-accent sm:text-7xl",
					children: "Chronicle"
				})
			]
		})
	});
}
function useReveal() {
	(0, import_react.useEffect)(() => {
		const nodes = Array.from(document.querySelectorAll(".reveal"));
		const io = new IntersectionObserver((entries) => {
			for (const entry of entries) if (entry.isIntersecting) {
				entry.target.classList.add("is-in");
				io.unobserve(entry.target);
			}
		}, {
			threshold: .16,
			rootMargin: "0px 0px -8% 0px"
		});
		nodes.forEach((n) => io.observe(n));
		return () => io.disconnect();
	}, []);
}
var studio = {
	name: "Credence Chronicle",
	city: "Muscat",
	country: "Oman",
	email: "studio@credencechronicle.om",
	instagram: "@credencechronicle",
	tagline: "Films for the feed. Craft for the brand."
};
var services = [
	{
		id: "ai",
		index: "01",
		title: "Generative AI",
		body: "Campaign worlds, product stills, and character systems generated, directed, and finished to print and reel spec. Not prompts — art direction."
	},
	{
		id: "vfx",
		index: "02",
		title: "VFX",
		body: "Compositing, set extensions, product impossibility, and finishing that survives a 15-second vertical cut and a 6K hero plate."
	},
	{
		id: "motion",
		index: "03",
		title: "Motion Graphics",
		body: "Type, packs, and kinetic systems for launches, drops, and always-on brand channels. Built to loop, mute-proof, and sell."
	},
	{
		id: "ads",
		index: "04",
		title: "Instagram Ads",
		body: "Reels, carousels, and paid units designed for the thumb — hooks in the first frame, offers that hold, and edits that travel."
	}
];
var works = [
	{
		slug: "amber-veil",
		title: "Amber Veil",
		client: "Maison Ruya",
		kind: "Generative AI",
		filter: "ai",
		format: "Reel + stills",
		image: "/stills/perfume.jpg",
		year: "2026"
	},
	{
		slug: "gulf-line",
		title: "The Gulf Line",
		client: "Visit Oman",
		kind: "VFX",
		filter: "vfx",
		format: "60s / 15s cutdowns",
		image: "/stills/oman.jpg",
		year: "2026"
	},
	{
		slug: "chain-room",
		title: "Chain Room",
		client: "Atelier Noor",
		kind: "Motion",
		filter: "motion",
		format: "Drop film",
		image: "/stills/fashion.jpg",
		year: "2025"
	},
	{
		slug: "saffron-plate",
		title: "Saffron Plate",
		client: "Dar al-Mazaq",
		kind: "Ads",
		filter: "ads",
		format: "Stories pack",
		image: "/stills/table.jpg",
		year: "2026"
	},
	{
		slug: "corniche-night",
		title: "Corniche Night",
		client: "Qasr Motor",
		kind: "VFX",
		filter: "vfx",
		format: "Teaser",
		image: "/stills/auto.jpg",
		year: "2025"
	},
	{
		slug: "serum-01",
		title: "Serum 01",
		client: "Amal Lab",
		kind: "Generative AI",
		filter: "ai",
		format: "Product film",
		image: "/stills/serum.jpg",
		year: "2026"
	}
];
var steps = [
	{
		n: "01",
		title: "Brief",
		body: "Audience, offer, platform, and the one frame that has to land. We write the shot list before we open a tool."
	},
	{
		n: "02",
		title: "World",
		body: "Look development, generative plates, and motion tests. You see the world before we spend the finish."
	},
	{
		n: "03",
		title: "Cut",
		body: "Edit, VFX, sound, and type — built for mute-first viewing and paid placements."
	},
	{
		n: "04",
		title: "Ship",
		body: "Ratio packs, captions, and a version matrix so the same idea can live as a reel, story, and still."
	}
];
var stats = [
	{
		value: 48,
		suffix: "+",
		label: "Campaigns shipped"
	},
	{
		value: 12,
		suffix: "",
		label: "Brand worlds built"
	},
	{
		value: 9,
		suffix: "s",
		label: "Average first-hook"
	},
	{
		value: 24,
		suffix: "h",
		label: "Rush window"
	}
];
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var nav = [
	{
		href: "#work",
		label: "Work"
	},
	{
		href: "#services",
		label: "Services"
	},
	{
		href: "#process",
		label: "Process"
	},
	{
		href: "#studio",
		label: "Studio"
	},
	{
		href: "#contact",
		label: "Contact"
	}
];
var filters = [
	{
		id: "all",
		label: "All"
	},
	{
		id: "ai",
		label: "AI"
	},
	{
		id: "vfx",
		label: "VFX"
	},
	{
		id: "motion",
		label: "Motion"
	},
	{
		id: "ads",
		label: "Ads"
	}
];
function StudioHome() {
	useReveal();
	const [open, setOpen] = (0, import_react.useState)(false);
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [sent, setSent] = (0, import_react.useState)(false);
	const [active, setActive] = (0, import_react.useState)(null);
	const shown = (0, import_react.useMemo)(() => filter === "all" ? works : works.filter((w) => w.filter === filter), [filter]);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open || active ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open, active]);
	function onSubmit(e) {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		const brief = {
			name: String(data.get("name") ?? ""),
			email: String(data.get("email") ?? ""),
			brand: String(data.get("brand") ?? ""),
			need: String(data.get("need") ?? ""),
			note: String(data.get("note") ?? ""),
			at: (/* @__PURE__ */ new Date()).toISOString()
		};
		const prior = JSON.parse(localStorage.getItem("cc-briefs") ?? "[]");
		localStorage.setItem("cc-briefs", JSON.stringify([brief, ...prior].slice(0, 20)));
		setSent(true);
		e.currentTarget.reset();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Atmosphere, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Intro, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "fixed inset-x-0 top-0 z-50 border-b border-line/80 bg-bg/75 backdrop-blur-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[4.5rem] sm:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#top",
							className: "flex items-baseline gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-xl italic leading-none sm:text-2xl",
								children: "Credence"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] tracking-[0.28em] text-muted uppercase",
								children: "Chronicle"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "hidden items-center gap-8 text-sm text-muted md:flex",
							children: [nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: item.href,
								className: "transition-colors duration-200 hover:text-fg",
								children: item.label
							}, item.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contact",
								className: "rounded-full bg-fg px-4 py-2 text-xs tracking-[0.18em] text-accent-fg uppercase transition-transform duration-150 ease-out hover:bg-accent active:scale-[0.96]",
								children: "Brief us"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "grid size-11 place-items-center rounded-full border border-line text-fg md:hidden",
							"aria-label": open ? "Close menu" : "Open menu",
							onClick: () => setOpen((v) => !v),
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-4" })
						})
					]
				})
			}),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-40 bg-bg/96 pt-20 md:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "flex flex-col gap-2 px-6",
					children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						onClick: () => setOpen(false),
						className: "border-b border-line py-4 font-display text-4xl italic",
						children: item.label
					}, item.href))
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "top",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "overflow-hidden border-y border-line py-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "marquee-track text-[11px] tracking-[0.32em] text-muted uppercase",
							children: Array.from({ length: 2 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex shrink-0 gap-10 pr-10",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Generative AI" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-accent",
										children: "·"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "VFX" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-accent",
										children: "·"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Motion Graphics" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-accent",
										children: "·"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Instagram Ads" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-accent",
										children: "·"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Muscat, Oman" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-accent",
										children: "·"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Reels & Stories" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-accent",
										children: "·"
									})
								]
							}, i))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "work",
						className: "mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "reveal mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-3 text-[11px] tracking-[0.32em] text-accent uppercase",
								children: "Selected work"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-4xl italic leading-none sm:text-6xl",
								children: "The reel, not the pitch."
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								role: "tablist",
								"aria-label": "Filter work",
								children: filters.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									role: "tab",
									"aria-selected": filter === f.id,
									onClick: () => setFilter(f.id),
									className: cn("h-11 rounded-full border px-4 text-xs tracking-[0.16em] uppercase transition-[background,color,border-color] duration-200", filter === f.id ? "border-fg bg-fg text-accent-fg" : "border-line bg-transparent text-muted hover:text-fg"),
									children: f.label
								}, f.id))
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
							children: shown.map((work, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"data-hot": true,
								onClick: () => setActive(work),
								className: "reveal group text-left",
								style: { transitionDelay: `${i * 70}ms` },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "overflow-hidden rounded-xl bg-elevated",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative aspect-[3/4] overflow-hidden",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: work.image,
												alt: "",
												className: "size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent opacity-80" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "absolute top-4 left-4 rounded-full border border-line bg-bg/55 px-3 py-1 text-[10px] tracking-[0.18em] text-fg uppercase backdrop-blur-sm",
												children: work.kind
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "absolute right-4 bottom-4 text-fg opacity-0 transition-opacity duration-300 group-hover:opacity-100",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-5" })
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start justify-between gap-3 px-4 py-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-display text-2xl italic leading-tight",
											children: work.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm text-muted",
											children: work.client
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs tracking-[0.14em] text-subtle uppercase",
											children: work.year
										})]
									})]
								})
							}, work.slug))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "services",
						className: "border-y border-line bg-surface",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "reveal mb-14 max-w-2xl",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mb-3 text-[11px] tracking-[0.32em] text-accent uppercase",
										children: "Capabilities"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "font-display text-4xl italic leading-none sm:text-6xl",
										children: "Three crafts. One cut."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-5 max-w-xl text-base leading-relaxed text-muted",
										children: "We make advertisements for creators and brands who live on Instagram — stills that stop the thumb, motion that holds, and VFX that never looks like a plugin."
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-px bg-line sm:grid-cols-2",
								children: services.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "reveal group bg-surface p-7 sm:p-10",
									style: { transitionDelay: `${i * 80}ms` },
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] tracking-[0.28em] text-subtle uppercase",
											children: s.index
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-6 font-display text-3xl italic transition-colors duration-300 group-hover:text-accent sm:text-4xl",
											children: s.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-4 max-w-sm text-sm leading-relaxed text-muted",
											children: s.body
										})
									]
								}, s.id))
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "process",
						className: "mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "reveal mb-14",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-3 text-[11px] tracking-[0.32em] text-accent uppercase",
								children: "How we work"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-4xl italic leading-none sm:text-6xl",
								children: "From brief to feed."
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-4",
							children: steps.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "reveal",
								style: { transitionDelay: `${i * 80}ms` },
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-5xl text-line italic",
										children: step.n
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-4 text-sm tracking-[0.2em] uppercase",
										children: step.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-relaxed text-muted",
										children: step.body
									})
								]
							}, step.n))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "border-y border-line",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:grid-cols-4 sm:px-8",
							children: stats.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "reveal",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-display text-5xl italic tabular-nums",
									children: [stat.value, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-accent",
										children: stat.suffix
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs tracking-[0.18em] text-muted uppercase",
									children: stat.label
								})]
							}, stat.label))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "studio",
						className: "mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "reveal overflow-hidden rounded-xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/stills/studio.jpg",
								alt: "Credence Chronicle studio volume wall",
								className: "aspect-video size-full object-cover"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "reveal",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-3 text-[11px] tracking-[0.32em] text-accent uppercase",
									children: "The studio"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-4xl italic leading-none sm:text-5xl",
									children: "Made in Muscat. Built for the feed."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 text-base leading-relaxed text-muted",
									children: "Credence Chronicle is a small studio in Oman working with founders, creators, and brand teams who need advertisements that look expensive — without a three-month agency calendar. We generate, composite, and motion-design in the same room."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-base leading-relaxed text-muted",
									children: "Gulf light, desert scale, and a finishing standard that holds up next to international work. If it does not survive a muted scroll, it does not ship."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-8 text-sm tracking-[0.16em] text-subtle uppercase",
									children: [
										studio.city,
										", ",
										studio.country
									]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "contact",
						className: "border-t border-line bg-surface",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto grid max-w-6xl gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1fr_1.1fr]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "reveal",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mb-3 text-[11px] tracking-[0.32em] text-accent uppercase",
										children: "Start a brief"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "font-display text-4xl italic leading-none sm:text-6xl",
										children: "Tell us the first frame."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-5 max-w-md text-muted",
										children: "Product drop, tourism film, creator ad pack — send the offer and the platform. We reply from Muscat within one working day."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-10 space-y-3 text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-muted",
											children: ["Studio", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-1 block text-fg",
												children: studio.email
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-muted",
											children: ["Instagram", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-1 block text-fg",
												children: studio.instagram
											})]
										})]
									})
								]
							}), sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "reveal flex min-h-80 flex-col justify-center rounded-xl border border-line bg-bg px-8 py-12",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] tracking-[0.28em] text-accent uppercase",
										children: "Received"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 font-display text-4xl italic",
										children: "The brief is on the desk."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 max-w-sm text-muted",
										children: "We will write back with a first-frame plan and a date. Keep an eye on your inbox."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "mt-8 self-start rounded-full border border-line px-5 py-3 text-xs tracking-[0.18em] uppercase transition-colors duration-200 hover:border-fg",
										onClick: () => setSent(false),
										children: "Send another"
									})
								]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								className: "reveal grid gap-4",
								onSubmit,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										name: "name",
										label: "Name",
										required: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										name: "email",
										label: "Email",
										type: "email",
										required: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										name: "brand",
										label: "Brand or handle"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "grid gap-2 text-xs tracking-[0.16em] text-muted uppercase",
										children: ["What do you need", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											name: "need",
											className: "h-12 rounded-lg border border-line bg-bg px-4 text-sm tracking-normal text-fg normal-case outline-none focus:border-accent",
											defaultValue: "Instagram ads",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Generative AI" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "VFX" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Motion graphics" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Instagram ads" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Full campaign" })
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "grid gap-2 text-xs tracking-[0.16em] text-muted uppercase",
										children: ["The first frame", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
											name: "note",
											rows: 5,
											required: true,
											className: "resize-y rounded-lg border border-line bg-bg px-4 py-3 text-sm leading-relaxed tracking-normal text-fg normal-case outline-none focus:border-accent",
											placeholder: "Product, offer, ratio, deadline…"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "submit",
										className: "mt-2 h-12 rounded-full bg-fg text-sm tracking-[0.2em] text-accent-fg uppercase transition-transform duration-150 ease-out hover:bg-accent active:scale-[0.96]",
										children: "Send brief"
									})
								]
							})]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl italic",
							children: "Credence Chronicle"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-[0.16em] text-subtle uppercase",
							children: "Muscat, Oman · Generative AI · VFX · Motion"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#top",
							className: "text-xs tracking-[0.18em] text-muted uppercase hover:text-fg",
							children: "Back to top"
						})
					]
				})
			}),
			active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 grid place-items-end bg-bg/80 p-4 backdrop-blur-sm sm:place-items-center",
				role: "dialog",
				"aria-modal": "true",
				"aria-labelledby": "work-title",
				onClick: () => setActive(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "grid max-h-[92dvh] w-full max-w-4xl overflow-hidden rounded-2xl border border-line bg-surface sm:grid-cols-2",
					onClick: (e) => e.stopPropagation(),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: active.image,
						alt: "",
						className: "aspect-[3/4] size-full max-h-[42vh] object-cover sm:max-h-none"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col justify-between p-6 sm:p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] tracking-[0.28em] text-accent uppercase",
								children: active.kind
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								id: "work-title",
								className: "mt-3 font-display text-4xl italic",
								children: active.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-muted",
								children: active.client
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-6 text-sm leading-relaxed text-muted",
								children: [
									active.format,
									" · ",
									active.year,
									". Built as a mute-first advertisement — hook, product, and close in under fifteen seconds, with stills cut from the same world."
								]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contact",
								onClick: () => setActive(null),
								className: "rounded-full bg-fg px-5 py-3 text-xs tracking-[0.16em] text-accent-fg uppercase",
								children: "Brief a similar film"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "size-11 rounded-full border border-line",
								"aria-label": "Close",
								onClick: () => setActive(null),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "mx-auto size-4" })
							})]
						})]
					})]
				})
			}) : null
		]
	});
}
function Field({ name, label, type = "text", required }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "grid gap-2 text-xs tracking-[0.16em] text-muted uppercase",
		children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			name,
			type,
			required,
			className: "h-12 rounded-lg border border-line bg-bg px-4 text-sm tracking-normal text-fg normal-case outline-none focus:border-accent"
		})]
	});
}
function Hero() {
	const words = "Films that stop the thumb.".split(" ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative min-h-dvh overflow-hidden pt-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/stills/studio.jpg",
				alt: "",
				className: "absolute inset-0 size-full object-cover opacity-35"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-bg via-bg/55 to-bg" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto flex min-h-[calc(100dvh-4rem)] max-w-6xl flex-col justify-end px-5 pb-16 sm:px-8 sm:pb-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-8 flex items-center gap-3 text-[11px] tracking-[0.28em] text-muted uppercase",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "live-dot" }), "Studio open · Muscat"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "max-w-4xl font-display text-[12vw] leading-[0.9] italic sm:text-7xl md:text-8xl",
						children: words.map((word, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "word mr-[0.28em]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: { animationDelay: `${180 + i * 90}ms` },
								children: word
							})
						}, word))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg",
						children: [studio.tagline, " Generative AI, VFX, and motion graphics for Instagram and brand advertising — directed from Oman."]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#work",
							className: "inline-flex h-12 items-center rounded-full bg-fg px-6 text-xs tracking-[0.2em] text-accent-fg uppercase transition-transform duration-150 hover:bg-accent active:scale-[0.96]",
							children: "View work"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#contact",
							className: "inline-flex h-12 items-center rounded-full border border-line px-6 text-xs tracking-[0.2em] uppercase transition-colors duration-200 hover:border-fg",
							children: "Start a brief"
						})]
					})
				]
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StudioHome, {});
}
//#endregion
export { Home as component };
