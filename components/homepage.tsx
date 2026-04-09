"use client";

import {
  type CSSProperties,
  type ElementType,
  startTransition,
  useEffect,
  useSyncExternalStore,
} from "react";
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
  type Locale,
  type LocalizedText,
} from "@/lib/site-content";

const STORAGE_KEY = "personal-web-locale";
const DEFAULT_LOCALE: Locale = "zh";

const localeListeners = new Set<() => void>();

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
    icon: string;
    ring: string;
    shadow: string;
  }
> = {
  accent: {
    chip: "bg-accent/12 text-accent",
    icon: "bg-accent text-white",
    ring: "outline-accent/40",
    shadow: "var(--accent)",
  },
  secondary: {
    chip: "bg-secondary/12 text-foreground",
    icon: "bg-secondary text-foreground",
    ring: "outline-secondary/50",
    shadow: "var(--secondary)",
  },
  tertiary: {
    chip: "bg-tertiary/18 text-foreground",
    icon: "bg-tertiary text-foreground",
    ring: "outline-tertiary/50",
    shadow: "var(--tertiary)",
  },
  quaternary: {
    chip: "bg-quaternary/16 text-foreground",
    icon: "bg-quaternary text-foreground",
    ring: "outline-quaternary/50",
    shadow: "var(--quaternary)",
  },
};

