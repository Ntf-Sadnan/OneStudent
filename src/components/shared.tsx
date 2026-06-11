import React from "react";
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
import profileImg from "../profile.webp";

export const StyleOverride: React.FC = () => (
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
    .dashboard-preview-frame .dashboard-calendar-card {
      display: none !important;
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


export const photos = {
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

export const Arrow: React.FC<ArrowProps> = ({ down = false }) => (
  <span className="inline-grid place-items-center w-8 h-8 bg-ink text-white rounded-full text-base transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
    {down ? <ArrowDown01Icon size={16} /> : <ArrowUpRight01Icon size={16} />}
  </span>
);

interface LogoProps {
  light?: boolean;
  href?: string;
}

export const Logo: React.FC<LogoProps> = ({ light = false, href = "#top" }) => {
  return (
    <a className={`flex items-center gap-2.5 min-w-[245px] max-[760px]:min-w-0 max-[760px]:gap-2 ${light ? "text-white" : "text-ink"}`} href={href} aria-label="ওয়ানস্টপ লার্নিং বাংলাদেশ হোম">
      <span className="relative w-[31px] h-[31px] grid grid-cols-2 gap-[3px] -rotate-7 shrink-0">
        <i className="rounded-[4px] bg-green" />
        <i className="rounded-[4px] bg-yellow" />
        <i className={`rounded-[4px] col-span-2 h-[9px] ${light ? "bg-white" : "bg-ink"}`} />
      </span>
      <span className="flex flex-col leading-none">
        <b className="font-[#111] text-base max-[760px]:text-[15px] font-bold">ওয়ানস্টপ লার্নিং</b>
        <small className={`text-[9px] max-[760px]:text-[8px] uppercase tracking-[0.14em] max-[760px]:tracking-[0.08em]   ${light ? "text-gray-300" : "text-muted"}`}>বাংলাদেশ</small>
      </span>
    </a>
  );
};

interface ButtonProps {
  children: React.ReactNode;
  secondary?: boolean;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, secondary = false, href = "/dashboard" }) => {
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

export const SectionTitle: React.FC<SectionTitleProps> = ({ eyebrow, title, text, center = false }) => {
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

export const DashboardCard: React.FC = () => {
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

export const PhoneChat: React.FC = () => {
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
