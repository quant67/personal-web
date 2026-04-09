import type { CSSProperties, ElementType } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Code2,
  Globe2,
  Mail,
  Rocket,
  Sparkles,
} from "lucide-react";

import {
  siteContent,
  type AccentTone,
  type IconKey,
  type LocalizedText,
} from "@/lib/site-content";

const iconMap: Record<IconKey, LucideIcon> = {
  sparkles: Sparkles,
  rocket: Rocket,
  code: Code2,
  book: BookOpen,
  github: Code2,
  mail: Mail,
  globe: Globe2,
};

const toneStyles: Record<
  AccentTone,
  {
    chip: string;
    badge: string;
    icon: string;
    ring: string;
    shadow: string;
  }
> = {
  accent: {
    chip: "bg-accent/12 text-accent",
    badge: "bg-accent text-white",
    icon: "bg-accent text-white",
    ring: "outline-accent/40",
    shadow: "var(--accent)",
  },
  secondary: {
    chip: "bg-secondary/12 text-foreground",
    badge: "bg-secondary text-foreground",
    icon: "bg-secondary text-foreground",
    ring: "outline-secondary/50",
    shadow: "var(--secondary)",
  },
  tertiary: {
    chip: "bg-tertiary/18 text-foreground",
    badge: "bg-tertiary text-foreground",
    icon: "bg-tertiary text-foreground",
    ring: "outline-tertiary/50",
    shadow: "var(--tertiary)",
  },
  quaternary: {
    chip: "bg-quaternary/16 text-foreground",
    badge: "bg-quaternary text-foreground",
    icon: "bg-quaternary text-foreground",
    ring: "outline-quaternary/50",
    shadow: "var(--quaternary)",
  },
};