export function Homepage() {
  const locale = useSyncExternalStore(
    subscribeToLocale,
    getLocaleSnapshot,
    getServerLocaleSnapshot,
  );

  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
  }, [locale]);

  const marqueeItems = [...siteContent.keywords.items, ...siteContent.keywords.items];

  return (
    <div className="overflow-x-clip bg-background text-foreground">
      <a className="sr-only focus:not-sr-only" href="#main-content">
        {localized(siteContent.ui.skipToContent, locale)}
      </a>
      <SiteNav locale={locale} onLocaleChange={setStoredLocale} />
      <main id="main-content" className="pb-10">
        <HeroSection locale={locale} />
        <section aria-labelledby="keywords-heading" className="section-shell py-8 sm:py-10">
          <h2 id="keywords-heading" className="sr-only">
            {localized(siteContent.keywords.heading, locale)}
          </h2>
          <div className="marquee-shell">
            <div className="marquee-track">
              {marqueeItems.map((item, index) => (
                <span
                  key={`${item.en}-${index}`}
                  className="inline-flex items-center gap-3 whitespace-nowrap rounded-full border-2 border-foreground bg-card px-4 py-2 text-sm font-semibold text-foreground"
                  lang={localeLang(locale)}
                >
                  <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-secondary" />
                  <span>{localized(item, locale)}</span>
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
            locale={locale}
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
                  locale={locale}
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
            locale={locale}
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            {siteContent.experiments.items.map((item, index) => (
              <ExperimentCard
                key={item.title.en}
                item={item}
                locale={locale}
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
            locale={locale}
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {siteContent.writing.items.map((item) => (
              <WritingCard key={item.title.en} item={item} locale={locale} />
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
                locale={locale}
              />
              <span
                aria-hidden="true"
                className="absolute -left-3 top-10 hidden h-28 w-28 rounded-full border-2 border-foreground bg-tertiary/50 lg:block"
              />
            </div>
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {siteContent.socialLinks.items.map((item) => (
                <SocialCard key={item.title.en} item={item} locale={locale} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <FooterNote locale={locale} />
    </div>
  );
}

function subscribeToLocale(listener: () => void) {
  localeListeners.add(listener);

  const handleStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) {
      listener();
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("storage", handleStorage);
  }

  return () => {
    localeListeners.delete(listener);

    if (typeof window !== "undefined") {
      window.removeEventListener("storage", handleStorage);
    }
  };
}

function getLocaleSnapshot(): Locale {
  if (typeof window === "undefined") {
    return DEFAULT_LOCALE;
  }

  const storedLocale = window.localStorage.getItem(STORAGE_KEY);

  return storedLocale === "zh" || storedLocale === "en" ? storedLocale : DEFAULT_LOCALE;
}

function getServerLocaleSnapshot(): Locale {
  return DEFAULT_LOCALE;
}

function setStoredLocale(nextLocale: Locale) {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, nextLocale);
  }

  localeListeners.forEach((listener) => listener());
}

function SiteNav({
  locale,
  onLocaleChange,
}: {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
}) {
  return (
    <header className="section-shell sticky top-0 z-50 pt-4">
      <div className="nav-sticker flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="icon-medallion bg-accent text-white">
            <Sparkles aria-hidden="true" className="h-4 w-4" strokeWidth={2.5} />
          </div>
          <div>
            <p
              className="font-heading text-base font-extrabold tracking-tight"
              lang={localeLang(locale)}
            >
              {localized(siteContent.brand.name, locale)}
            </p>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
              sixsevenlabs.xyz
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <nav
            aria-label={localized(siteContent.navigationAriaLabel, locale)}
            className="overflow-x-auto"
          >
            <ul className="flex min-w-max items-center gap-2">
              {siteContent.navigation.map((item) => (
                <li key={item.href}>
                  <a className="nav-pill" href={item.href} lang={localeLang(locale)}>
                    {localized(item.label, locale)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div
            aria-label={localized(siteContent.ui.languageToggleLabel, locale)}
            className="lang-switcher"
            role="group"
          >
            <button
              type="button"
              className="lang-button"
              data-active={locale === "zh"}
              aria-label={localized(siteContent.ui.switchToChinese, locale)}
              aria-pressed={locale === "zh"}
              onClick={() => startTransition(() => onLocaleChange("zh"))}
            >
              中
            </button>
            <button
              type="button"
              className="lang-button"
              data-active={locale === "en"}
              aria-label={localized(siteContent.ui.switchToEnglish, locale)}
              aria-pressed={locale === "en"}
              onClick={() => startTransition(() => onLocaleChange("en"))}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

function HeroSection({ locale }: { locale: Locale }) {
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
            <span className="eyebrow-pill mb-6 inline-flex" lang={localeLang(locale)}>
              {localized(siteContent.hero.badge, locale)}
            </span>
            <LocalizedTextBlock
              as="h1"
              copy={siteContent.hero.title}
              locale={locale}
              className={cn(
                "max-w-3xl font-heading font-extrabold tracking-[-0.05em] [text-wrap:balance]",
                locale === "zh"
                  ? "text-[clamp(2.9rem,6vw,5.8rem)] leading-[0.9]"
                  : "max-w-2xl text-[clamp(2.3rem,4.8vw,4.8rem)] leading-[0.95]",
              )}
            />
            <LocalizedTextBlock
              as="p"
              copy={siteContent.hero.description}
              locale={locale}
              className={cn(
                "mt-6 max-w-2xl text-foreground",
                locale === "zh"
                  ? "text-lg font-medium leading-8"
                  : "text-base leading-7 text-muted-foreground",
              )}
            />
            <div className="mt-8 flex flex-wrap gap-4">
              <ActionLink
                href={siteContent.hero.primaryCta.href}
                label={siteContent.hero.primaryCta.label}
                ariaLabel={siteContent.hero.primaryCta.ariaLabel}
                locale={locale}
                variant="primary"
              />
              <ActionLink
                href={siteContent.hero.secondaryCta.href}
                label={siteContent.hero.secondaryCta.label}
                ariaLabel={siteContent.hero.secondaryCta.ariaLabel}
                locale={locale}
                variant="secondary"
              />
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {siteContent.hero.highlights.map((item) => (
                <div
                  key={item.label.en}
                  className="rounded-[20px] border-2 border-foreground bg-card px-4 py-4 shadow-[4px_4px_0_0_var(--muted)]"
                >
                  <p
                    className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground"
                    lang={localeLang(locale)}
                  >
                    {localized(item.label, locale)}
                  </p>
                  <p className="mt-2 font-heading text-3xl font-extrabold tracking-tight">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <HeroFigure locale={locale} />
      </div>
    </section>
  );
}

function HeroFigure({ locale }: { locale: Locale }) {
  return (
    <div className="relative mx-auto w-full max-w-[32rem] lg:max-w-none">
      <div
        aria-hidden="true"
        className="absolute -right-4 top-6 h-24 w-24 rotate-6 rounded-full border-2 border-foreground bg-secondary/80"
      />
      <div
        aria-hidden="true"
        className="absolute -left-4 bottom-20 h-20 w-20 rounded-[12px_36px_36px_36px] border-2 border-foreground bg-quaternary/90"
      />
      <div className="hero-figure">
        <div className="dot-grid absolute inset-0 opacity-70" aria-hidden="true" />
        <div className="relative z-10 flex h-full flex-col justify-between gap-6">
          <div className="flex items-start justify-between gap-4">
            <div className="rounded-full border-2 border-foreground bg-card px-4 py-2 shadow-[4px_4px_0_0_var(--tertiary)]">
              <p
                className="text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground"
                lang={localeLang(locale)}
              >
                {localized(siteContent.hero.figure.label, locale)}
              </p>
            </div>
            <div className="rounded-[20px] border-2 border-foreground bg-tertiary px-4 py-3 shadow-[4px_4px_0_0_var(--foreground)]">
              <p
                className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/70"
                lang={localeLang(locale)}
              >
                {localized(siteContent.hero.figure.status, locale)}
              </p>
            </div>
          </div>
          <div className="hero-blob relative overflow-hidden border-2 border-foreground bg-card">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(251,191,36,0.9),transparent_23%),radial-gradient(circle_at_80%_18%,rgba(244,114,182,0.9),transparent_20%),radial-gradient(circle_at_55%_72%,rgba(139,92,246,0.9),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.98),rgba(241,245,249,0.95))]"
            />
            <div className="relative flex h-full min-h-[18rem] flex-col justify-end px-6 py-7 sm:px-8">
              <div className="absolute left-6 top-6 h-16 w-16 rounded-full border-2 border-foreground bg-background shadow-[4px_4px_0_0_var(--foreground)]" />
              <div className="absolute right-8 top-10 h-12 w-24 rotate-6 rounded-full border-2 border-foreground bg-quaternary/90 shadow-[4px_4px_0_0_var(--foreground)]" />
              <div className="absolute left-[18%] top-[34%] h-5 w-28 -rotate-12 border-2 border-foreground bg-secondary" />
              <div className="absolute right-[16%] top-[46%] h-5 w-20 rotate-6 border-2 border-foreground bg-accent" />
              <div className="relative rounded-[28px] border-2 border-foreground bg-card px-5 py-4 shadow-[6px_6px_0_0_var(--foreground)]">
                <LocalizedTextBlock
                  as="p"
                  copy={siteContent.hero.figure.note}
                  locale={locale}
                  className={cn(
                    "text-foreground",
                    locale === "zh"
                      ? "text-sm font-semibold leading-6"
                      : "text-sm leading-6 text-muted-foreground",
                  )}
                />
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
                <p className="text-sm font-bold leading-5" lang={localeLang(locale)}>
                  {localized(tag, locale)}
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
  locale,
}: {
  icon: IconKey;
  tone: AccentTone;
  heading: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    description: LocalizedText;
  };
  locale: Locale;
}) {
  const Icon = iconMap[icon];
  const toneStyle = toneStyles[tone];

  return (
    <div className="max-w-3xl">
      <div className="mb-5 flex items-center gap-4">
        <div className={cn("icon-medallion", toneStyle.icon)}>
          <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={2.5} />
        </div>
        <LocalizedTextBlock
          as="p"
          copy={heading.eyebrow}
          locale={locale}
          className="text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground"
        />
      </div>
      <LocalizedTextBlock
        as="h2"
        copy={heading.title}
        locale={locale}
        className={cn(
          "font-heading font-extrabold tracking-[-0.05em] [text-wrap:balance]",
          locale === "zh"
            ? "text-[clamp(2rem,4vw,3.3rem)]"
            : "text-[clamp(1.8rem,3.6vw,3rem)] leading-tight",
        )}
      />
      <LocalizedTextBlock
        as="p"
        copy={heading.description}
        locale={locale}
        className={cn(
          "mt-4 max-w-2xl",
          locale === "zh"
            ? "text-base font-medium leading-7 text-foreground"
            : "text-sm leading-6 text-muted-foreground",
        )}
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
  locale,
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
  locale: Locale;
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
        <div
          className={cn(
            "inline-flex w-fit rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.18em]",
            toneStyle.chip,
          )}
          lang={localeLang(locale)}
        >
          {localized(eyebrow, locale)}
        </div>
        <LocalizedTextBlock
          as="h3"
          copy={title}
          locale={locale}
          className={cn(
            "font-heading font-extrabold tracking-[-0.04em]",
            locale === "zh" ? "text-2xl" : "text-[1.65rem] leading-tight",
          )}
        />
        <LocalizedTextBlock
          as="p"
          copy={body}
          locale={locale}
          className={cn(
            locale === "zh"
              ? "text-base leading-7 text-foreground"
              : "text-sm leading-6 text-muted-foreground",
          )}
        />
        <div className="mt-auto rounded-[18px] border-2 border-dashed border-foreground/25 bg-muted/60 px-4 py-3">
          <p className="text-sm font-semibold text-foreground" lang={localeLang(locale)}>
            {localized(meta, locale)}
          </p>
        </div>
        <ActionLink
          href={href}
          label={action}
          ariaLabel={ariaLabel}
          locale={locale}
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
  locale,
  mirrored,
}: {
  item: (typeof siteContent.experiments.items)[number];
  locale: Locale;
  mirrored?: boolean;
}) {
  const Icon = iconMap[item.icon];
  const toneStyle = toneStyles[item.tone];

  return (
    <article
      className={cn(
        "sticker-card grid gap-6 overflow-hidden lg:grid-cols-[0.88fr_1.12fr]",
        mirrored && "lg:grid-cols-[1.12fr_0.88fr]",
      )}
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
                lang={localeLang(locale)}
              >
                {localized(highlight, locale)}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={cn("flex flex-col justify-between gap-5", mirrored && "lg:order-first")}>
        <div
          className={cn(
            "inline-flex w-fit rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.18em]",
            toneStyle.chip,
          )}
          lang={localeLang(locale)}
        >
          {localized(item.label, locale)}
        </div>
        <LocalizedTextBlock
          as="h3"
          copy={item.title}
          locale={locale}
          className={cn(
            "font-heading font-extrabold tracking-[-0.05em]",
            locale === "zh" ? "text-3xl" : "text-[2rem] leading-tight",
          )}
        />
        <LocalizedTextBlock
          as="p"
          copy={item.summary}
          locale={locale}
          className={cn(
            locale === "zh"
              ? "text-base leading-7 text-foreground"
              : "text-sm leading-6 text-muted-foreground",
          )}
        />
        <div className="grid gap-3 sm:grid-cols-2">
          {item.details.map((detail) => (
            <div
              key={detail.title.en}
              className="rounded-[18px] border-2 border-foreground bg-card px-4 py-4 shadow-[4px_4px_0_0_var(--muted)]"
            >
              <p
                className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground"
                lang={localeLang(locale)}
              >
                {localized(detail.title, locale)}
              </p>
              <p
                className="mt-3 text-sm leading-6 text-muted-foreground"
                lang={localeLang(locale)}
              >
                {localized(detail.body, locale)}
              </p>
            </div>
          ))}
        </div>
        <ActionLink
          href={item.href}
          label={siteContent.ui.visitExperiment}
          ariaLabel={item.ariaLabel}
          locale={locale}
          variant="primary"
          external
        />
      </div>
    </article>
  );
}

function WritingCard({
  item,
  locale,
}: {
  item: (typeof siteContent.writing.items)[number];
  locale: Locale;
}) {
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
      <div
        className={cn(
          "mb-6 inline-flex w-fit rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.18em]",
          toneStyle.chip,
        )}
        lang={localeLang(locale)}
      >
        {localized(item.category, locale)}
      </div>
      <div className="flex items-start gap-4">
        <div className={cn("icon-medallion shrink-0", toneStyle.icon)}>
          <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={2.5} />
        </div>
        <LocalizedTextBlock
          as="h3"
          copy={item.title}
          locale={locale}
          className={cn(
            "font-heading font-extrabold tracking-[-0.04em]",
            locale === "zh" ? "text-2xl" : "text-[1.6rem] leading-tight",
          )}
        />
      </div>
      <LocalizedTextBlock
        as="p"
        copy={item.summary}
        locale={locale}
        className={cn(
          "mt-5",
          locale === "zh"
            ? "text-base leading-7 text-foreground"
            : "text-sm leading-6 text-muted-foreground",
        )}
      />
      <div className="mt-6 flex items-center justify-between gap-3 rounded-[18px] border-2 border-dashed border-foreground/25 bg-muted/60 px-4 py-3">
        <div>
          <p className="text-sm font-semibold text-foreground" lang={localeLang(locale)}>
            {localized(item.meta, locale)}
          </p>
        </div>
        {item.href ? (
          <ActionLink
            href={item.href}
            label={siteContent.ui.readArticle}
            ariaLabel={item.ariaLabel}
            locale={locale}
            variant="secondary"
            external
          />
        ) : (
          <span
            className="inline-flex rounded-full border-2 border-foreground bg-card px-4 py-2 text-sm font-semibold text-muted-foreground"
            lang={localeLang(locale)}
          >
            {localized(siteContent.ui.comingSoon, locale)}
          </span>
        )}
      </div>
    </article>
  );
}

function SocialCard({
  item,
  locale,
}: {
  item: (typeof siteContent.socialLinks.items)[number];
  locale: Locale;
}) {
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
        <span
          className={cn(
            "inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.18em]",
            toneStyle.chip,
          )}
          lang={localeLang(locale)}
        >
          {localized(item.kind, locale)}
        </span>
      </div>
      <div>
        <LocalizedTextBlock
          as="h3"
          copy={item.title}
          locale={locale}
          className={cn(
            "font-heading font-extrabold tracking-[-0.04em]",
            locale === "zh" ? "text-2xl" : "text-[1.6rem] leading-tight",
          )}
        />
        <LocalizedTextBlock
          as="p"
          copy={item.description}
          locale={locale}
          className={cn(
            "mt-4",
            locale === "zh"
              ? "text-base leading-7 text-foreground"
              : "text-sm leading-6 text-muted-foreground",
          )}
        />
      </div>
      <ActionLink
        href={item.href}
        label={item.cta}
        ariaLabel={item.ariaLabel}
        locale={locale}
        variant="primary"
        external
        fullWidth
      />
    </article>
  );
}

function FooterNote({ locale }: { locale: Locale }) {
  return (
    <footer className="section-shell pb-12 pt-4">
      <div className="rounded-[32px] border-2 border-foreground bg-card px-6 py-8 shadow-[8px_8px_0_0_var(--muted)] sm:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <LocalizedTextBlock
              as="h2"
              copy={siteContent.footerNote.heading}
              locale={locale}
              className={cn(
                "font-heading font-extrabold tracking-[-0.04em]",
                locale === "zh" ? "text-3xl" : "text-[2rem] leading-tight",
              )}
            />
            <LocalizedTextBlock
              as="p"
              copy={siteContent.footerNote.body}
              locale={locale}
              className={cn(
                "mt-4",
                locale === "zh"
                  ? "text-base leading-7 text-foreground"
                  : "text-sm leading-6 text-muted-foreground",
              )}
            />
          </div>
          <ActionLink
            href="#top"
            label={siteContent.footerNote.backToTop}
            ariaLabel={siteContent.footerNote.backToTop}
            locale={locale}
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
  locale,
  variant,
  external,
  fullWidth,
}: {
  href: string;
  label: LocalizedText;
  ariaLabel: LocalizedText;
  locale: Locale;
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
      aria-label={localized(ariaLabel, locale)}
      lang={localeLang(locale)}
      rel={external ? "noreferrer" : undefined}
      target={external ? "_blank" : undefined}
    >
      <span className="text-sm font-bold">{localized(label, locale)}</span>
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

function LocalizedTextBlock({
  as,
  copy,
  locale,
  className,
}: {
  as?: ElementType;
  copy: LocalizedText;
  locale: Locale;
  className?: string;
}) {
  const Tag = as ?? "div";

  return (
    <Tag className={className} lang={localeLang(locale)}>
      {localized(copy, locale)}
    </Tag>
  );
}

function localized(copy: LocalizedText, locale: Locale) {
  return copy[locale];
}

function localeLang(locale: Locale) {
  return locale === "zh" ? "zh-CN" : "en";
}

function cn(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}
