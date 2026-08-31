/**
 * 设计提示｜算得清 · 经营画报（卷一）：印刷画册式官网。
 * 借鉴编辑/专著排版：封面（书框+大字标+卷首插图）、目录、跨页图版（壹—肆）、特辑、问答集、后记、封底。
 * 色彩沿用清蓝品牌：墨蓝封面、纸感米白内页、品牌蓝主操作、橙色批注待办、绿色增长。
 * 不依赖任何外部字体/CDN；动效克制（细线绘入、缓速揭示），尊重系统减弱动效偏好。
 */
import { useEffect, useState } from "react";
import {
  ArrowRight,
  BellRing,
  Check,
  ChevronRight,
  CircleHelp,
  Menu,
  PackageCheck,
  Store,
  TrendingUp,
  X,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import "./monograph.css";

const ASSETS = {
  hero: "/assets/brand/hero-mascot.webp",
  overview: "/assets/product/app-overview.webp",
  inventory: "/assets/product/app-inventory.webp",
  trends: "/assets/product/app-trends.webp",
  multistore: "/assets/product/app-multistore.webp",
  brandBoard: "/assets/brand/brand-board.webp",
};

function BrandIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="brandGradient" x1="6" y1="5" x2="43" y2="45" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5ACBFA" />
          <stop offset="1" stopColor="#087AFF" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="13" fill="url(#brandGradient)" />
      <path d="M11.5 19.5 16.7 11h14.6l5.2 8.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
      <path d="M17 25h7M20.5 21.5v7M29.5 23.5h6M29.5 28h6M16 34c4.9 4 11.1 4 16 0" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
    </svg>
  );
}

const featureRows = [
  {
    id: "overview",
    latin: "01",
    chapter: "壹",
    plate: "图版壹",
    eyebrow: "经营总览",
    title: "打开首页，先看到今天的结果",
    description:
      "把收入、成本和利润放在同一张清晰的经营看板里。今天赚了多少、哪里还要看一眼，打开就知道。",
    asset: ASSETS.overview,
    noteOne: "收入、成本、利润，按经营结果先后展示",
    noteTwo: "关键变化用趋势表达，先看方向再看细节",
    tone: "mn-tone-blue",
    page: "页 04",
  },
  {
    id: "inventory",
    latin: "02",
    chapter: "贰",
    plate: "图版贰",
    eyebrow: "库存提醒",
    title: "补货这件事，提前知道就好",
    description:
      "商品余量及时呈现。该补货的时候，给你一条清楚的提醒和下一步，而不是让你临时翻账本。",
    asset: ASSETS.inventory,
    noteOne: "库存状态一目了然，重点商品优先关注",
    noteTwo: "橙色提醒说明原因，并引导去处理",
    tone: "mn-tone-orange",
    page: "页 05",
  },
  {
    id: "trend",
    latin: "03",
    chapter: "叁",
    plate: "图版叁",
    eyebrow: "经营趋势",
    title: "每天的变化，连成经营判断",
    description:
      "用收入、成本和利润的变化，把每天的忙碌变成可判断的经营依据。看懂趋势，下一步更有把握。",
    asset: ASSETS.trends,
    noteOne: "蓝、橙、绿分别表达收入、成本与利润",
    noteTwo: "统计周期与图例清晰，避免复杂报表负担",
    tone: "mn-tone-green",
    page: "页 06",
  },
  {
    id: "multistore",
    latin: "04",
    chapter: "肆",
    plate: "图版肆",
    eyebrow: "多店管理",
    title: "门店越多，越需要一张总览",
    description:
      "每家店的经营信息统一汇总，不必在多个表格和聊天记录之间反复切换。",
    asset: ASSETS.multistore,
    noteOne: "不同门店的数字整齐归拢，方便对比",
    noteTwo: "先掌握整体，再进入具体门店核对",
    tone: "mn-tone-blue",
    page: "页 07",
  },
];

