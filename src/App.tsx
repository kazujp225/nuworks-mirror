import { useEffect } from 'react'

declare global {
  interface Window {
    winwidth: number;
  }
}

function App() {
  useEffect(() => {
    // Set winwidth for GSAP scripts
    window.winwidth = window.innerWidth;

    // Remove over-hidden class and add loaded class
    document.body.classList.remove('over-hidden')
    document.body.classList.add('loaded')

    // Hide the loader after a short delay
    const loader = document.getElementById('loader')
    if (loader) {
      loader.style.display = 'none'
    }
  }, [])

  return (
    <>
      <div className="bg-fade"></div>
      <div id="cursor" className="cursor"></div>
      <div id="follower" className="follower"></div>

      <header id="header">
        <h1 className="logo">
          <a href="./">
            <img src="/img/header_logo.svg" alt="NUWORKS" />
          </a>
        </h1>
        <div className="btn_set">
          <a href="contact/" className="btn_contact">CONTACT US</a>
          <div className="openbtn">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>

      <nav id="g-nav_mega" className="js-gnav">
        <div className="inner">
          <ul>
            <li><a href="service/" className="sh-txt">SERVICE</a></li>
            <li><a href="about/" className="sh-txt">ABOUT</a></li>
            <li><a href="company/" className="sh-txt">COMPANY</a></li>
            <li><a href="news/" className="sh-txt">NEWS</a></li>
            <li><a href="recruit/" className="sh-txt">RECRUIT</a></li>
            <li className="bold"><a href="contact/" className="sh-txt">CONTACT US</a></li>
          </ul>
        </div>
      </nav>

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* Main Visual Section */}
            <section id="mv">
              <div className="container">
                <h1 className="mv-h1">
                  <span className="h1txt02">
                    <span className="js-scroll__xl">
                      <span className="smoothText">
                        <span className="smoothTextTrigger">
                          <img src="/img/txt_KV.svg" alt="NUWORKS" />
                        </span>
                      </span>
                    </span>
                  </span>
                </h1>
              </div>
              <div className="scr-box">
                <div className="inner">
                  <p className="scroll-txt">SCROLL DOWN</p>
                  <svg width="12" height="10" viewBox="0 0 12 10" className="scroll-arrow">
                    <path id="arwbtm01" className="arwbtm" data-name="arwbtm01" d="M6,0l6,10H0Z" transform="translate(12 10) rotate(180)" fill="#0f0f0f"></path>
                  </svg>
                </div>
              </div>
            </section>

            {/* Introduction Section */}
            <section className="section" id="introduction">
              <div className="container">
                <div className="intro-txt" id="introTxt1">
                  <p className="lead">
                    <span className="js-shuffleText">働く"場所"に捉われない</span>
                    <span className="js-shuffleText">働く"時間"に捉われない</span>
                    <span className="js-shuffleText">働く"企業"に捉われない</span>
                    <span className="js-shuffleText">働く"年齢"に捉われない</span>
                  </p>
                  <p className="lead">
                    <span className="js-shuffleText spcut">これまでの"働く"という概念に捉われず、</span>
                    <span className="js-shuffleText pccut">これまでの"働く"</span>
                    <span className="js-shuffleText pccut">という概念に捉われず、</span>
                    <span className="js-shuffleText spcut">もっと自由な、もっと多様な、"働く" を提供する。</span>
                    <span className="js-shuffleText pccut">もっと自由な、もっと多様な、</span>
                    <span className="js-shuffleText pccut">"働く" を提供する。</span>
                  </p>
                  <p className="marker-lead js-motionTxt-wrap spcut">
                    <span className="js-motionTxt">我々は、より自由に働ける世界を実現します。</span>
                    <span className="js-motionTxtBg">我々は、より自由に働ける世界を実現します。</span>
                  </p>
                  <div className="marker-lead js-motionTxt-wrap pccut">
                    <span className="js-motionTxt">我々は、</span>
                    <span className="js-motionTxtBg">我々は、</span>
                  </div>
                  <div className="marker-lead js-motionTxt-wrap pccut delau3">
                    <span className="js-motionTxt">より自由に働ける世界を</span>
                    <span className="js-motionTxtBg">より自由に働ける世界を</span>
                  </div>
                  <div className="marker-lead js-motionTxt-wrap pccut delay8">
                    <span className="js-motionTxt">実現します。</span>
                    <span className="js-motionTxtBg">実現します。</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Service Section */}
            <section className="section" id="service">
              <div className="container" id="service_header">
                <div className="title-area">
                  <h2 className="section__title js-fadeUp">
                    <small className="ja">私たちのサービスについて</small>
                    <span className="en">SERVICE</span>
                  </h2>
                  <a href="service/" className="title-link-area">
                    <p className="lead">
                      <span className="js-shuffleText">より多様な働き方を、</span>
                      <span className="js-shuffleText">より自由に選択できる未来を創る。</span>
                    </p>
                  </a>
                </div>
              </div>
              <div className="wrapper" id="service_container">
                <ul className="service-index-wrap">
                  <li className="service-item js-fadeUp">
                    <a className="service-item_inner" href="service/#service-1">
                      <div className="service-item-txt">
                        <span className="number"><span className="en">SERVICE</span> - 01 / 02</span>
                        <div className="service-item-tit">
                          <p className="category">Sales Solutions</p>
                          <h3>営業支援・営業マーケティング</h3>
                        </div>
                      </div>
                      <div className="service-item-img">
                        <img src="/img/img_service_item02.jpg" alt="" />
                      </div>
                      <div className="service_looptxt_bg">
                        <span className="looptxt">SALES SOLUTIONS</span>
                        <span className="looptxt">SALES SOLUTIONS</span>
                      </div>
                      <span className="viewmore">VIEW MORE</span>
                    </a>
                  </li>
                  <li className="service-item js-fadeUp">
                    <a className="service-item_inner" href="service/#service-2">
                      <div className="service-item-txt">
                        <span className="number"><span className="en">SERVICE</span> - 02 / 02</span>
                        <div className="service-item-tit">
                          <p className="category">Workplace</p>
                          <h3>ワークプレイス</h3>
                        </div>
                      </div>
                      <div className="service-item-img">
                        <img src="/img/img_service_item01.jpg" alt="" />
                      </div>
                      <div className="service_looptxt_bg">
                        <span className="looptxt">WORKPLACE</span>
                        <span className="looptxt">WORKPLACE</span>
                      </div>
                      <span className="viewmore">VIEW MORE</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="section" id="service_footer">
                <div className="morebtn-box js-fadeUp">
                  <a href="service/" className="morebtn has-border">
                    <svg width="10" height="12" viewBox="0 0 10 12">
                      <path id="arw_r_w01" className="arw_r_w" data-name="arw_r_w01" d="M6,0l6,10H0Z" transform="translate(10) rotate(90)" fill="#fff"></path>
                    </svg>
                    <span className="en">VIEW MORE</span>
                  </a>
                </div>
              </div>
            </section>

            {/* About Section */}
            <section className="section" id="about">
              <a href="about/" className="title-link-area">
                <div className="container">
                  <div className="message-wrap">
                    <h2 className="lead message01 tac en spcut">
                      <span className="type01 TextTyping">"Work" more Freely</span>
                    </h2>
                    <h2 className="lead message01 tal en pccut">
                      <span className="type01 TextTyping">"Work"</span>
                      <span className="type02 TextTyping"> more Freely</span>
                    </h2>
                    <p className="message02 ta-center">
                      <span className="js_typing">より自由に働ける世界を目指す<br className="pccut" />NUWORKSについて</span>
                    </p>
                  </div>
                  <div className="s-tit center js-fadeUp delay6">
                    <h2 className="u_bar"><span className="en">ABOUT US</span></h2>
                  </div>
                </div>
              </a>
            </section>

            {/* Company Section */}
            <section className="section" id="company">
              <div className="hover-stalker-company"></div>
              <div className="container" id="companyCont">
                <div className="title-area">
                  <h2 className="section__title js-fadeUp">
                    <small className="ja">会社概要</small>
                    <span className="en">COMPANY</span>
                  </h2>
                  <a href="company/" className="title-link-area">
                    <span className="morebtn has-border js-fadeUp">
                      <svg width="10" height="12" viewBox="0 0 10 12">
                        <path id="arw_r_w01" className="arw_r_w" data-name="arw_r_w01" d="M6,0l6,10H0Z" transform="translate(10) rotate(90)"></path>
                      </svg>
                      <span className="en">VIEW MORE</span>
                    </span>
                  </a>
                </div>
              </div>
            </section>

            {/* Recruit Section */}
            <section className="section" id="recruit">
              <div className="hover-stalker-recruit"></div>
              <div className="container" id="recruitCont">
                <div className="title-area">
                  <h2 className="section__title js-fadeUp">
                    <small className="ja">採用情報</small>
                    <span className="en">RECRUIT</span>
                  </h2>
                  <a href="recruit/" className="title-link-area">
                    <span className="morebtn js-fadeUp has-border">
                      <svg width="10" height="12" viewBox="0 0 10 12">
                        <path id="arw_r_w01" className="arw_r_w" data-name="arw_r_w01" d="M6,0l6,10H0Z" transform="translate(10) rotate(90)"></path>
                      </svg>
                      <span className="en">VIEW MORE</span>
                    </span>
                  </a>
                </div>
              </div>
            </section>

            {/* News Section */}
            <section className="section" id="news">
              <div className="news-left">
                <div className="title-area">
                  <h2 className="section__title js-fadeUp">
                    <small className="ja">お知らせ</small>
                    <span className="en">NEWS</span>
                  </h2>
                </div>
                <div className="morebtn-box js-fadeUp spcut">
                  <a href="news/" className="morebtn has-border js-fadeUp">
                    <svg width="10" height="12" viewBox="0 0 10 12">
                      <path id="arw_r_w01" className="arw_r_w" data-name="arw_r_w01" d="M6,0l6,10H0Z" transform="translate(10) rotate(90)"></path>
                    </svg>
                    <span className="en">VIEW MORE</span>
                  </a>
                </div>
              </div>
              <div className="news-right">
                <div className="news-inner js-fadeUp">
                  <div className="CMS-NEWS-INDEX news-list">
                    <div className="CMS-NEWS-ITEM fadegrp">
                      <div className="CMS-NEWS-TIME"></div>
                      <div className="CMS-NEWS-LINK"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="morebtn-box tac js-fadeUp pccut">
                <a href="news/" className="morebtn has-border js-fadeUp">
                  <svg width="10" height="12" viewBox="0 0 10 12">
                    <path id="arw_r_w01" className="arw_r_w" data-name="arw_r_w01" d="M6,0l6,10H0Z" transform="translate(10) rotate(90)"></path>
                  </svg>
                  <span className="en">VIEW MORE</span>
                </a>
              </div>
            </section>
          </main>

          {/* Footer */}
          <footer id="footer" className="footer">
            <div className="container flexWrap js-fadeUp">
              <nav className="footer-link">
                <ul className="fnav">
                  <li><a href="./" className="sh-txt">HOME</a></li>
                  <li><a href="service/" className="sh-txt">SERVICE</a></li>
                  <li><a href="about/" className="sh-txt">ABOUT</a></li>
                  <li><a href="company/" className="sh-txt">COMPANY</a></li>
                  <li><a href="news/" className="sh-txt">NEWS</a></li>
                  <li><a href="recruit/" className="sh-txt">RECRUIT</a></li>
                  <li className="bold"><a href="contact/" className="sh-txt">CONTACT US</a></li>
                </ul>
              </nav>
              <div className="corp-info">
                <h1 className="logo">
                  <span className="js-scroll__xl">
                    <img src="/img/txt_KV.svg" alt="NUWORKS" />
                  </span>
                </h1>
                <p className="copy">
                  <a href="privacy/" className="privacy-link">PRIVACY POLICY</a>
                  <span className="copytxt">@2023 NUWORKS</span>
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>

      <div className="body__scroll__box">
        <span className="body__scroll__bar"></span>
      </div>

      <div className="loader-bg" id="loader">
        <div className="lorder-logo-wrap">
          <p className="loading_txt js-apper">
            <span className="js-shuffleTextTop">"働く"をもっと自由に</span>
          </p>
        </div>
        <div className="splashbg"></div>
      </div>
    </>
  )
}

export default App
