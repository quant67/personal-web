"use client";

import Image from "next/image";
import {
  type CSSProperties,
  type ElementType,
  type SVGProps,
  startTransition,
  useEffect,
  useState,
  useSyncExternalStore,
} from "react";
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
import { HomepageIntroOverlay } from "@/components/homepage-intro";

const STORAGE_KEY = "personal-web-locale";
const DEFAULT_LOCALE: Locale = "zh";

const localeListeners = new Set<() => void>();

function GitHubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .297C5.373.297 0 5.67 0 12.297c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.547-1.385-1.334-1.754-1.334-1.754-1.09-.744.083-.729.083-.729 1.206.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.42-1.305.763-1.605-2.665-.3-5.467-1.334-5.467-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.523.118-3.176 0 0 1.008-.323 3.3 1.23a11.49 11.49 0 0 1 3.006-.404c1.02.005 2.047.137 3.006.404 2.29-1.553 3.297-1.23 3.297-1.23.655 1.653.244 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.608-2.807 5.628-5.48 5.922.43.372.814 1.102.814 2.222 0 1.606-.014 2.902-.014 3.297 0 .322.216.696.825.578C20.565 22.092 24 17.594 24 12.297 24 5.67 18.627.297 12 .297Z" />
    </svg>
  );
}

function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25H21.55l-7.227 8.26L22.827 21.75H16.17l-5.214-6.817-5.963 6.817H1.68l7.73-8.836L1.255 2.25H7.91l4.713 6.231zm-1.162 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const iconMap: Record<IconKey, ElementType<SVGProps<SVGSVGElement>>> = {
  sparkles: Sparkles,
  rocket: Rocket,
  code: Code2,
  book: BookOpen,
  github: GitHubIcon,
  x: XIcon,
  mail: Mail,
  globe: Globe2,
};

const iconTextStyles: Record<AccentTone, string> = {
  accent: "text-accent",
  secondary: "text-[color:var(--secondary-ink)]",
  tertiary: "text-[color:var(--tertiary-ink)]",
  quaternary: "text-[color:var(--quaternary-ink)]",
};

const toneStyles: Record<
  AccentTone,
  {
    chip: string;
    icon: string;
    panel: string;
    sectionLabel: string;
    shadow: string;
  }
> = {
  accent: {
    chip: "bg-[color:var(--accent-soft)] text-accent",
    icon: "bg-accent text-white",
    panel: "bg-[color:var(--accent-soft)]",
    sectionLabel: "text-accent",
    shadow: "var(--accent)",
  },
  secondary: {
    chip: "bg-[color:var(--secondary-soft)] text-[color:var(--secondary-ink)]",
    icon: "bg-secondary text-foreground",
    panel: "bg-[color:var(--secondary-soft)]",
    sectionLabel: "text-[color:var(--secondary-ink)]",
    shadow: "var(--secondary)",
  },
  tertiary: {
    chip: "bg-[color:var(--tertiary-soft)] text-[color:var(--tertiary-ink)]",
    icon: "bg-tertiary text-foreground",
    panel: "bg-[color:var(--tertiary-soft)]",
    sectionLabel: "text-[color:var(--tertiary-ink)]",
    shadow: "var(--tertiary)",
  },
  quaternary: {
    chip: "bg-[color:var(--quaternary-soft)] text-[color:var(--quaternary-ink)]",
    icon: "bg-quaternary text-white",
    panel: "bg-[color:var(--quaternary-soft)]",
    sectionLabel: "text-[color:var(--quaternary-ink)]",
    shadow: "var(--quaternary)",
  },
};