const tocItems = [
  { latin: "01", title: "经营总览", desc: "今天的结果，一眼明白", target: "overview", page: "04" },
  { latin: "02", title: "库存提醒", desc: "该补的货，提前知道", target: "inventory", page: "05" },
  { latin: "03", title: "经营趋势", desc: "变化连成判断", target: "trend", page: "06" },
  { latin: "04", title: "多店管理", desc: "总览先于明细", target: "multistore", page: "07" },
  { latin: "05", title: "使用场景 · 特辑", desc: "零售、餐饮与多店的一天", target: "special", page: "08" },
];

const tickerLines = [
  "先算清，再决策",
  "今天的事，今天清",
  "账目分明，心里有底",
  "先看结果，再看明细",
  "每次只处理最重要的一件事",
];

const sceneCards = [
  {
    tag: "特辑一 · 零售 / 批发",
    title: "商品、库存、收入，一起看才放心。",
    desc: "适合需要及时掌握商品余量与日常收支的店主。",
    chip: "库存提醒 · 去处理",
    icon: Store,
    tone: "mn-tone-blue",
  },
  {
    tag: "特辑二 · 餐饮 / 服务",
    title: "每天的忙，最后都有数。",
    desc: "把零散订单和成本变化，整理成一眼能看懂的经营结果。",
    chip: "经营趋势 · 看变化",
    icon: TrendingUp,
    tone: "mn-tone-green",
  },
  {
    tag: "特辑三 · 多店经营",
    title: "不在现场，也不怕漏掉重点。",
    desc: "经营提醒帮你先圈出该关注的事，让每家店都算得清。",
    chip: "待办提醒 · 已整理",
    icon: BellRing,
    tone: "mn-tone-orange",
  },
];

