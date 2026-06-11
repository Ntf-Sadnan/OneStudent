import React, { Suspense, lazy, useEffect, useRef, useState } from "react";
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
import { Button, DashboardCard, Logo, PhoneChat, SectionTitle, StyleOverride, photos } from "../components/shared";

const DashboardPreviewApp = lazy(() => import("./DashboardApp"));

const LandingApp: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("পদার্থবিজ্ঞান");
  const [showDashboardPreview, setShowDashboardPreview] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const dashboardPreviewRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    const target = dashboardPreviewRef.current;
    if (!target || showDashboardPreview) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowDashboardPreview(true);
          observer.disconnect();
        }
      },
      { rootMargin: "280px 0px" }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [showDashboardPreview]);

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
      {menuOpen && (
        <button
          className="fixed inset-0 z-[80] hidden max-[760px]:block border-0 bg-black/50"
          onClick={() => setMenuOpen(false)}
          aria-label="মেনু বন্ধ করুন"
        />
      )}
      <aside className={`fixed top-0 left-0 z-[90] hidden max-[760px]:flex h-dvh w-[282px] bg-ink text-white px-3 py-6 flex-col overflow-y-auto shadow-2xl transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex items-center justify-between px-2 pb-[22px] mb-2 border-b border-[#2a2c29]">
          <Logo light />
          <button className="grid place-items-center w-9 h-9 rounded-[10px] border border-white/10 bg-white/5 text-white cursor-pointer" onClick={() => setMenuOpen(false)} aria-label="মেনু বন্ধ করুন">
            <Cancel01Icon size={20} />
          </button>
        </div>
        <nav className="grid gap-1">
          {[
            ["শিক্ষার্থী আইডি", "#student-id"],
            ["পড়াশোনা", "#learning"],
            ["সহায়তা", "#support"],
            ["প্রভাব", "#impact"],
            ["যোগাযোগ", "#contact"]
          ].map(([text, link]) => (
            <a className="text-sm font-extrabold text-[#c9cfca] px-[13px] py-[13px] rounded-[11px] hover:bg-[#282b27] hover:text-white transition-colors" href={link} key={link} onClick={() => setMenuOpen(false)}>
              {text}
            </a>
          ))}
        </nav>
        <div className="px-3 pt-5 mt-auto">
          <Button href="/dashboard">শুরু করুন</Button>
        </div>
      </aside>
      {/* 0. Header */}
      <header className="fixed top-0 left-0 w-full z-50 px-8 py-4.5 max-[760px]:px-2.5 max-[760px]:py-2.5 transition-all duration-300 header-scroll-bg">
        <div className="h-[72px] max-[760px]:h-[62px] max-w-[1380px] mx-auto bg-white/88 backdrop-blur-[18px] rounded-[20px] flex items-center justify-between px-6 py-0 shadow-sm relative">
          <Logo />
          <nav className="hidden md:flex md:static md:flex-row md:items-center md:justify-center md:gap-7">
            {[
              ["শিক্ষার্থী আইডি", "#student-id"],
              ["পড়াশোনা", "#learning"],
              ["সহায়তা", "#support"],
              ["প্রভাব", "#impact"],
              ["যোগাযোগ", "#contact"]
            ].map(([text, link]) => (
              <a className="text-[13px] font-semibold text-[#55574f] hover:text-green transition-colors" href={link} key={link}>
                {text}
              </a>
            ))}
          </nav>
          <div className="max-[760px]:hidden">
            <Button href="/dashboard">শুরু করুন</Button>
          </div>
          <button className="hidden max-[760px]:flex items-center justify-center w-10 h-10 border-none bg-transparent cursor-pointer text-ink" onClick={() => setMenuOpen(true)} aria-label="মেনু খুলুন">
            <Menu01Icon size={24} />
          </button>
        </div>
      </header>

      {/* 1. Hero Section */}
      <section className="pt-[120px] max-[760px]:pt-[100px] pb-16 max-[760px]:pb-8 px-16 max-[760px]:px-4 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[0.88fr_1.12fr] gap-6 lg:gap-10 items-center overflow-hidden">
        <div className="flex flex-col text-left max-[760px]:text-center">
          <div className="inline-flex items-center gap-2 border border-gray-300 rounded-full p-1.5 max-[760px]:flex-col max-[760px]:items-center max-[760px]:gap-1 max-[760px]:rounded-[18px] max-[760px]:px-2 max-[760px]:py-2 max-[760px]:max-w-[calc(100vw-32px)] max-[760px]:w-fit max-[760px]:mx-auto w-fit text-[12px] tracking-wide mb-6">
            <span className="bg-yellow px-2.5 py-1.5 rounded-full font-bold text-[12px] max-[760px]:text-[10px] max-[760px]:px-2.5 max-[760px]:max-w-full max-[760px]:whitespace-normal max-[760px]:leading-tight">জাতীয় ডিজিটাল লার্নিং প্ল্যাটফর্ম</span>
            <span className="flex items-center justify-center gap-1.5 text-muted font-medium max-[760px]:text-[10px] max-[760px]:leading-tight max-[760px]:max-w-full max-[760px]:text-center">
              <i className="w-1.5 h-1.5 bg-green rounded-full shrink-0" />
              <span className="min-w-0 break-words">প্রথম থেকে দ্বাদশ শ্রেণি পর্যন্ত</span>
            </span>
          </div>
          <h1 className="text-[clamp(2.35rem,12vw,4.5rem)] md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 max-[760px]:mb-7 leading-[1.08] max-[760px]:leading-[0.95] text-ink">
            <span className="block text-[0.85em]">প্রতিটি শিক্ষার্থীর যাত্রা</span>
            <em className="block text-green not-italic max-[760px]:mt-1">এক প্ল্যাটফর্মেই</em>
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
        <div className="relative h-[670px] max-[760px]:h-[min(132vw,520px)] w-full max-w-[780px] mx-auto shrink-0">
          <div className="absolute inset-[60px_30px_30px_90px] max-[760px]:inset-[60px_15px_30px] bg-yellow rounded-[44%_56%_63%_37%_/_44%_40%_60%_56%] rotate-4" />
          <div className="absolute inset-[28px_65px_35px_70px] max-[760px]:inset-[35px_25px] rounded-[47%_53%_46%_54%_/_37%_38%_62%_63%] overflow-hidden filter saturate-90 shadow-lg after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-t after:from-emerald-900/18 after:to-transparent">
            <img className="w-full h-full object-cover" src={photos.hero} alt="শ্রেণিকক্ষে একসঙ্গে পড়ছে শিক্ষার্থীরা" />
          </div>
          <DashboardCard />
          <div className="absolute right-[-5px] top-[100px] max-[760px]:right-2 max-[760px]:top-[88px] w-[170px] max-[760px]:w-[136px] h-[200px] max-[760px]:h-[164px] bg-ink text-white rounded-[22px] p-5.5 max-[760px]:p-4 flex flex-col items-center text-center shadow-xl animate-float-2">
            <span className="text-[12px] max-[760px]:text-[10px] text-gray-300">সর্বশেষ পরীক্ষা</span>
            <b className="text-[48px] max-[760px]:text-[36px] font-bold mt-2.5 tracking-tighter">৯২%</b>
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
                    <span className="block text-[9px] text-muted mt-1">জাতীয় শিক্ষা বোর্ড · ওয়ানস্টপ লার্নিং</span>
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
                      <b className="text-[11px] text-ink leading-snug block mt-0.5">গাইবান্ধা সরকারি কলেজ</b>
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
          <div className="bg-white border border-gray-300 rounded-[28px] p-3 max-[760px]:p-2.5 shadow-[0_30px_80px_rgba(30,32,27,0.1)]">
            <div className="min-h-[610px] max-[760px]:min-h-[680px] bg-[#f7f7f4] rounded-[20px] overflow-hidden border border-gray-200 shadow-sm flex flex-col">
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
              <div className="flex-1 dashboard-preview-frame" ref={dashboardPreviewRef}>
                {showDashboardPreview && (
                  <Suspense fallback={<div className="h-full bg-[#f4f3ee]" />}>
                    <DashboardPreviewApp />
                  </Suspense>
                )}
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
        <div className="relative flex items-center justify-center w-full">
          <img 
            className="w-full max-w-[500px] h-auto object-contain rounded-2xl select-none"
            src="/assets/organic test.webp" 
            alt="Organic chemistry practice test interface" 
          />
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
            <span className="text-[7px] tracking-widest text-[#ba8e13] uppercase block mb-1">ওয়ানস্টপ লার্নিং বাংলাদেশ</span>
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


export default LandingApp;