export function Homepage() {
  const locale = useSyncExternalStore(
    subscribeToLocale,
    getLocaleSnapshot,
    getServerLocaleSnapshot,
  );
  const [isIntroActive, setIsIntroActive] = useState(true);
  const writingTone: AccentTone = "tertiary";
  const connectTone: AccentTone = "quaternary";

  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
  }, [locale]);

  const marqueeItems = [...siteContent.keywords.items, ...siteContent.keywords.items];

  return (
    <div className="homepage-stage">
      <div
        className="homepage-scene overflow-x-clip bg-background text-foreground"
        data-intro-active={isIntroActive}
      >
        <a className="sr-only focus:not-sr-only" href="#main-content">
          {localized(siteContent.ui.skipToContent, locale)}
        </a>
        <SiteNav locale={locale} onLocaleChange={setStoredLocale} />
        <main id="main-content" className="section-anchor pb-12 sm:pb-14">
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
                    className="marquee-chip"
                    lang={localeLang(locale)}
                  >
                    <span aria-hidden="true" className="marquee-dot" />
                    <span>{localized(item, locale)}</span>
                  </span>
                ))}
              </div>
            </div>
          </section>
          <HeroProof locale={locale} />

          <ExperienceTimeline locale={locale} />

          <section id="projects" className="section-anchor section-shell py-16 sm:py-20">
            <SectionHeading
              icon="code"
              tone="accent"
              heading={siteContent.openSourceProjects.heading}
              locale={locale}
            />
            <BuildLedger locale={locale} />
          </section>

          <section id="experiments" className="section-anchor section-shell py-16 sm:py-20">
            <SectionHeading
              icon="sparkles"
              tone="secondary"
              heading={siteContent.experiments.heading}
              locale={locale}
            />
            <FieldNotes locale={locale} />
          </section>

          <section id="writing" className="section-anchor section-shell py-16 sm:py-20">
            <SectionHeading
              icon="book"
              tone={writingTone}
              heading={siteContent.writing.heading}
              locale={locale}
            />
            <div className="editorial-list mt-8 md:mt-10">
              {siteContent.writing.items.map((item) => (
                <WritingCard
                  key={item.title.en}
                  item={item}
                  locale={locale}
                  tone={writingTone}
                />
              ))}
            </div>
          </section>

          <section id="connect" className="section-anchor section-shell py-16 sm:py-20">
            <SectionHeading
              icon="globe"
              tone={connectTone}
              heading={siteContent.socialLinks.heading}
              locale={locale}
            />
            <div className="contact-strip mt-8 md:mt-10">
              {siteContent.socialLinks.items.map((item) => (
                <SocialCard
                  key={item.title.en}
                  item={item}
                  locale={locale}
                  tone={connectTone}
                />
              ))}
            </div>
          </section>
        </main>
        <FooterNote locale={locale} />
      </div>
      <HomepageIntroOverlay locale={locale} onActiveChange={setIsIntroActive} />
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let frameId = 0;

    const syncScrollState = () => {
      frameId = 0;
      setIsScrolled(window.scrollY > 12);
    };

    const handleScroll = () => {
      if (frameId !== 0) {
        return;
      }

      frameId = window.requestAnimationFrame(syncScrollState);
    };

    syncScrollState();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (frameId !== 0) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <header className="section-shell sticky top-0 z-50 pt-3 sm:pt-4">
      <div className="nav-sticker" data-scrolled={isScrolled}>
        <div className="nav-brand">
          <Image
            src="/icon.svg"
            alt=""
            aria-hidden="true"
            width={44}
            height={44}
            className="h-11 w-11 shrink-0"
          />
          <div className="nav-brand-copy">
            <p className="nav-title" lang={localeLang(locale)}>
              {localized(siteContent.brand.name, locale)}
            </p>
            <p className="nav-domain">
              sixsevenlabs.xyz
            </p>
          </div>
        </div>
        <div className="nav-cluster">
          <nav
            aria-label={localized(siteContent.navigationAriaLabel, locale)}
            className="nav-scroll"
          >
            <ul className="nav-list">
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
    <section id="top" className="section-anchor section-shell relative py-10 sm:py-16 lg:py-24">
      <div className="grid gap-10 sm:gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="relative">
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
                  ? "text-[clamp(2.3rem,4.8vw,4.7rem)] leading-[0.94]"
                  : "max-w-2xl text-[clamp(1.95rem,4vw,4rem)] leading-[0.98]",
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
          </div>
        </div>
        <HeroFigure locale={locale} />
      </div>
    </section>
  );
}

