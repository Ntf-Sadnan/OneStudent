import React, { useEffect, useState, useRef } from "react";
import { createRoot } from "react-dom/client";
import QRCode from "qrcode";
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
  Cancel01Icon,
  PhysicsIcon,
  Chemistry01Icon,
  MathIcon,
  DnaIcon,
  ComputerIcon,
  GlobalIcon,
  LanguageCircleIcon,
  UserIcon,
  StarAward01Icon,
  Books01Icon,
  CheckmarkCircle02Icon,
  Fire02Icon
} from "hugeicons-react";
import "./styles.css";
import profileImg from "./profile.webp";

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
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-rendering: optimizeLegibility;
    }

    body, button, input, select, textarea, h1, h2, h3, h4, h5, h6, p, a, span, small, b, strong, em {
      font-family: "Noto Serif Bengali", serif !important;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-rendering: optimizeLegibility;
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

    @keyframes float-slow-1 {
      0% { transform: translateY(0px) rotate(-3deg); }
      50% { transform: translateY(-12px) rotate(-2deg); }
      100% { transform: translateY(0px) rotate(-3deg); }
    }
    @keyframes float-slow-2 {
      0% { transform: translateY(0px) rotate(4deg); }
      50% { transform: translateY(-15px) rotate(5deg); }
      100% { transform: translateY(0px) rotate(4deg); }
    }
    @keyframes float-slow-3 {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0px); }
    }

    .animate-float-1 {
      animation: float-slow-1 6s ease-in-out infinite;
    }
    .animate-float-2 {
      animation: float-slow-2 7s ease-in-out infinite;
    }
    .animate-float-3 {
      animation: float-slow-3 8s ease-in-out infinite;
    }
    .stats-divider-v {
      position: absolute;
      width: 1.5px;
      background: linear-gradient(to bottom, transparent, rgba(222, 222, 215, 0.95) 20%, rgba(222, 222, 215, 0.95) 80%, transparent);
      z-index: 5;
    }
    .stats-divider-h {
      position: absolute;
      height: 1.5px;
      background: linear-gradient(to right, transparent, rgba(222, 222, 215, 0.95) 20%, rgba(222, 222, 215, 0.95) 80%, transparent);
      z-index: 5;
    }

    @keyframes trust-scroll-infinite {
      to {
        transform: translateX(-25%);
      }
    }

    .animate-trust-scroll {
      animation: trust-scroll-infinite 40s linear infinite !important;
    }

    .dashboard-preview-frame {
      position: relative;
      isolation: isolate;
      height: 610px;
    }
    .dashboard-preview-frame main {
      min-height: 610px !important;
      max-height: 610px !important;
      height: 610px !important;
      display: block !important;
      background-color: #f4f3ee !important;
      position: relative !important;
      overflow: hidden !important;
    }
    @media (min-width: 1024px) {
      .dashboard-preview-frame main {
        display: grid !important;
        grid-template-cols: 230px minmax(0, 1fr) !important;
      }
    }
    .dashboard-preview-frame aside {
      position: absolute !important;
      height: 100% !important;
      width: 230px !important;
      top: 0 !important;
      bottom: 0 !important;
      z-index: 50 !important;
    }
    @media (min-width: 1024px) {
      .dashboard-preview-frame aside {
        position: relative !important;
        transform: none !important;
      }
    }
    .dashboard-preview-frame header {
      position: sticky !important;
      top: 0 !important;
      z-index: 30 !important;
    }
    .dashboard-preview-frame main > section {
      height: 100% !important;
      overflow-y: auto !important;
    }
    .dashboard-preview-frame .fixed.inset-0 {
      position: absolute !important;
    }
    .dashboard-preview-frame *::-webkit-scrollbar {
      display: none !important;
    }
    .dashboard-preview-frame * {
      scrollbar-width: none !important;
      -ms-overflow-style: none !important;
    }
  ` }} />
  );


const photos = {
  hero: "/assets/digital-classroom.webp",
  students: "/assets/collaborative-study.webp",
  tablet: "/assets/tablet-nctb-books.webp",
  teacher: "/assets/classroom-teacher.webp",
  family: "/assets/smiling-student.webp",
  rural: "/assets/hsc-textbooks.webp",
  wellness: "/assets/student-counseling.webp",
  career: "/assets/student-writing.webp",
  group: "/assets/college-classroom.webp",
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
  href?: string;
}

const Logo: React.FC<LogoProps> = ({ light = false, href = "#top" }) => {
  return (
    <a className={`flex items-center gap-2.5 min-w-[245px] max-[760px]:min-w-0 ${light ? "text-white" : "text-ink"}`} href={href} aria-label="ওয়ানস্টুডেন্ট বাংলাদেশ হোম">
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

const Button: React.FC<ButtonProps> = ({ children, secondary = false, href = "/dashboard" }) => {
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
    <div className="absolute w-[245px] max-[760px]:w-[260px] bg-white rounded-[22px] p-[16px] max-[760px]:p-4.5 left-[-52px] max-[760px]:left-5 bottom-[25px] max-[760px]:bottom-0 shadow-[0_24px_60px_rgba(25,52,38,0.18)] z-10 animate-float-1">
      <div className="flex justify-between items-center">
        <div className="flex flex-col text-left">
          <span className="text-[14px] max-[760px]:text-[11px] text-gray-400">সুপ্রভাত,</span>
          <b className="text-[18px] max-[760px]:text-[15px] text-ink font-bold leading-tight">আব্দুল্লাহ আল জাহীন</b>
        </div>
        <div className="w-[48px] h-[48px] rounded-full overflow-hidden border border-[#1dbf73]/50 shadow-sm bg-mint shrink-0">
          <img className="w-full h-full object-cover" src={profileImg} alt="Nusrat" />
        </div>
      </div>
      <div className="w-[96px] h-[96px] rounded-full mx-auto my-3.5 bg-[conic-gradient(var(--color-green)_0_78%,#edf0ec_78%)] flex items-center justify-center relative before:content-[''] before:absolute before:w-[72px] before:h-[72px] before:rounded-full before:bg-white">
        <div className="absolute flex flex-col text-center z-10">
          <b className="text-3xl max-[760px]:text-2xl text-ink font-bold">৭৮%</b>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 max-[760px]:gap-1">
        <div className="relative flex flex-col pl-3 text-left">
          <span className="absolute left-0 top-[8px] w-[7px] h-[7px] rounded-full bg-green" />
          <b className="text-[14px] max-[760px]:text-[11px] text-ink font-bold">পদার্থবিজ্ঞান</b>
          <small className="text-[11px] max-[760px]:text-[9px] text-muted leading-tight">১৬টির মধ্যে ১২টি</small>
        </div>
        <div className="relative flex flex-col pl-3 text-left">
          <span className="absolute left-0 top-[8px] w-[7px] h-[7px] rounded-full bg-yellow" />
          <b className="text-[14px] max-[760px]:text-[11px] text-ink font-bold">উচ্চতর গণিত</b>
          <small className="text-[11px] max-[760px]:text-[9px] text-muted leading-tight">১২টির মধ্যে ৮টি</small>
        </div>
      </div>
      <div className="h-1.5 bg-gray-100 rounded-full mt-3.5 overflow-hidden">
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

const LandingApp: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("পদার্থবিজ্ঞান");

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
    "পদার্থবিজ্ঞান": {
      currentChapter: "ভৌত রাশি এবং পরিমাপ",
      chapterNum: "অধ্যায় ০১",
      progressText: "১০টির মধ্যে ৬ষ্ঠ পাঠ · ১৫ মিনিট",
      subUnits: [
        ["০১", "পরিমাপের যন্ত্রপাতি", "১০০% সম্পন্ন", "bg-green", "100%"],
        ["০২", "ত্রুটি ও নির্ভুলতা", "৮০% সম্পন্ন", "bg-green", "80%"],
        ["০৩", "মাত্রা বিশ্লেষণ", "অধ্যায় শুরু করো", "bg-gray-200", "0%"]
      ]
    },
    "রসায়ন": {
      currentChapter: "পদার্থের অবস্থা ও পরমাণুর গঠন",
      chapterNum: "অধ্যায় ০৩",
      progressText: "৮টির মধ্যে ৪র্থ পাঠ · ২০ মিনিট",
      subUnits: [
        ["০১", "রাদারফোর্ড মডেল", "১০০% সম্পন্ন", "bg-green", "100%"],
        ["০২", "বোর পরমাণু মডেল", "৫০% সম্পন্ন", "bg-green", "50%"],
        ["০৩", "কোয়ান্টাম সংখ্যা", "অধ্যায় শুরু করো", "bg-gray-200", "0%"]
      ]
    },
    "উচ্চতর গণিত": {
      currentChapter: "ত্রিকোণমিতি",
      chapterNum: "অধ্যায় ০৮",
      progressText: "১২টির মধ্যে ৮ম পাঠ · ২৫ মিনিট",
      subUnits: [
        ["০১", "রেডিয়ান ও ডিগ্রি", "১০০% সম্পন্ন", "bg-green", "100%"],
        ["০২", "ত্রিকোণমিতিক অনুপাত", "৭৫% সম্পন্ন", "bg-green", "75%"],
        ["০৩", "বৃত্তকলা ক্ষেত্রফল", "অধ্যায় শুরু করো", "bg-gray-200", "0%"]
      ]
    },
    "জীববিজ্ঞান": {
      currentChapter: "কোষ ও টিস্যু",
      chapterNum: "অধ্যায় ০২",
      progressText: "৯টির মধ্যে ৫ম পাঠ · ১৮ মিনিট",
      subUnits: [
        ["০১", "উদ্ভিদ কোষের গঠন", "১০০% সম্পন্ন", "bg-green", "100%"],
        ["০২", "কোষ অঙ্গাণু", "৬০% সম্পন্ন", "bg-green", "60%"],
        ["০৩", "টিস্যুতন্ত্র ও কাজ", "অধ্যায় শুরু করো", "bg-gray-200", "0%"]
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

  const activeData = subjectsData[selectedSubject] || subjectsData["পদার্থবিজ্ঞান"];

  useEffect(() => {
    const onScroll = () => {
      document.body.classList.toggle("scrolled", window.scrollY > 30);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const features = [
    ["০১", "শিক্ষার্থীদের নিজস্ব প্রোফাইল", "প্রতিটি শিক্ষার্থীর জন্য একটি কেন্দ্রীয় ডিজিটাল প্রোফাইল, যেখানে শ্রেণি, স্কুল, আগ্রহ, অগ্রগতি, দক্ষতা ও অর্জনের তথ্য সংরক্ষিত থাকবে।"],
    ["০২", "এনসিটিবি লার্নিং হাব", "প্রথম থেকে দ্বাদশ শ্রেণির অধ্যায়ভিত্তিক পাঠ, নোট, ভিডিও ও অনুশীলন শিক্ষার্থীর প্রোফাইল অনুযায়ী সাজানো থাকবে।"],
    ["০৩", "কিউআর-সংযুক্ত বই", "বইয়ের নির্দিষ্ট অংশ স্ক্যান করলেই শিক্ষার্থী সরাসরি সংশ্লিষ্ট ভিডিও পাঠ, ব্যাখ্যা, কুইজ অথবা মডেল টেস্টে যেতে পারবে।"],
    ["০৪", "এআই পড়াশোনা সহকারী", "শিক্ষার্থীর শ্রেণি, অধ্যায়, দুর্বলতা ও শেখার ইতিহাস বুঝে সহজ বাংলা ব্যাখ্যা, বাড়ির কাজের সহায়তা ও ব্যক্তিগত অনুশীলন দেবে।"],
    ["০৫", "পরীক্ষা ও সার্টিফিকেট", "কুইজ, মডেল টেস্ট ও মূল্যায়নের ফল শিক্ষার্থীর প্রোফাইলে যুক্ত হবে এবং যাচাইকৃত অর্জন হিসেবে সংরক্ষিত থাকবে।"],
    ["০৭", "অভিভাবক তত্ত্বাবধান", "শিক্ষার্থীর প্রোফাইল থেকে সহজ অগ্রগতি সারাংশ, শেখার ঘাটতি, সময় ব্যবহার ও গুরুত্বপূর্ণ সতর্কতা অভিভাবকের কাছে পৌঁছাবে।"],
    ["০৮", "শিক্ষক ও শিক্ষা প্রতিষ্ঠান সহকারী", "অগ্রগতি ও অর্জনের ভিত্তিতে শিক্ষক ও শিক্ষা প্রতিষ্ঠান শ্রেণির অবস্থা, দুর্বল অধ্যায় ও শেখার ঘাটতি দ্রুত শনাক্ত করে প্রয়োজনীয় সহায়তা দিতে পারবে।"],
    ["০৯", "দক্ষতাভিত্তিক শিক্ষা", "শিক্ষার্থীর আগ্রহ ও এলাকার প্রয়োজন অনুযায়ী কৃষি, ইংরেজি বলা, ডিজিটাল দক্ষতা, আর্থিক শিক্ষা ও জীবনমুখী কোর্স যুক্ত হবে।"],
    ["১০", "স্বাস্থ্য ও সুস্থতা", "শিক্ষার্থীর বয়স, পড়ার চাপ ও অভ্যাস অনুযায়ী সুস্থ মন, শরীর, ঘুম, পড়ার রুটিন ও নিরাপদ দিকনির্দেশনা দেওয়া হবে।"],
    ["১১", "ক্যারিয়ার ও কলেজ", "শিক্ষার্থীর প্রোফাইল, ফলাফল, আগ্রহ, দক্ষতা ও অর্জনের ভিত্তিতে কলেজ, বৃত্তি, উচ্চশিক্ষা ও ক্যারিয়ার দিকনির্দেশনা দেওয়া হবে।"],
    ["১২", "এডটেক সহযোগিতা", "বিশ্বস্ত শিক্ষা প্রতিষ্ঠান, শিক্ষক, কনটেন্ট নির্মাতা ও এডটেক সেবাগুলোকে শিক্ষার্থীর কেন্দ্রীয় প্রোফাইলভিত্তিক এক জাতীয় ব্যবস্থায় যুক্ত করা হবে।"],
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
              ["শিক্ষার্থী আইডি", "#student-id"],
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
          <div className="max-[760px]:hidden">
            <Button href="/dashboard">শুরু করুন</Button>
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
          <div className="absolute right-[-5px] top-[100px] max-[760px]:top-[100px] w-[170px] max-[760px]:w-[155px] h-[200px] max-[760px]:h-[185px] bg-ink text-white rounded-[22px] p-5.5 max-[760px]:p-5 flex flex-col items-center text-center shadow-xl animate-float-2">
            <span className="text-[12px] max-[760px]:text-[10px] text-gray-300">সর্বশেষ পরীক্ষা</span>
            <b className="text-[48px] max-[760px]:text-[42px] font-bold mt-2.5 tracking-tighter">৯২%</b>
            <small className="text-[12px] max-[760px]:text-[10px] text-gray-300">চমৎকার হয়েছে!</small>
            <div className="flex items-end justify-center gap-[5px] h-[38px] mt-auto w-full">
              <i className="w-[11px] h-[30%] bg-green rounded-t-sm" />
              <i className="w-[11px] h-[50%] bg-green rounded-t-sm" />
              <i className="w-[11px] h-[42%] bg-green rounded-t-sm" />
              <i className="w-[11px] h-[80%] bg-yellow rounded-t-sm" />
              <i className="w-[11px] h-full bg-green rounded-t-sm" />
            </div>
          </div>
          <div className="absolute right-[5px] bottom-[88px] max-[760px]:hidden bg-white p-[12px_20px_12px_12px] rounded-full flex items-center gap-2.5 shadow-md z-10 animate-float-3">
            <span className="w-9 h-9 rounded-full flex items-center justify-center bg-green text-ink shrink-0">
              <Tick01Icon size={18} className="stroke-[2.5]" />
            </span>
            <div className="flex flex-col text-left">
              <b className="text-[15px] text-ink font-bold leading-tight">অধ্যায় সম্পন্ন</b>
              <small className="text-[13px] text-muted">জৈব রসায়ন · HSC</small>
            </div>
          </div>
          <div className="absolute top-[50px] left-3.5 text-8xl text-green rotate-[60deg] opacity-70 pointer-events-none">↝</div>
        </div>

        {/* Hero stats */}
        <div className="col-span-1 lg:col-span-2 grid grid-cols-2 lg:grid-cols-4 pt-5.5 mt-8 max-[760px]:gap-y-5 relative">
          {/* Custom Dividers with Faded Out Edges */}
          {/* Top Divider */}
          <div className="stats-divider-h left-0 right-0 top-0" />

          {/* Desktop Dividers */}
          <div className="stats-divider-v left-1/4 top-[15%] h-[70%] hidden lg:block" />
          <div className="stats-divider-v left-2/4 top-[15%] h-[70%] hidden lg:block" />
          <div className="stats-divider-v left-3/4 top-[15%] h-[70%] hidden lg:block" />
          
          {/* Mobile/Tablet Dividers */}
          <div className="stats-divider-h left-[10%] right-[10%] top-1/2 lg:hidden" />
          <div className="stats-divider-v left-1/2 top-[5%] h-[40%] lg:hidden" />
          <div className="stats-divider-v left-1/2 top-[55%] h-[40%] lg:hidden" />

          {[
            ["২ কোটি+", "সম্ভাব্য শিক্ষার্থী"],
            ["১–১২", "একীভূত শিক্ষা"],
            ["৬৪", "জেলার স্বপ্ন"],
            ["১", "শিক্ষা পরিচয়"]
          ].map(([val, label]) => (
            <div className="flex flex-col items-center text-center gap-1.5 relative py-4 max-[760px]:min-h-[130px] max-[760px]:justify-center max-[760px]:px-4" key={label}>
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
          {[0, 1, 2, 3].map((loop) => (
            <div className="flex items-center shrink-0" aria-hidden={loop > 0} key={loop}>
              {[
                [<BookOpen01Icon size={20} />, "এনসিটিবি পাঠ্যক্রম", "#1dbf73"],
                [<DashboardSquare01Icon size={20} />, "অল-ইন-ওয়ান সল্যুশন", "#c3b4fc"],
                [<Route01Icon size={20} />, "গাইডেড লার্নিং", "#f4c542"],
                [<AiBrain01Icon size={20} />, "ডাউট সল্ভের জন্য এআই", "#60ebc5"],
                [<QrCodeIcon size={20} />, "ক্লাস এবং পরীক্ষার কিউআর কোড", "#ffa043"],
                [<UserShield01Icon size={20} />, "অভিভাবক মনিটরিং", "#1dbf73"],
              ].map(([icon, text, color], idx) => (
                <div className="flex items-center gap-3 px-9 max-[760px]:px-6 text-sm md:text-base font-semibold whitespace-nowrap" key={`${loop}-${idx}`}>
                  <span className="flex items-center justify-center w-[35px] h-[35px] max-[760px]:w-[31px] max-[760px]:h-[31px] text-xl max-[760px]:text-lg" style={{ color: color as string }}>{icon}</span>
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
                    <img className="w-full h-full object-cover saturate-90" src={profileImg} alt="আব্দুল্লাহ আল জাহীন" />
                  </div>
                  <span className="absolute -right-2 -bottom-2 w-8 h-8 rounded-full bg-green text-white border-4 border-[#fffefa] grid place-items-center text-sm font-bold">✓</span>
                </div>

                <div>
                  <span className="text-[9px] text-muted block">শিক্ষার্থীর নাম</span>
                  <h3 className="text-[25px] font-extrabold text-ink leading-tight mt-1 mb-0">আব্দুল্লাহ আল জাহীন</h3>
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







      {/* 9. Learning Section */}
      <section className="bg-[#f0efe9] py-28 px-16 max-[760px]:py-20 max-[760px]:px-5" id="learning">
        <div className="max-w-[1312px] mx-auto">
          <SectionTitle
            center
            eyebrow="শেখার মূল কেন্দ্র"
            title={<>লার্নিং-এ <br /><em className="text-green not-italic">যা কিছু প্রয়োজন।</em></>}
            text="পাঠ্যক্রমের বিষয়বস্তু, বুদ্ধিদীপ্ত সহায়তা ও কার্যকর অনুশীলন — একটি সহজ অভিজ্ঞতায় সংযুক্ত।"
          />
          <div className="bg-white border border-gray-300 rounded-[28px] p-3 shadow-[0_30px_80px_rgba(30,32,27,0.1)]">
            <div className="min-h-[610px] bg-[#f7f7f4] rounded-[20px] overflow-hidden border border-gray-200 shadow-sm flex flex-col">
              {/* Simulated Browser Bar */}
              <div className="bg-[#e9e9e4] border-b border-gray-300 px-4 py-2 flex items-center gap-2 max-[760px]:px-2">
                <div className="flex gap-1.5 shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400 inline-block" />
                </div>
                <div className="bg-white rounded-md text-[11px] text-gray-500 py-0.5 px-3 mx-auto max-w-[400px] w-full text-center border border-gray-200 select-all font-sans">
                  onestudent.gov.bd/dashboard
                </div>
              </div>
              <div className="flex-1 dashboard-preview-frame">
                <DashboardApp />
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
          <div className="absolute right-[-10px] bottom-5 bg-[#f5edcf] text-[#ba8e13] w-[300px] max-[760px]:w-[220px] h-[235px] max-[760px]:h-[190px] border-8 border-double border-[#d3b86b] rounded-lg p-6 max-[760px]:p-3.5 text-center rotate-5 shadow-2xl z-10">
            <span className="text-[7px] tracking-widest text-[#ba8e13] uppercase block mb-1">ওয়ানস্টুডেন্ট বাংলাদেশ</span>
            <span className="text-xl text-[#ba8e13]">✦</span>
            <small className="text-[7px] text-gray-500 uppercase tracking-widest block mt-1">সম্পন্নকরণের সনদ</small>
            <h4 className="font-serif text-xl max-[760px]:text-base font-bold my-3">গণিতের ভিত্তি</h4>
            <p className="text-[9px] text-muted font-medium">প্রদান করা হলো <b className="font-bold text-ink">রাফি রহমানকে</b></p>
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
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 min-[550px]:grid-cols-3 md:grid-cols-2 lg:grid-cols-[1.6fr_0.7fr_0.7fr_0.7fr_1.2fr] gap-11 max-[760px]:gap-6 max-[760px]:gap-y-8">
          <div className="flex flex-col text-left max-md:col-span-2 max-lg:col-span-full">
            <Logo light />
            <p className="text-[#9ba09d] text-[15px] leading-relaxed max-w-[320px] my-6">বাংলাদেশের জাতীয় ডিজিটাল লার্নিং প্ল্যাটফর্ম — প্রতিটি শিক্ষার্থীর পড়াশোনা, দক্ষতা, সুস্থতা ও ভবিষ্যতের জন্য।</p>
            <span className="text-[12px] uppercase tracking-wider text-yellow font-semibold">এক পরিচয় · এক প্রোফাইল · আজীবন শিক্ষা</span>
          </div>
          <div className="flex flex-col gap-3.5 text-left">
            <b className="text-[13px] uppercase tracking-wider text-white font-bold mb-2 block">প্ল্যাটফর্ম</b>
            {["লার্নিং হাব", "এআই সহকারী", "পরীক্ষা", "শিক্ষার্থী পাসপোর্ট"].map((lnk) => (
              <a className="text-[13px] text-[#a9aeab] hover:text-white transition-colors" href="#" key={lnk}>{lnk}</a>
            ))}
          </div>
          <div className="flex flex-col gap-3.5 text-left">
            <b className="text-[13px] uppercase tracking-wider text-white font-bold mb-2 block">সহায়তা</b>
            {["শিক্ষকদের জন্য", "অভিভাবকদের জন্য", "স্বাস্থ্য", "ক্যারিয়ার"].map((lnk) => (
              <a className="text-[13px] text-[#a9aeab] hover:text-white transition-colors" href="#" key={lnk}>{lnk}</a>
            ))}
          </div>
          <div className="flex flex-col gap-3.5 text-left">
            <b className="text-[13px] uppercase tracking-wider text-white font-bold mb-2 block">প্রতিষ্ঠান</b>
            {["আমাদের সম্পর্কে", "প্রভাব", "যোগাযোগ", "প্রবেশগম্যতা"].map((lnk) => (
              <a className="text-[13px] text-[#a9aeab] hover:text-white transition-colors" href="#" key={lnk}>{lnk}</a>
            ))}
          </div>
          <div className="flex flex-col gap-3.5 text-left max-lg:col-span-full">
            <b className="text-[13px] uppercase tracking-wider text-white font-bold mb-2 block">যোগাযোগ ও পরিচিতি</b>
            <div className="flex gap-3.5 items-center mb-1">
              <div className="w-[60px] h-[60px] rounded-lg overflow-hidden border border-gray-700 bg-gray-800 shrink-0">
                <img className="w-full h-full object-cover" src="https://ggc.edu.bd/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-26-at-3.22.36-PM.jpeg" alt="Gaibandha Government College" />
              </div>
              <div className="flex flex-col">
                <b className="text-[14px] text-white font-bold leading-tight">Gaibandha Government College</b>
                <span className="text-[11px] text-yellow font-semibold mt-1">Established in 1947</span>
              </div>
            </div>
            <p className="text-[13px] text-gray-400 leading-snug">
              College Road, Thana Para, Gaibandha, 5700
            </p>
            <div className="flex flex-col gap-1 text-[13px] text-[#a9aeab] mt-1">
              <span>ফোন: +8801770925514, 02588877379</span>
              <span>ইমেইল: gaibandhagovtcollege@yahoo.com</span>
              <span className="text-[12px] text-[#a9aeab] mt-3 block">
                Made with <span className="text-red-500">❤️</span> by{" "}
                <a href="https://github.com/Ntf-Sadnan" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow transition-colors font-semibold">
                  Ntf Sadnan
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};


type VideoResource = {
  provider?: string;
  title: string;
  url: string;
  type?: string;
};

type ChapterMcq = {
  id?: string;
  question: string;
  options: { key: string; text: string }[];
  answer: string;
  explanation?: string;
  difficulty?: string;
};

type ChapterData = {
  chapter_no: number;
  chapter_label_bn: string;
  chapter_title: string;
  mcqs: ChapterMcq[];
  video_resources: VideoResource[];
  video_status?: string;
  video_note?: string;
  main_concept_bn: {
    title: string;
    short_points: string[];
  };
};

type Course = {
  name: string;
  short: string;
  color: string;
  chapters: string[];
  rawChapters?: ChapterData[];
};

type CourseJson = {
  subjects: {
    subject: string;
    chapters: ChapterData[];
  }[];
};

type ChapterMapItem = {
  _id: string;
  name: string;
  order: number | null;
  visibility?: string;
};

type MappingJson = {
  data: {
    tree: Record<string, ChapterMapItem[]>;
  };
};

type ExamProgress = Record<string, {
  score: number;
  completedAt: string;
}>;

type ExamAnswer = {
  questionIndex: number;
  selectedKey: string | null;
  correct: boolean;
};

const createDemoExamProgress = (): ExamProgress => {
  const now = new Date();
  const completedAt = (daysAgo: number) => {
    const date = new Date(now);
    date.setDate(now.getDate() - daysAgo);
    return date.toISOString();
  };

  return {
    [progressKey("Physics 1", 0)]: { score: 80, completedAt: completedAt(1) },
    [progressKey("Physics 1", 1)]: { score: 70, completedAt: completedAt(3) },
    [progressKey("Chemistry 1", 0)]: { score: 90, completedAt: completedAt(5) },
    [progressKey("Chemistry 1", 1)]: { score: 60, completedAt: completedAt(7) },
    [progressKey("Biology 1", 0)]: { score: 80, completedAt: completedAt(9) },
    [progressKey("Biology 1", 1)]: { score: 70, completedAt: completedAt(11) },
    [progressKey("Higher Math 1", 0)]: { score: 90, completedAt: completedAt(13) },
    [progressKey("ICT", 0)]: { score: 80, completedAt: completedAt(15) }
  };
};

const subjectNames: Record<string, { name: string; short: string }> = {
  "HSC Physics 1st Paper": { name: "পদার্থবিজ্ঞান ১ম পত্র", short: "Physics 1" },
  "HSC Physics 2nd Paper": { name: "পদার্থবিজ্ঞান ২য় পত্র", short: "Physics 2" },
  "HSC Chemistry 1st Paper": { name: "রসায়ন ১ম পত্র", short: "Chemistry 1" },
  "HSC Chemistry 2nd Paper": { name: "রসায়ন ২য় পত্র", short: "Chemistry 2" },
  "HSC Biology 1st Paper": { name: "জীববিজ্ঞান ১ম পত্র", short: "Biology 1" },
  "HSC Biology 2nd Paper": { name: "জীববিজ্ঞান ২য় পত্র", short: "Biology 2" },
  "HSC Higher Math 1st Paper": { name: "উচ্চতর গণিত ১ম পত্র", short: "Higher Math 1" },
  "HSC Higher Math 2nd Paper": { name: "উচ্চতর গণিত ২য় পত্র", short: "Higher Math 2" },
  "HSC ICT": { name: "তথ্য ও যোগাযোগ প্রযুক্তি", short: "ICT" }
};

const hscCourses: Course[] = [
  { name: "পদার্থবিজ্ঞান ১ম পত্র", short: "Physics 1", color: "#dff5ec", chapters: ["ভৌতজগৎ ও পরিমাপ","ভেক্টর","গতিবিদ্যা","নিউটনিয়ান বলবিদ্যা","কাজ, শক্তি ও ক্ষমতা","মহাকর্ষ ও অভিকর্ষ","পদার্থের গাঠনিক ধর্ম","পর্যাবৃত্ত গতি","তরঙ্গ","আদর্শ গ্যাস ও গ্যাসের গতিতত্ত্ব"] },
  { name: "পদার্থবিজ্ঞান ২য় পত্র", short: "Physics 2", color: "#dcecff", chapters: ["তাপগতিবিদ্যা","স্থির তড়িৎ","চল তড়িৎ","তড়িৎ প্রবাহের চৌম্বক ক্রিয়া","তড়িতচৌম্বকীয় আবেশ","জ্যামিতিক আলোকবিজ্ঞান","ভৌত আলোকবিজ্ঞান","আধুনিক পদার্থবিজ্ঞানের সূচনা","পরমাণুর মডেল ও নিউক্লিয়া","সেমিকন্ডাকটর ও ইলেকট্রনিকস","জ্যোতির্বিজ্ঞান"] },
  { name: "রসায়ন ১ম পত্র", short: "Chemistry 1", color: "#fff0b8", chapters: ["ল্যাবরেটরির নিরাপদ ব্যবহার","गुणগত রসায়ন","মৌলের পর্যায়বৃত্ত ধর্ম ও রাসায়নিক বন্ধন","রাসায়নিক পরিবর্তন","কর্মমুখী রসায়ন"] },
  { name: "রসায়ন ২য় পত্র", short: "Chemistry 2", color: "#ffe3cf", chapters: ["পরিবেশ রসায়ন","জৈব রসায়ন","পরিমাণগত রসায়ন","তড়িৎ রাসায়ন","অর্থনৈতিক রসায়ন"] },
  { name: "জীববিজ্ঞান ১ম পত্র", short: "Biology 1", color: "#e7f5d6", chapters: ["কোষ ও এর গঠন","কোষ বিভাজন","কোষ রসায়ন","অণুজীব","শৈবাল ও ছত্রাক","ব্রায়োফাইটা ও টেরিডোফাইটা","নগ্নবীজী ও আবৃতবীজী উদ্ভিদ","টিস্যু ও টিস্যুতন্ত্র","উদ্ভিদ শরীরতত্ত্ব","উদ্ভিদ প্রজনন","জীবপ্রযুক্তি","জীবের পরিবেশ, বিস্তার ও সংরক্ষণ"] },
  { name: "জীববিজ্ঞান ২য় পত্র", short: "Biology 2", color: "#e2f0dc", chapters: ["প্রাণীর বিভিন্নতা ও শ্রেণিবিন্যাস","প্রাণীর পরিচিতি","মানব শরীরতত্ত্ব: পরিপাক ও শোষণ","মানব শরীরতত্ত্ব: রক্ত ও সংবহন","মানব শরীরতত্ত্ব: শ্বসন ও শ্বাসক্রিয়া","মানব শরীরতত্ত্ব: বর্জ্য ও নিষ্কাশন","মানব শরীরতত্ত্ব: চলন ও অঙ্গচালনা","মানব শরীরতত্ত্ব: সমন্বয় ও নিয়ন্ত্রণ","মানব জীবনের ধারাবাহিকতা","মানবদেহের প্রতিরক্ষা","জিনতত্ত্ব ও বিবর্তন","প্রাণীর আচরণ"] },
  { name: "উচ্চতর গণিত ১ম পত্র", short: "Higher Math 1", color: "#eee8ff", chapters: ["ম্যাট্রিক্স ও নির্ণায়ক","ভেক্টর","সরলরেখা","বৃত্ত","বিন্যাস ও সমাবেশ","ত্রিকোণমিতিক অনুপাত","সংযুক্ত কোণের ত্রিকোণমিতিক অনুপাত","ফাংশন ও ফাংশনের লেখচিত্র","অন্তরীকরণ","যোগজীকরণ"] },
  { name: "উচ্চতর গণিত ২য় পত্র", short: "Higher Math 2", color: "#eadfff", chapters: ["বাস্তব সংখ্যা ও অসমতা","যোগাশ্রয়ী প্রোগ্রাম","জটিল সংখ্যা","বহুপদী ও বহুপদী সমীকরণ","দ্বিপদী বিস্তৃতি","কণিক","ত্রিকোণমিতিক ফাংশন","স্থিতিবিদ্যা","সমতলে বস্তুকণার গতি","বিস্তার পরিমাপ ও সম্ভাবনা"] },
  { name: "তথ্য ও যোগাযোগ প্রযুক্তি", short: "ICT", color: "#d9f4f2", chapters: ["তথ্য ও যোগাযোগ প্রযুক্তি - বিশ্ব ও বাংলাদেশ প্রেক্ষিত","কমিউনিকেশন সিস্টেমস ও নেটওয়ার্কিং","সংখ্যা পদ্ধতি ও ডিজিটাল ডিভাইস","ওয়েব ডিজাইন পরিচিতি এবং HTML","প্রোগ্রামিং ভাষা","ডেটাবেজ ম্যানেজমেন্ট সিস্টেম"] },
];

const bnNums = ["প্রথম","দ্বিতীয়","তৃতীয়","চতুর্থ","পঞ্চম","ষষ্ঠ","সপ্তম","অষ্টম","নবম","দশম","একাদশ","দ্বাদশ"];
const bnDigits = (value: number) => String(value).replace(/\d/g, (digit) => "০১২৩৪৫৬৭৮৯"[Number(digit)]);
const bnMonthNames = ["জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"];
const bnOptionLabels = ["ক", "খ", "গ", "ঘ"];
const progressKey = (courseShort: string, chapterIndex: number) => `${courseShort}:${chapterIndex}`;
const courseSlugs: Record<string, string> = {
  "Physics 1": "physics-1",
  "Physics 2": "physics-2",
  "Chemistry 1": "chemistry-1",
  "Chemistry 2": "chemistry-2",
  "Biology 1": "biology-1",
  "Biology 2": "biology-2",
  "Higher Math 1": "higher-math-1",
  "Higher Math 2": "higher-math-2",
  "ICT": "ict"
};
const chapterSlug = (title: string, index: number) => title === "জৈব রসায়ন" ? "organic-chemistry" : `chapter-${index + 1}`;
const dashboardShareUrl = (course: Course, chapterIndex: number, mode: "learn" | "test") => {
  const coursePath = courseSlugs[course.short] || course.short.toLowerCase().replace(/\s+/g, "-");
  const params = new URLSearchParams({
    course: coursePath,
    chapter: chapterSlug(course.chapters[chapterIndex], chapterIndex),
    mode: mode === "test" ? "exam" : "learn"
  });
  return `/dashboard?${params.toString()}`;
};

const QrLink: React.FC<{ label: string; url: string }> = ({ label, url }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    QRCode.toDataURL(url, { width: 240, margin: 1, color: { dark: "#11120f", light: "#ffffff" } })
      .then(setImageUrl)
      .catch(() => setImageUrl(""));
  }, [url]);

  return (
    <a className="bg-white border border-line rounded-xl p-3 text-center no-underline text-ink" href={url}>
      {imageUrl && <img className="w-full aspect-square block rounded-lg" src={imageUrl} alt={`${label} কিউআর কোড`} />}
      <b className="block text-xs mt-2">{label}</b>
    </a>
  );
};

const getCourseIcon = (short: string) => {
  if (short.startsWith("Physics")) {
    return <PhysicsIcon size={20} strokeWidth={1.5} />;
  }
  if (short.startsWith("Chemistry")) {
    return <Chemistry01Icon size={20} strokeWidth={1.5} />;
  }
  if (short.startsWith("Biology")) {
    return <DnaIcon size={20} strokeWidth={1.5} />;
  }
  if (short.startsWith("Higher Math")) {
    return <MathIcon size={20} strokeWidth={1.5} />;
  }
  return <ComputerIcon size={20} strokeWidth={1.5} />;
};

const CsPlayerVideo: React.FC<{ videoId: string; playerId: string }> = ({ videoId, playerId }) => {
  return (
    <iframe
      className="w-full aspect-video border-0 rounded-lg bg-black"
      src={`/csplayer.html?video=${encodeURIComponent(videoId)}`}
      title={`ভিডিও প্লেয়ার ${playerId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
      allowFullScreen
    />
  );
};

