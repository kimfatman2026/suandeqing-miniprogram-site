/**
 * 设计提示｜清蓝经营画报的场景页：人物经营瞬间是信任主体，清蓝数据便签为产品能力注释；
 * 影像不承诺或伪造经营结果，所有照片均作为“使用场景示意”，保留清晰、可靠、轻松的品牌气质。
 */
import { Link } from "wouter";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BellRing,
  Boxes,
  CalendarDays,
  Check,
  ClipboardList,
  Menu,
  Store,
  TrendingUp,
} from "lucide-react";

const SCENE_PHOTOS = {
  retail: "/manus-storage/retail-checkout_fa34b997.jpg",
  restaurant: "/manus-storage/restaurant-owner_58105868.jpg",
  service: "/manus-storage/shop-owner_239faf30.jpg",
  hero: "/manus-storage/service-owner-tablet_e24b24c3.jpg",
};

function BrandIcon({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="scenesBrandGradient" x1="6" y1="5" x2="43" y2="45" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5ACBFA" /><stop offset="1" stopColor="#087AFF" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="13" fill="url(#scenesBrandGradient)" />
      <path d="M11.5 19.5 16.7 11h14.6l5.2 8.5M17 25h7M20.5 21.5v7M29.5 23.5h6M29.5 28h6M16 34c4.9 4 11.1 4 16 0" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
    </svg>
  );
}

function BrandLockup() {
  return (
    <div className="brand-lockup" aria-label="算得清">
      <BrandIcon className="brand-icon" />
      <span className="brand-type"><b>算得清</b><small>SUAN DE QING</small></span>
    </div>
  );
}

const moments = [
  { time: "开店前", icon: Boxes, title: "先看库存，再安排今天", text: "货还够不够、哪些商品需要先关注，出门前就有数。", tone: "orange" },
  { time: "营业中", icon: ClipboardList, title: "每笔生意，都有去处", text: "收入、成本和订单顺手记录，不把问题留到打烊后。", tone: "blue" },
  { time: "收工后", icon: BarChart3, title: "忙了一天，看看结果", text: "用一张经营总览，把今天的努力看得更明白。", tone: "green" },
];

const industries = [
  {
    index: "01", tag: "零售 / 批发", title: "进货、出货、补货，\n每件事都有条理。", description: "柜台前的一次确认、货架旁的一次补货、收银后的几笔记录，都会成为更清楚的经营线索。", image: SCENE_PHOTOS.retail, alt: "店铺经营者在柜台处理日常业务的使用场景示意", icon: Boxes, tone: "blue", notes: ["随时关注商品余量", "把当天收支理清楚"], slip: ["库存提醒", "建议及时处理"],
  },
  {
    index: "02", tag: "餐饮 / 门店", title: "高峰期很忙，\n经营重点不必靠记忆。", description: "营业的节奏再快，也可以把收入、成本和要处理的事项，收在一处清晰的经营视图里。", image: SCENE_PHOTOS.restaurant, alt: "餐饮经营者在厨房忙碌的使用场景示意", icon: ClipboardList, tone: "orange", notes: ["及时查看待办和提醒", "少在忙碌中遗漏关键事项"], slip: ["营业待办", "先处理这一项"],
  },
  {
    index: "03", tag: "服务 / 个体经营", title: "把时间留给客户，\n把数字交给清晰。", description: "从接单到收工，把散落在一天里的经营信息整理起来。做判断时，不必再从聊天记录和纸本账里找答案。", image: SCENE_PHOTOS.service, alt: "小微商家经营者在店内工作的使用场景示意", icon: Store, tone: "green", notes: ["经营趋势集中查看", "更从容地安排下一步"], slip: ["经营趋势", "今天的变化已整理"],
  },
];