function HeroFigure({ locale }: { locale: Locale }) {
  const heroSocialLinks = siteContent.socialLinks.items.slice(0, 3);

  return (
    <div className="mx-auto flex w-full max-w-[32rem] items-center justify-center lg:max-w-none">
      <div className="relative flex flex-col items-center">
        <div className="relative h-[18rem] w-[18rem] overflow-hidden rounded-full border-[3px] border-foreground bg-card sm:h-[24rem] sm:w-[24rem]">
          <Image
            src="/avatar.jpeg"
            alt={locale === "zh" ? "创作者头像" : "Creator portrait"}
            fill
            priority
            sizes="(min-width: 1024px) 24rem, (min-width: 640px) 18rem, 16rem"
            className="object-cover"
          />
        </div>
        <div className="mt-5 flex items-center justify-center gap-4 sm:gap-5">
          {heroSocialLinks.map((item) => {
            const Icon = iconMap[item.icon];

            return (
              <div key={item.title.en}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={localized(item.ariaLabel, locale)}
                  className="hero-social-link text-foreground"
                >
                  <Icon aria-hidden="true" className="h-[22px] w-[22px]" strokeWidth={2} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function HeroProof({ locale }: { locale: Locale }) {
  const figure = siteContent.hero.figure;

  return (
    <section className="section-shell pb-4 pt-2 sm:pb-6 sm:pt-3">
      <div className="proof-shell">
        <div className="proof-stats">
          {siteContent.hero.highlights.map((item) => (
            <div key={item.label.en} className="proof-stat">
              <p
                className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-muted-foreground"
                lang={localeLang(locale)}
              >
                {localized(item.label, locale)}
              </p>
              <p className="mt-2 font-heading text-[1.75rem] font-extrabold tracking-tight text-foreground">
                {item.value}
              </p>
            </div>
          ))}
        </div>
        <div className="proof-note">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p
              className="text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground"
              lang={localeLang(locale)}
            >
              {localized(figure.label, locale)}
            </p>
            <span className="proof-status" lang={localeLang(locale)}>
              {localized(figure.status, locale)}
            </span>
          </div>
          <LocalizedTextBlock
            as="p"
            copy={figure.note}
            locale={locale}
            className={cn(
              "mt-3 max-w-2xl",
              locale === "zh"
                ? "text-sm leading-6 text-foreground"
                : "text-sm leading-6 text-muted-foreground",
            )}
          />
        </div>
      </div>
    </section>
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
    <div className="section-heading">
      <div className="flex items-center gap-4 lg:pt-1">
        <div className={cn("icon-medallion", toneStyle.icon)}>
          <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={2.5} />
        </div>
        <LocalizedTextBlock
          as="p"
          copy={heading.eyebrow}
          locale={locale}
          className={cn(
            "text-xs font-bold uppercase tracking-[0.24em]",
            toneStyle.sectionLabel,
          )}
        />
      </div>
      <div className="section-heading-copy">
        <LocalizedTextBlock
          as="h2"
          copy={heading.title}
          locale={locale}
          className={cn(
            "section-title",
            locale === "zh" ? "text-[2rem] leading-[1.02] sm:text-[2.35rem]" : "text-[1.85rem] leading-tight sm:text-[2.25rem]",
          )}
        />
        <LocalizedTextBlock
          as="p"
          copy={heading.description}
          locale={locale}
          className={cn(
            "section-summary",
            locale === "zh" ? "text-base leading-7" : "text-sm leading-6 sm:text-base sm:leading-7",
          )}
        />
      </div>
    </div>
  );
}

function ExperienceTimeline({ locale }: { locale: Locale }) {
  return (
    <section id="experience" className="section-anchor section-shell py-16 sm:py-20">
      <div className="journey-console">
        <div className="journey-console-aside">
          <SectionHeading
            icon="rocket"
            tone="tertiary"
            heading={siteContent.experience.heading}
            locale={locale}
          />
          <div className="journey-compass" aria-hidden="true">
            <span>life route</span>
            <strong>04</strong>
            <span>chapters</span>
          </div>
        </div>
        <ol className="journey-rail">
          {siteContent.experience.items.map((item, index) => {
            const toneStyle = toneStyles[item.tone];

            return (
              <li
                key={item.title.en}
                className={cn("journey-node", index % 2 === 1 && "journey-node-alt")}
                style={
                  {
                    "--node-tone": toneStyle.shadow,
                  } as CSSProperties
                }
              >
                <div className="journey-node-marker" aria-hidden="true">
                  <span>{item.marker}</span>
                </div>
                <article className="journey-node-body">
                  <div className="journey-node-label" lang={localeLang(locale)}>
                    {localized(item.label, locale)}
                  </div>
                  <LocalizedTextBlock
                    as="h3"
                    copy={item.title}
                    locale={locale}
                    className={cn(
                      "journey-node-title",
                      locale === "zh" ? "text-[1.75rem]" : "text-[1.55rem]",
                    )}
                  />
                  <LocalizedTextBlock
                    as="p"
                    copy={item.summary}
                    locale={locale}
                    className={cn(
                      "journey-node-summary",
                      locale === "zh" ? "text-base leading-7" : "text-sm leading-6",
                    )}
                  />
                  <div className="journey-keywords">
                    {item.keywords.map((keyword) => (
                      <span key={keyword.en} lang={localeLang(locale)}>
                        {localized(keyword, locale)}
                      </span>
                    ))}
                  </div>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

function BuildLedger({ locale }: { locale: Locale }) {
  return (
    <div className="build-ledger mt-8 md:mt-10">
      {siteContent.openSourceProjects.items.map((item, index) => {
        const toneStyle = toneStyles[item.tone];

        return (
          <article
            key={item.title.en}
            className="build-ledger-row"
            style={
              {
                "--ledger-tone": toneStyle.shadow,
              } as CSSProperties
            }
          >
            <div className="build-ledger-index" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </div>
            <div className="build-ledger-main">
              <div
                className={cn(
                  "inline-flex w-fit rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.18em]",
                  toneStyle.chip,
                )}
                lang={localeLang(locale)}
              >
                {localized(item.metric, locale)}
              </div>
              <LocalizedTextBlock
                as="h3"
                copy={item.title}
                locale={locale}
                className={cn(
                  "build-ledger-title",
                  locale === "zh" ? "text-[1.85rem]" : "text-[1.7rem]",
                )}
              />
              <LocalizedTextBlock
                as="p"
                copy={item.summary}
                locale={locale}
                className={cn(
                  "build-ledger-summary",
                  locale === "zh" ? "text-base leading-7" : "text-sm leading-6",
                )}
              />
            </div>
            <div className="build-ledger-side">
              <p
                className="build-ledger-stack"
                lang={localeLang(locale)}
              >
                {localized(item.stack, locale)}
              </p>
              <ActionLink
                href={item.href}
                label={siteContent.ui.visitProject}
                ariaLabel={item.ariaLabel}
                locale={locale}
                variant="secondary"
                external
              />
            </div>
          </article>
        );
      })}
    </div>
  );
}

function FieldNotes({ locale }: { locale: Locale }) {
  return (
    <div className="field-notes mt-8 md:mt-10">
      {siteContent.experiments.items.map((item, index) => {
        const Icon = iconMap[item.icon];
        const toneStyle = toneStyles[item.tone];
        const experimentHref = getSafeContentHref("href" in item ? item.href : undefined);

        return (
          <article
            key={item.title.en}
            className={cn("field-note", index % 2 === 1 && "field-note-alt")}
            style={
              {
                "--note-tone": toneStyle.shadow,
              } as CSSProperties
            }
          >
            <div className="field-note-map">
              <div className={cn("icon-medallion", toneStyle.icon)}>
                <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={2.5} />
              </div>
              <div className="field-note-label" lang={localeLang(locale)}>
                {localized(item.label, locale)}
              </div>
              <div className="field-note-tags">
                {item.highlights.map((highlight) => (
                  <span key={highlight.en} lang={localeLang(locale)}>
                    {localized(highlight, locale)}
                  </span>
                ))}
              </div>
            </div>
            <div className="field-note-copy">
              <LocalizedTextBlock
                as="h3"
                copy={item.title}
                locale={locale}
                className={cn(
                  "field-note-title",
                  locale === "zh" ? "text-[2rem]" : "text-[1.85rem]",
                )}
              />
              <LocalizedTextBlock
                as="p"
                copy={item.summary}
                locale={locale}
                className={cn(
                  "field-note-summary",
                  locale === "zh" ? "text-base leading-7" : "text-sm leading-6",
                )}
              />
              <div className="field-note-details">
                {item.details.map((detail) => (
                  <div key={detail.title.en} className="field-note-detail">
                    <p
                      className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground"
                      lang={localeLang(locale)}
                    >
                      {localized(detail.title, locale)}
                    </p>
                    <p
                      className="mt-2 text-sm leading-6 text-muted-foreground"
                      lang={localeLang(locale)}
                    >
                      {localized(detail.body, locale)}
                    </p>
                  </div>
                ))}
              </div>
              {experimentHref ? (
                <ActionLink
                  href={experimentHref}
                  label={siteContent.ui.visitExperiment}
                  ariaLabel={item.ariaLabel}
                  locale={locale}
                  variant="primary"
                  external
                />
              ) : (
                <ActionLink
                  href="#connect"
                  label={siteContent.ui.requestPreview}
                  ariaLabel={item.ariaLabel}
                  locale={locale}
                  variant="primary"
                />
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}

function WritingCard({
  item,
  locale,
  tone,
}: {
  item: (typeof siteContent.writing.items)[number];
  locale: Locale;
  tone: AccentTone;
}) {
  const toneStyle = toneStyles[tone];
  const articleHref = getSafeContentHref("href" in item ? item.href : undefined);

  return (
    <article className="editorial-entry">
      <div className="editorial-meta">
        <span
          className={cn(
            "inline-flex w-fit rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.18em]",
            toneStyle.chip,
          )}
          lang={localeLang(locale)}
        >
          {localized(item.category, locale)}
        </span>
        <p
          className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-muted-foreground"
          lang={localeLang(locale)}
        >
          {localized(item.meta, locale)}
        </p>
      </div>
      <div className="editorial-copy">
        <LocalizedTextBlock
          as="h3"
          copy={item.title}
          locale={locale}
          className={cn(
            "font-heading font-extrabold tracking-[-0.04em] text-foreground",
            locale === "zh" ? "text-[1.85rem] leading-[1.08]" : "text-[1.65rem] leading-tight",
          )}
        />
      </div>
      <LocalizedTextBlock
        as="p"
        copy={item.summary}
        locale={locale}
        className={cn(
          "editorial-summary",
          locale === "zh"
            ? "text-base leading-7 text-foreground"
            : "text-sm leading-6 text-muted-foreground",
        )}
      />
      <div className="editorial-action">
        {articleHref ? (
          <a
            href={articleHref}
            target="_blank"
            rel="noreferrer"
            aria-label={localized(item.ariaLabel, locale)}
            className={cn("editorial-link", toneStyle.sectionLabel)}
            lang={localeLang(locale)}
          >
            <span>{localized(siteContent.ui.readArticle, locale)}</span>
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" strokeWidth={2.5} />
          </a>
        ) : (
          <span
            className={cn("editorial-status", toneStyle.sectionLabel)}
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
  tone,
}: {
  item: (typeof siteContent.socialLinks.items)[number];
  locale: Locale;
  tone: AccentTone;
}) {
  const Icon = iconMap[item.icon];
  const toneStyle = toneStyles[tone];

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      aria-label={localized(item.ariaLabel, locale)}
      className="group contact-item"
    >
      <div className={cn("contact-icon", toneStyle.icon)}>
        <Icon aria-hidden="true" className="h-4 w-4 shrink-0" strokeWidth={2.3} />
      </div>
      <div className="min-w-0 flex-1">
        <LocalizedTextBlock
          as="p"
          copy={item.title}
          locale={locale}
          className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-muted-foreground"
        />
        <p className="mt-2 break-words text-base font-semibold tracking-tight text-foreground sm:text-[1.05rem]">
          {item.value}
        </p>
      </div>
      <div className="contact-arrow-wrap">
        <ArrowUpRight
          aria-hidden="true"
          className={cn("contact-arrow", iconTextStyles[tone])}
          strokeWidth={2.5}
        />
      </div>
    </a>
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
  const actionableHref = external ? getSafeContentHref(href) : href;

  if (!actionableHref) {
    return null;
  }

  return (
    <a
      href={actionableHref}
      className={cn(
        "group",
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
          <ArrowUpRight
            aria-hidden="true"
            className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={2.5}
          />
        ) : (
          <ArrowRight
            aria-hidden="true"
            className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5"
            strokeWidth={2.5}
          />
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

function getSafeContentHref(href?: unknown) {
  if (typeof href !== "string" || href.length === 0) {
    return undefined;
  }

  const placeholderPatterns = [/example\.com/i, /your-handle/i];

  return placeholderPatterns.some((pattern) => pattern.test(href)) ? undefined : href;
}

function cn(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}