export function Homepage() {
  const marqueeItems = [...siteContent.keywords.items, ...siteContent.keywords.items];

  return (
    <div className="overflow-x-clip bg-background text-foreground">
      <a className="sr-only focus:not-sr-only" href="#main-content">
        Skip to content
      </a>
      <SiteNav />
      <main id="main-content" className="pb-10">
        <HeroSection />
        <section aria-labelledby="keywords-heading" className="section-shell py-8 sm:py-10">
          <h2 id="keywords-heading" className="sr-only">
            {siteContent.keywords.heading.en}
          </h2>
          <div className="marquee-shell">
            <div className="marquee-track">
              {marqueeItems.map((item, index) => (
                <span
                  key={`${item.en}-${index}`}
                  className="inline-flex items-center gap-3 whitespace-nowrap rounded-full border-2 border-foreground bg-card px-4 py-2 text-sm font-semibold text-foreground"
                >
                  <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-secondary" />
                  <span>{item.zh}</span>
                  <span className="text-muted-foreground" lang="en">
                    {item.en}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section-shell py-16 sm:py-20">
          <SectionHeading
            icon="code"
            tone="accent"
            heading={siteContent.openSourceProjects.heading}
          />
          <div className="relative mt-10">
            <ProjectConnector />
            <div className="grid gap-6 lg:grid-cols-3">
              {siteContent.openSourceProjects.items.map((item) => (
                <StickerCard
                  key={item.title.en}
                  tone={item.tone}
                  icon={item.icon}
                  title={item.title}
                  body={item.summary}
                  eyebrow={item.metric}
                  meta={item.stack}
                  action={siteContent.ui.visitProject}
                  href={item.href}
                  ariaLabel={item.ariaLabel}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="experiments" className="section-shell py-16 sm:py-20">
          <SectionHeading
            icon="sparkles"
            tone="secondary"
            heading={siteContent.experiments.heading}
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            {siteContent.experiments.items.map((item, index) => (
              <ExperimentCard
                key={item.title.en}
                item={item}
                mirrored={index % 2 === 1}
              />
            ))}
          </div>
        </section>

        <section id="writing" className="section-shell py-16 sm:py-20">
          <SectionHeading
            icon="book"
            tone="tertiary"
            heading={siteContent.writing.heading}
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {siteContent.writing.items.map((item) => (
              <WritingCard key={item.title.en} item={item} />
            ))}
          </div>
        </section>

        <section id="connect" className="section-shell py-16 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div className="relative">
              <SectionHeading
                icon="globe"
                tone="quaternary"
                heading={siteContent.socialLinks.heading}
              />
              <span
                aria-hidden="true"
                className="absolute -left-3 top-10 hidden h-28 w-28 rounded-full border-2 border-foreground bg-tertiary/50 lg:block"
              />
            </div>
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {siteContent.socialLinks.items.map((item) => (
                <SocialCard key={item.title.en} item={item} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <FooterNote />
    </div>
  );
}

function SiteNav() {
  return (
    <header className="section-shell sticky top-0 z-50 pt-4">
      <div className="nav-sticker flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="icon-medallion bg-accent text-white">
            <Sparkles aria-hidden="true" className="h-4 w-4" strokeWidth={2.5} />
          </div>
          <div>
            <p className="font-heading text-base font-extrabold tracking-tight">
              {siteContent.brand.name.zh}
            </p>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
              {siteContent.brand.name.en}
            </p>
          </div>
        </div>
        <nav aria-label={siteContent.navigationAriaLabel.en} className="overflow-x-auto">
          <ul className="flex min-w-max items-center gap-2">
            {siteContent.navigation.map((item) => (
              <li key={item.href}>
                <a className="nav-pill" href={item.href}>
                  <span>{item.label.zh}</span>
                  <span className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    {item.label.en}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section id="top" className="section-shell relative py-10 sm:py-16 lg:py-24">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -left-12 top-4 hidden h-44 w-44 rounded-full border-2 border-foreground bg-tertiary/70 lg:block"
          />
          <div
            aria-hidden="true"
            className="absolute left-10 top-24 hidden h-12 w-12 rotate-12 rounded-[30%_70%_65%_35%/30%_30%_70%_70%] border-2 border-foreground bg-secondary lg:block"
          />
          <div className="relative">
            <span className="eyebrow-pill mb-6 inline-flex">
              {siteContent.hero.badge.zh}
              <span className="mx-2 text-foreground/30">/</span>
              <span lang="en">{siteContent.hero.badge.en}</span>
            </span>
            <BilingualBlock
              as="h1"
              copy={siteContent.hero.title}
              className="max-w-3xl"
              zhClassName="font-heading text-[clamp(2.9rem,6vw,5.8rem)] font-extrabold leading-[0.9] tracking-[-0.05em] [text-wrap:balance]"
              enClassName="mt-4 max-w-2xl font-heading text-[clamp(1.2rem,2vw,1.8rem)] font-bold leading-[1.1] tracking-[-0.03em] text-accent [text-wrap:balance]"
            />
            <BilingualBlock
              as="p"
              copy={siteContent.hero.description}
              className="mt-6 max-w-2xl"
              zhClassName="text-lg font-medium leading-8 text-foreground"
              enClassName="mt-3 text-base leading-7 text-muted-foreground"
            />
            <div className="mt-8 flex flex-wrap gap-4">
              <ActionLink
                href={siteContent.hero.primaryCta.href}
                label={siteContent.hero.primaryCta.label}
                ariaLabel={siteContent.hero.primaryCta.ariaLabel}
                variant="primary"
              />
              <ActionLink
                href={siteContent.hero.secondaryCta.href}
                label={siteContent.hero.secondaryCta.label}
                ariaLabel={siteContent.hero.secondaryCta.ariaLabel}
                variant="secondary"
              />
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {siteContent.hero.highlights.map((item) => (
                <div
                  key={item.label.en}
                  className="rounded-[20px] border-2 border-foreground bg-card px-4 py-4 shadow-[4px_4px_0_0_var(--muted)]"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    {item.label.zh}
                  </p>
                  <p className="mt-2 font-heading text-3xl font-extrabold tracking-tight">
                    {item.value}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground" lang="en">
                    {item.label.en}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <HeroFigure />
      </div>
    </section>
  );
}

function HeroFigure() {
  return (
    <div className="relative mx-auto w-full max-w-[32rem] lg:max-w-none">
      <div aria-hidden="true" className="absolute -right-4 top-6 h-24 w-24 rotate-6 rounded-full border-2 border-foreground bg-secondary/80" />
      <div aria-hidden="true" className="absolute -left-4 bottom-20 h-20 w-20 rounded-[12px_36px_36px_36px] border-2 border-foreground bg-quaternary/90" />
      <div className="hero-figure">
        <div className="dot-grid absolute inset-0 opacity-70" aria-hidden="true" />
        <div className="relative z-10 flex h-full flex-col justify-between gap-6">
          <div className="flex items-start justify-between gap-4">
            <div className="rounded-full border-2 border-foreground bg-card px-4 py-2 shadow-[4px_4px_0_0_var(--tertiary)]">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground">
                {siteContent.hero.figure.label.zh}
              </p>
              <p className="mt-1 font-heading text-xl font-extrabold tracking-tight" lang="en">
                {siteContent.hero.figure.label.en}
              </p>
            </div>
            <div className="rounded-[20px] border-2 border-foreground bg-tertiary px-4 py-3 shadow-[4px_4px_0_0_var(--foreground)]">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/70">
                {siteContent.hero.figure.status.zh}
              </p>
              <p className="mt-1 text-sm font-semibold" lang="en">
                {siteContent.hero.figure.status.en}
              </p>
            </div>
          </div>
          <div className="hero-blob relative overflow-hidden border-2 border-foreground bg-card">
            <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(251,191,36,0.9),transparent_23%),radial-gradient(circle_at_80%_18%,rgba(244,114,182,0.9),transparent_20%),radial-gradient(circle_at_55%_72%,rgba(139,92,246,0.9),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.98),rgba(241,245,249,0.95))]" />
            <div className="relative flex h-full min-h-[18rem] flex-col justify-end px-6 py-7 sm:px-8">
              <div className="absolute left-6 top-6 h-16 w-16 rounded-full border-2 border-foreground bg-background shadow-[4px_4px_0_0_var(--foreground)]" />
              <div className="absolute right-8 top-10 h-12 w-24 rotate-6 rounded-full border-2 border-foreground bg-quaternary/90 shadow-[4px_4px_0_0_var(--foreground)]" />
              <div className="absolute left-[18%] top-[34%] h-5 w-28 -rotate-12 border-2 border-foreground bg-secondary" />
              <div className="absolute right-[16%] top-[46%] h-5 w-20 rotate-6 border-2 border-foreground bg-accent" />
              <div className="relative rounded-[28px] border-2 border-foreground bg-card px-5 py-4 shadow-[6px_6px_0_0_var(--foreground)]">
                <p className="text-sm font-semibold leading-6 text-foreground">
                  {siteContent.hero.figure.note.zh}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground" lang="en">
                  {siteContent.hero.figure.note.en}
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {siteContent.hero.figure.tags.map((tag, index) => (
              <div
                key={tag.en}
                className={cn(
                  "rounded-[18px] border-2 border-foreground px-4 py-3 shadow-[4px_4px_0_0_var(--foreground)]",
                  index === 0 && "bg-accent text-white",
                  index === 1 && "bg-card text-foreground",
                  index === 2 && "bg-secondary text-foreground",
                )}
              >
                <p className="text-sm font-bold leading-5">{tag.zh}</p>
                <p className={cn("mt-1 text-xs uppercase tracking-[0.18em]", index === 0 ? "text-white/85" : "text-foreground/70")}>
                  {tag.en}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionHeading({
  icon,
  tone,
  heading,
}: {
  icon: IconKey;
  tone: AccentTone;
  heading: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    description: LocalizedText;
  };
}) {
  const Icon = iconMap[icon];
  const toneStyle = toneStyles[tone];

  return (
    <div className="max-w-3xl">
      <div className="mb-5 flex items-center gap-4">
        <div className={cn("icon-medallion", toneStyle.icon)}>
          <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={2.5} />
        </div>
        <BilingualBlock
          as="p"
          copy={heading.eyebrow}
          zhClassName="text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground"
          enClassName="text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground"
        />
      </div>
      <BilingualBlock
        as="h2"
        copy={heading.title}
        zhClassName="font-heading text-[clamp(2rem,4vw,3.3rem)] font-extrabold tracking-[-0.05em] [text-wrap:balance]"
        enClassName="mt-3 font-heading text-xl font-bold tracking-[-0.03em] text-accent"
      />
      <BilingualBlock
        as="p"
        copy={heading.description}
        className="mt-4 max-w-2xl"
        zhClassName="text-base font-medium leading-7 text-foreground"
        enClassName="mt-3 text-sm leading-6 text-muted-foreground"
      />
    </div>
  );
}

function StickerCard({
  tone,
  icon,
  title,
  body,
  eyebrow,
  meta,
  action,
  href,
  ariaLabel,
}: {
  tone: AccentTone;
  icon: IconKey;
  title: LocalizedText;
  body: LocalizedText;
  eyebrow: LocalizedText;
  meta: LocalizedText;
  action: LocalizedText;
  href: string;
  ariaLabel: LocalizedText;
}) {
  const Icon = iconMap[icon];
  const toneStyle = toneStyles[tone];

  return (
    <article
      className={cn("sticker-card", toneStyle.ring)}
      style={
        {
          "--card-shadow": toneStyle.shadow,
        } as CSSProperties
      }
    >
      <div className={cn("floating-icon", toneStyle.icon)}>
        <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={2.5} />
      </div>
      <div className="flex h-full flex-col gap-5 pt-6">
        <div className={cn("inline-flex w-fit rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.18em]", toneStyle.chip)}>
          <span>{eyebrow.zh}</span>
          <span className="mx-2 text-foreground/30">/</span>
          <span>{eyebrow.en}</span>
        </div>
        <BilingualBlock
          as="h3"
          copy={title}
          zhClassName="font-heading text-2xl font-extrabold tracking-[-0.04em]"
          enClassName="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground"
        />
        <BilingualBlock
          as="p"
          copy={body}
          zhClassName="text-base leading-7 text-foreground"
          enClassName="mt-3 text-sm leading-6 text-muted-foreground"
        />
        <div className="mt-auto rounded-[18px] border-2 border-dashed border-foreground/25 bg-muted/60 px-4 py-3">
          <p className="text-sm font-semibold text-foreground">{meta.zh}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground" lang="en">
            {meta.en}
          </p>
        </div>
        <ActionLink
          href={href}
          label={action}
          ariaLabel={ariaLabel}
          variant="secondary"
          external
          fullWidth
        />
      </div>
    </article>
  );
}

function ExperimentCard({
  item,
  mirrored,
}: {
  item: (typeof siteContent.experiments.items)[number];
  mirrored?: boolean;
}) {
  const Icon = iconMap[item.icon];
  const toneStyle = toneStyles[item.tone];

  return (
    <article
      className={cn("sticker-card grid gap-6 overflow-hidden lg:grid-cols-[0.88fr_1.12fr]", mirrored && "lg:grid-cols-[1.12fr_0.88fr]")}
      style={
        {
          "--card-shadow": toneStyle.shadow,
        } as CSSProperties
      }
    >
      <div
        className={cn(
          "relative min-h-[16rem] overflow-hidden rounded-[24px] border-2 border-foreground p-5",
          item.tone === "secondary" && "bg-secondary/70",
          item.tone === "accent" && "bg-accent/12",
        )}
      >
        <div aria-hidden="true" className="stripe-fill absolute inset-0 opacity-40" />
        <div className="relative flex h-full flex-col justify-between">
          <div className={cn("icon-medallion", toneStyle.icon)}>
            <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={2.5} />
          </div>
          <div className="space-y-3">
            {item.highlights.map((highlight, index) => (
              <div
                key={highlight.en}
                className={cn(
                  "max-w-[14rem] rounded-full border-2 border-foreground px-4 py-2 text-sm font-semibold shadow-[4px_4px_0_0_var(--foreground)]",
                  index === 0 && "bg-card",
                  index === 1 && "bg-tertiary",
                  index === 2 && "bg-quaternary",
                )}
              >
                <span>{highlight.zh}</span>
                <span className="ml-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {highlight.en}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={cn("flex flex-col justify-between gap-5", mirrored && "lg:order-first")}>
        <div className={cn("inline-flex w-fit rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.18em]", toneStyle.chip)}>
          <span>{item.label.zh}</span>
          <span className="mx-2 text-foreground/30">/</span>
          <span>{item.label.en}</span>
        </div>
        <BilingualBlock
          as="h3"
          copy={item.title}
          zhClassName="font-heading text-3xl font-extrabold tracking-[-0.05em]"
          enClassName="mt-3 font-heading text-lg font-bold tracking-[-0.03em] text-accent"
        />
        <BilingualBlock
          as="p"
          copy={item.summary}
          zhClassName="text-base leading-7 text-foreground"
          enClassName="mt-3 text-sm leading-6 text-muted-foreground"
        />
        <div className="grid gap-3 sm:grid-cols-2">
          {item.details.map((detail) => (
            <div
              key={detail.title.en}
              className="rounded-[18px] border-2 border-foreground bg-card px-4 py-4 shadow-[4px_4px_0_0_var(--muted)]"
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                {detail.title.zh}
              </p>
              <p className="mt-2 text-sm font-semibold leading-6 text-foreground" lang="en">
                {detail.title.en}
              </p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{detail.body.zh}</p>
            </div>
          ))}
        </div>
        <ActionLink
          href={item.href}
          label={siteContent.ui.visitExperiment}
          ariaLabel={item.ariaLabel}
          variant="primary"
          external
        />
      </div>
    </article>
  );
}

function WritingCard({ item }: { item: (typeof siteContent.writing.items)[number] }) {
  const toneStyle = toneStyles[item.tone];
  const Icon = iconMap[item.icon];

  return (
    <article
      className="sticker-card flex h-full flex-col"
      style={
        {
          "--card-shadow": toneStyle.shadow,
        } as CSSProperties
      }
    >
      <div className={cn("mb-6 inline-flex w-fit rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.18em]", toneStyle.chip)}>
        {item.category.zh}
        <span className="mx-2 text-foreground/30">/</span>
        {item.category.en}
      </div>
      <div className="flex items-start gap-4">
        <div className={cn("icon-medallion shrink-0", toneStyle.icon)}>
          <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={2.5} />
        </div>
        <BilingualBlock
          as="h3"
          copy={item.title}
          zhClassName="font-heading text-2xl font-extrabold tracking-[-0.04em]"
          enClassName="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground"
        />
      </div>
      <BilingualBlock
        as="p"
        copy={item.summary}
        className="mt-5"
        zhClassName="text-base leading-7 text-foreground"
        enClassName="mt-3 text-sm leading-6 text-muted-foreground"
      />
      <div className="mt-6 flex items-center justify-between gap-3 rounded-[18px] border-2 border-dashed border-foreground/25 bg-muted/60 px-4 py-3">
        <div>
          <p className="text-sm font-semibold text-foreground">{item.meta.zh}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground" lang="en">
            {item.meta.en}
          </p>
        </div>
        {item.href ? (
          <ActionLink
            href={item.href}
            label={siteContent.ui.readArticle}
            ariaLabel={item.ariaLabel}
            variant="secondary"
            external
          />
        ) : (
          <span className="inline-flex rounded-full border-2 border-foreground bg-card px-4 py-2 text-sm font-semibold text-muted-foreground">
            {siteContent.ui.comingSoon.zh}
            <span className="mx-2 text-foreground/25">/</span>
            <span>{siteContent.ui.comingSoon.en}</span>
          </span>
        )}
      </div>
    </article>
  );
}

function SocialCard({ item }: { item: (typeof siteContent.socialLinks.items)[number] }) {
  const toneStyle = toneStyles[item.tone];
  const Icon = iconMap[item.icon];

  return (
    <article
      className="sticker-card flex h-full flex-col justify-between gap-5"
      style={
        {
          "--card-shadow": toneStyle.shadow,
        } as CSSProperties
      }
    >
      <div className="flex items-center justify-between gap-4">
        <div className={cn("icon-medallion", toneStyle.icon)}>
          <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={2.5} />
        </div>
        <span className={cn("inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.18em]", toneStyle.chip)}>
          {item.kind.zh}
          <span className="mx-2 text-foreground/30">/</span>
          {item.kind.en}
        </span>
      </div>
      <div>
        <BilingualBlock
          as="h3"
          copy={item.title}
          zhClassName="font-heading text-2xl font-extrabold tracking-[-0.04em]"
          enClassName="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground"
        />
        <BilingualBlock
          as="p"
          copy={item.description}
          className="mt-4"
          zhClassName="text-base leading-7 text-foreground"
          enClassName="mt-3 text-sm leading-6 text-muted-foreground"
        />
      </div>
      <ActionLink
        href={item.href}
        label={item.cta}
        ariaLabel={item.ariaLabel}
        variant="primary"
        external
        fullWidth
      />
    </article>
  );
}

function FooterNote() {
  return (
    <footer className="section-shell pb-12 pt-4">
      <div className="rounded-[32px] border-2 border-foreground bg-card px-6 py-8 shadow-[8px_8px_0_0_var(--muted)] sm:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <BilingualBlock
              as="h2"
              copy={siteContent.footerNote.heading}
              zhClassName="font-heading text-3xl font-extrabold tracking-[-0.04em]"
              enClassName="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground"
            />
            <BilingualBlock
              as="p"
              copy={siteContent.footerNote.body}
              className="mt-4"
              zhClassName="text-base leading-7 text-foreground"
              enClassName="mt-3 text-sm leading-6 text-muted-foreground"
            />
          </div>
          <ActionLink
            href="#top"
            label={siteContent.footerNote.backToTop}
            ariaLabel={siteContent.footerNote.backToTop}
            variant="secondary"
          />
        </div>
      </div>
    </footer>
  );
}

function ProjectConnector() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute left-[8%] top-10 hidden h-32 w-[84%] lg:block"
      fill="none"
      viewBox="0 0 1000 180"
    >
      <path
        d="M20 88C120 25 250 24 342 88C448 160 560 152 662 88C770 20 878 22 980 88"
        stroke="var(--foreground)"
        strokeDasharray="12 14"
        strokeLinecap="round"
        strokeWidth="4"
      />
    </svg>
  );
}

function ActionLink({
  href,
  label,
  ariaLabel,
  variant,
  external,
  fullWidth,
}: {
  href: string;
  label: LocalizedText;
  ariaLabel: LocalizedText;
  variant: "primary" | "secondary";
  external?: boolean;
  fullWidth?: boolean;
}) {
  return (
    <a
      href={href}
      className={cn(
        variant === "primary" ? "candy-button" : "outline-button",
        fullWidth && "w-full justify-center",
      )}
      aria-label={`${ariaLabel.zh} / ${ariaLabel.en}`}
      rel={external ? "noreferrer" : undefined}
      target={external ? "_blank" : undefined}
    >
      <span className="text-left">
        <span className="block text-sm font-bold">{label.zh}</span>
        <span className="block text-[0.68rem] uppercase tracking-[0.18em] opacity-80" lang="en">
          {label.en}
        </span>
      </span>
      <span className="button-arrow">
        {external ? (
          <ArrowUpRight aria-hidden="true" className="h-4 w-4" strokeWidth={2.5} />
        ) : (
          <ArrowRight aria-hidden="true" className="h-4 w-4" strokeWidth={2.5} />
        )}
      </span>
    </a>
  );
}

function BilingualBlock({
  as,
  copy,
  className,
  zhClassName,
  enClassName,
}: {
  as?: ElementType;
  copy: LocalizedText;
  className?: string;
  zhClassName?: string;
  enClassName?: string;
}) {
  const Tag = as ?? "div";

  return (
    <Tag className={className}>
      <span className={cn("block", zhClassName)}>{copy.zh}</span>
      <span className={cn("block", enClassName)} lang="en">
        {copy.en}
      </span>
    </Tag>
  );
}

function cn(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}
