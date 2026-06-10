import React, { useEffect, useState, useRef } from "react";
import { createRoot } from "react-dom/client";
import {
  BookOpen01Icon,
  DashboardSquare01Icon,
  Route01Icon,
  AiBrain01Icon,
  QrCodeIcon,
  UserShield01Icon,
  ArrowUpRight01Icon,
  ArrowDown01Icon,
  ArrowUp01Icon,
  ArrowRight01Icon,
  Tick01Icon,
  PlayIcon,
  MoreHorizontalIcon,
  WifiOff01Icon,
  Menu01Icon,
  Cancel01Icon
} from "hugeicons-react";
import "./styles.css";

const StyleOverride: React.FC = () => (
  <style dangerouslySetInnerHTML={{ __html: `
    :root {
      --color-ink: #11120f;
      --color-muted: #6d706a;
      --color-green: #1dbf73;
      --color-deep: #126b53;
      --color-yellow: #f4c542;
      --color-mint: #ddf5ec;
      --color-paper: #f9f8f3;
      --color-line: #deded7;
      --color-lavender: #e9e3ff;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      background-color: var(--color-paper);
      color: var(--color-ink);
      font-family: "Noto Serif Bengali", serif;
      margin: 0;
    }

    body, button, input, select, textarea, h1, h2, h3, h4, h5, h6, p, a, span, small, b, strong, em {
      font-family: "Noto Serif Bengali", serif !important;
    }

    .bg-paper { background-color: #f9f8f3 !important; }
    .bg-ink { background-color: #11120f !important; }
    .bg-green { background-color: #1dbf73 !important; }
    .bg-yellow { background-color: #f4c542 !important; }
    .bg-mint { background-color: #ddf5ec !important; }
    .bg-lavender { background-color: #e9e3ff !important; }
    .bg-deep { background-color: #126b53 !important; }

    .text-ink { color: #11120f !important; }
    .text-muted { color: #6d706a !important; }
    .text-green { color: #1dbf73 !important; }
    .text-deep { color: #126b53 !important; }

    .border-ink { border-color: #11120f !important; }
    .border-line { border-color: #deded7 !important; }

    @keyframes trust-scroll {
      to {
        transform: translateX(-50%);
      }
    }

    .animate-trust-scroll {
      animation: trust-scroll 28s linear infinite;
    }

    @media (prefers-reduced-motion: reduce) {
      .animate-trust-scroll {
        animation-play-state: paused;
      }
    }

    .node-one { left: 1%; top: 8%; }
    .node-two { right: 0; top: 7%; }
    .node-three { left: 0; bottom: 7%; }
    .node-four { right: 1%; bottom: 8%; }

    body.scrolled .header-scroll-bg {
      padding-top: 8px !important;
      padding-bottom: 8px !important;
    }
    body.scrolled .header-scroll-bg > div {
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08) !important;
      background-color: rgba(255, 255, 255, 0.96) !important;
      border-color: rgba(0, 0, 0, 0.04) !important;
    }
  ` }} />
);


const photos = {
  hero: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=88",
  students: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85",
  tablet: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=85",
  teacher: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=85",
  family: "https://images.unsplash.com/photo-1602030028438-4cf153cbae9e?auto=format&fit=crop&w=1200&q=85",
  rural: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=85",
  wellness: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=1200&q=85",
  career: "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&q=85",
  group: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1400&q=88",
};

interface ArrowProps {
  down?: boolean;
}

const Arrow: React.FC<ArrowProps> = ({ down = false }) => (
  <span className="inline-grid place-items-center w-8 h-8 bg-ink text-white rounded-full text-base transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
    {down ? <ArrowDown01Icon size={16} /> : <ArrowUpRight01Icon size={16} />}
  </span>
);

interface LogoProps {
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ light = false }) => {
  return (
    <a className={`flex items-center gap-2.5 min-w-[245px] max-[760px]:min-w-0 ${light ? "text-white" : "text-ink"}`} href="#top" aria-label="ওয়ানস্টুডেন্ট বাংলাদেশ হোম">
      <span className="relative w-[31px] h-[31px] grid grid-cols-2 gap-[3px] -rotate-7 shrink-0">
        <i className="rounded-[4px] bg-green" />
        <i className="rounded-[4px] bg-yellow" />
        <i className={`rounded-[4px] col-span-2 h-[9px] ${light ? "bg-white" : "bg-ink"}`} />
      </span>
      <span className="flex flex-col leading-none max-[760px]:hidden">
        <b className="font-[#111] text-base font-bold">ওয়ানস্টুডেন্ট</b>
        <small className={`text-[9px] uppercase tracking-[0.14em] mt-1.5 ${light ? "text-gray-300" : "text-muted"}`}>বাংলাদেশ</small>
      </span>
    </a>
  );
};

interface ButtonProps {
  children: React.ReactNode;
  secondary?: boolean;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ children, secondary = false, href = "#features" }) => {
  return (
    <a
      className={`group inline-flex items-center gap-3 px-[22px] py-2.5 max-[760px]:px-5 border-1.5 border-ink rounded-full font-bold text-sm shadow-[2px_3px_0_#111] transition-all duration-250 hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[4px_5px_0_#111] ${
        secondary ? "bg-white text-ink" : "bg-green text-[#071b12]"
      }`}
      href={href}
    >
      {children}
      <span className={`inline-grid place-items-center w-8 h-8 rounded-full text-base shrink-0 ${secondary ? "bg-yellow text-ink" : "bg-ink text-white"}`}>
        <ArrowUpRight01Icon size={16} />
      </span>
    </a>
  );
};

interface SectionTitleProps {
  eyebrow: string;
  title: React.ReactNode;
  text?: string;
  center?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ eyebrow, title, text, center = false }) => {
  return (
    <div className={`flex flex-col mb-10 max-w-[640px] ${center ? "text-center items-center mx-auto" : ""}`}>
      <span className="inline-flex items-center gap-2 text-sm md:text-base tracking-wider uppercase font-extrabold text-deep mb-5.5 before:content-[''] before:w-2.5 before:h-2.5 before:rounded-full before:bg-yellow">
        {eyebrow}
      </span>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.12] mb-6 text-ink">
        {title}
      </h2>
      {text && <p className="text-lg leading-relaxed text-muted">{text}</p>}
    </div>
  );
};

const DashboardCard: React.FC = () => {
  return (
    <div className="absolute w-[230px] max-[760px]:w-[250px] bg-white rounded-[22px] p-[15px] max-[760px]:p-4 left-[-52px] max-[760px]:left-5 bottom-[25px] max-[760px]:bottom-0 shadow-[0_24px_60px_rgba(25,52,38,0.18)] -rotate-3 z-10 transition-transform duration-300 hover:scale-105">
      <div className="flex justify-between items-center">
        <div className="flex flex-col text-left">
          <span className="text-[12px] max-[760px]:text-[9px] text-gray-400">সুপ্রভাত,</span>
          <b className="text-[16px] max-[760px]:text-[13px] text-ink font-bold">রাফি রহমান</b>
        </div>
        <div className="w-[44px] h-[44px] rounded-full overflow-hidden border border-[#1dbf73]/50 shadow-sm bg-mint shrink-0">
          <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80" alt="Rafi" />
        </div>
      </div>
      <div className="w-[90px] h-[90px] rounded-full mx-auto my-3 bg-[conic-gradient(var(--color-green)_0_78%,#edf0ec_78%)] flex items-center justify-center relative before:content-[''] before:absolute before:w-[66px] before:h-[66px] before:rounded-full before:bg-white">
        <div className="absolute flex flex-col text-center z-10">
          <b className="text-2xl max-[760px]:text-[21px] text-ink font-bold">৭৮%</b>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 max-[760px]:gap-1">
        <div className="relative flex flex-col pl-3 text-left">
          <span className="absolute left-0 top-[6px] w-[7px] h-[7px] rounded-full bg-green" />
          <b className="text-[12px] max-[760px]:text-[9px] text-ink font-bold">গণিত</b>
          <small className="text-[10px] max-[760px]:text-[7px] text-muted leading-tight">১৬টির মধ্যে ১২টি</small>
        </div>
        <div className="relative flex flex-col pl-3 text-left">
          <span className="absolute left-0 top-[6px] w-[7px] h-[7px] rounded-full bg-yellow" />
          <b className="text-[12px] max-[760px]:text-[9px] text-ink font-bold">বিজ্ঞান</b>
          <small className="text-[10px] max-[760px]:text-[7px] text-muted leading-tight">১২টির মধ্যে ৮টি</small>
        </div>
      </div>
      <div className="h-1.5 bg-gray-100 rounded-full mt-3 overflow-hidden">
        <div className="h-full bg-green rounded-full" style={{ width: "78%" }} />
      </div>
    </div>
  );
};

