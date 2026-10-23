
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUp,
  Check,
  ChevronDown,
  Menu,
  X,
  Smartphone,
  ShieldCheck,
  Zap,
  Cloud,
  Bell,
  Star,
  Play,
  Download,
  MessageCircle,
  Settings,
  Heart,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Smartphone,
    title: "Easy to Use",
    text: "A simple and intuitive interface designed to make your everyday tasks easier.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Private",
    text: "Your information stays protected with security built into every experience.",
  },
  {
    icon: Zap,
    title: "Fast Performance",
    text: "Enjoy a smooth, responsive experience wherever your day takes you.",
  },
  {
    icon: Cloud,
    title: "Cloud Sync",
    text: "Keep your information accessible across your favourite devices.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    text: "Stay up to date with timely reminders and useful notifications.",
  },
  {
    icon: Settings,
    title: "Made for You",
    text: "Personalise your experience to fit your needs and preferences.",
  },
];

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for getting started.",
    features: ["Essential features", "One device", "Basic support"],
  },
  {
    name: "Professional",
    price: "$9.99",
    description: "For people who want more.",
    popular: true,
    features: ["All free features", "Unlimited devices", "Priority support", "Cloud synchronisation"],
  },
  {
    name: "Ultimate",
    price: "$19.99",
    description: "The complete experience.",
    features: ["Everything in Pro", "Advanced tools", "Premium support", "Exclusive features"],
  },
];

const questions = [
  {
    question: "What is SoftLand?",
    answer:
      "SoftLand is an app landing page concept designed to showcase an application, its features and available plans.",
  },
  {
    question: "Is SoftLand available on mobile?",
    answer:
      "This responsive landing page is designed to work across desktop, tablet and mobile screen sizes.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "The pricing cards demonstrate different plan options. A real subscription system would need to be connected separately.",
  },
  {
    question: "How can I get support?",
    answer:
      "Use the contact section at the bottom of this page to explore the available contact options.",
  },
];

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {text && (
        <p className="mt-4 leading-7 text-slate-500">{text}</p>
      )}
    </div>
  );
}

