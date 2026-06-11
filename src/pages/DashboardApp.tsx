import React, { useEffect, useState } from "react";
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
import profileImg from "../profile.webp";
import { Logo, StyleOverride } from "../components/shared";

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

type DashboardMode = "course" | "profile" | "learn" | "test" | "result";

const DashboardApp: React.FC = () => {
  const [courseIndex, setCourseIndex] = useState(0);
  const [chapterIndex, setChapterIndex] = useState(0);
  const [mode, setMode] = useState<DashboardMode>("profile");
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
    <section className="dashboard-calendar-card bg-white border border-line rounded-[20px] p-6">
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
                  <span>গাইবান্ধা সরকারি কলেজ</span>
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
                  
                  {mappedChapterTopics.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-6">
                      {mappedChapterTopics.map((item) => (
                        <span className="bg-mint border border-green/15 rounded-full px-3 py-1.5 text-xs font-bold text-deep" key={item._id}>
                          {item.name.trim()}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* YouTube Video Resource Integration */}
                  {rawChapter?.video_resources && rawChapter.video_resources.length > 0 ? (
                    <div className="mt-6 border-t border-[#ecebe6] pt-5">
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


export default DashboardApp;
