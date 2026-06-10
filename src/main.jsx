import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  BookOpen01Icon,
  DashboardSquare01Icon,
  Route01Icon,
  AiBrain01Icon,
  QrCodeIcon,
  UserShield01Icon
} from "hugeicons-react";
import "./styles.css";

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

const Arrow = ({ down = false }) => <span className={down ? "arrow down" : "arrow"}>{down ? "↓" : "↗"}</span>;

function Logo({ light = false }) {
  return (
    <a className={`logo ${light ? "light" : ""}`} href="#top" aria-label="ওয়ানস্টুডেন্ট বাংলাদেশ হোম">
      <span className="logo-mark"><i /><i /><i /></span>
      <span><b>ওয়ানস্টুডেন্ট</b><small>বাংলাদেশ</small></span>
    </a>
  );
}

function Button({ children, secondary = false, href = "#features" }) {
  return <a className={`button ${secondary ? "secondary" : ""}`} href={href}>{children}<Arrow /></a>;
}

function SectionTitle({ eyebrow, title, text, center = false }) {
  return (
    <div className={`section-heading ${center ? "center" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function DashboardCard() {
  return (
    <div className="dashboard-card">
      <div className="dash-top">
        <div><span>সুপ্রভাত,</span><b>রাফি রহমান</b></div>
        <div className="avatar">😀</div>
      </div>
      <div className="progress-ring"><div><b>৭৮%</b></div></div>
      <div className="dash-subjects">
        <div><span className="subject-dot green" /><b>গণিত</b><small>১৬টির মধ্যে ১২টি পাঠ</small></div>
        <div><span className="subject-dot yellow" /><b>বিজ্ঞান</b><small>১২টির মধ্যে ৮টি পাঠ</small></div>
      </div>
      <div className="mini-progress"><i style={{width: "78%"}} /></div>
    </div>
  );
}

function PhoneChat() {
  return (
    <div className="phone">
      <div className="phone-bar"><span>9:41</span><i /></div>
      <div className="tutor-title"><span className="spark">✦</span><div><b>এআই পড়ার সঙ্গী</b><small>এখন অনলাইনে</small></div></div>
      <div className="chat question">ভগ্নাংশ কীভাবে যোগ করব?</div>
      <div className="chat answer"><b>চলো ধাপে ধাপে করি।</b><br />প্রথমে দুইটি ভগ্নাংশের হর সমান করতে হবে...</div>
      <div className="formula">2/5 + 1/5 = <b>3/5</b></div>
      <div className="chat-options"><span>আরও সহজ করে বলো</span><span>একটি কুইজ দাও</span></div>
      <div className="chat-input">যেকোনো প্রশ্ন করো… <b>↑</b></div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => document.body.classList.toggle("scrolled", window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const features = [
    ["০১", "এনসিটিবি লার্নিং হাব", "প্রথম থেকে দ্বাদশ শ্রেণির অধ্যায়ভিত্তিক পাঠ, নোট ও ভিডিও।", "mint"],
    ["০২", "এআই পড়াশোনা সহকারী", "সহজ বাংলা ব্যাখ্যা, বাড়ির কাজের সহায়তা ও বুদ্ধিদীপ্ত অনুশীলন।", "yellow"],
    ["০৩", "পরীক্ষা ও সনদ", "কুইজ, মডেল টেস্ট, তাৎক্ষণিক বিশ্লেষণ ও যাচাইকৃত অর্জন।", "white"],
    ["০৪", "শিক্ষার্থী পাসপোর্ট", "অগ্রগতি, দক্ষতা ও অর্জনের আজীবন ডিজিটাল পরিচয়।", "green"],
    ["০৫", "অভিভাবক মোড", "সহজ অগ্রগতি সারাংশ ও সময়মতো গুরুত্বপূর্ণ সতর্কতা।", "white"],
    ["০৬", "শিক্ষক সহকারী", "পাঠ সহায়তা, শ্রেণির অন্তর্দৃষ্টি ও শেখার ঘাটতি দ্রুত শনাক্তকরণ।", "lavender"],
    ["০৭", "স্বাস্থ্য ও সুস্থতা", "সুস্থ মন, শরীর ও পড়ার অভ্যাসের জন্য নিরাপদ দিকনির্দেশনা।", "yellow"],
    ["০৮", "ক্যারিয়ার ও কলেজ", "আগ্রহভিত্তিক দিকনির্দেশনা, বৃত্তি ও উচ্চশিক্ষায় সহায়তা।", "mint"],
    ["০৯", "কিউআর-সংযুক্ত বই", "বই স্ক্যান করেই সংশ্লিষ্ট ভিডিও পাঠ, ক্লাস অথবা পরীক্ষা শুরু।", "lavender"],
    ["১০", "আজীবন শিক্ষার্থী আইডি", "শিক্ষাজীবনের শুরু থেকে শেষ পর্যন্ত একটি স্থায়ী ডিজিটাল পরিচয়।", "white"],
    ["১১", "দক্ষতাভিত্তিক শিক্ষা", "কৃষি, ইংরেজি বলা, ডিজিটাল দক্ষতা ও জীবনমুখী কোর্স।", "yellow"],
    ["১২", "এডটেক সহযোগিতা", "বিশ্বস্ত শিক্ষা প্রতিষ্ঠান ও এডটেককে এক জাতীয় ব্যবস্থায় যুক্ত করা।", "green"],
  ];

  return (
    <main id="top">
      <header>
        <div className="nav-shell">
          <Logo />
          <nav className={menuOpen ? "open" : ""}>
            <a href="#why">কেন ওয়ানস্টুডেন্ট</a>
            <a href="#learning">পড়াশোনা</a>
            <a href="#support">সহায়তা</a>
            <a href="#impact">প্রভাব</a>
            <a href="#contact">যোগাযোগ</a>
          </nav>
          <div className="nav-actions">
            <a className="signin" href="#signin">সাইন ইন</a>
            <Button href="#contact">শুরু করুন</Button>
          </div>
          <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="মেনু খুলুন"><span /><span /></button>
        </div>
      </header>

      <section className="hero section-pad">
        <div className="hero-copy">
          <div className="hero-kicker"><span>জাতীয় ডিজিটাল লার্নিং প্ল্যাটফর্ম</span><i /> প্রথম–দ্বাদশ শ্রেণি</div>
          <h1><span style={{ whiteSpace: "nowrap", fontSize: "0.75em", display: "inline-block" }}>প্রতিটি শিক্ষার্থীর যাত্রা</span><br /><em>এক প্ল্যাটফর্মেই</em></h1>
          <p>পড়াশোনা, পরীক্ষা, দক্ষতা ও ভবিষ্যৎ পরিকল্পনা — সবকিছু এক জায়গায়।</p>
          <div className="button-row"><Button>পড়াশোনা শুরু করুন</Button><Button secondary href="#features">প্ল্যাটফর্ম দেখুন</Button></div>
          <div className="hero-trust">
            <div className="faces"><img src={photos.students}/><img src={photos.teacher}/><img src={photos.family}/></div>
            <p><b>সারাদেশের জন্য এক স্বপ্ন</b><br/>শিক্ষার্থী · শিক্ষক · অভিভাবক</p>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-blob" />
          <div className="hero-photo"><img src={photos.hero} alt="শ্রেণিকক্ষে একসঙ্গে পড়ছে শিক্ষার্থীরা" /></div>
          <DashboardCard />
          <div className="score-card"><span>সর্বশেষ পরীক্ষা</span><b>৯২%</b><small>চমৎকার হয়েছে!</small><div><i/><i/><i/><i/><i/></div></div>
          <div className="complete-pill"><span>✓</span><div><b>অধ্যায় সম্পন্ন</b><small>বীজগণিত · অষ্টম শ্রেণি</small></div></div>
          <div className="doodle">↝</div>
        </div>
        <div className="hero-stats">
          <div><b>২ কোটি+</b><span>সম্ভাব্য শিক্ষার্থী</span></div>
          <div><b>১–১২</b><span>একীভূত শিক্ষা</span></div>
          <div><b>৬৪</b><span>জেলার স্বপ্ন</span></div>
          <div><b>১</b><span>শিক্ষা পরিচয়</span></div>
        </div>
      </section>

      <section className="trust-strip" aria-label="প্ল্যাটফর্মের প্রধান সুবিধা">
        <div className="trust-track">
          {[0, 1].map((loop) => (
            <div className="trust-group" aria-hidden={loop === 1} key={loop}>
              {[
                [<BookOpen01Icon size={20} />, "এনসিটিবি পাঠ্যক্রম"],
                [<DashboardSquare01Icon size={20} />, "অল-ইন-ওয়ান সল্যুশন"],
                [<Route01Icon size={20} />, "গাইডেড লার্নিং"],
                [<AiBrain01Icon size={20} />, "ডাউট সল্ভের জন্য এআই"],
                [<QrCodeIcon size={20} />, "ক্লাস এবং পরীক্ষার কিউআর কোড"],
                [<UserShield01Icon size={20} />, "অভিভাবক মনিটরিং"],
              ].map(([icon, text], idx) => <div className="trust-item" key={`${loop}-${idx}`}><span>{icon}</span>{text}</div>)}
            </div>
          ))}
        </div>
      </section>

      <section className="why section-pad" id="why">
        <div className="why-grid">
          <SectionTitle eyebrow="কেন ওয়ানস্টুডেন্ট" title={<>শুধু পাঠ নয়।<br /><em>একটি পূর্ণাঙ্গ সহায়তা ব্যবস্থা।</em></>} text="পড়াশোনা, দিকনির্দেশনা, যত্ন ও সুযোগ একসঙ্গে কাজ করলেই শিক্ষার্থীরা সবচেয়ে ভালো করে। ওয়ানস্টুডেন্ট পুরো যাত্রাটিকে আনে একটি বিশ্বস্ত জায়গায়।" />
          <div className="why-points">
            <div><b>০১</b><h3>নিজের গতিতে শেখো</h3><p>পরিষ্কার অধ্যায়ভিত্তিক পথ আত্মবিশ্বাস নিয়ে এগোতে সাহায্য করে।</p></div>
            <div><b>০২</b><h3>প্রতিটি ধাপে সহায়তা পাও</h3><p>শিক্ষক ও অভিভাবক সঠিক সময়ে প্রয়োজনীয় বিষয়টি দেখতে পান।</p></div>
            <div><b>০৩</b><h3>বাস্তব ভবিষ্যৎ গড়ে তোলো</h3><p>ক্যারিয়ার ও কলেজ নির্দেশনায় নিজের শক্তিকে লক্ষ্যে রূপ দাও।</p></div>
          </div>
        </div>
        <div className="wide-photo">
          <img src={photos.students} alt="একসঙ্গে কাজ করছে শিক্ষার্থীরা" />
          <div className="wide-caption"><span>ওয়ানস্টুডেন্টের অঙ্গীকার</span><h3>কোনো শিক্ষার্থী যেন অজান্তে পিছিয়ে না পড়ে।</h3><p>সমন্বিত অগ্রগতি সংকেত স্কুল ও পরিবারকে যত্নের সঙ্গে দ্রুত পদক্ষেপ নিতে সাহায্য করে।</p></div>
          <div className="photo-stat"><b>৩৬০°</b><span>শিক্ষার্থী চিত্র</span></div>
        </div>
      </section>

      <section className="learning section-pad" id="learning">
        <SectionTitle center eyebrow="শেখার মূল কেন্দ্র" title={<>আত্মবিশ্বাসে শেখার<br /><em>যা কিছু প্রয়োজন।</em></>} text="পাঠ্যক্রমের বিষয়বস্তু, বুদ্ধিদীপ্ত সহায়তা ও কার্যকর অনুশীলন — একটি সহজ অভিজ্ঞতায় সংযুক্ত।" />
        <div className="learning-showcase">
          <div className="subject-nav">
            <span className="active">অষ্টম শ্রেণি</span><span>বাংলা</span><span>ইংরেজি</span><span>গণিত</span><span>বিজ্ঞান</span><span>আইসিটি</span>
          </div>
          <div className="lesson-ui">
            <aside><Logo /><small>আমার পড়াশোনা</small>{["সারসংক্ষেপ","আমার বিষয়","অনুশীলন","পরীক্ষা","সনদ"].map((x,i)=><div className={i===1?"selected":""} key={x}><i />{x}</div>)}</aside>
            <div className="lesson-main">
              <div className="lesson-head"><div><small>অষ্টম শ্রেণি · গণিত</small><h3>যেখান থেকে থেমেছিলে, সেখান থেকেই শুরু করো।</h3></div><div className="avatar">😀</div></div>
              <div className="continue-card"><div><span>অধ্যায় ০৪</span><h4>বীজগাণিতিক রাশি</h4><p>৮টির মধ্যে ৬ষ্ঠ পাঠ · ১৮ মিনিট</p><button>পাঠ চালিয়ে যাও <Arrow /></button></div><div className="geometry"><i/><i/><i/></div></div>
              <div className="course-row">
                <div><span className="course-no">০১</span><b>সংখ্যা পদ্ধতি</b><small>১০০% সম্পন্ন</small><i className="bar full"/></div>
                <div><span className="course-no">০২</span><b>জ্যামিতি</b><small>৭২% সম্পন্ন</small><i className="bar medium"/></div>
                <div><span className="course-no">০৩</span><b>উপাত্ত ও সম্ভাবনা</b><small>অধ্যায় শুরু করো</small><i className="bar"/></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="qr-learning section-pad">
        <div className="qr-copy">
          <SectionTitle eyebrow="বই থেকে ডিজিটাল ক্লাস" title={<>একটি কিউআর স্ক্যানেই<br /><em>পাঠ অথবা পরীক্ষা শুরু।</em></>} text="প্রতিটি বইয়ের অধ্যায়ের সঙ্গে থাকবে নির্দিষ্ট ভিডিও পাঠ ও পরীক্ষার কিউআর কোড। শিক্ষার্থী বই থেকেই সরাসরি সঠিক ডিজিটাল ক্লাসে যেতে পারবে।" />
          <div className="qr-steps">
            <div><b>০১</b><span>বইয়ের কিউআর কোড স্ক্যান করো</span></div>
            <div><b>০২</b><span>সংশ্লিষ্ট ভিডিও পাঠ দেখো</span></div>
            <div><b>০৩</b><span>কুইজ বা পরীক্ষা সরাসরি শুরু করো</span></div>
          </div>
          <Button>কিউআর শেখার অভিজ্ঞতা দেখুন</Button>
        </div>
        <div className="book-scene">
          <div className="book">
            <div className="book-page left-page">
              <span>অধ্যায় ০৪</span>
              <h3>বীজগাণিতিক রাশি</h3>
              <p>চলক, সহগ ও রাশির ধারণা উদাহরণসহ শিখি।</p>
              <div className="book-lines"><i/><i/><i/><i/></div>
              <div className="qr-box"><div className="fake-qr">{Array.from({length:36}).map((_,i)=><i key={i}/>)}</div><b>ভিডিও পাঠ দেখো</b><small>স্ক্যান করো</small></div>
            </div>
            <div className="book-page right-page">
              <span>অধ্যায় অনুশীলন</span>
              <div className="math-shape">x + 3y</div>
              <div className="book-lines"><i/><i/><i/></div>
              <div className="qr-box exam-qr"><div className="fake-qr">{Array.from({length:36}).map((_,i)=><i key={i}/>)}</div><b>অধ্যায় পরীক্ষা</b><small>এখনই শুরু করো</small></div>
            </div>
          </div>
          <div className="scan-card video-scan"><span>▶</span><div><small>কিউআর সংযুক্ত</small><b>১৮ মিনিটের ভিডিও পাঠ</b></div></div>
          <div className="scan-card test-scan"><span>✓</span><div><small>সরাসরি চালু হবে</small><b>১০ প্রশ্নের অধ্যায় পরীক্ষা</b></div></div>
        </div>
      </section>

      <section className="ai section-pad">
        <div className="ai-copy">
          <SectionTitle eyebrow="এআই পড়াশোনা সহকারী" title={<>ধৈর্যশীল পড়ার সঙ্গী,<br /><em>যেকোনো সময় পাশে।</em></>} text="বাংলা বা ইংরেজিতে প্রশ্ন করো। যে অধ্যায় পড়ছ, সেটির ভিত্তিতে পরিষ্কার ধাপে ধাপে ব্যাখ্যা পাও।" />
          <div className="check-list">
            {["কঠিন বিষয় সহজভাবে বোঝায়","দ্রুত অনুশীলনী কুইজ তৈরি করে","শর্টকাট নয়, সঠিকভাবে পথ দেখায়","পরবর্তী ধাপ ব্যক্তিভেদে সাজায়"].map(x=><div key={x}><span>✓</span>{x}</div>)}
          </div>
          <Button>এআই শিক্ষকের সঙ্গে পরিচিত হও</Button>
        </div>
        <div className="ai-visual">
          <div className="ai-photo"><img src={photos.tablet} alt="ডিজিটাল মাধ্যমে পড়ছে শিক্ষার্থী" /></div>
          <PhoneChat />
          <div className="prompt-chip one">অধ্যায়টি বুঝিয়ে বলো</div>
          <div className="prompt-chip two">একটি কুইজ বানাও ✦</div>
        </div>
      </section>

      <section className="exams section-pad">
        <div className="exam-visual">
          <div className="result-card">
            <div className="result-head"><span>মডেল টেস্ট · গণিত</span><b>•••</b></div>
            <div className="result-score"><div><b>৯২</b><span>/ ১০০</span></div><p><strong>চমৎকার!</strong><br/>তোমার ১৪% উন্নতি হয়েছে।</p></div>
            <div className="analysis-bars"><div><span>বীজগণিত</span><i><b style={{width:"96%"}}/></i><em>৯৬%</em></div><div><span>জ্যামিতি</span><i><b style={{width:"82%"}}/></i><em>৮২%</em></div><div><span>পরিসংখ্যান</span><i><b style={{width:"76%"}}/></i><em>৭৬%</em></div></div>
          </div>
          <div className="certificate"><span>ওয়ানস্টুডেন্ট বাংলাদেশ</span><i>✦</i><small>সম্পন্নকরণের সনদ</small><h4>গণিতের ভিত্তি</h4><p>প্রদান করা হলো <b>রাফি রহমানকে</b></p><div><span>যাচাইকৃত</span><span>জুন ২০২৬</span></div></div>
          <div className="improved">↗ <b>১৪%</b><span>উন্নতি</span></div>
        </div>
        <div className="exam-copy">
          <SectionTitle eyebrow="স্মার্ট পরীক্ষা ও সনদ" title={<>অনুশীলন। পরীক্ষা।<br /><em>এরপর কী, জেনে নাও।</em></>} text="অধ্যায় কুইজ, মক পরীক্ষা ও তাৎক্ষণিক বিশ্লেষণ প্রতিটি ফলাফলকে পরবর্তী স্পষ্ট ধাপে রূপ দেয়।" />
          <div className="mini-grid"><div><b>তাৎক্ষণিক অন্তর্দৃষ্টি</b><span>শক্তি ও দুর্বল বিষয় পরিষ্কারভাবে দেখো।</span></div><div><b>বাস্তব অর্জন</b><span>অগ্রগতির যাচাইকৃত রেকর্ড গড়ে তোলো।</span></div></div>
          <Button secondary>মূল্যায়ন দেখুন</Button>
        </div>
      </section>

      <section className="passport section-pad">
        <SectionTitle center eyebrow="আজীবন জাতীয় শিক্ষার্থী আইডি" title={<>একটি পরিচয়।<br /><em>পুরো শিক্ষাজীবনের সঙ্গী।</em></>} text="প্রতিটি শিক্ষার্থী পাবে একটি নিজস্ব স্থায়ী আইডি। স্কুল, শ্রেণি বা প্রতিষ্ঠান বদলালেও পরীক্ষা, অগ্রগতি, উপস্থিতি, সনদ ও দক্ষতা একই একাডেমিক প্রোফাইলে থাকবে।" />
        <div className="passport-shell">
          <div className="passport-side left-side">
            <div><span>একাডেমিক অগ্রগতি</span><b>৭৬%</b><i><em style={{width:"76%"}}/></i></div>
            <div><span>ধারাবাহিক শেখা</span><b>১৮ দিন</b><small>ব্যক্তিগত সেরা</small></div>
          </div>
          <div className="profile-card">
            <div className="profile-cover"><span>জাতীয় শিক্ষার্থী আইডি · ২০৩১-৮৪২৯০১</span></div>
            <div className="profile-person"><div className="profile-img"><img src={photos.hero}/></div><h3>নুসরাত জাহান</h3><p>নবম শ্রেণি · ঢাকা</p></div>
            <div className="profile-numbers"><div><b>৪২</b><span>অধ্যায়</span></div><div><b>৮</b><span>সনদ</span></div><div><b>৮৬%</b><span>গড় নম্বর</span></div></div>
            <div className="skill-tags"><span>সমস্যা সমাধান</span><span>সৃজনশীল লেখা</span><span>বিজ্ঞান</span></div>
          </div>
          <div className="passport-side right-side">
            <div><span>সেরা দক্ষতা</span><b>বিজ্ঞান</b><small>এই টার্মে সেরা ১০%</small></div>
            <div><span>সর্বশেষ অর্জন</span><b>গণিত অভিযাত্রী</b><small>এই সপ্তাহে অর্জিত</small></div>
          </div>
        </div>
      </section>

      <section className="support section-pad" id="support">
        <SectionTitle eyebrow="শিক্ষক ও অভিভাবকের পাশে" title={<>শিক্ষার্থীর অগ্রগতি বুঝুন,<br /><em>সময়মতো পাশে দাঁড়ান।</em></>} text="পড়াশোনার অগ্রগতি, উপস্থিতি ও কোথায় বাড়তি সহায়তা প্রয়োজন—প্রয়োজনীয় তথ্যগুলো শিক্ষক ও অভিভাবকের কাছে থাকবে সহজ ও পরিষ্কারভাবে।" />
        <div className="support-cards">
          <article className="support-card teacher-card">
            <div className="support-photo"><img src={photos.teacher} alt="শ্রেণিকক্ষে শিক্ষক" /></div>
            <div className="support-content"><span>শিক্ষকদের জন্য</span><h3>প্রতিটি শিক্ষার্থীর প্রয়োজন বুঝে শেখান।</h3><p>সহজে পাঠ পরিকল্পনা ও অনুশীলনী তৈরি করুন। শ্রেণির কার কোন বিষয়ে দুর্বলতা আছে, তা দ্রুত শনাক্ত করে প্রয়োজনীয় সহায়তা দিন।</p><a href="#">শিক্ষকদের সুবিধাগুলো দেখুন <Arrow /></a></div>
            <div className="float-report"><span>অষ্টম শ্রেণি · ক</span><b>৬ জন শিক্ষার্থী</b><small>সহায়তা প্রয়োজন হতে পারে</small></div>
          </article>
          <article className="support-card guardian-card">
            <div className="support-content"><span>অভিভাবকদের জন্য</span><h3>সন্তানের পড়াশোনার খবর রাখুন সহজেই।</h3><p>পরীক্ষার ফল, উপস্থিতি ও পড়ার অগ্রগতি এক জায়গায় দেখুন। পড়াশোনার সময় ঠিক করুন এবং বয়স অনুযায়ী অ্যাপ ও ডিভাইস ব্যবহারের সীমা নির্ধারণ করুন।</p><a href="#">অভিভাবকদের সুবিধাগুলো দেখুন <Arrow /></a></div>
            <div className="support-photo"><img src={photos.family} alt="শিশুকে পড়তে সাহায্য করছেন অভিভাবক" /></div>
            <div className="guardian-note"><span>আজকের পড়ার সময়</span><b>১ ঘণ্টা ২৫ মিনিট</b><small>শিক্ষা মোড রাত ৯টা পর্যন্ত চালু</small></div>
          </article>
        </div>
      </section>

      <section className="early section-pad">
        <div className="early-copy">
          <span className="eyebrow dark-label">আগাম সহায়তা সংকেত</span>
          <h2>সমস্যা আগে বুঝুন।<br/><em>শিক্ষার্থীর পাশে দাঁড়ান।</em></h2>
          <p>শেখার কার্যক্রম, মূল্যায়ন ও উপস্থিতির সংকেত দায়িত্বশীলভাবে মিলিয়ে ওয়ানস্টুডেন্ট স্কুলকে সময়মতো সহায়তার সুযোগ দেয়।</p>
          <div className="signal-list">{["শেখার ঘাটতি শনাক্তকরণ","উপস্থিতিভিত্তিক সংকেত","শিক্ষক ও অভিভাবক সতর্কতা","মানুষের নেতৃত্বে সহায়তা"].map(x=><span key={x}>✓ {x}</span>)}</div>
        </div>
        <div className="risk-ui">
          <div className="risk-top"><div><span>শিক্ষার্থী সহায়তার সারসংক্ষেপ</span><b>অষ্টম শ্রেণি · জুন</b></div><span className="live-dot">সরাসরি সংকেত</span></div>
          <div className="risk-chart"><div className="chart-labels"><span>100</span><span>75</span><span>50</span><span>25</span></div><svg viewBox="0 0 500 170"><path d="M0 35 C80 40 110 75 170 65 S270 100 325 93 S410 145 500 118" fill="none" stroke="#f4c542" strokeWidth="5"/><path d="M0 35 C80 40 110 75 170 65 S270 100 325 93 S410 145 500 118 L500 170 L0 170Z" fill="url(#fade)"/><defs><linearGradient id="fade" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#f4c542" stopOpacity=".25"/><stop offset="1" stopColor="#f4c542" stopOpacity="0"/></linearGradient></defs></svg></div>
          <div className="risk-student"><div className="student-initial">আরিফ</div><div><b>আরিফ মাহমুদ</b><span>৮ দিন ধরে কার্যক্রম কমেছে</span></div><em>খোঁজ নিন</em></div>
        </div>
      </section>

      <section className="access section-pad">
        <div className="access-photo"><img src={photos.rural} alt="বই ও শেখার পরিবেশ" /><div className="offline-badge"><i>◌</i><b>অফলাইনে প্রস্তুত</b><span>ইন্টারনেট এলে সিঙ্ক হবে</span></div></div>
        <div className="access-copy">
          <SectionTitle eyebrow="অফলাইন স্কুলবক্স" title={<>শিক্ষা পৌঁছে যাবে<br /><em>সবখানে।</em></>} text="সীমিত ইন্টারনেটের স্কুলগুলো স্থানীয়ভাবে পাঠ, কুইজ ও শিক্ষার্থী টুল ব্যবহার করতে পারবে; সংযোগ ফিরলে নিরাপদে সিঙ্ক হবে।" />
          <div className="access-tags"><span>অফলাইন কনটেন্ট</span><span>স্কুলজুড়ে ব্যবহার</span><span>কম সংযোগেও প্রস্তুত</span><span>নিরাপদ সিঙ্ক</span></div>
          <Button>গ্রামীণ প্রবেশাধিকার দেখুন</Button>
        </div>
      </section>

      <section className="life section-pad">
        <SectionTitle center eyebrow="শ্রেণিকক্ষের বাইরেও" title={<>শক্তিশালী শিক্ষার্থীর প্রয়োজন<br /><em>সুস্থতা ও সঠিক দিকনির্দেশনা।</em></>} text="এই যাত্রায় আজ শিক্ষার্থী কেমন আছে এবং আগামীকাল কোথায় যেতে চায় — দুটোই গুরুত্বপূর্ণ।" />
        <div className="life-grid">
          <article className="life-card wellness"><img src={photos.wellness} alt="সুস্থতা নিয়ে সহায়ক আলোচনা" /><div><span>স্বাস্থ্য ও সুস্থতা</span><h3>সব দিক থেকে আরও শক্ত হও।</h3><p>মানসিক সুস্থতা, পুষ্টি, চাপ ও স্বাস্থ্যকর পড়ার অভ্যাসে শিক্ষার্থী-নিরাপদ সহায়তা।</p><a href="#">সুস্থতা সহায়তা দেখুন <Arrow /></a></div></article>
          <article className="life-card career"><div><span>ক্যারিয়ার ও কলেজ</span><h3>নিজের শক্তিকে দিকনির্দেশনায় রূপ দাও।</h3><p>আগ্রহ আবিষ্কার করো, ক্যারিয়ার জানো, বৃত্তি খোঁজো এবং স্কুল-পরবর্তী জীবনের প্রস্তুতি নাও।</p><a href="#">ভবিষ্যৎ পরিকল্পনা করো <Arrow /></a></div><img src={photos.career} alt="ভবিষ্যৎ পরিকল্পনা করছে শিক্ষার্থীরা" /></article>
        </div>
      </section>

      <section className="skills section-pad">
        <div className="skills-head">
          <SectionTitle eyebrow="দক্ষতাভিত্তিক শিক্ষা" title={<>পাঠ্যবইয়ের সঙ্গে<br /><em>জীবনের দক্ষতাও।</em></>} text="শিক্ষার্থী নিজের আগ্রহ ও এলাকার প্রয়োজন অনুযায়ী বাস্তবমুখী দক্ষতা শিখতে পারবে — ভিডিও, প্রকল্প, মূল্যায়ন ও সনদসহ।" />
          <p>একই শিক্ষার্থী আইডিতে একাডেমিক ফলাফলের পাশাপাশি দক্ষতার অর্জনও সংরক্ষিত থাকবে।</p>
        </div>
        <div className="skill-paths">
          <article className="skill-main">
            <img src={photos.rural} alt="কৃষি ও বাস্তবমুখী দক্ষতা শিক্ষা" />
            <div className="skill-overlay"><span>স্থানীয় দক্ষতা</span><h3>আধুনিক কৃষি ও খাদ্য উৎপাদন</h3><p>মাটি, বীজ, নিরাপদ চাষ ও বাজার সম্পর্কে প্রকল্পভিত্তিক শিক্ষা।</p><b>২৪টি ভিডিও · ৬টি প্রকল্প</b></div>
          </article>
          <div className="skill-stack">
            <article><span className="skill-index">০২</span><div><small>যোগাযোগ দক্ষতা</small><h3>ইংরেজিতে কথা বলা</h3><p>প্রতিদিনের কথোপকথন, উচ্চারণ ও আত্মবিশ্বাসের অনুশীলন।</p></div><Arrow /></article>
            <article><span className="skill-index">০৩</span><div><small>ভবিষ্যৎ দক্ষতা</small><h3>ডিজিটাল ও প্রযুক্তি শিক্ষা</h3><p>কম্পিউটার, অনলাইন নিরাপত্তা, কোডিংয়ের ভিত্তি ও সৃজনশীল কাজ।</p></div><Arrow /></article>
            <article><span className="skill-index">০৪</span><div><small>জীবন ও উদ্যোগ</small><h3>উদ্যোক্তা ও জীবনদক্ষতা</h3><p>সমস্যা সমাধান, অর্থের মৌলিক ধারণা ও ছোট উদ্যোগ তৈরি।</p></div><Arrow /></article>
          </div>
        </div>
      </section>

      <section className="ecosystem section-pad">
        <div className="ecosystem-copy">
          <SectionTitle eyebrow="জাতীয় এডটেক ইকোসিস্টেম" title={<>সেরা শিক্ষা উদ্যোগগুলো<br /><em>একসঙ্গে কাজ করবে।</em></>} text="বিশ্বস্ত এডটেক, স্কুল, প্রশিক্ষণ প্রতিষ্ঠান ও কনটেন্ট নির্মাতারা একটি জাতীয় মানদণ্ডের অধীনে সেবা দিতে পারবে। শিক্ষার্থী পাবে এক পরিচয়ে নিরাপদ ও মানসম্মত অভিজ্ঞতা।" />
          <div className="ecosystem-points">
            <span>✓ এক শিক্ষার্থী আইডি ও প্রোফাইল</span>
            <span>✓ অনুমোদিত কনটেন্ট ও মূল্যায়ন</span>
            <span>✓ অংশীদারদের জন্য উন্মুক্ত সংযোগ</span>
            <span>✓ তথ্য নিরাপত্তা ও জাতীয় মানদণ্ড</span>
          </div>
          <Button>অংশীদার হিসেবে যুক্ত হোন</Button>
        </div>
        <div className="network">
          <div className="network-core"><Logo /><b>জাতীয় ডিজিটাল<br/>লার্নিং প্ল্যাটফর্ম</b><small>এক পরিচয় · এক প্রোফাইল</small></div>
          <div className="partner-node node-one"><span>ভিডিও শিক্ষা</span><b>এডটেক অংশীদার</b></div>
          <div className="partner-node node-two"><span>দক্ষতা শিক্ষা</span><b>প্রশিক্ষণ প্রতিষ্ঠান</b></div>
          <div className="partner-node node-three"><span>একাডেমিক শিক্ষা</span><b>স্কুল ও শিক্ষক</b></div>
          <div className="partner-node node-four"><span>পাবলিক সেবা</span><b>জাতীয় প্রতিষ্ঠান</b></div>
          <svg viewBox="0 0 600 540" aria-hidden="true"><path d="M300 270 L130 120 M300 270 L485 110 M300 270 L505 420 M300 270 L105 425" /><circle cx="300" cy="270" r="155" /></svg>
        </div>
      </section>

      <section className="features section-pad" id="features">
        <div className="features-head"><SectionTitle eyebrow="বাংলাদেশের জাতীয় ডিজিটাল লার্নিং প্ল্যাটফর্ম" title={<>একটি সংযুক্ত প্ল্যাটফর্ম।<br /><em>প্রতিটি প্রয়োজনীয় টুল।</em></>} /><p>বিচ্ছিন্ন কিছু অ্যাপ নয় — শিক্ষার্থী, পরিবার, স্কুল ও শিক্ষা অংশীদারদের জন্য একটি অভিন্ন জাতীয় অবকাঠামো।</p></div>
        <div className="feature-grid">
          {features.map(([n,t,d,c])=><article className={`feature-card ${c}`} key={t}><span>{n}</span><h3>{t}</h3><p>{d}</p><a href="#" aria-label={`${t} সম্পর্কে জানুন`}><Arrow /></a></article>)}
        </div>
        <div className="feature-ticker">{["মক পরীক্ষা","অগ্রগতি বিশ্লেষণ","কলেজে উত্তরণ","গ্রামীণ অন্তর্ভুক্তি","ব্যক্তিগত শিক্ষা","বৃত্তি সন্ধান"].map(x=><span key={x}>✦ {x}</span>)}</div>
      </section>

      <section className="impact section-pad" id="impact">
        <div className="impact-card">
          <img src={photos.group} alt="একসঙ্গে বিভিন্ন বয়সের শিক্ষার্থীরা" />
          <div className="impact-overlay">
            <span className="eyebrow">জাতীয় স্বপ্ন</span>
            <h2>সারাদেশের শিক্ষার্থী সহায়তা <em>বদলে দেওয়ার জন্য নির্মিত।</em></h2>
            <p>আরও ভালো প্রবেশাধিকার। আরও ভালো দিকনির্দেশনা। আরও ভালো ফলাফল।</p>
          </div>
          <div className="impact-stats"><div><b>২ কোটি+</b><span>সম্ভাব্য শিক্ষার্থী</span></div><div><b>প্রথম–দ্বাদশ</b><span>একটি একীভূত যাত্রা</span></div><div><b>৬৪</b><span>জেলা নিয়ে স্বপ্ন</span></div></div>
        </div>
      </section>

      <section className="stories section-pad">
        <SectionTitle eyebrow="বাস্তব মানুষ। বাস্তব অগ্রগতি।" title={<>যাঁদের হাতে শিক্ষা সম্ভব,<br /><em>তাঁদের ঘিরেই তৈরি।</em></>} />
        <div className="story-grid">
          {[
            [photos.family,"“এখন আমি পরিষ্কার বুঝতে পারি আমার সন্তান কোথায় ভালো করছে এবং কোথায় সহায়তা দরকার।”","ফারজানা আহমেদ","অভিভাবক"],
            [photos.teacher,"“শ্রেণির তথ্য আমাকে যেসব শিক্ষার্থীর সবচেয়ে বেশি প্রয়োজন, তাদের জন্য সময় দিতে সাহায্য করে।”","মাহমুদ হাসান","শিক্ষক"],
            [photos.tablet,"“বাংলা ব্যাখ্যা ও অনুশীলনী পরীক্ষা কঠিন অধ্যায়কেও সহজ মনে করায়।”","নাবিলা ইসলাম","দশম শ্রেণির শিক্ষার্থী"]
          ].map(([img,q,n,r])=><article className="story" key={n}><img src={img}/><div><span className="quote">“</span><p>{q}</p><b>{n}</b><small>{r}</small></div></article>)}
        </div>
      </section>

      <section className="final-cta section-pad" id="contact">
        <div className="cta-card">
          <div className="cta-copy"><span className="eyebrow">উজ্জ্বল পথের শুরু এখানেই</span><h2>প্রতিটি শিক্ষার্থীকে<br /><em>এগিয়ে যেতে দিন।</em></h2><p>আপনার শিক্ষার্থীদের জন্য পড়াশোনা, সহায়তা, সুস্থতা ও ভবিষ্যৎ পরিকল্পনা একসঙ্গে আনুন।</p><div className="button-row"><Button>শুরু করুন</Button><Button secondary>ডেমো চান</Button></div></div>
          <div className="cta-visual"><img src={photos.group} alt="শেখার জন্য প্রস্তুত শিক্ষার্থীরা" /><div className="sun" /><div className="cta-note">বাংলাদেশের প্রতিটি শিক্ষার্থীর<br/><b>জন্য নির্মিত।</b></div></div>
        </div>
      </section>

      <footer>
        <div className="footer-main">
          <div className="footer-brand"><Logo light /><p>বাংলাদেশের জাতীয় ডিজিটাল লার্নিং প্ল্যাটফর্ম — প্রতিটি শিক্ষার্থীর পড়াশোনা, দক্ষতা, সুস্থতা ও ভবিষ্যতের জন্য।</p><span>এক পরিচয় · এক প্রোফাইল · আজীবন শিক্ষা</span></div>
          <div><b>প্ল্যাটফর্ম</b><a>লার্নিং হাব</a><a>এআই সহকারী</a><a>পরীক্ষা</a><a>শিক্ষার্থী পাসপোর্ট</a></div>
          <div><b>সহায়তা</b><a>শিক্ষকদের জন্য</a><a>অভিভাবকদের জন্য</a><a>স্বাস্থ্য</a><a>ক্যারিয়ার</a></div>
          <div><b>প্রতিষ্ঠান</b><a>আমাদের সম্পর্কে</a><a>প্রভাব</a><a>যোগাযোগ</a><a>প্রবেশগম্যতা</a></div>
          <div className="footer-join"><b>সঙ্গে থাকুন</b><p>খবর, অগ্রগতি ও সুযোগের আপডেট পান।</p><div><input placeholder="আপনার ইমেইল ঠিকানা"/><button>→</button></div></div>
        </div>
        <div className="footer-bottom"><span>© ২০২৬ ওয়ানস্টুডেন্ট বাংলাদেশ</span><span>গোপনীয়তা · শর্তাবলি · শিক্ষার্থী নিরাপত্তা</span><a href="#top">উপরে ফিরুন ↑</a></div>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
