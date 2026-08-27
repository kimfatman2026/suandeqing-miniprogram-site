/**
 * 设计提示｜清蓝经营画报：以 #087AFF 品牌蓝、官方应用商店素材与轻量数据卡为核心；
 * 经营轨迹线串联“总览、库存、趋势、多店、提醒”，保持清晰、可靠、轻松的品牌气质。
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

const ASSETS = {
  hero: "/manus-storage/hero-mascot-reference_76ec7307.png",
  overview: "/manus-storage/app-overview_c37036f4.png",
  inventory: "/manus-storage/app-inventory_a793ba3a.png",
  trends: "/manus-storage/app-trends_b90ef1b4.png",
  multistore: "/manus-storage/app-multistore_dbd0e1f7.png",
  reminders: "/manus-storage/app-reminders_9241b6ed.png",
  brandBoard: "/manus-storage/brand-board_0a03c37a.png",
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
      <path d="M17 25h7M20.5 21.5v7M29.5 23.5h6M29.5 28h6M16 34c4.9 4 11.1 4 16 0" stroke="white" strokeLinecap="round" strokeWidth="3" />
    </svg>
  );
}

function BrandLockup({ compact = false }: { compact?: boolean }) {
  return (
    <div className="brand-lockup" aria-label="算得清">
      <BrandIcon className="brand-icon" />
      {!compact && (
        <span className="brand-type">
          <b>算得清</b>
          <small>SUAN DE QING</small>
        </span>
      )}
    </div>
  );
}

const featureRows = [
  {
    id: "overview",
    number: "01",
    eyebrow: "经营总览",
    title: "打开首页，先看到今天的结果",
    description: "把收入、成本和利润放在同一张清晰的经营看板里。今天赚了多少、哪里还要看一眼，打开就知道。",
    icon: TrendingUp,
    asset: ASSETS.overview,
    pointOne: "收入、成本、利润，按经营结果先后展示",
    pointTwo: "关键变化用趋势表达，先看方向再看细节",
    tone: "blue",
  },
  {
    id: "inventory",
    number: "02",
    eyebrow: "库存提醒",
    title: "补货这件事，提前知道就好",
    description: "商品余量及时呈现。该补货的时候，给你一条清楚的提醒和下一步，而不是让你临时翻账本。",
    icon: PackageCheck,
    asset: ASSETS.inventory,
    pointOne: "库存状态一目了然，重点商品优先关注",
    pointTwo: "橙色提醒说明原因，并引导去处理",
    tone: "orange",
  },
  {
    id: "trend",
    number: "03",
    eyebrow: "经营趋势",
    title: "每天的变化，连成经营判断",
    description: "用收入、成本和利润的变化，把每天的忙碌变成可判断的经营依据。看懂趋势，下一步更有把握。",
    icon: TrendingUp,
    asset: ASSETS.trends,
    pointOne: "蓝、橙、绿分别表达收入、成本与利润",
    pointTwo: "统计周期与图例清晰，避免复杂报表负担",
    tone: "green",
  },
  {
    id: "multistore",
    number: "04",
    eyebrow: "多店管理",
    title: "门店越多，越需要一张总览",
    description: "每家店的经营信息统一汇总，不必在多个表格和聊天记录之间反复切换。",
    icon: Store,
    asset: ASSETS.multistore,
    pointOne: "不同门店的数字整齐归拢，方便对比",
    pointTwo: "先掌握整体，再进入具体门店核对",
    tone: "blue",
  },
];

const guideItems = [
  {
    question: "第一次使用，需要先做什么？",
    answer: "打开小程序后，先根据页面引导完善店铺与商品信息，再从每天的收支、订单或库存记录开始。算得清会把这些信息整理到经营总览中，方便你先看结论，再看明细。",
  },
  {
    question: "收入、成本和利润，要去哪里看？",
    answer: "进入经营总览后，你可以优先查看当天的收入、成本和利润，并通过趋势图了解它们的变化。每项数据都会在对应的经营模块中保留更具体的拆解入口。",
  },
  {
    question: "库存提醒是怎么用的？",
    answer: "完成商品和库存记录后，可以在经营页面关注库存相关提醒。出现待处理事项时，先看清原因，再根据页面给出的入口继续处理，避免临时翻找信息。",
  },
  {
    question: "有多家门店，也能一起管理吗？",
    answer: "可以。算得清支持将不同门店的经营信息汇总查看，让你先掌握整体情况，再进入单店核对收入、成本、库存和待办。",
  },
  {
    question: "看完经营数据后，下一步该做什么？",
    answer: "先关注页面为你整理的待办和提醒，再结合收入、成本、利润的趋势做判断。每次只处理最重要的一件事，经营就会更有把握。",
  },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [guideOpen, setGuideOpen] = useState(false);

  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("open") === "qr") setGuideOpen(true);
  }, []);

  const navigate = (id: string) => {
    setMenuOpen(false);
    window.setTimeout(() => scrollTo(id), 50);
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="nav-shell">
          <a className="brand-link" href="#top" aria-label="算得清首页" onClick={() => scrollTo("top")}>
            <BrandLockup />
          </a>
          <nav className="desktop-nav" aria-label="主导航">
            <button onClick={() => scrollTo("features")}>核心能力</button>
            <a href="/scenes">使用场景</a>
            <button onClick={() => scrollTo("guide")}>使用指南</button>
            <button onClick={() => scrollTo("about")}>关于算得清</button>
          </nav>
          <button className="nav-cta desktop-cta" onClick={() => setGuideOpen(true)}>
            打开小程序 <ArrowRight size={17} />
          </button>
          <button className="menu-toggle" aria-label="打开菜单" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
        {menuOpen && (
          <div className="mobile-nav">
            <button onClick={() => navigate("features")}>核心能力</button>
            <a href="/scenes" onClick={() => setMenuOpen(false)}>使用场景</a>
            <button onClick={() => navigate("guide")}>使用指南</button>
            <button onClick={() => navigate("about")}>关于算得清</button>
            <button className="nav-cta" onClick={() => { setMenuOpen(false); setGuideOpen(true); }}>
              打开小程序 <ArrowRight size={17} />
            </button>
          </div>
        )}
      </header>

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-orb orb-one" />
          <div className="hero-orb orb-two" />
          <div className="hero-gridline" aria-hidden="true" />
          <div className="hero-copy">
            <div className="hero-kicker"><span /> 小微商家经营管理小程序</div>
            <h1 id="hero-title">生意算得清，<br /><em>老板更轻松。</em></h1>
            <p>收入、成本、库存、订单、利润，<br className="desktop-break" />今天就看明白。</p>
            <div className="hero-actions">
              <button className="primary-button" onClick={() => setGuideOpen(true)}>打开小程序 <ArrowRight size={18} /></button>
              <button className="text-button" onClick={() => scrollTo("features")}>看看它能做什么 <ChevronRight size={17} /></button>
            </div>
            <div className="hero-facts" aria-label="算得清核心价值">
              <div><b>看清</b><span>经营数据</span></div>
              <div><b>提前</b><span>发现待办</span></div>
              <div><b>从容</b><span>做出决定</span></div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-disc" aria-hidden="true" />
            <div className="hero-visual-ribbon">今日经营，一眼明白</div>
            <img className="hero-illustration" src={ASSETS.hero} alt="算得清品牌吉祥物与店铺经营数据插画" />
            <div className="hero-product-frame">
              <span>算得清 · 经营总览</span>
              <img src={ASSETS.overview} alt="算得清小程序经营总览界面" />
            </div>
            <div className="hero-data-card top-card">
              <span>今日收入</span><b>¥ 8,888.00</b><i><TrendingUp size={13} /> 比昨天更有进展</i>
            </div>
            <div className="hero-data-card bottom-card">
              <span className="card-icon"><BellRing size={16} /></span><strong>有一项库存需要看看</strong><small>已为你整理好下一步</small>
            </div>
          </div>
          <button className="hero-scroll" onClick={() => scrollTo("features")} aria-label="查看核心能力"><span>向下浏览</span><i /></button>
        </section>

        <section id="features" className="features-section section-anchor" aria-labelledby="features-heading">
          <div className="trajectory-line" aria-hidden="true"><span /></div>
          <div className="section-intro split-intro">
            <div>
              <span className="section-kicker">核心能力</span>
              <h2 id="features-heading">经营的每一件事，<br />都能<strong>理得明白。</strong></h2>
            </div>
            <p>从今天的收支，到该处理的库存与订单，算得清把复杂的经营信息整理成更好理解、更容易行动的一步。</p>
          </div>

          <div className="feature-list">
            {featureRows.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <article className={`feature-row ${index % 2 === 1 ? "reversed" : ""}`} id={feature.id} key={feature.id}>
                  <span className={`journey-node ${feature.tone}`} aria-hidden="true"><b>{feature.number}</b></span>
                  <div className="feature-copy">
                    <div className={`feature-index ${feature.tone}`}><span>{feature.number}</span><Icon size={21} /></div>
                    <p className="feature-eyebrow">{feature.eyebrow}</p>
                    <h3>{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                    <ul>
                      <li><Check size={16} />{feature.pointOne}</li>
                      <li><Check size={16} />{feature.pointTwo}</li>
                    </ul>
                    <button className="inline-link" onClick={() => setGuideOpen(true)}>在小程序里查看 <ArrowRight size={16} /></button>
                  </div>
                  <div className="feature-art">
                    <div className={`art-backdrop ${feature.tone}`} />
                    <div className="art-tape" aria-hidden="true" />
                    <img src={feature.asset} alt={`算得清小程序：${feature.eyebrow}`} loading="lazy" />
                    <span className="art-caption">算得清 · {feature.eyebrow}</span>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="scenes" className="scenes-section section-anchor" aria-labelledby="scenes-heading">
          <div className="scenes-heading">
            <span className="section-kicker">适用场景</span>
            <h2 id="scenes-heading">认真经营的每一天，<br />都值得<strong>更清楚一点。</strong></h2>
          </div>
          <div className="scene-tiles">
            <article className="scene-card scene-card-wide">
              <div className="scene-icon blue"><Store size={25} /></div>
              <p>零售 / 批发</p>
              <h3>商品、库存、收入，<br />一起看才放心。</h3>
              <span>适合需要及时掌握商品余量与日常收支的店主。</span>
              <div className="scene-data-chip retail-chip"><PackageCheck size={14} /><span>库存提醒</span><b>去处理</b></div>
              <div className="mini-storefront" aria-hidden="true"><i /><i /><i /></div>
            </article>
            <article className="scene-card scene-card-blue">
              <div className="scene-icon white"><TrendingUp size={25} /></div>
              <p>餐饮 / 服务</p>
              <h3>每天的忙，<br />最后都有数。</h3>
              <span>把零散订单和成本变化，整理成一眼能看懂的经营结果。</span>
              <div className="scene-data-chip trend-chip"><TrendingUp size={14} /><span>经营趋势</span><b>看变化</b></div>
              <div className="blue-sparkline" aria-hidden="true"><i /><i /><i /><i /><i /></div>
            </article>
            <article className="scene-card scene-card-alert">
              <div className="scene-icon orange"><BellRing size={25} /></div>
              <p>多店经营</p>
              <h3>不在现场，<br />也不怕漏掉重点。</h3>
              <span>经营提醒帮你先圈出该关注的事，让每家店都算得清。</span>
              <div className="scene-data-chip reminder-chip"><BellRing size={14} /><span>待办提醒</span><b>已整理</b></div>
              <div className="alert-stacks" aria-hidden="true"><i /><i /><i /></div>
            </article>
          </div>
        </section>

        <section id="guide" className="guide-section section-anchor" aria-labelledby="guide-heading">
          <div className="guide-layout">
            <div className="guide-intro">
              <span className="section-kicker">使用指南</span>
              <h2 id="guide-heading">把生意理清楚，<br />从<strong>第一笔开始。</strong></h2>
              <p>不需要复杂的经营术语。跟着小程序的清晰步骤记录、查看、处理，每天都能比昨天更看得明白。</p>
              <div className="guide-note"><CircleHelp size={17} /><span>没有找到答案？打开小程序后，可从对应经营模块继续查看。</span></div>
            </div>
            <div className="guide-accordion-wrap">
              <div className="guide-card-label"><span>常见问题</span><i>＋＝⌣</i></div>
              <Accordion className="guide-accordion" type="single" collapsible defaultValue="guide-1">
                {guideItems.map((item, index) => (
                  <AccordionItem key={item.question} value={`guide-${index + 1}`}>
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section id="about" className="about-section section-anchor" aria-labelledby="about-heading">
          <div className="about-board">
            <div className="about-copy">
              <span className="section-kicker">品牌初心</span>
              <h2 id="about-heading">不只是记账，<br />更是懂经营的<strong>小助手。</strong></h2>
              <p>算得清面向零售、餐饮、批发、服务业等小微商家，把经营里复杂的数字和需要处理的事项，变成看得懂、理得顺、能行动的信息。</p>
              <button className="secondary-button" onClick={() => setGuideOpen(true)}>现在就去看看 <ArrowRight size={17} /></button>
            </div>
            <div className="about-art">
              <img src={ASSETS.brandBoard} alt="算得清的品牌标志、图标和吉祥物视觉规范展示" loading="lazy" />
              <div className="about-stamp"><BrandIcon /><span>清楚<br />更轻松</span></div>
            </div>
          </div>
        </section>

        <section className="cta-section" aria-labelledby="cta-heading">
          <div className="cta-pattern" aria-hidden="true"><span>＋</span><span>＝</span><span>⌣</span><span>＋</span><span>＝</span></div>
          <div className="cta-content">
            <BrandIcon className="cta-icon" />
            <span>算得清 · 小微商家经营管理</span>
            <h2 id="cta-heading">今天的生意，<br />今天就看明白。</h2>
            <p>打开微信搜索「算得清」，把每一笔经营都理得更清楚。</p>
            <button className="cta-button" onClick={() => setGuideOpen(true)}>打开小程序 <ArrowRight size={18} /></button>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <BrandLockup />
        <p>让每一次计算都清晰，让生意更简单。</p>
        <span>© {new Date().getFullYear()} 算得清</span>
      </footer>

      {guideOpen && (
        <div className="guide-backdrop" role="presentation" onMouseDown={() => setGuideOpen(false)}>
          <section className="guide-modal" role="dialog" aria-modal="true" aria-labelledby="guide-title" onMouseDown={(event) => event.stopPropagation()}>
            <button className="modal-close" onClick={() => setGuideOpen(false)} aria-label="关闭"><X size={20} /></button>
            <BrandIcon className="modal-icon" />
            <p className="modal-eyebrow">扫码体验</p>
            <h2 id="guide-title">打开微信，扫描<br /><strong>小程序二维码</strong></h2>
            <div className="qr-placeholder" role="img" aria-label="小程序二维码占位区域，等待替换为真实二维码">
              <div className="qr-grid qr-grid-top" aria-hidden="true"><i /><i /><i /><i /><i /></div>
              <div className="qr-grid qr-grid-bottom" aria-hidden="true"><i /><i /><i /><i /><i /></div>
              <div className="qr-center"><BrandIcon /></div>
              <span>二维码占位</span>
            </div>
            <p>真实二维码接入后，可直接扫码进入小程序，查看你的经营总览、库存、趋势和提醒。</p>
            <button className="primary-button" onClick={() => setGuideOpen(false)}>我知道了 <Check size={18} /></button>
            <div className="modal-help"><CircleHelp size={14} /> 当前为占位展示，后续可直接替换为正式二维码图片。</div>
          </section>
        </div>
      )}
    </div>
  );
}