export default function Scenes() {
  return (
    <div className="site-shell scenes-page">
      <header className="site-header scenes-header">
        <div className="nav-shell">
          <Link className="brand-link" href="/"><BrandLockup /></Link>
          <nav className="desktop-nav" aria-label="主导航">
            <Link href="/#features">核心能力</Link>
            <Link className="active-nav" href="/scenes">使用场景</Link>
            <Link href="/#guide">使用指南</Link>
            <Link href="/#about">关于算得清</Link>
          </nav>
          <Link className="nav-cta desktop-cta" href="/?open=qr">打开小程序 <ArrowRight size={17} /></Link>
          <Link className="scene-mobile-home" href="/" aria-label="返回首页"><Menu size={20} /></Link>
        </div>
      </header>

      <main>
        <section className="scenes-hero" aria-labelledby="scenes-hero-title">
          <div className="scenes-hero-glow glow-a" aria-hidden="true" />
          <div className="scenes-hero-glow glow-b" aria-hidden="true" />
          <div className="scenes-hero-copy">
            <Link className="back-link" href="/"><ArrowLeft size={16} /> 返回首页</Link>
            <span className="section-kicker">使用场景</span>
            <h1 id="scenes-hero-title">忙着把店开好，<br /><strong>其他，交给清晰。</strong></h1>
            <p>零售、餐饮、服务业，经营的忙各不相同。但每个认真打理生意的人，都值得在关键时刻看到更清楚的答案。</p>
            <Link className="primary-button" href="/?open=qr">打开小程序看看 <ArrowRight size={18} /></Link>
          </div>
          <div className="scenes-hero-stage">
            <div className="scenes-person-photo">
              <img src={SCENE_PHOTOS.hero} alt="经营者在店内查看平板的使用场景示意" />
              <div className="hero-photo-shade" />
              <span>认真经营的每一天</span>
            </div>
            <div className="scenes-hero-ledger" aria-label="经营日程信息示意">
              <div className="ledger-head"><span>今天的经营安排</span><CalendarDays size={17} /></div>
              <div className="ledger-row"><i className="orange-dot" /><span>开店前</span><b>库存与待办</b><Check size={16} /></div>
              <div className="ledger-row active"><i className="blue-dot" /><span>营业中</span><b>收入与订单</b><ArrowRight size={16} /></div>
              <div className="ledger-row"><i className="green-dot" /><span>收工后</span><b>趋势与利润</b><TrendingUp size={16} /></div>
              <div className="ledger-foot"><span>把每件重要的事，排得明白。</span><i>＋＝⌣</i></div>
              <div className="ledger-note note-one"><BellRing size={15} /><span>有一项库存需要看看</span></div>
              <div className="ledger-note note-two"><TrendingUp size={15} /><span>今天的变化已为你整理</span></div>
            </div>
          </div>
        </section>

        <section className="moments-section" aria-labelledby="moments-heading">
          <div className="moments-heading"><span className="section-kicker">一天里的关键时刻</span><h2 id="moments-heading">看清楚，才能把精力<br />放在<strong>更重要的事情上。</strong></h2></div>
          <div className="moment-grid">
            {moments.map((moment, index) => {
              const Icon = moment.icon;
              return <article className={`moment-card ${moment.tone}`} key={moment.time}>
                <span className="moment-index">0{index + 1}</span>
                <div className="moment-icon"><Icon size={24} /></div>
                <p>{moment.time}</p><h3>{moment.title}</h3><span>{moment.text}</span>
              </article>;
            })}
          </div>
        </section>

        <section className="industry-section" aria-labelledby="industry-heading">
          <div className="industry-intro"><span className="section-kicker">为认真经营的人而做</span><h2 id="industry-heading">无论做哪一行，<br />都能把生意<strong>理得更明白。</strong></h2><p>以下内容为使用场景示意，帮助你理解算得清在不同经营节奏中可提供的清晰支持。</p></div>
          <div className="industry-list">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return <article className={`industry-story ${index % 2 === 1 ? "story-reverse" : ""}`} key={industry.tag}>
                <div className="story-photo">
                  <img src={industry.image} alt={industry.alt} loading="eager" />
                  <div className="photo-shade" />
                  <div className="scene-caption"><span>使用场景示意</span><i>{industry.index}</i></div>
                  <div className={`photo-signal ${industry.tone}`}><Icon size={18} /><span>{industry.tag}</span></div>
                  <div className={`scene-slip ${industry.tone}`}><Icon size={15} /><span>{industry.slip[0]}</span><b>{industry.slip[1]}</b></div>
                </div>
                <div className="story-copy">
                  <div className={`story-count ${industry.tone}`}><span>{industry.index}</span><i /></div>
                  <p>{industry.tag}</p>
                  <h3>{industry.title.split("\n").map((line) => <span key={line}>{line}<br /></span>)}</h3>
                  <div className="story-rule" />
                  <p className="story-description">{industry.description}</p>
                  <ul>{industry.notes.map((note) => <li key={note}><Check size={16} />{note}</li>)}</ul>
                  <Link className="inline-link" href="/?open=qr">看看小程序如何帮上忙 <ArrowRight size={16} /></Link>
                </div>
              </article>;
            })}
          </div>
        </section>

        <section className="scene-trust-section" aria-labelledby="trust-heading">
          <div className="trust-main"><span className="section-kicker">清晰，是一种安心</span><h2 id="trust-heading">不是多一张报表，<br />而是少一份<strong>心里没底。</strong></h2><p>算得清不试图把经营变复杂。它只希望在你需要看一眼的时候，给出清楚、及时、能继续处理的信息。</p></div>
          <div className="trust-list" aria-label="算得清信息呈现原则">
            <div><b>先看结果</b><span>重要数字和待办先呈现</span></div>
            <div><b>再看变化</b><span>趋势帮助理解经营节奏</span></div>
            <div><b>然后行动</b><span>提醒说明原因与下一步</span></div>
          </div>
        </section>

        <section className="scene-page-cta" aria-labelledby="scene-cta-heading">
          <BrandIcon className="cta-icon" />
          <span>从今天开始，少一点反复核对</span>
          <h2 id="scene-cta-heading">把生意，算得清楚。</h2>
          <p>打开微信，进入算得清小程序，看看你的经营信息能有多清楚。</p>
          <Link className="cta-button" href="/?open=qr">打开小程序 <ArrowRight size={18} /></Link>
        </section>
      </main>

      <footer className="site-footer">
        <BrandLockup /><p>让每一次计算都清晰，让生意更简单。</p><span>© {new Date().getFullYear()} 算得清</span>
      </footer>
    </div>
  );
}