const PhoneChat: React.FC = () => {
  return (
    <div className="absolute w-[285px] h-[590px] bg-white border-8 border-ink rounded-[38px] left-0 top-0 p-[18px] shadow-[0_35px_80px_rgba(24,55,43,0.23)] z-10">
      <div className="flex justify-between text-[8px] font-bold px-1.5">
        <span>9:41</span>
        <i className="w-[30px] h-[8px] bg-ink rounded-full" />
      </div>
      <div className="flex items-center gap-2.5 border-b border-gray-100 py-4.5">
        <span className="w-[38px] h-[38px] rounded-full flex items-center justify-center bg-green text-ink">✦</span>
        <div className="flex flex-col text-left">
          <b className="text-xs font-bold text-ink">এআই পড়ার সঙ্গী</b>
          <small className="text-[8px] text-[#44a36e]">এখন অনলাইনে</small>
        </div>
      </div>
      <div className="text-[10px] leading-relaxed p-3 rounded-[14px] my-3.5 bg-ink text-white ml-[50px] text-left">
        ভগ্নাংশ কীভাবে যোগ করব?
      </div>
      <div className="text-[10px] leading-relaxed p-3 rounded-[14px] my-3.5 bg-mint text-ink mr-[17px] text-left">
        <b>চলো ধাপে ধাপে করি।</b>
        <br />
        প্রথমে হর সমান করতে হবে...
      </div>
      <div className="text-center border border-gray-200 rounded-xl p-3 text-xl font-medium">
        2/5 + 1/5 = <b className="font-bold text-green">3/5</b>
      </div>
      <div className="flex gap-1.5 flex-wrap mt-3.5">
        <span className="text-[7px] border border-gray-300 rounded-full p-1.5 cursor-pointer hover:bg-gray-50">আরও সহজ করে বলো</span>
        <span className="text-[7px] border border-gray-300 rounded-full p-1.5 cursor-pointer hover:bg-gray-50">একটি কুইজ দাও</span>
      </div>
      <div className="absolute bottom-[18px] left-[18px] right-[18px] bg-[#f3f3ef] rounded-full p-3 text-gray-400 text-[9px] flex items-center justify-between">
        যেকোনো প্রশ্ন করো…
        <b className="w-[22px] h-[22px] bg-green flex items-center justify-center text-[#071b12] rounded-full cursor-pointer shrink-0">
          <ArrowUp01Icon size={12} className="stroke-[2.5]" />
        </b>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("গণিত");

  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      const totalScroll = scrollWidth - clientWidth;
      if (totalScroll > 0) {
        setScrollProgress((scrollLeft / totalScroll) * 100);
      }
    }
  };

  const scrollNext = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 344, behavior: "smooth" }); // Card width + gap
    }
  };

  const scrollPrev = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -344, behavior: "smooth" });
    }
  };

  const subjectsData: Record<string, {
    currentChapter: string;
    chapterNum: string;
    progressText: string;
    subUnits: [string, string, string, string, string][];
  }> = {
    "গণিত": {
      currentChapter: "বীজগাণিতিক রাশি",
      chapterNum: "অধ্যায় ০৪",
      progressText: "৮টির মধ্যে ৬ষ্ঠ পাঠ · ১৮ মিনিট",
      subUnits: [
        ["০১", "সংখ্যা পদ্ধতি", "১০০% সম্পন্ন", "bg-green", "100%"],
        ["০২", "জ্যামিতি", "৭২% সম্পন্ন", "bg-green", "72%"],
        ["০৩", "উপাত্ত ও সম্ভাবনা", "অধ্যায় শুরু করো", "bg-gray-200", "0%"]
      ]
    },
    "বাংলা": {
      currentChapter: "প্রমিত ভাষা ব্যবহার করি",
      chapterNum: "অধ্যায় ০২",
      progressText: "৫টির মধ্যে ৩য় পাঠ · ১২ মিনিট",
      subUnits: [
        ["০১", "প্রয়োজনীয় কথা বলি", "১০০% সম্পন্ন", "bg-green", "100%"],
        ["০২", "শব্দের উচ্চারণ", "৮০% সম্পন্ন", "bg-green", "80%"],
        ["০৩", "লিখন ও প্রকাশ", "অধ্যায় শুরু করো", "bg-gray-200", "0%"]
      ]
    },
    "ইংরেজি": {
      currentChapter: "Writing in Style",
      chapterNum: "Chapter 03",
      progressText: "6 lessons out of 4 · 15 mins",
      subUnits: [
        ["01", "Beauty in Poetry", "100% completed", "bg-green", "100%"],
        ["02", "The Art of Writing", "50% completed", "bg-green", "50%"],
        ["03", "Grammar Essentials", "Start Chapter", "bg-gray-200", "0%"]
      ]
    },
    "বিজ্ঞান": {
      currentChapter: "সূর্য ও পৃথিবী",
      chapterNum: "অধ্যায় ০৫",
      progressText: "১০টির মধ্যে ৮ম পাঠ · ২০ মিনিট",
      subUnits: [
        ["০১", "পরমাণুর গঠন", "১০০% সম্পন্ন", "bg-green", "100%"],
        ["০২", "গতি ও বল", "৯০% সম্পন্ন", "bg-green", "90%"],
        ["০৩", "পরিবেশ দূষণ", "অধ্যায় শুরু করো", "bg-gray-200", "0%"]
      ]
    },
    "আইসিটি": {
      currentChapter: "নেটওয়ার্ক ও সাইবার নিরাপত্তা",
      chapterNum: "অধ্যায় ০৩",
      progressText: "৪টির মধ্যে ২য় পাঠ · ১৪ মিনিট",
      subUnits: [
        ["০১", "ডিজিটাল ডিভাইস", "১০০% সম্পন্ন", "bg-green", "100%"],
        ["০২", "ইন্টারনেট ও ব্রাউজিং", "৬০% সম্পন্ন", "bg-green", "60%"],
        ["০৩", "কোডিংয়ের হাতেখড়ি", "অধ্যায় শুরু করো", "bg-gray-200", "0%"]
      ]
    }
  };

  const activeData = subjectsData[selectedSubject] || subjectsData["গণিত"];

  useEffect(() => {
    const onScroll = () => {
      document.body.classList.toggle("scrolled", window.scrollY > 30);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const features = [
    ["০১", "এনসিটিবি লার্নিং হাব", "প্রথম থেকে দ্বাদশ শ্রেণির অধ্যায়ভিত্তিক পাঠ, নোট ও ভিডিও।"],
    ["০২", "এআই পড়াশোনা সহকারী", "সহজ বাংলা ব্যাখ্যা, বাড়ির কাজের সহায়তা ও বুদ্ধিদীপ্ত অনুশীলন।"],
    ["০৩", "পরীক্ষা ও সনদ", "কুইজ, মডেল টেস্ট, তাৎক্ষণিক বিশ্লেষণ ও যাচাইকৃত অর্জন।"],
    ["০৪", "শিক্ষার্থী পাসপোর্ট", "অগ্রগতি, দক্ষতা ও অর্জনের আজীবন ডিজিটাল পরিচয়।"],
    ["০৫", "অভিভাবক মোড", "সহজ অগ্রগতি সারাংশ ও সময়মতো গুরুত্বপূর্ণ সতর্কতা।"],
    ["০৬", "শিক্ষক সহকারী", "পাঠ সহায়তা, শ্রেণির অন্তর্দৃষ্টি ও শেখার ঘাটতি দ্রুত শনাক্তকরণ।"],
    ["০৭", "স্বাস্থ্য ও সুস্থতা", "সুস্থ মন, শরীর ও পড়ার অভ্যাসের জন্য নিরাপদ দিকনির্দেশনা।"],
    ["০৮", "ক্যারিয়ার ও কলেজ", "আগ্রহভিত্তিক দিকনির্দেশনা, বৃত্তি ও উচ্চশিক্ষায় সহায়তা।"],
    ["০৯", "কিউআর-সংযুক্ত বই", "বই স্ক্যান করেই সংশ্লিষ্ট ভিডিও পাঠ, ক্লাস অথবা পরীক্ষা শুরু।"],
    ["১০", "আজীবন শিক্ষার্থী আইডি", "শিক্ষাজীবনের শুরু থেকে শেষ পর্যন্ত একটি স্থায়ী ডিজিটাল পরিচয়।"],
    ["১১", "দক্ষতাভিত্তিক শিক্ষা", "কৃষি, ইংরেজি বলা, ডিজিটাল দক্ষতা ও জীবনমুখী কোর্স।"],
    ["১২", "এডটেক সহযোগিতা", "বিশ্বস্ত শিক্ষা প্রতিষ্ঠান ও এডটেককে এক জাতীয় ব্যবস্থায় যুক্ত করা।"],
  ];

  return (
    <main className="flex flex-col min-h-screen bg-paper text-ink font-serif" id="top">
      <StyleOverride />
      {/* 0. Header */}
      <header className="fixed top-0 left-0 w-full z-50 px-8 py-4.5 max-[760px]:px-2.5 max-[760px]:py-2.5 transition-all duration-300 header-scroll-bg">
        <div className="h-[72px] max-[760px]:h-[62px] max-w-[1380px] mx-auto bg-white/88 backdrop-blur-[18px] rounded-[20px] flex items-center justify-between px-6 py-0 shadow-sm relative">
          <Logo />
          <nav className={`${menuOpen ? "flex absolute top-[78px] left-0 right-0 bg-white border border-ink/10 rounded-2xl p-6 flex-col gap-4 shadow-lg" : "hidden"} md:flex md:static md:flex-row md:items-center md:justify-center md:gap-7 md:shadow-none md:p-0 md:bg-transparent md:border-none`}>
            {[
              ["কেন ওয়ানস্টুডেন্ট", "#why"],
              ["পড়াশোনা", "#learning"],
              ["সহায়তা", "#support"],
              ["প্রভাব", "#impact"],
              ["যোগাযোগ", "#contact"]
            ].map(([text, link]) => (
              <a className="text-[13px] font-semibold text-[#55574f] hover:text-green transition-colors" href={link} key={link} onClick={() => setMenuOpen(false)}>
                {text}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-5">
            <a className="text-[13px] font-bold text-ink max-[1100px]:hidden hover:text-green transition-colors" href="#signin">
              সাইন ইন
            </a>
            <div className="max-[760px]:hidden">
              <Button href="#contact">শুরু করুন</Button>
            </div>
          </div>
          <button className="hidden max-[760px]:flex items-center justify-center w-10 h-10 border-none bg-transparent cursor-pointer text-ink" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}>
            {menuOpen ? <Cancel01Icon size={24} /> : <Menu01Icon size={24} />}
          </button>
        </div>
      </header>

      {/* 1. Hero Section */}
      <section className="pt-[120px] max-[760px]:pt-[110px] pb-16 max-[760px]:pb-8 px-16 max-[760px]:px-5 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[0.88fr_1.12fr] gap-6 lg:gap-10 items-center overflow-hidden">
        <div className="flex flex-col text-left max-[760px]:text-center">
          <div className="inline-flex items-center gap-2 border border-gray-300 rounded-full p-1.5 max-[760px]:justify-center max-[760px]:mx-auto w-fit text-[12px] tracking-wide mb-6">
            <span className="bg-yellow px-2.5 py-1.5 rounded-full font-bold text-[12px]">জাতীয় ডিজিটাল লার্নিং প্ল্যাটফর্ম</span>
            <i className="w-1.5 h-1.5 bg-green rounded-full shrink-0" />
            <span className="text-muted font-medium">প্রথম থেকে দ্বাদশ শ্রেণি পর্যন্ত</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.08] text-ink">
            <span className="inline-block whitespace-nowrap text-[0.85em]">প্রতিটি শিক্ষার্থীর যাত্রা</span>
            <br />
            <em className="text-green not-italic">এক প্ল্যাটফর্মেই</em>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-muted mb-9 max-w-[690px] max-[760px]:mx-auto">
            পড়াশোনা, পরীক্ষা, দক্ষতা ও ভবিষ্যৎ পরিকল্পনা — সবকিছু এক জায়গায়।
          </p>
          <div className="flex gap-3.5 flex-wrap max-[760px]:justify-center mb-10">
            <Button>পড়াশোনা শুরু করুন</Button>
            <Button secondary href="#features">
              প্ল্যাটফর্ম দেখুন
            </Button>
          </div>
          <div className="flex items-center gap-4 mt-6 max-[760px]:justify-center">
            <div className="flex -space-x-3 shrink-0">
              <img className="w-[54px] h-[54px] max-[760px]:w-[46px] max-[760px]:h-[46px] rounded-full border-3 border-[#f9f8f3] object-cover" src={photos.students} alt="student" />
              <img className="w-[54px] h-[54px] max-[760px]:w-[46px] max-[760px]:h-[46px] rounded-full border-3 border-[#f9f8f3] object-cover" src={photos.teacher} alt="teacher" />
              <img className="w-[54px] h-[54px] max-[760px]:w-[46px] max-[760px]:h-[46px] rounded-full border-3 border-[#f9f8f3] object-cover" src={photos.family} alt="parent" />
            </div>
            <p className="text-sm md:text-base text-muted text-left">
              <b className="font-bold text-ink text-base md:text-lg block">সারাদেশের জন্য এক সল্যুশন</b>
              শিক্ষার্থী · শিক্ষক · অভিভাবক
            </p>
          </div>
        </div>
        <div className="relative h-[670px] max-[760px]:h-[520px] w-full max-w-[780px] mx-auto shrink-0">
          <div className="absolute inset-[60px_30px_30px_90px] max-[760px]:inset-[60px_15px_30px] bg-yellow rounded-[44%_56%_63%_37%_/_44%_40%_60%_56%] rotate-4" />
          <div className="absolute inset-[28px_65px_35px_70px] max-[760px]:inset-[35px_25px] rounded-[47%_53%_46%_54%_/_37%_38%_62%_63%] overflow-hidden filter saturate-90 shadow-lg after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-t after:from-emerald-900/18 after:to-transparent">
            <img className="w-full h-full object-cover" src={photos.hero} alt="শ্রেণিকক্ষে একসঙ্গে পড়ছে শিক্ষার্থীরা" />
          </div>
          <DashboardCard />
          <div className="absolute right-[-5px] top-[100px] max-[760px]:top-[100px] w-[155px] max-[760px]:w-[142px] h-[180px] max-[760px]:h-[170px] bg-ink text-white rounded-[22px] p-5 max-[760px]:p-4.5 flex flex-col items-center text-center rotate-4 shadow-xl">
            <span className="text-[10px] max-[760px]:text-[9px] text-gray-300">সর্বশেষ পরীক্ষা</span>
            <b className="text-[42px] max-[760px]:text-[39px] font-bold mt-2.5 tracking-tighter">৯২%</b>
            <small className="text-[10px] max-[760px]:text-[9px] text-gray-300">চমৎকার হয়েছে!</small>
            <div className="flex items-end justify-center gap-[5px] h-[38px] mt-auto w-full">
              <i className="w-[11px] h-[30%] bg-green rounded-t-sm" />
              <i className="w-[11px] h-[50%] bg-green rounded-t-sm" />
              <i className="w-[11px] h-[42%] bg-green rounded-t-sm" />
              <i className="w-[11px] h-[80%] bg-yellow rounded-t-sm" />
              <i className="w-[11px] h-full bg-green rounded-t-sm" />
            </div>
          </div>
          <div className="absolute right-[5px] bottom-[88px] max-[760px]:hidden bg-white p-[10px_18px_10px_10px] rounded-full flex items-center gap-2 shadow-md z-10">
            <span className="w-8 h-8 rounded-full flex items-center justify-center bg-green text-ink shrink-0">
              <Tick01Icon size={16} className="stroke-[2.5]" />
            </span>
            <div className="flex flex-col text-left">
              <b className="text-[13px] text-ink font-bold leading-tight">অধ্যায় সম্পন্ন</b>
              <small className="text-[11px] text-muted">বীজগণিত · অষ্টম শ্রেণি</small>
            </div>
          </div>
          <div className="absolute top-[50px] left-3.5 text-8xl text-green rotate-[60deg] opacity-70 pointer-events-none">↝</div>
        </div>

        {/* Hero stats */}
        <div className="col-span-1 lg:col-span-2 border-t border-line grid grid-cols-2 lg:grid-cols-4 pt-5.5 mt-8 max-[760px]:gap-y-5">
          {[
            ["২ কোটি+", "সম্ভাব্য শিক্ষার্থী"],
            ["১–১২", "একীভূত শিক্ষা"],
            ["৬৪", "জেলার স্বপ্ন"],
            ["১", "শিক্ষা পরিচয়"]
          ].map(([val, label], idx) => (
            <div className={`flex flex-col items-center text-center gap-1.5 relative py-4 ${
              idx !== 3 ? "lg:after:content-[''] lg:after:absolute lg:after:right-0 lg:after:top-[15%] lg:after:h-[70%] lg:after:w-px lg:after:bg-gradient-to-b lg:after:from-transparent lg:after:via-line lg:after:to-transparent" : ""
            } max-[760px]:border-r max-[760px]:border-b max-[760px]:border-line max-[760px]:min-h-[130px] max-[760px]:justify-center max-[760px]:px-4 ${
              idx % 2 === 1 ? "max-[760px]:border-r-0" : ""
            }`} key={label}>
              <b className="font-['Manrope'] text-3xl md:text-[32px] font-bold text-ink leading-tight">{val}</b>
              <span className="text-sm md:text-base text-muted uppercase tracking-wider block">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Trust Strip */}
      <section className="bg-ink text-white py-6.5 overflow-hidden relative" aria-label="প্ল্যাটফর্মের প্রধান সুবিধা">
        <div className="absolute left-0 top-0 bottom-0 w-[9vw] z-10 pointer-events-none bg-gradient-to-r from-ink to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-[9vw] z-10 pointer-events-none bg-gradient-to-l from-ink to-transparent" />
        <div className="flex w-max animate-trust-scroll">
          {[0, 1].map((loop) => (
            <div className="flex items-center shrink-0" aria-hidden={loop === 1} key={loop}>
              {[
                [<BookOpen01Icon size={20} />, "এনসিটিবি পাঠ্যক্রম"],
                [<DashboardSquare01Icon size={20} />, "অল-ইন-ওয়ান সল্যুশন"],
                [<Route01Icon size={20} />, "গাইডেড লার্নিং"],
                [<AiBrain01Icon size={20} />, "ডাউট সল্ভের জন্য এআই"],
                [<QrCodeIcon size={20} />, "ক্লাস এবং পরীক্ষার কিউআর কোড"],
                [<UserShield01Icon size={20} />, "অভিভাবক মনিটরিং"],
              ].map(([icon, text], idx) => (
                <div className="flex items-center gap-3 px-9 max-[760px]:px-6 text-sm md:text-base font-semibold whitespace-nowrap" key={`${loop}-${idx}`}>
                  <span className="flex items-center justify-center w-[35px] h-[35px] max-[760px]:w-[31px] max-[760px]:h-[31px] text-yellow text-xl max-[760px]:text-lg">{icon}</span>
                  {text}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* 3. Features Section */}
      <section className="py-28 px-16 max-[760px]:py-20 max-[760px]:px-5 max-w-[1440px] mx-auto" id="features">
        <div className="mb-16 text-center">
          <SectionTitle
            center
            eyebrow="বাংলাদেশের জাতীয় ডিজিটাল লার্নিং প্ল্যাটফর্ম"
            title={<>সবকিছু <em className="text-green not-italic">এক অ্যাপে</em></>}
          />
        </div>
        <div className="feature-journey">
          {[0, 1, 2].map((rowIndex) => {
            const rowFeatures = features.slice(rowIndex * 4, rowIndex * 4 + 4);
            const displayedFeatures = rowIndex === 1 ? [...rowFeatures].reverse() : rowFeatures;

            return (
              <div className={`journey-row ${rowIndex === 1 ? "journey-row-reverse" : ""}`} key={rowIndex}>
                {displayedFeatures.map(([n, t, d]) => (
                  <article className="journey-card" key={t}>
                    <span className="journey-number">{n}</span>
                    <div>
                      <h3>{t}</h3>
                      <p>{d}</p>
                    </div>
                  </article>
                ))}
              </div>
            );
          })}
        </div>

      </section>

      {/* 4. Why Section */}
      <section className="py-28 px-16 max-[760px]:py-20 max-[760px]:px-5 max-w-[1440px] mx-auto" id="why">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-[10vw]">
          <SectionTitle
            eyebrow="কেন ওয়ানস্টুডেন্ট"
            title={<>শুধু পাঠ নয়।<br /><em className="text-green not-italic">একটি পূর্ণাঙ্গ সহায়তা ব্যবস্থা।</em></>}
            text="পড়াশোনা, দিকনির্দেশনা, যত্ন ও সুযোগ একসঙ্গে কাজ করলেই শিক্ষার্থীরা সবচেয়ে ভালো করে। ওয়ানস্টুডেন্ট পুরো যাত্রাটিকে আনে একটি বিশ্বস্ত জায়গায়।"
          />
          <div className="flex flex-col pt-12">
            {[
              ["০১", "নিজের গতিতে শেখো", "পরিষ্কার অধ্যায়ভিত্তিক পথ আত্মবিশ্বাস নিয়ে এগোতে সাহায্য করে।"],
              ["০২", "প্রতিটি ধাপে সহায়তা পাও", "শিক্ষক ও অভিভাবক সঠিক সময়ে প্রয়োজনীয় বিষয়টি দেখতে পান।"],
              ["০৩", "বাস্তব ভবিষ্যৎ গড়ে তোলো", "ক্যারিয়ার ও কলেজ নির্দেশনায় নিজের শক্তিকে লক্ষ্যে রূপ দাও।"]
            ].map(([num, heading, desc]) => (
              <div className="grid grid-cols-[45px_1fr] gap-x-4 border-t border-line py-6 text-left" key={heading}>
                <b className="text-xs text-green font-bold">{num}</b>
                <div className="flex flex-col">
                  <h3 className="text-xl font-bold mb-2 text-ink">{heading}</h3>
                  <p className="text-sm text-muted leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-[570px] max-[760px]:h-[600px] mt-20 rounded-[30px] overflow-hidden">
          <img className="w-full h-full object-cover filter saturate-75 brightness-[0.82]" src={photos.students} alt="একসঙ্গে কাজ করছে শিক্ষার্থীরা" />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/87 via-emerald-950/40 to-transparent" />
          <div className="absolute z-10 text-white left-[55px] max-[760px]:left-6 max-[760px]:right-6 bottom-[52px] max-w-[480px] text-left">
            <span className="text-[10px] tracking-widest text-yellow uppercase block mb-4">ওয়ানস্টুডেন্টের অঙ্গীকার</span>
            <h3 className="text-3xl md:text-[42px] font-bold leading-tight mb-4">কোনো শিক্ষার্থী যেন অজান্তে পিছিয়ে না পড়ে।</h3>
            <p className="text-emerald-100/80 leading-relaxed text-sm md:text-base">Progressive data signals help schools and families support each student at the right moment.</p>
          </div>
          <div className="absolute z-10 right-8 top-8 w-[155px] h-[155px] max-[760px]:w-[105px] max-[760px]:h-[105px] rounded-full bg-yellow flex flex-col justify-center items-center rotate-7 shadow-lg">
            <b className="text-[43px] max-[760px]:text-3xl font-extrabold text-ink leading-none">৩৬০°</b>
            <span className="text-[11px] max-[760px]:text-[8px] uppercase tracking-wider font-semibold text-ink">শিক্ষার্থী চিত্র</span>
          </div>
        </div>
      </section>

      {/* 5. Student ID / Passport Section */}
      <section className="py-28 px-16 max-[760px]:py-20 max-[760px]:px-5 max-w-[1440px] mx-auto">
        <SectionTitle
          center
          eyebrow="আজীবন জাতীয় শিক্ষার্থী আইডি"
          title={<>একটি স্টুডেন্ট আইডি দিয়েই<br /><em className="text-green not-italic">একাডেমিক জীবন।</em></>}
          text="প্রতিটি শিক্ষার্থী পাবে একটি নিজস্ব স্থায়ী আইডি। স্কুল, শ্রেণি বা প্রতিষ্ঠান বদলালেও পরীক্ষা, অগ্রগতি, উপস্থিতি, সনদ ও দক্ষতা একই একাডেমিক প্রোফাইলে থাকবে।"
        />
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.25fr_1fr] gap-6 items-center max-w-[1080px] mx-auto max-[760px]:grid-cols-1">
          <div className="flex flex-col gap-5 max-lg:hidden">
            <div className="bg-[#f6f6f1] border border-line rounded-[20px] p-6 text-left">
              <span className="text-[9px] uppercase tracking-wider text-gray-500">একাডেমিক অগ্রগতি</span>
              <b className="text-[26px] font-bold text-ink block my-2">৭৬%</b>
              <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-green rounded-full" style={{ width: "76%" }} />
              </div>
            </div>
            <div className="bg-[#f6f6f1] border border-line rounded-[20px] p-6 text-left">
              <span className="text-[9px] uppercase tracking-wider text-gray-500">ধারাবাহিক শেখা</span>
              <b className="text-[26px] font-bold text-ink block my-2">১৮ দিন</b>
              <small className="text-[9px] text-green font-bold">ব্যক্তিগত সেরা</small>
            </div>
          </div>

          {/* Government-issued Digital Student Passport */}
          <div className="bg-[#fffefa] border border-[#d7d8cf] rounded-[24px] min-h-[610px] relative z-10 shadow-[0_24px_70px_rgba(20,57,45,0.14)] overflow-hidden flex flex-col">
            <div className="h-2 bg-gradient-to-r from-green via-yellow to-green" />
            <div className="px-6 pt-5 pb-4 border-b border-[#e4e4dc] bg-[#f7f8f2]">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3 text-left">
                  <div className="w-11 h-11 rounded-full bg-deep text-yellow border-2 border-yellow flex items-center justify-center text-xl shadow-sm">★</div>
                  <div>
                    <b className="block text-[13px] leading-tight text-ink">গণপ্রজাতন্ত্রী বাংলাদেশ সরকার</b>
                    <span className="block text-[9px] text-muted mt-1">জাতীয় শিক্ষা বোর্ড · ওয়ানস্টুডেন্ট</span>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="block text-[9px] font-bold text-deep">ডিজিটাল স্টুডেন্ট পাসপোর্ট</span>
                  <b className="block text-[11px] text-ink mt-1">ID: ২০৩১-৮৪২৯০১</b>
                </div>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <div className="grid grid-cols-[112px_1fr] max-[520px]:grid-cols-1 gap-5 text-left">
                <div className="relative w-fit">
                  <div className="w-[112px] h-[132px] rounded-xl overflow-hidden border-2 border-white ring-1 ring-[#ced2c8] bg-gray-100 shadow-md">
                    <img className="w-full h-full object-cover saturate-90" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80" alt="নুসরাত জাহান" />
                  </div>
                  <span className="absolute -right-2 -bottom-2 w-8 h-8 rounded-full bg-green text-white border-4 border-[#fffefa] grid place-items-center text-sm font-bold">✓</span>
                </div>

                <div>
                  <span className="text-[9px] text-muted block">শিক্ষার্থীর নাম</span>
                  <h3 className="text-[25px] font-extrabold text-ink leading-tight mt-1 mb-0">নুসরাত জাহান</h3>
                  <span className="text-[11px] text-muted block mt-1">Nusrat Jahan</span>
                  <div className="grid grid-cols-2 gap-x-5 gap-y-3 mt-5">
                    <div>
                      <span className="text-[8px] text-muted block">শ্রেণি</span>
                      <b className="text-[11px] text-ink block mt-0.5">নবম শ্রেণি (বিজ্ঞান)</b>
                    </div>
                    <div>
                      <span className="text-[8px] text-muted block">রক্তের গ্রুপ</span>
                      <b className="text-[12px] text-red-600 block mt-0.5">O+</b>
                    </div>
                    <div className="col-span-2">
                      <span className="text-[8px] text-muted block">শিক্ষা প্রতিষ্ঠান</span>
                      <b className="text-[11px] text-ink leading-snug block mt-0.5">ধানমন্ডি সরকারি বালিকা উচ্চ বিদ্যালয়</b>
                    </div>
                    <div className="col-span-2">
                      <span className="text-[8px] text-muted block">জন্ম তারিখ</span>
                      <b className="text-[11px] text-ink block mt-0.5">১৫ অক্টোবর, ২০১০</b>
                    </div>
                  </div>
                </div>
              </div>

              <div className="my-5 border-t border-dashed border-[#d8d9d1]" />

              <div className="grid grid-cols-3 rounded-2xl overflow-hidden border border-[#dedfd7] bg-[#f7f8f3]">
                {[
                  ["অধ্যায় সম্পন্ন", "৪২টি"],
                  ["অর্জিত সনদ", "৮টি"],
                  ["গড় নম্বর", "৮৬%"],
                ].map(([label, value], index) => (
                  <div className={`py-4 px-2 text-center ${index < 2 ? "border-r border-[#dedfd7]" : ""}`} key={label}>
                    <span className="text-[8px] text-muted block">{label}</span>
                    <b className="text-xl font-extrabold text-ink block mt-1">{value}</b>
                  </div>
                ))}
              </div>

              <div className="mt-5">
                <span className="text-[8px] text-muted block text-left mb-2">বিশেষ দক্ষতা ও অর্জন</span>
                <div className="flex flex-wrap gap-2">
                  {["ক্রিয়েটিভ রাইটিং", "প্রোগ্রামিং", "গণিত অলিম্পিয়াড"].map((tag) => (
                    <span className="text-[9px] px-3 py-1.5 bg-mint border border-green/20 rounded-full text-deep font-bold" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-5 flex items-end justify-between gap-4">
                <div className="text-left">
                  <span className="block text-[7px] text-muted">যাচাইকৃত ডিজিটাল পরিচয়</span>
                  <span className="block text-[8px] font-bold text-deep mt-1">আজীবন একাডেমিক রেকর্ড</span>
                </div>
                <QrCodeIcon size={42} className="text-ink" aria-label="যাচাইকরণ কিউআর কোড" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 max-lg:hidden">
            <div className="bg-[#f6f6f1] border border-line rounded-[20px] p-6 text-left">
              <span className="text-[9px] uppercase tracking-wider text-gray-500">সেরা দক্ষতা</span>
              <b className="text-[26px] font-bold text-ink block my-2">বিজ্ঞান</b>
              <small className="text-[9px] text-green font-bold">এই টার্মে সেরা ১০%</small>
            </div>
            <div className="bg-[#f6f6f1] border border-line rounded-[20px] p-6 text-left">
              <span className="text-[9px] uppercase tracking-wider text-gray-500">সর্বশেষ অর্জন</span>
              <b className="text-[26px] font-bold text-ink block my-2">গণিত অভিযাত্রী</b>
              <small className="text-[9px] text-green font-bold">এই সপ্তাহে অর্জিত</small>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Model Test Section */}
      <section className="bg-deep text-white py-28 px-16 max-[760px]:py-20 max-[760px]:px-5 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-[8vw] items-center">
        <div className="relative h-[600px] max-[760px]:h-[480px] w-full max-w-[650px] mx-auto shrink-0">
          <div className="absolute left-0 top-5 bg-white text-ink rounded-3xl p-7 max-w-[520px] w-full shadow-2xl z-10">
            <div className="flex justify-between text-[9px] text-gray-500 font-semibold tracking-wider text-left">
              <span>মডেল টেস্ট · গণিত</span>
              <MoreHorizontalIcon size={18} className="text-gray-500 cursor-pointer" />
            </div>
            <div className="flex items-center gap-7.5 my-8">
              <div className="w-[140px] h-[140px] rounded-full bg-[conic-gradient(var(--color-green)_0_92%,#eee_92%)] flex items-center justify-center relative before:content-[''] before:absolute before:inset-3 before:rounded-full before:bg-white shrink-0">
                <b className="relative z-10 text-[42px] font-extrabold text-ink">৯২</b>
              </div>
              <p className="text-sm leading-relaxed text-gray-500 text-left">
                <strong className="text-xl text-ink font-extrabold block mb-1">চমৎকার!</strong>
                তোমার ১৪% উন্নতি হয়েছে।
              </p>
            </div>
            <div className="flex flex-col gap-3.5">
              {[
                ["বীজগণিত", "96%"],
                ["জ্যামিতি", "82%"],
                ["পরিসংখ্যান", "76%"]
              ].map(([subj, pct]) => (
                <div className="grid grid-cols-[80px_1fr_35px] gap-2.5 items-center text-[9px] text-ink font-bold" key={subj}>
                  <span className="text-left">{subj}</span>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-green rounded-full" style={{ width: pct }} />
                  </div>
                  <span className="text-right text-muted">{pct}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute right-[-10px] bottom-5 bg-[#f5edcf] text-ink w-[300px] max-[760px]:w-[220px] h-[235px] max-[760px]:h-[190px] border-8 border-double border-[#d3b86b] rounded-lg p-6 max-[760px]:p-3.5 text-center rotate-5 shadow-2xl z-10">
            <span className="text-[7px] tracking-widest text-[#ba8e13] uppercase block mb-1">ওয়ানস্টুডেন্ট বাংলাদেশ</span>
            <span className="text-xl text-[#ba8e13]">✦</span>
            <small className="text-[7px] text-gray-500 uppercase tracking-widest block mt-1">সম্পন্নকরণের সনদ</small>
            <h4 className="font-serif text-xl max-[760px]:text-base font-bold my-3">গণিতের ভিত্তি</h4>
            <p className="text-[9px] text-muted">প্রদান করা হলো <b className="font-bold text-ink">রাফি রহমানকে</b></p>
            <div className="flex justify-between border-t border-[#c4ad70] pt-3 mt-4.5 text-[7px] text-gray-500">
              <span>যাচাইকৃত</span>
              <span>জুন ২০২৬</span>
            </div>
          </div>
          <div className="absolute right-1 top-0 max-[760px]:hidden bg-yellow text-ink border-2 border-ink rounded-[18px] p-[18px] rotate-5 shadow-md z-20 flex flex-col items-center">
            <span className="text-[8px] tracking-wider uppercase font-bold">উন্নতি</span>
            <b className="text-2xl font-bold mt-1 flex items-center gap-1">
              <ArrowUpRight01Icon size={20} /> ১৪%
            </b>
          </div>
        </div>
        <div className="flex flex-col text-left">
          <SectionTitle
            eyebrow="স্মার্ট পরীক্ষা ও সনদ"
            title={<>অনুশীলন। পরীক্ষা।<br /><em className="text-yellow not-italic">এরপর কী, জেনে নাও।</em></>}
            text="অধ্যায় কুইজ, মক পরীক্ষা ও তাৎক্ষণিক বিশ্লেষণ প্রতিটি ফলাফলকে পরবর্তী স্পষ্ট ধাপে রূপ দেয়।"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-8.5">
            <div className="border-t border-[#426359] pt-4.5 flex flex-col text-left">
              <b className="text-[13px] font-bold text-white">তাৎক্ষণিক অন্তর্দৃষ্টি</b>
              <span className="text-xs text-[#aebfba] mt-2">শক্তি ও দুর্বল বিষয় পরিষ্কারভাবে দেখো।</span>
            </div>
            <div className="border-t border-[#426359] pt-4.5 flex flex-col text-left">
              <b className="text-[13px] font-bold text-white">বাস্তব অর্জন</b>
              <span className="text-xs text-[#aebfba] mt-2">অগ্রগতির যাচাইকৃত রেকর্ড গড়ে তোলো।</span>
            </div>
          </div>
          <div className="w-fit">
            <Button secondary>মূল্যায়ন দেখুন</Button>
          </div>
        </div>
      </section>


      {/* 9. Learning Section */}
      <section className="bg-[#f0efe9] py-28 px-16 max-[760px]:py-20 max-[760px]:px-5" id="learning">
        <div className="max-w-[1312px] mx-auto">
          <SectionTitle
            center
            eyebrow="শেখার মূল কেন্দ্র"
            title={<>Ultraconfident লার্নিং<br /><em className="text-green not-italic">যা কিছু প্রয়োজন।</em></>}
            text="পাঠ্যক্রমের বিষয়বস্তু, বুদ্ধিদীপ্ত সহায়তা ও কার্যকর অনুশীলন — একটি সহজ অভিজ্ঞতায় সংযুক্ত।"
          />
          <div className="bg-white border border-gray-300 rounded-[28px] p-3 shadow-[0_30px_80px_rgba(30,32,27,0.1)]">
            <div className="flex gap-2 p-2 pb-4.5 overflow-x-auto whitespace-nowrap scrollbar-none">
              <span className="bg-[#173d31] text-white px-4 py-2 rounded-full text-xs font-bold select-none cursor-default">অষ্টম শ্রেণি</span>
              {["বাংলা", "ইংরেজি", "গণিত", "বিজ্ঞান", "আইসিটি"].map((x) => (
                <span
                  onClick={() => setSelectedSubject(x)}
                  className={`px-4 py-2 rounded-full text-xs cursor-pointer font-medium border transition-colors ${
                    selectedSubject === x
                      ? "bg-ink text-white border-ink shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
                      : "bg-white text-ink border-gray-300 hover:bg-gray-50"
                  }`}
                  key={x}
                >
                  {x}
                </span>
              ))}
            </div>
            <div className="min-h-[610px] bg-[#f7f7f4] rounded-[20px] grid grid-cols-1 lg:grid-cols-[210px_1fr] overflow-hidden">
              <aside className="bg-[#173d31] text-white p-[28px_22px] max-lg:hidden flex flex-col">
                <Logo light />
                <small className="text-[8px] tracking-[0.14em] uppercase text-[#a8c4ba] mt-12 mb-4 block text-left">আমার পড়াশোনা</small>
                <div className="flex flex-col gap-1.5 text-left">
                  {["সারসংক্ষেপ", "আমার বিষয়", "অনুশীলন", "পরীক্ষা", "সনদ"].map((x, i) => (
                    <div className={`flex items-center gap-2.5 text-xs text-[#b2c9c1] p-3 rounded-lg cursor-pointer transition-colors ${i === 1 ? "bg-[#285a4a] text-white" : "hover:bg-emerald-900/40"}`} key={x}>
                       <i className="w-2.5 h-2.5 border border-current rounded-sm" />
                      {x}
                    </div>
                  ))}
                </div>
              </aside>
              <div className="p-10 max-[760px]:p-5 flex flex-col">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex flex-col text-left">
                    <small className="text-[9px] text-green font-bold tracking-wider uppercase mb-1">অষ্টম শ্রেণি · {selectedSubject}</small>
                    <h3 className="text-2xl md:text-3xl font-bold text-ink">যেখান থেকে থেমেছিলে, সেখান থেকেই শুরু করো।</h3>
                  </div>
                  <div className="w-[44px] h-[44px] rounded-full overflow-hidden border border-[#1dbf73]/50 shadow-sm bg-mint shrink-0 max-[760px]:hidden">
                    <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80" alt="Rafi" />
                  </div>
                </div>
                <div className="min-h-[255px] bg-yellow rounded-[22px] p-9 max-[760px]:p-6 grid grid-cols-1 md:grid-cols-2 relative overflow-hidden">
                  <div className="flex flex-col z-10 text-left">
                    <span className="text-[9px] tracking-wider uppercase font-bold text-ink">{activeData.chapterNum}</span>
                    <h4 className="font-['Manrope'] text-3xl md:text-[31px] font-extrabold tracking-tight my-6 text-ink">{activeData.currentChapter}</h4>
                    <p className="text-xs text-[#5e561c] mb-6">{activeData.progressText}</p>
                    <button className="w-fit bg-ink text-white rounded-full p-[9px_9px_9px_16px] text-xs font-bold flex items-center gap-3 cursor-pointer hover:bg-neutral-800 transition-colors">
                      পাঠ চালিয়ে যাও
                      <span className="inline-grid place-items-center w-[25px] h-[25px] bg-white text-ink rounded-full shrink-0">
                        <ArrowUpRight01Icon size={12} />
                      </span>
                    </button>
                  </div>
                  <div className="relative max-md:hidden select-none">
                    <i className="absolute border-2 border-ink w-[125px] h-[125px] rounded-full right-10 top-[25px]" />
                    <i className="absolute border-2 border-ink w-[105px] h-[105px] rotate-45 right-[90px] top-[60px]" />
                    <i className="absolute border-2 border-ink w-[90px] h-[90px] rounded-full right-0 -bottom-[45px] bg-green" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-[18px]">
                  {activeData.subUnits.map(([num, name, status, colorClass, pct]) => (
                    <div className="bg-white border border-gray-200 rounded-[15px] p-[18px] flex flex-col text-left" key={name}>
                      <span className="text-[9px] text-green font-bold">{num}</span>
                      <b className="text-[13px] font-bold text-ink my-4">{name}</b>
                      <small className="text-[9px] text-gray-500">{status}</small>
                      <div className="h-1 bg-gray-100 rounded-full mt-4 overflow-hidden">
                        <div className={`h-full ${colorClass} rounded-full`} style={{ width: pct }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. QR Learning Section */}
      <section className="py-28 px-16 max-[760px]:py-20 max-[760px]:px-5 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-[7vw] items-center">
        <div className="flex flex-col text-left">
          <SectionTitle
            eyebrow="বই থেকে ডিজিটাল ক্লাস"
            title={<>একটি কিউআর স্ক্যানেই<br /><em className="text-green not-italic">পাঠ অথবা পরীক্ষা শুরু।</em></>}
            text="প্রতিটি বইয়ের অধ্যায়ের সঙ্গে থাকবে নির্দিষ্ট ভিডিও পাঠ ও পরীক্ষার কিউআর কোড। শিক্ষার্থী বই থেকেই সরাসরি সঠিক ডিজিটাল ক্লাসে যেতে পারবে।"
          />
          <div className="flex flex-col gap-3 my-8">
            {[
              ["০১", "বইয়ের কিউআর কোড স্ক্যান করো"],
              ["০২", "সংশ্লিষ্ট ভিডিও পাঠ দেখো"],
              ["০৩", "কুইজ বা পরীক্ষা সরাসরি শুরু করো"]
            ].map(([num, text]) => (
              <div className="flex items-center gap-4 border-t border-line pt-3.5 text-sm font-semibold text-ink" key={num}>
                <b className="text-xs text-green font-bold">{num}</b>
                <span>{text}</span>
              </div>
            ))}
          </div>
          <Button>কিউআর শেখার অভিজ্ঞতা দেখুন</Button>
        </div>
        <div className="relative h-[620px] max-[760px]:h-[520px] bg-mint rounded-[35%_35%_25px_25px] flex items-center justify-center overflow-hidden">
          <div className="w-[78%] max-[760px]:w-[92%] h-[390px] max-[760px]:h-[350px] bg-[#f4ead0] border-8 border-[#2c2419] rounded-[12px_18px_18px_12px] grid grid-cols-2 -rotate-5 shadow-2xl relative after:content-[''] after:absolute after:left-1/2 after:top-0 after:bottom-0 after:w-0.5 after:bg-[#b6a98c]">
            <div className="p-7.5 max-[760px]:p-3.5 flex flex-col text-left justify-between relative">
              <div>
                <span className="text-[8px] text-[#756b55] uppercase tracking-wider block">অধ্যায় ০৪</span>
                <h3 className="text-2xl max-[760px]:text-[18px] font-bold text-ink mt-5 mb-2.5">বীজগাণিতিক রাশি</h3>
                <p className="text-[10px] leading-relaxed text-[#756b55]">চলক, সহগ ও রাশির ধারণা উদাহরণসহ শিখি।</p>
                <div className="flex flex-col gap-2 mt-6">
                  <i className="h-0.5 bg-[#c8bda4] rounded-full w-full" />
                  <i className="h-0.5 bg-[#c8bda4] rounded-full w-[86%]" />
                  <i className="h-0.5 bg-[#c8bda4] rounded-full w-[70%]" />
                  <i className="h-0.5 bg-[#c8bda4] rounded-full w-[90%]" />
                </div>
              </div>
              <div className="bg-white border border-[#cfc4a9] rounded-xl p-2.5 grid grid-cols-[54px_1fr] gap-x-2.5 items-center">
                <div className="w-[54px] h-[54px] max-[760px]:w-[42px] max-[760px]:h-[42px] bg-white border border-ink p-1 grid grid-cols-6 gap-[2px] shrink-0">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <i className={`rounded-[1px] ${i % 3 === 0 ? "bg-ink" : "bg-white"}`} key={i} />
                  ))}
                </div>
                <div className="flex flex-col text-left leading-tight">
                  <b className="text-[10px] text-ink font-bold">ভিডিও পাঠ দেখো</b>
                  <small className="text-[7px] text-gray-500 mt-1">স্ক্যান করো</small>
                </div>
              </div>
            </div>
            <div className="p-7.5 max-[760px]:p-3.5 flex flex-col text-left justify-between relative">
              <div>
                <span className="text-[8px] text-[#756b55] uppercase tracking-wider block">অধ্যায় অনুশীলন</span>
                <div className="text-[37px] text-center font-bold text-deep py-7 max-[760px]:py-4">x + 3y</div>
                <div className="flex flex-col gap-2">
                  <i className="h-0.5 bg-[#c8bda4] rounded-full w-full" />
                  <i className="h-0.5 bg-[#c8bda4] rounded-full w-[86%]" />
                  <i className="h-0.5 bg-[#c8bda4] rounded-full w-[70%]" />
                </div>
              </div>
              <div className="bg-yellow border border-[#cfc4a9] rounded-xl p-2.5 grid grid-cols-[54px_1fr] gap-x-2.5 items-center">
                <div className="w-[54px] h-[54px] max-[760px]:w-[42px] max-[760px]:h-[42px] bg-white border border-ink p-1 grid grid-cols-6 gap-[2px] shrink-0">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <i className={`rounded-[1px] ${i % 4 === 0 ? "bg-ink" : "bg-white"}`} key={i} />
                  ))}
                </div>
                <div className="flex flex-col text-left leading-tight">
                  <b className="text-[10px] text-ink font-bold">অধ্যায় পরীক্ষা</b>
                  <small className="text-[7px] text-gray-700 mt-1">এখনই শুরু করো</small>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute z-10 right-2.5 top-[75px] max-[760px]:right-1 max-[760px]:top-[30px] bg-white border border-ink rounded-2xl p-[14px_18px] max-[760px]:p-2.5 flex items-center gap-3 shadow-[4px_5px_0_#111] rotate-4">
            <span className="w-[35px] h-[35px] rounded-full flex items-center justify-center bg-green text-ink shrink-0">
              <PlayIcon size={16} className="fill-current text-ink" />
            </span>
            <div className="flex flex-col text-left">
              <small className="text-[7px] text-gray-500 leading-none mb-1">কিউআর সংযুক্ত</small>
              <b className="text-[11px] max-[760px]:text-[9px] text-ink font-bold leading-none">১৮ মিনিটের ভিডিও পাঠ</b>
            </div>
          </div>
          <div className="absolute z-10 left-1.5 bottom-[55px] max-[760px]:left-1 max-[760px]:bottom-[25px] bg-white border border-ink rounded-2xl p-[14px_18px] max-[760px]:p-2.5 flex items-center gap-3 shadow-[4px_5px_0_#111] -rotate-4">
            <span className="w-[35px] h-[35px] rounded-full flex items-center justify-center bg-yellow text-ink shrink-0">
              <Tick01Icon size={18} className="stroke-[2.5]" />
            </span>
            <div className="flex flex-col text-left">
              <small className="text-[7px] text-gray-500 leading-none mb-1">সরাসরি চালু হবে</small>
              <b className="text-[11px] max-[760px]:text-[9px] text-ink font-bold leading-none">১০ প্রশ্নের অধ্যায় পরীক্ষা</b>
            </div>
          </div>
        </div>
      </section>

      {/* 11. AI Assistant Section */}
      <section className="py-28 px-16 max-[760px]:py-20 max-[760px]:px-5 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-16 lg:gap-[8vw] items-center">
        <div className="flex flex-col text-left">
          <SectionTitle
            eyebrow="এআই পড়াশোনা সহকারী"
            title={<>ধৈর্যশীল পড়ার সঙ্গী,<br /><em className="text-green not-italic">যেকোনো সময় পাশে।</em></>}
            text="বাংলা বা ইংরেজিতে প্রশ্ন করো। যে অধ্যায় পড়ছ, সেটির ভিত্তিতে পরিষ্কার ধাপে ধাপে ব্যাখ্যা পাও।"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8.5">
            {["কঠিন বিষয় সহজভাবে বোঝায়", "দ্রুত অনুশীলনী কুইজ তৈরি করে", "শর্টকাট নয়, সঠিকভাবে পথ দেখায়", "পরবর্তী ধাপ ব্যক্তিভেদে সাজায়"].map((x) => (
              <div className="flex items-center gap-2.5 text-sm font-semibold text-ink" key={x}>
                <span className="w-6 h-6 rounded-full bg-mint text-deep flex items-center justify-center text-xs">✓</span>
                {x}
              </div>
            ))}
          </div>
          <Button>এআই শিক্ষকের সঙ্গে পরিচিত হও</Button>
        </div>
        <div className="relative h-[650px] max-[760px]:h-[620px] w-full max-w-[550px] mx-auto">
          <div className="absolute inset-[80px_0_0_80px] max-[760px]:inset-[100px_0_0_20px] rounded-[43%_57%_28%_72%_/_51%_35%_65%_49%] overflow-hidden filter saturate-70">
            <img className="w-full h-full object-cover" src={photos.tablet} alt="ডিজিটাল মাধ্যমে পড়ছে শিক্ষার্থী" />
          </div>
          <PhoneChat />
          <div className="absolute bg-white border border-gray-200 rounded-full py-3 px-4.5 text-xs text-ink font-semibold shadow-md right-2.5 top-[130px] z-20 max-[760px]:hidden">
            অধ্যায়টি বুঝিয়ে বলো
          </div>
          <div className="absolute bg-yellow border border-gray-200 rounded-full py-3 px-4.5 text-xs text-ink font-semibold shadow-md right-[60px] bottom-[45px] z-20 -rotate-4 max-[760px]:hidden">
            একটি কুইজ বানাও ✦
          </div>
        </div>
      </section>

      {/* 12. Skills Section */}
      <section className="py-28 px-16 max-[760px]:py-20 max-[760px]:px-5 max-w-[1440px] mx-auto">
        <div className="flex justify-between items-end mb-[60px] flex-wrap gap-6 text-left">
          <SectionTitle
            eyebrow="দক্ষতাভিত্তিক শিক্ষা"
            title={<>পাঠ্যবইয়ের সঙ্গে<br /><em className="text-green not-italic">জীবনের দক্ষতাও।</em></>}
            text="শিক্ষার্থী নিজের আগ্রহ ও এলাকার প্রয়োজন অনুযায়ী বাস্তবমুখী দক্ষতা শিখতে পারবে — ভিডিও, প্রকল্প, মূল্যায়ন ও সনদসহ।"
          />
          <p className="max-w-[380px] text-muted text-base leading-relaxed mb-6">একই শিক্ষার্থী আইডিতে একাডেমিক ফলাফলের পাশাপাশি দক্ষতার অর্জনও সংরক্ষিত থাকবে।</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-5 items-start">
          <article className="h-[650px] max-[760px]:h-[540px] rounded-[28px] overflow-hidden relative text-white text-left w-full shadow-lg">
            <img className="w-full h-full object-cover filter brightness-50 saturate-70" src={photos.rural} alt="কৃষি ও বাস্তবমুখী দক্ষতা শিক্ষা" />
            <div className="absolute z-10 left-10 right-10 bottom-10 max-[760px]:left-6 max-[760px]:right-6 max-[760px]:bottom-6">
              <span className="text-[9px] tracking-wider uppercase font-bold text-yellow">স্থানীয় দক্ষতা</span>
              <h3 className="text-3xl md:text-[42px] font-bold my-4 leading-tight">আধুনিক কৃষি ও খাদ্য উৎপাদন</h3>
              <p className="text-sm text-gray-200 leading-relaxed mb-4">মাটি, বীজ, নিরাপদ চাষ ও বাজার সম্পর্কে প্রকল্পভিত্তিক শিক্ষা।</p>
              <b className="text-[10px] uppercase font-bold text-[#ba9012]">২৪টি ভিডিও · ৬টি প্রকল্প</b>
            </div>
          </article>
          <div className="grid grid-cols-1 gap-3.5 max-lg:grid-cols-3 max-[760px]:grid-cols-1">
            {[
              ["০২", "যোগাযোগ দক্ষতা", "ইংরেজিতে কথা বলা", "প্রতিদিনের কথোপকথন, উচ্চারণ ও আত্মবিশ্বাসের অনুশীলন।", "bg-white"],
              ["০৩", "ভবিষ্যৎ দক্ষতা", "ডিজিটাল ও প্রযুক্তি শিক্ষা", "কম্পিউটার, অনলাইন নিরাপত্তা, কোডিংয়ের ভিত্তি ও সৃজনশীল কাজ।", "bg-yellow"],
              ["০৪", "জীবন ও উদ্যোগ", "উদ্যোক্তা ও জীবনদক্ষতা", "সমস্যা সমাধান, অর্থের মৌলিক ধারণা ও ছোট উদ্যোগ তৈরি।", "bg-mint"]
            ].map(([num, label, heading, desc, bgClass]) => (
              <article className={`border border-line rounded-[22px] p-6 grid grid-cols-[45px_1fr_auto] gap-3.5 items-center text-left ${bgClass}`} key={heading}>
                <span className="text-[11px] text-green font-bold self-start mt-1">{num}</span>
                <div className="flex flex-col">
                  <small className="text-[9px] tracking-wider uppercase text-gray-500 font-bold">{label}</small>
                  <h3 className="text-xl font-bold my-1.5 text-ink leading-tight">{heading}</h3>
                  <p className="text-[11px] text-muted leading-relaxed mt-1">{desc}</p>
                </div>
                <span className="inline-grid place-items-center w-8 h-8 rounded-full bg-ink text-white shrink-0 self-center">
                  <ArrowUpRight01Icon size={14} />
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 13. Beyond the Classroom Section */}
      <section className="bg-[#efeee8] py-28 px-16 max-[760px]:py-20 max-[760px]:px-5">
        <div className="max-w-[1312px] mx-auto">
          <SectionTitle
            center
            eyebrow="শ্রেণিকক্ষের বাইরেও"
            title={<>শক্তিশালী শিক্ষার্থীর প্রয়োজন<br /><em className="text-green not-italic">সুস্থতা ও সঠিক দিকনির্দেশনা।</em></>}
            text="এই যাত্রায় আজ শিক্ষার্থী কেমন আছে এবং আগামীকাল কোথায় যেতে চায় — দুটোই গুরুত্বপূর্ণ।"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 max-[760px]:grid-cols-1">
            <article className="min-h-[650px] bg-mint rounded-[28px] overflow-hidden flex flex-col justify-between text-left">
              <div className="h-[330px] overflow-hidden shrink-0">
                <img className="w-full h-full object-cover" src={photos.wellness} alt="সুস্থতা নিয়ে সহায়ক আলোচনা" />
              </div>
              <div className="p-[42px] max-[760px]:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[9px] tracking-wider uppercase font-bold text-deep">স্বাস্থ্য ও সুস্থতা</span>
                  <h3 className="text-3xl md:text-[40px] font-bold my-4.5 leading-tight text-ink">সব দিক থেকে আরও শক্ত হও।</h3>
                  <p className="text-sm md:text-base text-muted leading-relaxed mb-6">মানসিক সুস্থতা, পুতি, চাপ ও স্বাস্থ্যকর পড়ার অভ্যাসে শিক্ষার্থী-নিরাপদ সহায়তা।</p>
                </div>
                <a className="inline-flex items-center gap-2.5 text-xs font-bold border-b border-ink w-fit pb-1 hover:border-green hover:text-green transition-colors" href="#">
                  সুস্থতা সহায়তা দেখুন
                  <span className="inline-grid place-items-center w-6 h-6 rounded-full bg-ink text-white shrink-0">
                    <ArrowUpRight01Icon size={10} />
                  </span>
                </a>
              </div>
            </article>

            <article className="min-h-[650px] bg-yellow rounded-[28px] overflow-hidden flex flex-col justify-between text-left">
              <div className="p-[42px] max-[760px]:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[9px] tracking-wider uppercase font-bold text-deep">ক্যারিয়ার ও কলেজ</span>
                  <h3 className="text-3xl md:text-[40px] font-bold my-4.5 leading-tight text-ink">নিজের শক্তিকে দিকনির্দেশনায় রূপ দাও।</h3>
                  <p className="text-sm md:text-base text-[#5e561c] leading-relaxed mb-6">আগ্রহ আবিষ্কার করো, ক্যারিয়ার জানো, বৃত্তি খোঁজো এবং স্কুল-পরবর্তী জীবনের প্রস্তুতি নাও।</p>
                </div>
                <a className="inline-flex items-center gap-2.5 text-xs font-bold border-b border-ink w-fit pb-1 hover:text-emerald-950 transition-colors" href="#">
                  ভবিষ্যৎ পরিকল্পনা করো
                  <span className="inline-grid place-items-center w-6 h-6 rounded-full bg-ink text-white shrink-0">
                    <ArrowUpRight01Icon size={10} />
                  </span>
                </a>
              </div>
              <div className="h-[330px] overflow-hidden shrink-0 mt-auto">
                <img className="w-full h-full object-cover" src={photos.career} alt="ভবিষ্যৎ পরিকল্পনা করছে শিক্ষার্থীরা" />
              </div>
            </article>
          </div>
        </div>
      </section>


      {/* 15. Ecosystem Section */}
      <section className="bg-deep text-white py-28 px-16 max-[760px]:py-20 max-[760px]:px-5 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-[6vw] items-center">
        <div className="flex flex-col text-left">
          <SectionTitle
            eyebrow="জাতীয় এডটেক ইকোসিস্টেম"
            title={<>সেরা শিক্ষা উদ্যোগগুলো<br /><em className="text-yellow not-italic">একসঙ্গে কাজ করবে।</em></>}
            text="বিশ্বস্ত এডটেক, স্কুল, প্রশিক্ষণ প্রতিষ্ঠান ও কনটেন্ট নির্মাতারা একটি জাতীয় মানদণ্ডের অধীনে সেবা দিতে পারবে। শিক্ষার্থী পাবে এক পরিচয়ে নিরাপদ ও মানসম্মত অভিজ্ঞতা।"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 my-7.5 max-[760px]:grid-cols-1 text-left">
            {[
              "এক শিক্ষার্থী আইডি ও প্রোফাইল",
              "অনুমোদিত কনটেন্ট ও মূল্যায়ন",
              "অংশীদারদের জন্য উন্মুক্ত সংযোগ",
              "তথ্য নিরাপত্তা ও জাতীয় মানদণ্ড"
            ].map((pt) => (
              <span className="text-sm font-semibold text-[#d1dfda] flex items-center gap-2" key={pt}>
                <Tick01Icon size={16} className="text-yellow shrink-0" />
                {pt}
              </span>
            ))}
          </div>
          <Button>অংশীদার হিসেবে যুক্ত হোন</Button>
        </div>
        <div className="relative h-[590px] max-[760px]:h-[540px] w-full max-w-[650px] mx-auto flex items-center justify-center shrink-0">
          <div className="absolute z-10 w-[235px] h-[235px] max-[760px]:w-[190px] max-[760px]:h-[190px] bg-yellow text-ink rounded-full flex flex-col justify-center items-center text-center p-7.5 shadow-xl">
            <Logo />
            <b className="text-base md:text-[17px] font-extrabold leading-snug mt-5">জাতীয় ডিজিটাল<br/>লার্নিং প্ল্যাটফর্ম</b>
            <small className="text-[8px] text-gray-700 mt-2 font-semibold">এক পরিচয় · এক প্রোফাইল</small>
          </div>
          <div className="absolute z-20 bg-white text-ink rounded-2xl p-[15px_18px] max-[760px]:p-2.5 shadow-lg flex flex-col text-left node-one">
            <span className="text-[7px] text-green font-bold uppercase tracking-wider">ভিডিও শিক্ষা</span>
            <b className="text-[11px] font-bold text-ink mt-1">এডটেক অংশীদার</b>
          </div>
          <div className="absolute z-20 bg-white text-ink rounded-2xl p-[15px_18px] max-[760px]:p-2.5 shadow-lg flex flex-col text-left node-two">
            <span className="text-[7px] text-green font-bold uppercase tracking-wider">দক্ষতা শিক্ষা</span>
            <b className="text-[11px] font-bold text-ink mt-1">প্রশিক্ষণ প্রতিষ্ঠান</b>
          </div>
          <div className="absolute z-20 bg-white text-ink rounded-2xl p-[15px_18px] max-[760px]:p-2.5 shadow-lg flex flex-col text-left node-three">
            <span className="text-[7px] text-green font-bold uppercase tracking-wider">একাডেমিক শিক্ষা</span>
            <b className="text-[11px] font-bold text-ink mt-1">স্কুল ও শিক্ষক</b>
          </div>
          <div className="absolute z-20 bg-white text-ink rounded-2xl p-[15px_18px] max-[760px]:p-2.5 shadow-lg flex flex-col text-left node-four">
            <span className="text-[7px] text-green font-bold uppercase tracking-wider">পাবলিক সেবা</span>
            <b className="text-[11px] font-bold text-ink mt-1">জাতীয় প্রতিষ্ঠান</b>
          </div>
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 540" aria-hidden="true">
            <path className="fill-none stroke-[#4d7568] stroke-1.5 stroke-dasharray-[7_7]" d="M300 270 L130 120 M300 270 L485 110 M300 270 L505 420 M300 270 L105 425" />
            <circle className="fill-none stroke-[#4d7568] stroke-1.5 stroke-dasharray-[7_7]" cx="300" cy="270" r="155" />
          </svg>
        </div>
      </section>

      {/* 16. Impact Section */}
      <section className="py-28 px-16 max-[760px]:py-20 max-[760px]:px-5 max-w-[1440px] mx-auto" id="impact">
        <div className="h-[720px] max-[760px]:h-[700px] rounded-[32px] overflow-hidden relative shadow-lg text-white text-left">
          <img className="w-full h-full object-cover filter brightness-[0.55] saturate-75" src={photos.group} alt="একসঙ্গে বিভিন্ন বয়সের শিক্ষার্থীরা" />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/75 via-emerald-950/20 to-transparent" />
          <div className="absolute z-10 left-[65px] max-[760px]:left-6 max-[760px]:right-6 top-[75px] max-[760px]:top-11 max-w-[780px]">
            <span className="text-sm md:text-base tracking-wider uppercase font-extrabold text-white mb-6 block">জাতীয় স্বপ্ন</span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6">
              সারাদেশের শিক্ষার্থী সহায়তা <em className="text-yellow not-italic">বদলে দেওয়ার জন্য নির্মিত।</em>
            </h2>
            <p className="text-lg md:text-xl text-gray-200">আরও ভালো প্রবেশাধিকার। আরও ভালো দিকনির্দেশনা। আরও ভালো ফলাফল।</p>
          </div>
          <div className="absolute z-10 bottom-0 left-0 right-0 bg-[#0c1813]/72 backdrop-blur-md grid grid-cols-1 md:grid-cols-3 py-9 px-12 max-[760px]:p-6 gap-6 max-[760px]:gap-4.5 text-center">
            {[
              ["২ কোটি+", "সম্ভাব্য শিক্ষার্থী"],
              ["প্রথম থেকে দ্বাদশ শ্রেণি পর্যন্ত", "একটি একীভূত যাত্রা"],
              ["৬৪", "জেলা নিয়ে স্বপ্ন"]
            ].map(([val, label], idx) => (
              <div className={`flex flex-col items-center border-r border-white/25 max-md:border-none ${idx === 2 ? "border-none" : ""}`} key={label}>
                <b className="text-3xl md:text-[42px] font-extrabold text-white leading-none">{val}</b>
                <span className="text-[12px] uppercase tracking-wider font-semibold text-emerald-100 mt-2 block">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 17. Stories Section */}
      <section className="py-28 px-16 max-[760px]:py-20 max-[760px]:px-5 max-w-[1440px] mx-auto text-center">
        <SectionTitle
          eyebrow="বাস্তব মানুষ। বাস্তব অগ্রগতি।"
          title={<>যাঁদের হাতে শিক্ষা সম্ভব,<br /><em className="text-green not-italic">তাঁদের ঘিরেই তৈরি।</em></>}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4.5 mt-16 text-left">
          {[
            [photos.family, "“এখন আমি পরিষ্কার বুঝতে পারি আমার সন্তান কোথায় ভালো করছে এবং কোথায় সহায়তা দরকার।”", "ফারজানা আহমেদ", "অভিভাবক"],
            [photos.teacher, "“শ্রেণির তথ্য আমাকে যেসব শিক্ষার্থীর সবচেয়ে বেশি প্রয়োজন, তাদের জন্য সময় দিতে সাহায্য করে।”", "মাহমুদ হাসান", "শিক্ষক"],
            [photos.tablet, "“বাংলা ব্যাখ্যা ও অনুশীলনী পরীক্ষা কঠিন অধ্যায়কেও সহজ মনে করায়।”", "নাবিলা ইসলাম", "দশম শ্রেণির শিক্ষার্থী"]
          ].map(([img, q, n, r]) => (
            <article className="border border-line rounded-3xl overflow-hidden bg-white shadow-sm flex flex-col" key={n}>
              <div className="h-[280px] overflow-hidden">
                <img className="w-full h-full object-cover filter saturate-75" src={img} alt="story profile" />
              </div>
              <div className="p-7.5 flex-1 flex flex-col justify-between min-h-[280px]">
                <span className="font-serif text-[50px] text-green leading-none block h-10">“</span>
                <p className="font-['Manrope'] text-lg font-medium leading-relaxed text-ink mb-6">{q}</p>
                <div className="flex flex-col">
                  <b className="text-xs font-extrabold text-ink">{n}</b>
                  <small className="text-[9px] text-gray-500 font-semibold mt-1 block">{r}</small>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 18. Final CTA Section */}
      <section className="py-28 px-16 max-[760px]:py-20 max-[760px]:px-5 max-w-[1440px] mx-auto" id="contact">
        <div className="bg-mint rounded-[32px] grid grid-cols-1 md:grid-cols-2 min-h-[590px] max-[760px]:min-h-[850px] overflow-hidden">
          <div className="p-16 max-[760px]:p-6 text-left flex flex-col justify-center">
            <span className="text-sm md:text-base font-extrabold text-deep uppercase tracking-wider block mb-5.5">উজ্জ্বল পথের শুরু এখানেই</span>
            <h2 className="text-4xl md:text-5xl lg:text-[72px] font-bold leading-tight mb-6 text-ink">প্রতিটি শিক্ষার্থীকে<br /><em className="text-yellow not-italic">এগিয়ে যেতে দিন।</em></h2>
            <p className="text-lg text-[#577067] leading-relaxed mb-9 max-w-[540px]">আপনার শিক্ষার্থীদের জন্য পড়াশোনা, সহায়তা, সুস্থতা ও ভবিষ্যৎ পরিকল্পনা একসঙ্গে আনুন।</p>
            <div className="flex gap-3.5 flex-wrap">
              <Button>শুরু করুন</Button>
              <Button secondary>ডেমো চান</Button>
            </div>
          </div>
          <div className="relative margin-t-[35px] max-[760px]:mx-5 max-[760px]:h-[400px] select-none flex items-end justify-center shrink-0">
            <div className="absolute w-[400px] h-[400px] rounded-full bg-yellow right-[-50px] top-5" />
            <img className="relative z-10 h-[90%] rounded-[45%_45%_0_0] object-cover filter saturate-75" src={photos.group} alt="শেখার জন্য প্রস্তুত শিক্ষার্থীরা" />
            <div className="absolute z-20 right-4.5 top-6 bg-white border border-ink rounded-2xl p-4 text-[10px] text-ink font-bold rotate-4 text-center shadow-lg leading-tight">
              বাংলাদেশের প্রতিটি শিক্ষার্থীর<br/><b className="font-extrabold text-xs block mt-1">জন্য নির্মিত।</b>
            </div>
          </div>
        </div>
      </section>

      {/* 19. Footer */}
      <footer className="bg-ink text-white py-16 px-8 max-[760px]:py-12 max-[760px]:px-4">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.6fr_0.7fr_0.7fr_0.7fr_1.2fr] gap-11">
          <div className="flex flex-col text-left max-lg:col-span-full">
            <Logo light />
            <p className="text-[#9ba09d] text-sm leading-relaxed max-w-[280px] my-6">বাংলাদেশের জাতীয় ডিজিটাল লার্নিং প্ল্যাটফর্ম — প্রতিটি শিক্ষার্থীর পড়াশোনা, দক্ষতা, সুস্থতা ও ভবিষ্যতের জন্য।</p>
            <span className="text-[9px] uppercase tracking-wider text-yellow font-semibold">এক পরিচয় · এক প্রোফাইল · আজীবন শিক্ষা</span>
          </div>
          <div className="flex flex-col gap-3.5 text-left">
            <b className="text-[11px] uppercase tracking-wider text-white font-bold mb-2 block">প্ল্যাটফর্ম</b>
            {["লার্নিং হাব", "এআই সহকারী", "পরীক্ষা", "শিক্ষার্থী পাসপোর্ট"].map((lnk) => (
              <a className="text-[11px] text-[#a9aeab] hover:text-white transition-colors" href="#" key={lnk}>{lnk}</a>
            ))}
          </div>
          <div className="flex flex-col gap-3.5 text-left">
            <b className="text-[11px] uppercase tracking-wider text-white font-bold mb-2 block">সহায়তা</b>
            {["শিক্ষকদের জন্য", "অভিভাবকদের জন্য", "স্বাস্থ্য", "ক্যারিয়ার"].map((lnk) => (
              <a className="text-[11px] text-[#a9aeab] hover:text-white transition-colors" href="#" key={lnk}>{lnk}</a>
            ))}
          </div>
          <div className="flex flex-col gap-3.5 text-left">
            <b className="text-[11px] uppercase tracking-wider text-white font-bold mb-2 block">প্রতিষ্ঠান</b>
            {["আমাদের সম্পর্কে", "প্রভাব", "যোগাযোগ", "প্রবেশগম্যতা"].map((lnk) => (
              <a className="text-[11px] text-[#a9aeab] hover:text-white transition-colors" href="#" key={lnk}>{lnk}</a>
            ))}
          </div>
          <div className="flex flex-col gap-3.5 text-left max-lg:col-span-full">
            <b className="text-[11px] uppercase tracking-wider text-white font-bold mb-2 block">সঙ্গে থাকুন</b>
            <p className="text-[11px] text-gray-400">খবর, অগ্রগতি ও সুযোগের আপডেট পান।</p>
            <div className="flex border-b border-gray-600 items-center gap-2 mt-2 py-1.5 w-full">
              <input className="bg-transparent border-none outline-none text-white text-xs py-2 w-full placeholder-gray-500 font-sans" placeholder="আপনার ইমেইল ঠিকানা" />
              <button className="bg-green text-ink rounded-full w-[34px] h-[34px] flex items-center justify-center cursor-pointer hover:bg-emerald-400 transition-colors shrink-0">
                <ArrowRight01Icon size={16} />
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto border-t border-neutral-800 pt-5.5 mt-16 flex justify-between items-center text-[9px] text-gray-500 flex-wrap gap-4">
          <span>© ২০২৬ ওয়ানস্টুডেন্ট বাংলাদেশ</span>
          <span>গোপনীয়তা · শর্তাবলি · শিক্ষার্থী নিরাপত্তা</span>
          <a className="text-white hover:text-green transition-colors flex items-center gap-1.5" href="#top">
            উপরে ফিরুন <ArrowUp01Icon size={12} />
          </a>
        </div>
      </footer>
    </main>
  );
};

const rootEl = document.getElementById("root");
if (rootEl) {
  createRoot(rootEl).render(<App />);
}