const guideItems = [
  {
    question: "第一次使用，需要先做什么？",
    answer:
      "打开小程序后，先根据页面引导完善店铺与商品信息，再从每天的收支、订单或库存记录开始。算得清会把这些信息整理到经营总览中，方便你先看结论，再看明细。",
  },
  {
    question: "收入、成本和利润，要去哪里看？",
    answer:
      "进入经营总览后，你可以优先查看当天的收入、成本和利润，并通过趋势图了解它们的变化。每项数据都会在对应的经营模块中保留更具体的拆解入口。",
  },
  {
    question: "库存提醒是怎么用的？",
    answer:
      "完成商品和库存记录后，可以在经营页面关注库存相关提醒。出现待处理事项时，先看清原因，再根据页面给出的入口继续处理，避免临时翻找信息。",
  },
  {
    question: "有多家门店，也能一起管理吗？",
    answer:
      "可以。算得清支持将不同门店的经营信息汇总查看，让你先掌握整体情况，再进入单店核对收入、成本、库存和待办。",
  },
  {
    question: "看完经营数据后，下一步该做什么？",
    answer:
      "先关注页面为你整理的待办和提醒，再结合收入、成本、利润的趋势做判断。每次只处理最重要的一件事，经营就会更有把握。",
  },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function CropMarks() {
  return (
    <>
      <i className="mn-cropmark tl" aria-hidden="true" />
      <i className="mn-cropmark tr" aria-hidden="true" />
      <i className="mn-cropmark bl" aria-hidden="true" />
      <i className="mn-cropmark br" aria-hidden="true" />
    </>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [guideOpen, setGuideOpen] = useState(false);
  const [wordmarkIn, setWordmarkIn] = useState(false);

  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("open") === "qr") setGuideOpen(true);
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = Array.from(document.querySelectorAll<HTMLElement>(".mn-root [data-reveal], .mn-root .mn-rule"));
    if (reduced || !("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("in-view"));
      setWordmarkIn(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    targets.forEach((el) => io.observe(el));
    const markTimer = window.setTimeout(() => setWordmarkIn(true), 120);
    return () => {
      io.disconnect();
      window.clearTimeout(markTimer);
    };
  }, []);

  const navigate = (id: string) => {
    setMenuOpen(false);
    window.setTimeout(() => scrollTo(id), 50);
  };

  return (
    <div className="mn-root site-shell">
      <div className="mn-grain" aria-hidden="true" />

      <header className="mn-header">
        <div className="mn-runninghead">
          <a
            className="mn-brandlink"
            href="#top"
            aria-label="算得清首页"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("top");
            }}
          >
            <BrandIcon className="mn-brandicon" />
            <span className="mn-brandword">
              <b>算得清</b>
              <small>SUAN DE QING</small>
            </span>
          </a>
          <span className="mn-voltag">经营画报 · 第一卷</span>
          <nav className="mn-headnav" aria-label="主导航">
            <button onClick={() => scrollTo("features")}>能力图谱</button>
            <a href="/scenes">使用场景</a>
            <button onClick={() => scrollTo("guide")}>问答集</button>
            <button onClick={() => scrollTo("about")}>后记</button>
          </nav>
          <button className="mn-ctabtn" onClick={() => setGuideOpen(true)}>
            打开小程序 <ArrowRight size={15} />
          </button>
          <button
            className="mn-menutoggle"
            aria-label="打开菜单"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
        {menuOpen && (
          <div className="mn-mobilenav">
            <button onClick={() => navigate("features")}>能力图谱</button>
            <a href="/scenes" onClick={() => setMenuOpen(false)}>使用场景</a>
            <button onClick={() => navigate("guide")}>问答集</button>
            <button onClick={() => navigate("about")}>后记</button>
            <button className="mn-ctabtn" onClick={() => { setMenuOpen(false); setGuideOpen(true); }}>
              打开小程序 <ArrowRight size={15} />
            </button>
          </div>
        )}
      </header>

      <main id="top">
        {/* 封面 */}
        <section className="mn-cover" aria-labelledby="hero-title">
          <img className="mn-ambient mn-ambient-cover" src={ASSETS.hero} alt="" aria-hidden="true" />
          <div className="mn-coverframe">
            <div className="mn-coverhead">
              <span className="t">清蓝经营画报</span>
              <span className="v">VOL.I · MMXXVI · 小微商家经营管理小程序</span>
            </div>
            <div className="mn-covergrid">
              <div>
                <p className="mn-kicker">经营画报 · 卷首语</p>
                <h1 id="hero-title" className={`mn-wordmark ${wordmarkIn ? "in-view" : ""}`}>
                  <span>算</span>
                  <span>得</span>
                  <span>清</span>
                  <em>SUAN DE QING PRESS</em>
                </h1>
                <p className="mn-covertitle">
                  生意<b>算得清</b>，<br />
                  老板更轻松。
                </p>
                <p className="mn-covercopy">
                  收入、成本、库存、订单、利润，今天就看明白。一本随时翻阅的经营画报，为你整理生意的每一天。
                </p>
                <div className="mn-coveractions">
                  <button className="mn-btn-brand" onClick={() => setGuideOpen(true)}>
                    打开小程序 <ArrowRight size={16} />
                  </button>
                  <button className="mn-btn-ghost" onClick={() => scrollTo("features")}>
                    翻阅目录 <ChevronRight size={16} />
                  </button>
                </div>
                <div className="mn-coverfacts" aria-label="算得清核心价值">
                  <div><b>看清</b><span>经营数据</span></div>
                  <div><b>提前</b><span>发现待办</span></div>
                  <div><b>从容</b><span>做出决定</span></div>
                </div>
              </div>
              <div>
                <div className="mn-plate mn-coverplate">
                  <CropMarks />
                  <img src={ASSETS.hero} alt="算得清品牌吉祥物与店铺经营数据插画" />
                  <div className="mn-plate-caption">
                    <span className="cn">卷首插图 · 算小胖与经营的一天</span>
                    <span className="no">PLATE 00</span>
                  </div>
                </div>
                <p className="mn-coverplate-note">※ 品牌插画为示意用途，数据卡片为产品示意。</p>
              </div>
            </div>
          </div>
          <button className="mn-scrolldown" onClick={() => scrollTo("features")} aria-label="查看目录">
            <span>向下翻阅</span>
            <i />
          </button>
        </section>

        {/* 格言滚条 */}
        <div className="mn-ticker" aria-hidden="true">
          <div className="mn-ticker-track">
            {[0, 1].map((group) => (
              <div className="mn-ticker-group" key={group}>
                {tickerLines.map((line) => (
                  <span key={`${group}-${line}`}>{line}</span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* 目录 */}
        <section className="mn-toc" aria-labelledby="toc-heading">
          <div className="mn-toc-head" data-reveal>
            <h2 id="toc-heading">目录</h2>
            <span className="en">Contents · 本卷共五记</span>
          </div>
          <div className="mn-toc-list">
            {tocItems.map((item) => (
              <button className="mn-toc-item" key={item.latin} onClick={() => scrollTo(item.target)}>
                <span className="no">{item.latin}</span>
                <span className="t">{item.title}</span>
                <span className="d">{item.desc}</span>
                <span className="leader" aria-hidden="true" />
                <span className="pg">页 {item.page}</span>
              </button>
            ))}
          </div>
          <div className="mn-manifesto" data-reveal>
            <p className="mn-dropcap">
              经营里最难的，不是记，而是「清」。算得清把复杂的数字和需要处理的事项，编成一本看得懂、理得顺、能行动的画报——先给结论，再给明细，最后给下一步。
            </p>
          </div>
        </section>

        {/* 跨页图版 */}
        <section id="features" className="mn-spreads section-anchor" aria-label="能力图谱">
          <div className="mn-rule" aria-hidden="true" />
          {featureRows.map((feature) => (
            <article className={`mn-spread ${feature.tone}`} id={feature.id} key={feature.id}>
              <img
                className={`mn-ambient mn-ambient-spread`}
                src={feature.asset}
                alt=""
                aria-hidden="true"
                loading="lazy"
              />
              <div className="mn-spread-copy" data-reveal>
                <div className="mn-chapnum">
                  <span className="latin">{feature.latin}</span>
                  <span className="cn mn-serif">{feature.chapter}</span>
                  <span className="cap">{feature.plate}</span>
                </div>
                <p className="eyebrow">{feature.eyebrow}</p>
                <h3>{feature.title}</h3>
                <p className="desc">{feature.description}</p>
                <ul className="mn-notes">
                  <li><span className="mark">注一</span>{feature.noteOne}</li>
                  <li><span className="mark">注二</span>{feature.noteTwo}</li>
                </ul>
                <button className="mn-inline" onClick={() => setGuideOpen(true)}>
                  在小程序里查看 <ArrowRight size={15} />
                </button>
              </div>
              <div className="mn-spread-plate" data-reveal style={{ ["--rv-delay" as string]: "0.12s" }}>
                <div className="mn-plate-frame">
                  <CropMarks />
                  <img src={feature.asset} alt={`算得清小程序：${feature.eyebrow}`} loading="lazy" />
                  <div className="mn-plate-foot">
                    <span className="cn">{feature.plate} · {feature.eyebrow}</span>
                    <span className="pg">{feature.page}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
          <div className="mn-rule" aria-hidden="true" />
        </section>

        {/* 特辑：使用场景 */}
        <section id="special" className="mn-special section-anchor" aria-labelledby="special-heading">
          <div className="mn-special-inner">
            <div className="mn-special-head" data-reveal>
              <h2 id="special-heading">特辑 · 认真经营的每一天</h2>
              <span className="en">Special Features</span>
            </div>
            <div className="mn-special-grid">
              {sceneCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <article
                    className={`mn-feature-card ${card.tone}`}
                    key={card.tag}
                    data-reveal
                    style={{ ["--rv-delay" as string]: `${index * 0.1}s` }}
                  >
                    <span className="tag">{card.tag}</span>
                    <h3>{card.title}</h3>
                    <p>{card.desc}</p>
                    <span className="chip"><Icon size={14} /> {card.chip}</span>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* 问答集 */}
        <section id="guide" className="mn-guide section-anchor" aria-labelledby="guide-heading">
          <div className="mn-guide-intro" data-reveal>
            <p className="mn-kicker">问答集</p>
            <h2 id="guide-heading">
              把生意理清楚，<br />
              从<b>第一笔</b>开始。
            </h2>
            <p className="mn-dropcap">
              不需要复杂的经营术语。跟着小程序的清晰步骤记录、查看、处理，每天都能比昨天更看得明白。
            </p>
            <div className="mn-guide-note">
              <CircleHelp size={16} />
              <span>没有找到答案？打开小程序后，可从对应经营模块继续查看。</span>
            </div>
          </div>
          <div className="mn-guide-qa" data-reveal style={{ ["--rv-delay" as string]: "0.1s" }}>
            <div className="qa-head">
              <span>常见五问</span>
              <i>Q.A. NOTES</i>
            </div>
            <Accordion type="single" collapsible defaultValue="guide-1">
              {guideItems.map((item, index) => (
                <AccordionItem key={item.question} value={`guide-${index + 1}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* 后记：品牌初心 */}
        <section id="about" className="mn-afterword section-anchor" aria-labelledby="about-heading">
          <div className="mn-afterword-inner">
            <div className="mn-afterword-copy" data-reveal>
              <span className="k">后记 · 品牌初心</span>
              <h2 id="about-heading">
                不只是记账，<br />
                更是懂经营的<b>小助手。</b>
              </h2>
              <p>
                算得清面向零售、餐饮、批发、服务业等小微商家，把经营里复杂的数字和需要处理的事项，变成看得懂、理得顺、能行动的信息。
              </p>
              <button className="mn-btn-ink" onClick={() => setGuideOpen(true)}>
                现在就去看看 <ArrowRight size={16} />
              </button>
            </div>
            <div className="mn-sealplate" data-reveal style={{ ["--rv-delay" as string]: "0.12s" }}>
              <CropMarks />
              <img src={ASSETS.brandBoard} alt="算得清的品牌标志、图标和吉祥物视觉规范展示" loading="lazy" />
              <div className="mn-seal" aria-hidden="true">
                <div className="inner">
                  <BrandIcon />
                  <span>
                    清楚
                    <br />
                    更轻松
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 封底 */}
        <section className="mn-backcover" aria-labelledby="cta-heading">
          <img className="mn-ambient mn-ambient-backcover" src={ASSETS.overview} alt="" aria-hidden="true" loading="lazy" />
          <BrandIcon className="icon" />
          <p className="k">算得清 · 小微商家经营管理</p>
          <h2 id="cta-heading">
            今天的生意，<br />
            今天就看明白。
          </h2>
          <p>打开微信搜索「算得清」，把每一笔经营都理得更清楚。</p>
          <button className="mn-btn-brand" onClick={() => setGuideOpen(true)}>
            打开小程序 <ArrowRight size={16} />
          </button>
        </section>
      </main>

      <footer className="mn-footer">
        <div className="mn-footer-inner">
          <span className="brandline">
            <BrandIcon className="mn-brandicon" />
            <b>算得清</b>
          </span>
          <p>让每一次计算都清晰，让生意更简单。</p>
          <span className="yr">© {new Date().getFullYear()} 算得清 · 经营画报 VOL.I</span>
        </div>
      </footer>

      {guideOpen && (
        <div className="mn-modal-backdrop" role="presentation" onMouseDown={() => setGuideOpen(false)}>
          <section
            className="mn-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="guide-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button className="close" onClick={() => setGuideOpen(false)} aria-label="关闭">
              <X size={18} />
            </button>
            <BrandIcon className="modal-icon" />
            <p className="k">扫码体验</p>
            <h2 id="guide-title">
              打开微信，扫描
              <br />
              <strong>小程序二维码</strong>
            </h2>
            <div className="mn-qrbox" role="img" aria-label="小程序二维码占位区域，等待替换为真实二维码">
              <div className="core">
                <BrandIcon />
              </div>
              <span className="tag">二维码占位</span>
            </div>
            <p className="desc">真实二维码接入后，可直接扫码进入小程序，查看你的经营总览、库存、趋势和提醒。</p>
            <button className="mn-btn-brand" onClick={() => setGuideOpen(false)}>
              我知道了 <Check size={16} />
            </button>
            <div className="help">
              <CircleHelp size={13} /> 当前为占位展示，后续可直接替换为正式二维码图片。
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