function PhoneMockup({ secondary = false }) {
  return (
    <div
      className={`relative w-[215px] shrink-0 rounded-[36px] border-[7px] border-slate-900 bg-white p-3 shadow-2xl ${
        secondary ? "mt-20 scale-90" : ""
      }`}
    >
      <div className="absolute left-1/2 top-2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-slate-900" />
      <div className="overflow-hidden rounded-[25px] bg-slate-50">
        <div className="bg-gradient-to-br from-indigo-600 to-violet-600 px-4 pb-6 pt-10 text-white">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold">SoftLand</span>
            <Bell size={15} />
          </div>
          <p className="mt-6 text-xs opacity-80">Welcome back!</p>
          <h3 className="mt-1 text-xl font-bold">
            {secondary ? "Your activity" : "Hello, Alex"}
          </h3>
          <div className="mt-4 rounded-2xl bg-white/15 p-3 backdrop-blur">
            <p className="text-xs opacity-80">Your balance</p>
            <p className="mt-1 text-2xl font-bold">
              {secondary ? "84.6%" : "$2,450"}
            </p>
          </div>
        </div>

        <div className="space-y-3 p-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-700">
              {secondary ? "Recent activity" : "Quick actions"}
            </span>
            <span className="text-[10px] text-indigo-600">View all</span>
          </div>

          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-3"
            >
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-xl ${
                  item === 1
                    ? "bg-indigo-100 text-indigo-600"
                    : item === 2
                      ? "bg-pink-100 text-pink-600"
                      : "bg-emerald-100 text-emerald-600"
                }`}
              >
                {item === 1 ? (
                  <Zap size={16} />
                ) : item === 2 ? (
                  <Heart size={16} />
                ) : (
                  <Check size={16} />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <div className="h-2 w-16 rounded bg-slate-200" />
                <div className="mt-2 h-1.5 w-12 rounded bg-slate-100" />
              </div>
              <div className="h-2 w-6 rounded bg-slate-200" />
            </div>
          ))}

          <div className="flex justify-around border-t border-slate-100 pt-3 text-slate-400">
            <Smartphone size={16} />
            <Star size={16} />
            <Settings size={16} />
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-copy > *", {
        y: 28,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(".hero-phones", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.to(".phone-float", {
        y: -12,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.utils.toArray(".reveal").forEach((element) => {
        gsap.from(element, {
          y: 35,
          opacity: 0,
          duration: 0.75,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            once: true,
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleSubscribe = (event) => {
    event.preventDefault();

    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const navLinks = [
    ["Home", "#home"],
    ["Features", "#features"],
    ["How It Works", "#how-it-works"],
    ["Pricing", "#pricing"],
    ["Contact", "#contact"],
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-white text-slate-800">
      {/* Navigation */}
      <header className="absolute left-0 top-0 z-50 w-full">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8 lg:px-12">
          <a
            href="#home"
            onClick={closeMenu}
            className="text-2xl font-bold tracking-tight text-white"
          >
            Soft<span className="text-indigo-200">Land</span>
            <span className="text-indigo-200">.</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map(([label, href], index) => (
              <a
                key={href}
                href={href}
                className={`text-sm transition hover:text-indigo-200 ${
                  index === 0 ? "font-semibold text-white" : "text-white/80"
                }`}
              >
                {label}
              </a>
            ))}
            <a
              href="#download"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-indigo-700 transition hover:-translate-y-0.5 hover:bg-indigo-50"
            >
              Get Started
            </a>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-white/30 p-2 text-white md:hidden"
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="mx-4 rounded-2xl border border-white/15 bg-indigo-950/95 p-4 shadow-xl backdrop-blur-lg md:hidden">
            {navLinks.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={closeMenu}
                className="block rounded-lg px-4 py-3 text-sm text-white transition hover:bg-white/10"
              >
                {label}
              </a>
            ))}
            <a
              href="#download"
              onClick={closeMenu}
              className="mt-2 block rounded-lg bg-white px-4 py-3 text-center text-sm font-semibold text-indigo-700"
            >
              Get Started
            </a>
          </div>
        )}
      </header>

      <main>
        {/* Hero */}
        <section
          id="home"
          className="relative isolate overflow-hidden bg-gradient-to-br from-[#5146c8] via-[#6557d7] to-[#8c75ee] text-white"
        >
          <div className="pointer-events-none absolute -left-40 top-32 h-96 w-96 rounded-full bg-indigo-300/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-violet-300/25 blur-3xl" />

          <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-10 px-5 pb-32 pt-36 sm:px-8 lg:grid-cols-2 lg:px-12 lg:pb-36">
            <div className="hero-copy relative z-10 max-w-xl">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-medium tracking-wide text-white/90 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-emerald-300" />
                A smarter way to stay connected
              </p>

              <h1 className="text-4xl font-bold leading-[1.13] tracking-tight sm:text-5xl lg:text-6xl">
                Promote Your App with{" "}
                <span className="text-indigo-200">SoftLand</span>
              </h1>

              <p className="mt-6 max-w-lg text-base leading-8 text-white/80 sm:text-lg">
                Discover a better way to organise your day. A beautiful,
                powerful app experience designed around you.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#download"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-indigo-700 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <Download size={17} />
                  Download Now
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center gap-2 rounded-full border border-white/35 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <Play size={17} />
                  Discover More
                </a>
              </div>

              <div className="mt-10 flex items-center gap-4">
                <div className="flex -space-x-3">
                  {["A", "J", "M", "S"].map((letter, index) => (
                    <div
                      key={letter}
                      className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#6557d7] text-xs font-bold text-white ${
                        ["bg-pink-500", "bg-amber-500", "bg-emerald-500", "bg-sky-500"][index]
                      }`}
                    >
                      {letter}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-1 text-amber-300">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={13} fill="currentColor" />
                    ))}
                  </div>
                  <p className="mt-1 text-xs text-white/80">
                    Loved by app enthusiasts
                  </p>
                </div>
              </div>
            </div>

            <div className="hero-phones relative mx-auto flex w-full max-w-lg items-center justify-center gap-0 sm:gap-2">
              <div className="phone-float relative z-10 -mr-7">
                <PhoneMockup secondary />
              </div>
              <div className="relative z-20">
                <PhoneMockup />
              </div>
              <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 blur-sm" />
            </div>
          </div>

          <svg
            className="absolute bottom-0 left-0 h-24 w-full sm:h-32"
            viewBox="0 0 1440 150"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0,70 C240,150 460,140 720,85 C990,25 1190,25 1440,85 L1440,150 L0,150 Z"
              fill="white"
            />
          </svg>
        </section>

        {/* About */}
        <section id="about" className="px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <div className="reveal relative mx-auto w-full max-w-md">
              <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-indigo-100 to-violet-100 blur-xl" />
              <div className="relative rounded-[2rem] border border-slate-100 bg-white p-7 shadow-xl sm:p-10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">Your weekly overview</p>
                    <h3 className="mt-1 text-2xl font-bold text-slate-900">
                      Stay on track
                    </h3>
                  </div>
                  <div className="rounded-2xl bg-indigo-50 p-3 text-indigo-600">
                    <Zap size={25} />
                  </div>
                </div>

                <div className="mt-8 rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 p-6 text-white">
                  <p className="text-sm text-white/75">Productivity score</p>
                  <div className="mt-2 flex items-end justify-between">
                    <span className="text-4xl font-bold">86%</span>
                    <span className="text-sm text-emerald-200">+12% this week</span>
                  </div>
                  <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/20">
                    <div className="h-full w-[86%] rounded-full bg-white" />
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {[
                    ["Daily goals", "bg-indigo-500", "w-[78%]"],
                    ["Focus time", "bg-violet-500", "w-[65%]"],
                    ["Tasks completed", "bg-emerald-500", "w-[90%]"],
                  ].map(([label, color, width]) => (
                    <div key={label}>
                      <div className="mb-2 flex justify-between text-sm">
                        <span className="text-slate-600">{label}</span>
                        <Check size={16} className="text-emerald-500" />
                      </div>
                      <div className="h-2 rounded-full bg-slate-100">
                        <div className={`h-full rounded-full ${color} ${width}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="reveal">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
                About SoftLand
              </p>
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
                A better experience, right at your fingertips.
              </h2>
              <p className="mt-6 leading-8 text-slate-500">
                SoftLand brings useful tools together in one thoughtfully
                designed experience. Spend less time organising and more time
                doing what matters.
              </p>

              <ul className="mt-7 space-y-4">
                {[
                  "Simple, intuitive and user-friendly interface",
                  "Designed for your everyday routine",
                  "A responsive experience across devices",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                      <Check size={14} />
                    </span>
                    <span className="text-sm leading-6 text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#features"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-indigo-600 transition hover:gap-3"
              >
                Explore the features <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="bg-slate-50 px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Features"
              title="Everything you need, in one app"
              text="Discover thoughtfully designed features that make your everyday experience simpler and more productive."
            />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="reveal group rounded-2xl border border-slate-100 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-100/50"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white">
                    <Icon size={26} strokeWidth={1.8} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-500">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="How it works"
              title="Get started in three simple steps"
              text="A straightforward experience from your first visit to your everyday routine."
            />

            <div className="grid gap-12 md:grid-cols-3">
              {[
                {
                  number: "01",
                  icon: Download,
                  title: "Download the App",
                  text: "Get started with a simple and welcoming onboarding experience.",
                },
                {
                  number: "02",
                  icon: Settings,
                  title: "Make It Yours",
                  text: "Choose the options and tools that fit your personal workflow.",
                },
                {
                  number: "03",
                  icon: Zap,
                  title: "Enjoy the Experience",
                  text: "Use your new tools to make everyday tasks feel more manageable.",
                },
              ].map(({ number, icon: Icon, title, text }) => (
                <article key={number} className="reveal relative text-center">
                  <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-500 text-white shadow-lg shadow-indigo-200">
                    <Icon size={30} />
                    <span className="absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full border-4 border-white bg-slate-900 text-xs font-bold text-white">
                      {number.slice(1)}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{title}</h3>
                  <p className="mx-auto mt-3 max-w-xs text-sm leading-7 text-slate-500">
                    {text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* App showcase */}
        <section id="gallery" className="overflow-hidden bg-indigo-50/70 px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
            <div className="reveal">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
                App experience
              </p>
              <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                Beautifully simple. Delightfully useful.
              </h2>
              <p className="mt-5 leading-8 text-slate-500">
                Every detail is designed to feel clear and natural. Explore an
                interface that puts your priorities first without unnecessary
                clutter.
              </p>

              <div className="mt-8 space-y-5">
                {[
                  ["Clean dashboard", "See the information you need at a glance."],
                  ["Personalised tools", "Keep your favourite actions close at hand."],
                  ["A smooth experience", "Enjoy considered details and fluid interactions."],
                ].map(([title, text]) => (
                  <div key={title} className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-sm">
                      <Check size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">{title}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-500">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal flex items-center justify-center gap-1 sm:gap-5">
              <div className="phone-float">
                <PhoneMockup secondary />
              </div>
              <div className="-ml-5">
                <PhoneMockup />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Testimonials"
              title="What people appreciate"
              text="A sample of the kind of feedback a product landing page can highlight."
            />

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  name: "Olivia Martin",
                  role: "App user",
                  initials: "OM",
                  quote: "A clean and welcoming design that makes everything feel easy to find.",
                },
                {
                  name: "James Wilson",
                  role: "Product enthusiast",
                  initials: "JW",
                  quote: "I love the simple layout and the attention to detail throughout the experience.",
                },
                {
                  name: "Sophia Anderson",
                  role: "Everyday user",
                  initials: "SA",
                  quote: "The interface feels polished, organised and comfortable to use.",
                },
              ].map(({ name, role, initials, quote }) => (
                <article
                  key={name}
                  className="reveal rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex gap-1 text-amber-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={15} fill="currentColor" />
                    ))}
                  </div>
                  <blockquote className="mt-5 leading-7 text-slate-600">
                    “{quote}”
                  </blockquote>
                  <div className="mt-7 flex items-center gap-3 border-t border-slate-100 pt-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700">
                      {initials}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{name}</p>
                      <p className="mt-1 text-xs text-slate-500">{role}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="bg-slate-50 px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Pricing"
              title="Choose the plan for you"
              text="Explore the sample plans and find the level that suits your needs."
            />

            <div className="grid items-stretch gap-6 lg:grid-cols-3">
              {plans.map((plan) => (
                <article
                  key={plan.name}
                  className={`reveal relative flex flex-col rounded-3xl border bg-white p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl ${
                    plan.popular
                      ? "border-indigo-500 shadow-xl shadow-indigo-100"
                      : "border-slate-200 shadow-sm"
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-4 py-1.5 text-xs font-semibold text-white">
                      Most Popular
                    </span>
                  )}

                  <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                  <p className="mt-2 text-sm text-slate-500">{plan.description}</p>

                  <div className="mt-7">
                    <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                    {plan.price !== "$0" && (
                      <span className="ml-2 text-sm text-slate-500">/ month</span>
                    )}
                  </div>

                  <a
                    href="#download"
                    className={`mt-7 block rounded-full px-5 py-3 text-center text-sm font-semibold transition hover:-translate-y-0.5 ${
                      plan.popular
                        ? "bg-indigo-600 text-white hover:bg-indigo-700"
                        : "border border-slate-200 text-slate-700 hover:border-indigo-300 hover:text-indigo-600"
                    }`}
                  >
                    Choose Plan
                  </a>

                  <div className="my-7 border-t border-slate-100" />
                  <p className="mb-4 text-sm font-semibold text-slate-900">
                    What's included
                  </p>
                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-3 text-sm text-slate-600">
                        <Check size={17} className="shrink-0 text-indigo-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <p className="mt-6 text-center text-xs text-slate-400">
              Sample pricing for demonstration. No payment is collected on this page.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              eyebrow="FAQ"
              title="Frequently asked questions"
              text="A few helpful answers to common questions about the SoftLand experience."
            />

            <div className="space-y-3">
              {questions.map(({ question, answer }, index) => {
                const isOpen = activeFaq === index;

                return (
                  <div
                    key={question}
                    className="reveal overflow-hidden rounded-2xl border border-slate-200 bg-white"
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setActiveFaq(isOpen ? -1 : index)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-semibold text-slate-800 transition hover:text-indigo-600 sm:px-6"
                    >
                      {question}
                      <ChevronDown
                        size={20}
                        className={`shrink-0 transition-transform ${
                          isOpen ? "rotate-180 text-indigo-600" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-sm leading-7 text-slate-500 sm:px-6">
                        {answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Download / CTA */}
        <section id="download" className="px-5 pb-20 sm:px-8 lg:pb-28">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-indigo-700 via-indigo-600 to-violet-600 px-6 py-14 text-center text-white sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-violet-300/20 blur-2xl" />

            <div className="reveal relative mx-auto max-w-2xl">
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
                <Smartphone size={28} />
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to discover SoftLand?
              </h2>
              <p className="mx-auto mt-5 max-w-xl leading-7 text-white/80">
                Stay connected with a clean, thoughtful app experience. Subscribe
                to receive product updates and announcements.
              </p>

              <form
                onSubmit={handleSubscribe}
                className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setSubscribed(false);
                  }}
                  placeholder="Enter your email address"
                  aria-label="Email address"
                  className="min-w-0 flex-1 rounded-full border border-white/20 bg-white px-5 py-4 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:ring-4 focus:ring-white/20"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-7 py-4 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Subscribe <ArrowRight size={16} />
                </button>
              </form>

              {subscribed && (
                <p role="status" className="mt-4 text-sm text-emerald-200">
                  Thanks for subscribing! This is a frontend demo.
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-slate-50 px-5 py-16 sm:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                About SoftLand
              </h2>
              <p className="mt-4 max-w-md text-sm leading-7 text-slate-500">
                A modern app landing page concept focused on simplicity,
                usability and a delightful digital experience.
              </p>
              <div className="mt-5 flex gap-3">
                {["Facebook", "Instagram", "LinkedIn"].map((social) => (
                  <a
                    key={social}
                    href="#contact"
                    aria-label={social}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-600 transition hover:border-indigo-300 hover:text-indigo-600"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-slate-900">Quick Links</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-500">
                  {navLinks.map(([label, href]) => (
                    <li key={href}>
                      <a className="transition hover:text-indigo-600" href={href}>
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Get in touch</h3>
                <p className="mt-4 text-sm leading-7 text-slate-500">
                  Questions about the app? We would love to hear from you.
                </p>
                <a
                  href="mailto:hello@example.com"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-800"
                >
                  <MessageCircle size={17} />
                  Email us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white px-5 py-7 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} <span className="font-semibold text-slate-800">SoftLand</span>. All rights reserved.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-indigo-600"
          >
            Back to top <ArrowUp size={16} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