const DashboardApp: React.FC = () => {
  const [courseIndex, setCourseIndex] = useState(0);
  const [chapterIndex, setChapterIndex] = useState(0);
  const [mode, setMode] = useState<"course" | "profile" | "learn" | "test" | "result">("profile");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarMounted, setSidebarMounted] = useState(false);
  const [answer, setAnswer] = useState<number | null>(null);
  const [dynamicCourses, setDynamicCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [chapterMapTree, setChapterMapTree] = useState<Record<string, ChapterMapItem[]>>({});
  const [currentMcqIndex, setCurrentMcqIndex] = useState(0);
  const [scoreCount, setScoreCount] = useState(0);
  const [answerHistory, setAnswerHistory] = useState<ExamAnswer[]>([]);
  const [answerChecked, setAnswerChecked] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);
  const [examProgress, setExamProgress] = useState<ExamProgress>(() => {
    const saved = sessionStorage.getItem("onestudent-exam-progress");
    if (saved) {
      const parsed = JSON.parse(saved) as ExamProgress;
      if (Object.keys(parsed).length > 0) return parsed;
    }
    const demoProgress = createDemoExamProgress();
    sessionStorage.setItem("onestudent-exam-progress", JSON.stringify(demoProgress));
    return demoProgress;
  });

  const openSidebar = () => {
    setSidebarMounted(true);
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setSidebarOpen(true));
    });
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
    window.setTimeout(() => setSidebarMounted(false), 500);
  };

  useEffect(() => {
    fetch("/hsc_science_all_chapters_10_mcq.json")
      .then((res) => {
        if (!res.ok) throw new Error(`Course data request failed (${res.status})`);
        return res.json() as Promise<CourseJson>;
      })
      .then((data) => {
        const colors = ["#dff5ec", "#dcecff", "#fff0b8", "#ffe3cf", "#e7f5d6", "#e2f0dc", "#eee8ff", "#eadfff", "#d9f4f2"];
        const mapped = data.subjects.map((sub, i) => {
          const labels = subjectNames[sub.subject] || {
            name: sub.subject,
            short: sub.subject.replace("HSC ", "")
          };
          return {
            name: labels.name,
            short: labels.short,
            color: colors[i % colors.length],
            chapters: sub.chapters.map((ch) => ch.chapter_title),
            rawChapters: sub.chapters
          };
        });
        setDynamicCourses(mapped);
      })
      .catch((err: Error) => {
        console.error("Error loading JSON course data:", err);
        setLoadError("কোর্সের JSON ডেটা লোড করা যায়নি। পেজটি রিফ্রেশ করে আবার চেষ্টা করুন।");
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetch("/truemap.json")
      .then((res) => {
        if (!res.ok) throw new Error(`Chapter mapping request failed (${res.status})`);
        return res.json() as Promise<MappingJson>;
      })
      .then((data) => setChapterMapTree(data.data?.tree || {}))
      .catch((err: Error) => console.error("Error loading chapter mapping:", err));
  }, []);

  const [scores, setScores] = useState<{ subject: string; score: number; date: string }[]>(() => {
    const saved = sessionStorage.getItem("onestudent-demo-scores");
    return saved ? JSON.parse(saved) : [];
  });

  const coursesList = dynamicCourses;
  const course = coursesList[courseIndex] || hscCourses[0];
  const chaptersList = course.chapters || [];
  const chapter = chaptersList[chapterIndex] || "";
  const rawChapter = course.rawChapters ? course.rawChapters[chapterIndex] : null;
  const courseMapKey = (() => {
    if (course.short.startsWith("Physics")) return `phys_${course.short.endsWith("2") ? "2" : "1"}_${chapterIndex + 1}`;
    if (course.short.startsWith("Chemistry")) return `chem_${course.short.endsWith("2") ? "2" : "1"}_${chapterIndex + 1}`;
    if (course.short.startsWith("Biology")) return `bio_${course.short.endsWith("2") ? "2" : "1"}_${chapterIndex + 1}`;
    if (course.short.startsWith("Higher Math")) return `math_${course.short.endsWith("2") ? "2" : "1"}_${chapterIndex + 1}`;
    return "";
  })();
  const mappedChapterTopics = (chapterMapTree[courseMapKey] || [])
    .filter((item) => item.visibility !== "private")
    .sort((a, b) => (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER));

  const mcqs: ChapterMcq[] = rawChapter?.mcqs || [
    {
      question: "F = ma সূত্রে a কী নির্দেশ করে?",
      options: [
        { key: "A", text: "ক্ষেত্রফল" },
        { key: "B", text: "ত্বরণ" },
        { key: "C", text: "কৌণিক ভরবেগ" },
        { key: "D", text: "কাজ" }
      ],
      answer: "B",
      explanation: "F = ma সমীকরণে a হলো ত্বরণ (acceleration)."
    }
  ];

  const currentMcq = mcqs[currentMcqIndex] || mcqs[0];
  const timerPercent = Math.max(0, (timeLeft / 15) * 100);
  const timerColor = timeLeft <= 5 ? "#ff5570" : timeLeft <= 10 ? "#f4c542" : "#1dbf73";
  const timerBackground = timeLeft <= 5 ? "#fff0f2" : timeLeft <= 10 ? "#fff7d6" : "#e4f7ee";
  const today = new Date();
  const calendarYear = today.getFullYear();
  const calendarMonth = today.getMonth();
  const calendarDays = Array.from(
    { length: new Date(calendarYear, calendarMonth + 1, 0).getDate() },
    (_, index) => index + 1
  );
  const calendarOffset = new Date(calendarYear, calendarMonth, 1).getDay();
  const activeStudyDays = new Set(
    Object.values(examProgress)
      .map((entry) => new Date(entry.completedAt))
      .filter((date) => date.getFullYear() === calendarYear && date.getMonth() === calendarMonth)
      .map((date) => date.getDate())
  );
  const completedExamCount = Object.keys(examProgress).length;
  const courseProgress = (item: Course) => {
    const completed = item.chapters.filter((_, index) => examProgress[progressKey(item.short, index)]).length;
    return item.chapters.length ? Math.round((completed / item.chapters.length) * 100) : 0;
  };
  const currentCourseProgress = courseProgress(course);
  const reportCourses = coursesList;
  useEffect(() => {
    if (coursesList.length === 0) return;

    const syncRoute = () => {
      if (window.location.pathname !== "/dashboard") return;
      const params = new URLSearchParams(window.location.search);
      const courseParam = params.get("course");
      const chapterParam = params.get("chapter");
      const modeParam = params.get("mode");
      if (!courseParam) {
        setMode("profile");
        return;
      }

      const matchedCourseIndex = coursesList.findIndex((item) => courseSlugs[item.short] === courseParam);
      if (matchedCourseIndex < 0) return;
      const matchedCourse = coursesList[matchedCourseIndex];
      setCourseIndex(matchedCourseIndex);

      if (!chapterParam) {
        setMode("course");
        return;
      }

      const matchedChapterIndex = matchedCourse.chapters.findIndex((title, index) => chapterSlug(title, index) === chapterParam);
      if (matchedChapterIndex < 0) return;
      setChapterIndex(matchedChapterIndex);
      setCurrentMcqIndex(0);
      setAnswer(null);
      setAnswerChecked(false);
      setAnswerHistory([]);
      setScoreCount(0);
      setTimeLeft(15);
      setMode(modeParam === "exam" ? "test" : "learn");
      window.history.replaceState({}, "", "/dashboard");
    };

    syncRoute();
    window.addEventListener("popstate", syncRoute);
    return () => window.removeEventListener("popstate", syncRoute);
  }, [coursesList]);

  const CalendarCard = () => (
    <section className="bg-white border border-line rounded-[20px] p-6">
      <div className="flex items-end justify-between mb-5">
        <div>
          <span className="text-xs text-deep font-black tracking-[.08em] uppercase">পড়াশোনার ক্যালেন্ডার</span>
          <h2 className="mt-1 mb-0 text-[23px]">{bnMonthNames[calendarMonth]} {bnDigits(calendarYear)}</h2>
        </div>
        <span className="text-[10px] text-[#777] font-bold"><i className="inline-block w-2 h-2 rounded-full bg-green mr-1" />পরীক্ষা</span>
      </div>
      <div className="grid grid-cols-7 gap-1.5 text-center">
        {["রবি", "সোম", "মঙ্গল", "বুধ", "বৃহ", "শুক্র", "শনি"].map((day) => (
          <span className="text-[9px] text-[#8b908b] font-black py-1" key={day}>{day}</span>
        ))}
        {Array.from({ length: calendarOffset }, (_, index) => <span key={`empty-${index}`} />)}
        {calendarDays.map((day) => {
          const isToday = day === today.getDate();
          const isActive = activeStudyDays.has(day);
          return (
            <span
              className={`relative aspect-square grid place-items-center rounded-[10px] text-xs font-bold ${
                isToday ? "bg-ink text-white" : isActive ? "bg-mint text-deep" : "bg-[#f6f5f0] text-[#676c67]"
              }`}
              key={day}
            >
              {bnDigits(day)}
              {isActive && !isToday && <i className="absolute bottom-1 w-1 h-1 rounded-full bg-green" />}
            </span>
          );
        })}
      </div>
    </section>
  );

  const selectCourse = (index: number) => { 
    setCourseIndex(index); 
    setChapterIndex(0); 
    setMode("course"); 
    closeSidebar(); 
  };

  const openChapter = (index: number, nextMode: "learn" | "test") => {
    setChapterIndex(index);
    setMode(nextMode);
    setCurrentMcqIndex(0);
    setScoreCount(0);
    setAnswer(null);
    setAnswerHistory([]);
    setAnswerChecked(false);
    setTimeLeft(15);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const playAnswerSound = (correct: boolean) => {
    const audio = new Audio(correct ? "/duolingo-right.wav" : "/duolingo-wrong.wav");
    audio.play().catch(() => {});
  };

  const checkAnswer = (selectedIndex: number) => {
    if (answerChecked) return;
    const selectedOptionKey = currentMcq.options[selectedIndex]?.key;
    const isCorrect = selectedOptionKey === currentMcq.answer;
    setAnswer(selectedIndex);
    setAnswerChecked(true);
    playAnswerSound(isCorrect);
    const nextHistory = [
      ...answerHistory,
      { questionIndex: currentMcqIndex, selectedKey: selectedOptionKey, correct: isCorrect }
    ];
    setAnswerHistory(nextHistory);
    if (isCorrect) {
      setScoreCount((prev) => prev + 1);
    }
  };

  const finishQuestion = () => {
    if (!answerChecked) return;

    if (currentMcqIndex + 1 < mcqs.length) {
      setCurrentMcqIndex((prev) => prev + 1);
      setAnswer(null);
      setAnswerChecked(false);
      setTimeLeft(15);
    } else {
      const finalCorrects = scoreCount;
      const pct = Math.round((finalCorrects / mcqs.length) * 100);
      const next = [{ subject: course.short, score: pct, date: "এইমাত্র" }, ...scores].slice(0, 6);
      const nextProgress = {
        ...examProgress,
        [progressKey(course.short, chapterIndex)]: {
          score: pct,
          completedAt: new Date().toISOString()
        }
      };
      setScores(next);
      setScoreCount(finalCorrects);
      setExamProgress(nextProgress);
      sessionStorage.setItem("onestudent-demo-scores", JSON.stringify(next));
      sessionStorage.setItem("onestudent-exam-progress", JSON.stringify(nextProgress));
      setAnswer(null);
      setMode("result");
    }
  };

  useEffect(() => {
    if (mode !== "test" || answerChecked) return;
    if (timeLeft <= 0) {
      const nextHistory = [
        ...answerHistory,
        { questionIndex: currentMcqIndex, selectedKey: null, correct: false }
      ];
      setAnswerHistory(nextHistory);
      setAnswerChecked(true);
      playAnswerSound(false);
      return;
    }

    const timer = window.setTimeout(() => setTimeLeft((value) => value - 1), 1000);
    return () => window.clearTimeout(timer);
  }, [mode, answerChecked, timeLeft, currentMcqIndex]);

  const Sidebar = () => (
    <aside
      className={`fixed lg:sticky top-0 left-0 w-[270px] lg:w-auto h-screen bg-[#11120f] text-white px-3 lg:px-[17px] py-6 flex flex-col overflow-y-auto z-50 transform-gpu will-change-transform transition-transform duration-500 ease-in-out ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:transition-none`}
    >
      <div className="flex items-center justify-between px-2 pb-[22px]">
        <Logo light href="/" />
        <button className="lg:hidden bg-transparent border-0 text-white" onClick={closeSidebar}><Cancel01Icon size={20} strokeWidth={1.5}/></button>
      </div>
      <nav className="grid gap-1 border-b border-[#2a2c29] pb-4">
        <button className={`flex items-center gap-[11px] border-0 px-[13px] py-[11px] rounded-[10px] text-left text-xs lg:text-sm font-extrabold cursor-pointer ${mode === "profile" ? "bg-green text-[#071b12]" : "bg-transparent text-[#aeb2ad]"}`} onClick={() => { setMode("profile"); closeSidebar(); }}><DashboardSquare01Icon size={19} strokeWidth={1.5}/> প্রোফাইল ও রিপোর্ট</button>
        <button className={`flex items-center gap-[11px] border-0 px-[13px] py-[11px] rounded-[10px] text-left text-xs lg:text-sm font-extrabold cursor-pointer ${mode !== "profile" ? "bg-green text-[#071b12]" : "bg-transparent text-[#aeb2ad]"}`} onClick={() => { setMode("course"); closeSidebar(); }}><BookOpen01Icon size={19} strokeWidth={1.5}/> আমার কোর্স</button>
      </nav>
      <div className="text-[#8e948e] text-[11px] lg:text-xs tracking-[.1em] uppercase font-black px-3 pt-5 pb-2.5">এইচএসসি বিজ্ঞান</div>
      <div className="grid gap-[3px]">
        {coursesList.map((item, index) => (
          <button className={`flex gap-2.5 items-center p-[9px] border-0 rounded-[11px] text-left cursor-pointer ${courseIndex === index && mode !== "profile" ? "bg-[#282b27] text-white" : "bg-transparent text-[#b7bbb6]"}`} onClick={() => selectCourse(index)} key={item.name}>
            <i className="w-[34px] h-[34px] grid place-items-center text-ink rounded-[9px] not-italic" style={{background:item.color}}>
              {getCourseIcon(item.short)}
            </i>
            <span className="text-[13px] lg:text-[15px] font-extrabold leading-[1.35]">{item.name}<small className="block text-[#899089] text-[11px] lg:text-[13px] mt-0.5">{bnDigits(item.chapters.length)}টি অধ্যায়</small></span>
          </button>
        ))}
      </div>
      <a className="mt-auto px-3 pt-5 pb-1 text-[#a0a6a0] text-xs lg:text-sm no-underline" href="/">← মূল ওয়েবসাইট</a>
    </aside>
  );

  if (loading) {
    return (
      <main className="min-h-screen bg-[#f4f3ee] text-ink">
        <StyleOverride />
        <div className="max-w-[1370px] mx-auto px-3.5 lg:px-[34px] pt-5 lg:pt-8 pb-20 animate-pulse">
          <section className="bg-white border border-line rounded-[22px] p-6 lg:p-7 flex items-center gap-5 mb-6">
            <div className="w-[78px] h-[78px] rounded-full bg-[#e5e3dc]" />
            <div className="flex-1 space-y-3">
              <div className="h-8 w-52 rounded-full bg-[#e5e3dc]" />
              <div className="h-4 w-full max-w-[520px] rounded-full bg-[#e5e3dc]" />
            </div>
            <div className="hidden sm:block h-8 w-32 rounded-full bg-[#e5e3dc]" />
          </section>
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-[13px] my-[18px]">
            {Array.from({ length: 4 }).map((_, index) => (
              <div className="bg-white border border-line rounded-[18px] p-5 h-[118px]" key={index}>
                <div className="h-7 w-20 rounded-full bg-[#e5e3dc] mb-4" />
                <div className="h-4 w-28 rounded-full bg-[#e5e3dc]" />
              </div>
            ))}
          </div>
          <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-[18px]">
            <section className="bg-white border border-line rounded-[22px] p-6">
              <div className="h-5 w-44 rounded-full bg-[#d7efe3] mb-5" />
              <div className="space-y-3">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div className="flex items-center gap-3 border-b border-line last:border-0 pb-3 last:pb-0" key={index}>
                    <div className="w-12 h-12 rounded-xl bg-[#efede7]" />
                    <div className="flex-1 space-y-2">
                      <div className="h-4 w-2/3 rounded-full bg-[#e5e3dc]" />
                      <div className="h-3 w-32 rounded-full bg-[#e5e3dc]" />
                    </div>
                    <div className="h-9 w-24 rounded-full bg-[#d7efe3]" />
                  </div>
                ))}
              </div>
            </section>
            <section className="bg-white border border-line rounded-[22px] p-6">
              <div className="h-5 w-36 rounded-full bg-[#d7efe3] mb-5" />
              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: 35 }).map((_, index) => (
                  <div className="aspect-square rounded-xl bg-[#efede7]" key={index} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    );
  }

  if (loadError || dynamicCourses.length === 0) {
    return (
      <main className="min-h-screen bg-[#f4f3ee] text-ink grid place-items-center px-5">
        <StyleOverride />
        <div className="max-w-[520px] bg-white border border-line rounded-[22px] p-8 text-center shadow-sm">
          <span className="block text-[#c43b4f] text-xs font-black tracking-[.08em] uppercase mb-3">ডেটা লোড ব্যর্থ</span>
          <h1 className="text-2xl font-bold mt-0 mb-3">ড্যাশবোর্ড খোলা যাচ্ছে না</h1>
          <p className="text-sm text-[#666] leading-relaxed mb-0">{loadError || "JSON ফাইলে কোনো কোর্স পাওয়া যায়নি।"}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f4f3ee] text-ink block lg:grid lg:grid-cols-[282px_minmax(0,1fr)]">
      <StyleOverride />
      <Sidebar />
      {(sidebarMounted || sidebarOpen) && <button className={`fixed inset-0 border-0 z-40 lg:hidden transition-opacity duration-500 ${sidebarOpen ? "bg-black/50 opacity-100" : "bg-black/50 opacity-0 pointer-events-none"}`} onClick={closeSidebar} aria-label="মেনু বন্ধ করুন" />}
      <section className="min-w-0">
        <header className="h-20 bg-white border-b border-line flex lg:hidden items-center px-3.5 lg:px-[34px] sticky top-0 z-30">
          <button className="grid lg:hidden place-items-center border-0 bg-ink text-white w-10 h-10 rounded-[11px] mr-[13px]" onClick={openSidebar}><Menu01Icon size={22}/></button>
          <div className="ml-auto flex items-center">
            <div className="flex gap-3 items-center p-[8px_14px] bg-[#f6f6f1] border border-line rounded-2xl text-ink">
              <div className="flex flex-col text-right leading-tight pl-1">
                <b className="block text-xs font-bold text-ink font-sans">আব্দুল্লাহ আল জাহীন</b>
                <span className="block text-deep text-[9px] mt-0.5 font-bold uppercase tracking-wider">এইচএসসি · বিজ্ঞান</span>
              </div>
              <div className="w-[42px] h-[42px] rounded-full overflow-hidden border border-line bg-white shrink-0 shadow-sm">
                <img className="w-full h-full object-cover" src={profileImg} alt="আব্দুল্লাহ আল জাহীন" />
              </div>
            </div>
          </div>
        </header>

        {mode === "profile" ? (
          <div className="max-w-[1370px] mx-auto px-3.5 lg:px-[34px] pt-5 lg:pt-8 pb-20">
            {/* Student Profile Card */}
            <section className="bg-white border border-line rounded-[22px] p-6 lg:p-7 flex flex-col sm:flex-row items-center gap-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] mb-6">
              <div className="w-[78px] h-[78px] rounded-full overflow-hidden bg-white shrink-0 shadow-sm">
                <img className="w-full h-full object-cover" src={profileImg} alt="আব্দুল্লাহ আল জাহীন" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h1 className="text-2xl lg:text-3xl font-extrabold text-ink mb-1.5">আব্দুল্লাহ আল জাহীন</h1>
                <p className="m-0 text-[#70756f] text-xs lg:text-base font-semibold flex flex-wrap gap-x-2 gap-y-1 justify-center sm:justify-start items-center">
                  <span>ধানমন্ডি সরকারি বালিকা উচ্চ বিদ্যালয়</span>
                  <span className="text-deep font-extrabold">· এইচএসসি ২০২৭ · বিজ্ঞান বিভাগ</span>
                  <span className="text-[#a0a6a0]">·</span>
                  <span>আইডি: ২০৩১-৮৪২৯০১</span>
                </p>
              </div>
              <div className="flex flex-col items-center sm:items-end gap-1 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 sm:border-l border-[#ecebe6] sm:pl-5 w-full sm:w-auto">
                <span className="text-[10px] lg:text-sm text-[#8e948e] font-bold">ভেরিফাইড প্রোফাইল ✓</span>
              </div>
            </section>

            <div className="grid grid-cols-2 xl:grid-cols-4 gap-[13px] my-[18px]">
              {[
                ["১,৮২৬", "অর্জিত পয়েন্ট", <StarAward01Icon size={20} strokeWidth={1.5} />],
                [bnDigits(coursesList.length), "চলমান কোর্স", <Books01Icon size={20} strokeWidth={1.5} />],
                [bnDigits(completedExamCount), "পরীক্ষা দেওয়া", <CheckmarkCircle02Icon size={20} strokeWidth={1.5} />],
                ["১০", "দিনের স্ট্রিক", <Fire02Icon size={20} strokeWidth={1.5} />]
              ].map(([n,l,icon],i)=><article className="bg-white border border-line rounded-[17px] p-[15px] lg:p-5 grid grid-cols-[35px_1fr_auto] gap-x-3 items-center" key={l as string}><i className={`w-[35px] lg:w-[42px] h-[35px] lg:h-[42px] grid place-items-center rounded-xl not-italic ${["bg-[#fff0b8]","bg-lavender","bg-[#ffe1e6]","bg-mint"][i]}`}>{icon}</i><div><b className="text-[22px] block font-bold">{n}</b><span className="text-xs text-[#666] block">{l}</span></div></article>)}
            </div>
            <div className="grid xl:grid-cols-[minmax(0,1.35fr)_minmax(300px,.65fr)] gap-[18px]">
              <section className="bg-white border border-line rounded-[20px] p-6">
                <div className="mb-[17px]"><span className="text-xs text-deep font-black tracking-[.08em] uppercase">সাবজেক্টভিত্তিক রিপোর্ট</span><h2 className="mt-1 mb-0 text-[23px]">সামগ্রিক পারফরম্যান্স</h2></div>
                {reportCourses.map((item) => {
                  const value = courseProgress(item);
                  return (
                    <button
                      className="w-full grid grid-cols-[1fr_48px] lg:grid-cols-[minmax(200px,.7fr)_1fr_48px] gap-4 items-center border-0 border-t border-solid border-[#ecebe6] py-[17px] px-0 bg-transparent text-left cursor-pointer hover:bg-[#fafaf7] transition-colors"
                      onClick={() => selectCourse(coursesList.indexOf(item))}
                      key={item.name}
                    >
                      <div>
                        <b className="block text-[15px]">{item.name}</b>
                        <span className="block text-[13px] text-[#70756f] mt-1">{bnDigits(value)}% সম্পন্ন</span>
                      </div>
                      <div className="col-span-2 row-start-2 lg:col-span-1 lg:row-auto h-2 bg-[#eee] rounded-lg overflow-hidden">
                        <i className="block h-full bg-green" style={{width:`${value}%`}}/>
                      </div>
                      <strong className="text-sm text-deep text-right">{bnDigits(value)}%</strong>
                    </button>
                  );
                })}
              </section>
              <aside className="grid gap-[18px] content-start mt-[15px] xl:mt-0">
                <CalendarCard />
              </aside>
            </div>
          </div>
        ) : (
          <div className="max-w-[1370px] mx-auto px-3.5 lg:px-[34px] pt-5 lg:pt-8 pb-20">
            {mode === "course" && <>
              <section className="rounded-[18px] px-5 lg:px-7 py-5 flex flex-col sm:flex-row justify-between sm:items-center gap-5" style={{background:course.color}}>
                <div>
                  <h1 className="text-[26px] lg:text-[32px] leading-tight m-0">{course.name}</h1>
                  <p className="text-xs text-[#59615b] mt-2 mb-0">{bnDigits(chaptersList.length)}টি অধ্যায়</p>
                </div>
                <div className="w-full sm:w-[150px] shrink-0">
                  <b className="block text-xl mb-2">{bnDigits(currentCourseProgress)}%</b>
                  <div className="h-[5px] bg-black/10 rounded-full overflow-hidden"><i className="block h-full bg-green" style={{width:`${currentCourseProgress}%`}}/></div>
                </div>
              </section>
              <div className="grid xl:grid-cols-[minmax(0,1fr)_280px] gap-[22px] mt-[22px] items-start">
                <section className="bg-white border border-line rounded-[20px] p-[17px] lg:p-[25px]">
                  <div className="flex justify-between items-end mb-[17px]"><div><span className="text-xs text-deep font-black tracking-[.08em] uppercase">কোর্স কনটেন্ট</span><h2 className="mt-1 mb-0 text-[23px]">সকল অধ্যায়</h2></div><b className="text-xs text-[#666]">{bnDigits(chaptersList.length)}টি অধ্যায়</b></div>
                  {chaptersList.map((item,index) => {
                    const completed = examProgress[progressKey(course.short, index)];
                    return (
                      <article
                        className="grid lg:grid-cols-[minmax(0,1fr)_auto] items-center border-t border-[#ecebe6] py-[13px] cursor-pointer"
                        key={item}
                        role="link"
                        tabIndex={0}
                        onClick={()=>openChapter(index,"learn")}
                        onKeyDown={(event) => {
                          if (event.key === "Enter" || event.key === " ") {
                            event.preventDefault();
                            openChapter(index, "learn");
                          }
                        }}
                      >
                        <button className="flex gap-3.5 items-center border-0 bg-transparent text-left cursor-pointer min-w-0" onClick={(event)=>{event.stopPropagation(); openChapter(index,"learn");}}>
                          <i className={`w-9 h-9 sm:w-[45px] sm:h-[45px] grid place-items-center rounded-[10px] sm:rounded-xl not-italic text-[10px] sm:text-xs font-black shrink-0 ${completed ? "bg-green text-ink" : "bg-[#f1f0ea]"}`}>
                            {completed ? <Tick01Icon size={18} strokeWidth={2.2}/> : bnDigits(Number(String(index + 1).padStart(2, "0"))).padStart(2, "০")}
                          </i>
                          <span>
                            <b className="block text-base mb-0.5">{item}</b>
                            <em className={`block text-xs not-italic ${completed ? "text-deep font-bold" : "text-[#777]"}`}>
                              {completed ? `পরীক্ষা দেওয়া · ${bnDigits(completed.score)}%` : `${bnDigits(course.rawChapters?.[index]?.mcqs.length || 0)}টি কুইজ প্রশ্ন`}
                            </em>
                          </span>
                        </button>
                        <div className="flex gap-2 pt-3 pl-0 lg:p-0 w-full lg:w-auto">
                          <button className="flex-1 lg:flex-none flex items-center justify-center gap-1.5 border border-[#d9d9d3] bg-white rounded-full px-4 py-3 lg:px-3 lg:py-2.5 text-xs font-extrabold cursor-pointer" onClick={(event)=>{event.stopPropagation(); openChapter(index,"learn");}}><PlayIcon size={14}/> শিখুন</button>
                          <button className={`flex-1 lg:flex-none flex items-center justify-center gap-1.5 border rounded-full px-4 py-3 lg:px-3 lg:py-2.5 text-xs font-extrabold cursor-pointer ${completed ? "border-green bg-green text-ink" : "border-ink bg-ink text-white"}`} onClick={(event)=>{event.stopPropagation(); openChapter(index,"test");}}>{completed && <Tick01Icon size={14}/>} {completed ? "আবার দিন" : "পরীক্ষা"}</button>
                        </div>
                      </article>
                    );
                  })}
                </section>
                <aside className="xl:sticky xl:top-[102px] mt-[15px] xl:mt-0">
                  <CalendarCard />
                </aside>
              </div>
            </>}
            {mode === "learn" && (
            <>
              <button className="border-0 bg-transparent text-deep text-sm font-black mb-4 cursor-pointer" onClick={()=>setMode("course")}>← {course.name}</button>
              <div className="grid lg:grid-cols-[minmax(0,1fr)_320px] gap-6 items-start">
                <article className="bg-white border border-line rounded-[22px] p-5 lg:p-7">
                  <div className="pb-4 mb-4 border-b border-[#ecebe6]">
                    <span className="text-sm text-deep font-extrabold">{bnDigits(chapterIndex + 1)} অধ্যায়</span>
                    <h1 className="text-[22px] lg:text-[26px] leading-tight mt-2 mb-0">
                      {chapter} <span className="text-[#718078] font-normal">•</span> {rawChapter?.main_concept_bn.title || "চলো মূল ধারণাটি বুঝি"}
                    </h1>
                  </div>
                  <div className="grid gap-3">
                    {(rawChapter?.main_concept_bn.short_points || []).map((point, index) => (
                      <div className="grid grid-cols-[32px_1fr] gap-3 items-start" key={point}>
                        <span className="w-8 h-8 rounded-full bg-mint text-deep grid place-items-center text-xs font-black">{bnDigits(index + 1)}</span>
                        <p className="text-[#61655f] leading-[1.9] text-base m-0">{point}</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* YouTube Video Resource Integration */}
                  {rawChapter?.video_resources && rawChapter.video_resources.length > 0 ? (
                    <div className="mt-6 border-t border-[#ecebe6] pt-5">
                      {mappedChapterTopics.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-5">
                          {mappedChapterTopics.map((item) => (
                            <span className="bg-mint border border-green/15 rounded-full px-3 py-1.5 text-xs font-bold text-deep" key={item._id}>
                              {item.name.trim()}
                            </span>
                          ))}
                        </div>
                      )}
                      <h4 className="text-lg font-bold text-ink mb-3">অধ্যায় ভিত্তিক ভিডিও ক্লাস:</h4>
                      <div className="grid gap-3">
                        {rawChapter.video_resources.map((vid, vIdx) => {
                          const getYoutubeId = (url: string) => {
                            const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
                            const match = url.match(regExp);
                            return (match && match[2].length === 11) ? match[2] : null;
                          };
                          const ytId = getYoutubeId(vid.url);
                          return (
                            <div className="bg-[#fcfcfa] border border-line rounded-xl p-3 flex flex-col gap-3" key={vIdx}>
                              {ytId ? (
                                <CsPlayerVideo videoId={ytId} playerId={`cs-player-${courseIndex}-${chapterIndex}-${vIdx}`} />
                              ) : (
                                <div className="w-full h-[100px] bg-ink/5 rounded-lg flex items-center justify-center">
                                  <PlayIcon size={24} className="text-muted" />
                                </div>
                              )}
                              <div className="flex-1">
                                <h5 className="text-[15px] font-bold text-ink mt-0 mb-1">{vid.title}</h5>
                                <a className="text-xs text-green font-bold hover:underline" href={vid.url} target="_blank" rel="noopener noreferrer">ইউটিউবে দেখুন ↗</a>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    <div className="bg-mint/40 border border-green/10 rounded-xl p-4 mt-8 flex items-center gap-3">
                      <span className="text-lg">ℹ</span>
                      <p className="m-0 text-xs text-deep font-bold">ভিডিও পাওয়া যায়নি।</p>
                    </div>
                  )}

                  <div className="flex justify-center">
                    <button className="inline-flex items-center justify-center gap-2.5 border border-ink bg-green shadow-[3px_4px_0_#111] rounded-full px-5 py-[13px] font-black cursor-pointer mt-7" onClick={() => openChapter(chapterIndex, "test")}>অনুশীলনী পরীক্ষা দিন <ArrowRight01Icon size={18} /></button>
                  </div>
                </article>
                <aside className="bg-white border border-line rounded-[22px] p-5">
                  <b className="block px-2.5 pt-2 pb-4">এই অধ্যায়ে</b>
                  {["ধারণা ও সংজ্ঞা", "ইউটিউব ক্লাস ভিডিও", "অনুশীলনী কুইজ", "অধ্যায় পরীক্ষা"].map((item, i) => (
                    <div className={`flex items-center gap-2.5 px-2.5 py-[13px] rounded-[10px] text-sm font-bold ${i === 0 ? "bg-mint" : ""}`} key={item}><span className="text-deep text-xs">০{i + 1}</span>{item}</div>
                  ))}
                  <div className="border-t border-line mt-4 pt-4">
                    <b className="block text-sm mb-3">কিউআর দিয়ে খুলুন</b>
                    <div className="grid grid-cols-2 gap-2">
                      <QrLink label="শিখুন" url={`${window.location.origin}${dashboardShareUrl(course, chapterIndex, "learn")}`} />
                      <QrLink label="পরীক্ষা" url={`${window.location.origin}${dashboardShareUrl(course, chapterIndex, "test")}`} />
                    </div>
                  </div>
                </aside>
              </div>
            </>)}
            {mode === "test" && (
            <><button className="border-0 bg-transparent text-deep text-[10px] font-black mb-4 cursor-pointer" onClick={()=>setMode("course")}>← {course.name}</button>
            <div className="max-w-[760px] mx-auto my-[25px] bg-white border border-line rounded-[22px] p-5 lg:p-7">
              <div className="flex justify-between items-center text-[11px] text-deep">
                <span>অধ্যায় পরীক্ষা ({chapter})</span>
                <div className="flex items-center gap-3">
                  <b>প্রশ্ন {bnDigits(currentMcqIndex + 1)} / {bnDigits(mcqs.length)}</b>
                  <span className="relative w-12 h-12 rounded-full grid place-items-center shrink-0" style={{background:`conic-gradient(${timerColor} ${timerPercent}%, #e6e7e2 ${timerPercent}% 100%)`}}>
                    <span className="absolute inset-[4px] rounded-full" style={{background:timerBackground}} />
                    <b className="relative z-10 font-black text-sm" style={{color:timerColor}}>{bnDigits(timeLeft)}</b>
                  </span>
                </div>
              </div>
              <div className="h-[5px] bg-[#eee] rounded-lg my-[18px] mb-[45px]"><i className="block h-full bg-green" style={{ width: `${((currentMcqIndex + 1) / mcqs.length) * 100}%` }} /></div>
              
              <h1 className="text-[20px] lg:text-[24px] mb-6 leading-relaxed">{currentMcq.question}</h1>
              
              <div className="grid gap-2.5 mt-6">
                {currentMcq.options.map((opt, i) => {
                  const isCorrectOption = opt.key === currentMcq.answer;
                  const isSelected = answer === i;
                  const feedbackClass = answerChecked
                    ? isCorrectOption
                      ? "border-green bg-mint text-deep"
                      : isSelected
                        ? "border-[#ff6278] bg-[#fff0f2] text-[#a9283d]"
                        : "border-line bg-white text-[#777]"
                    : "border-line bg-white hover:border-ink";
                  return (
                    <button
                      className={`flex items-center gap-[15px] p-3.5 text-left border rounded-[13px] text-sm font-bold transition-colors ${feedbackClass} ${answerChecked ? "cursor-default" : "cursor-pointer"}`}
                      onClick={() => checkAnswer(i)}
                      disabled={answerChecked}
                      key={opt.key}
                    >
                      <span className={`w-[30px] h-[30px] grid place-items-center rounded-full font-extrabold shrink-0 ${answerChecked && isCorrectOption ? "bg-green text-ink" : answerChecked && isSelected ? "bg-[#ff6278] text-white" : "bg-[#efeee8]"}`}>{bnOptionLabels[i]}</span>
                      {opt.text}
                    </button>
                  );
                })}
              </div>
              <div className="flex justify-center">
                <button className="inline-flex items-center justify-center gap-2.5 border border-ink bg-green shadow-[3px_4px_0_#111] rounded-full px-5 py-[13px] font-black cursor-pointer mt-[22px] disabled:opacity-40 disabled:cursor-not-allowed" disabled={!answerChecked} onClick={finishQuestion}>
                  {currentMcqIndex + 1 < mcqs.length ? "পরবর্তী" : "ফলাফল দেখুন"} <ArrowRight01Icon size={18} />
                </button>
              </div>
            </div></>)}
            {mode === "result" && (
            <div className="max-w-[900px] mx-auto my-[25px]">
              <section className="bg-white text-ink rounded-[24px] overflow-hidden border border-line">
                <div className="text-center px-5 py-8">
                  <span className="text-deep text-[11px] font-black uppercase">পরীক্ষার ফলাফল</span>
                  <h1 className="text-xl font-bold mt-1 mb-6">{chapter}</h1>
                  <b className="block text-[48px] leading-none text-deep">{bnDigits(scores[0]?.score || 0)}%</b>
                  <span className="block text-sm text-[#666] mt-3">{bnDigits(scoreCount)} / {bnDigits(mcqs.length)} সঠিক</span>
                </div>
                <div className="grid grid-cols-3 border-t border-line bg-[#fafaf7]">
                  {[
                    [scoreCount, "সঠিক", "text-green"],
                    [answerHistory.filter((item) => item.selectedKey !== null && !item.correct).length, "ভুল", "text-[#ff6278]"],
                    [answerHistory.filter((item) => item.selectedKey === null).length, "স্কিপ", "text-[#777]"]
                  ].map(([value, label, color], index) => (
                    <div className={`text-center py-5 ${index < 2 ? "border-r border-line" : ""}`} key={label as string}>
                      <b className={`block text-2xl ${color}`}>{bnDigits(value as number)}</b>
                      <span className="block text-xs text-[#777] mt-1">{label}</span>
                    </div>
                  ))}
                </div>
              </section>

              <div className="flex justify-center gap-3 my-6">
                <button className="inline-flex items-center justify-center border border-ink bg-green shadow-[3px_4px_0_#111] rounded-full px-5 py-[12px] font-black cursor-pointer" onClick={() => setMode("profile")}>প্রোফাইলে ফল দেখুন</button>
                <button className="inline-flex items-center justify-center border border-line bg-white rounded-full px-5 py-[12px] font-black cursor-pointer" onClick={() => openChapter(chapterIndex, "test")}>আবার পরীক্ষা দিন</button>
              </div>

              <section className="grid gap-4">
                {mcqs.map((mcq, index) => {
                  const response = answerHistory.find((item) => item.questionIndex === index);
                  return (
                    <article className="bg-white border border-line rounded-[20px] p-5 lg:p-6" key={mcq.id || index}>
                      <div className="flex gap-3 items-start">
                        <span className={`w-8 h-8 rounded-full grid place-items-center shrink-0 text-sm font-black ${response?.correct ? "bg-green text-ink" : "bg-[#ffe1e6] text-[#c42f47]"}`}>
                          {bnDigits(index + 1)}
                        </span>
                        <h2 className="text-base lg:text-lg leading-relaxed m-0">{mcq.question}</h2>
                      </div>
                      <div className="grid gap-2.5 mt-4">
                        {mcq.options.map((option) => {
                          const isCorrectOption = option.key === mcq.answer;
                          const isSelected = option.key === response?.selectedKey;
                          return (
                            <div
                              className={`flex items-center gap-[15px] p-3.5 rounded-[13px] border text-sm font-bold ${
                                isCorrectOption
                                  ? "border-green bg-mint text-deep"
                                  : isSelected
                                    ? "border-[#ff6278] bg-[#fff0f2] text-[#a9283d]"
                                    : "border-line bg-white text-ink"
                              }`}
                              key={option.key}
                            >
                              <span className={`w-[30px] h-[30px] grid place-items-center rounded-full font-extrabold shrink-0 ${
                                isCorrectOption ? "bg-green text-ink" : isSelected ? "bg-[#ff6278] text-white" : "bg-[#efeee8]"
                              }`}>
                                {bnOptionLabels[mcq.options.indexOf(option)]}
                              </span>
                              {option.text}
                            </div>
                          );
                        })}
                      </div>
                    </article>
                  );
                })}
              </section>
            </div>)}
          </div>
        )}
      </section>
    </main>
  );
};

const RootApp: React.FC = () => {
  const [dashboard, setDashboard] = useState(window.location.pathname.startsWith("/dashboard"));
  useEffect(() => {
    const sync = () => setDashboard(window.location.pathname.startsWith("/dashboard"));
    window.addEventListener("popstate", sync);
    return () => window.removeEventListener("popstate", sync);
  }, []);
  return dashboard ? <DashboardApp /> : <LandingApp />;
};

const rootEl = document.getElementById("root");
if (rootEl) {
  createRoot(rootEl).render(<RootApp />);
}
