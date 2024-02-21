// 로딩페이지
function introLoad(){
  document.getElementsByTagName("html")[0].style.overflowY = "hidden";
  lenis.stop(); // lenis.js 스크롤 막기 (잠금)
}
function loadingClick(){
  let loadingBtn = document.querySelector("#loading .link-btn");
    loadingBtn.addEventListener("click", () => {
    const loadAni = gsap.timeline();
    loadAni.to("#loading .loading-in",{scale: 0, duration: 0.5, autoAlpha: 1,rotation: 940})
    .to("#loading", {autoAlpha: 0})
    setTimeout(() => {
      document.getElementsByTagName("html")[0].style.overflowY = "scroll";
      lenis.start(); // lenis.js 스크롤 실행
    }, 700);
  });
};

window.addEventListener("DOMContentLoaded", function(){
  introLoad();
  loadingClick();
});

/* Share Button */
let toggleS = document.querySelector(".toggle-share");
let menuS = document.querySelector(".share-btn");
toggleS.onclick = function(){
  menuS.classList.toggle("active")
};

/* Clock --------------------------------------- */
const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');
const now = new Date();
function addZero(value){
    if(value < 10){
    value = '0' + value;
    }
    return value;
}
function clock(){
  const now = new Date();
  hour.innerText = addZero(now.getHours());
  min.innerText = addZero(now.getMinutes());
  sec.innerText = addZero(now.getSeconds());
}
setInterval(clock, 1000);

/* Dark Mode --------------------------------------------- */
const darkSwitch = document.querySelector('.switch')
let userTheme = localStorage.getItem('theme')
// 기본 테마를 'light'로 설정
if (userTheme === null) {
    userTheme = 'light'
    localStorage.setItem('theme', 'light')
}
let stat = userTheme === 'dark'
// 페이지 로드 시 테마 적용
document.addEventListener('DOMContentLoaded', () => {
    if (userTheme === 'dark') {
        clickDarkMode()
    } else {
        clickLightMode()
    }
})
// 다크모드 버튼 클릭 이벤트 처리
darkSwitch.addEventListener('click', () => {
    if (stat) {
        clickLightMode()
    } else {
        clickDarkMode()
    }
})

// 다크 모드 적용 함수
function clickDarkMode() {
    localStorage.setItem('theme', 'dark')
    document.documentElement.setAttribute('data-theme', 'dark-mode')
    stat = true
}
// 라이트 모드 적용 함수
function clickLightMode() {
    localStorage.setItem('theme', 'light')
    document.documentElement.setAttribute('data-theme', 'light-mode')
    stat = false
}

// Rolling Banner
let roller = document.querySelector('.rolling-list');
roller.id = 'roller1';

let clone1 = roller.cloneNode(true);
clone1.id = 'roller2';
document.querySelector('.rolling-allWrap').appendChild(clone1);

document.querySelector('#roller1').style.top = '0px';
document.querySelector('#roller2').style.top = document.querySelector('.rolling-list ul').offsetHeight + 'px';

roller.classList.add('original');
clone1.classList.add('clone');

// h2 태그 쪼개기, 여백 반응하게 하기
document.querySelectorAll("h2").forEach(text => {
  let theText = text.innerText;
  let newText = "";
  for(let i=0; i<text.innerText.length; i++){
    newText += "<span aria-hidden='true'>";
    if(text.innerText[i] == " "){
      newText += "&nbsp";
    }else{
      newText += text.innerText[i];
    }
    newText += "</span>";
  }
  text.innerHTML = newText;
  text.setAttribute("aria-label", theText);
});

// Nav click event Menu FullPage
const {gsap} = window;
const btn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

btn.addEventListener('click', () => {
  if(btn.classList.contains("active")){
    btn.classList.remove("active");
    hide();
    setTimeout(() => {
      nav.style.zIndex = -10;
    }, 2000);
  }else{
    btn.classList.add("active");
    nav.style.zIndex=5;
    show();
  }
});

const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(navLink => {
  navLink.addEventListener('click', () => {
    btn.classList.remove("active");
    hide();
    setTimeout(() => {
      nav.style.zIndex = -10;
    }, 2000);
  });
});

function show(){
  let navTl = gsap.timeline();
  gsap.set(".nav-inner, .menu-btn", {
    pointerEvents: 'none',
  });
  navTl.fromTo(
    ".nav-transition-slide",
    {
      scaleX: 0,
      transformOrigin: 'left center'
    },
    {
      duration: 0.5,
      scaleX: 1,
      ease: "Expo.inOut",
    }
  ).set(".nav-inner, .menu-btn",{
    pointerEvents: "all",
  }).fromTo(".nav-item-line",{
    scaleX: 0,
    transformOrigin: 'left center',
  }, {
    duration: 0.5,
    scaleX: 1,
    ease: "Expo.inOut",
    stagger: 0.15,
  }
  ).fromTo(".nav-link",{
    translateY: "100%",
  }, {
    duration: 2.25,
    translateY: 0,
    ease: "elastic.inOut",
    stagger: 0.15,
  }, "-=1.65");
}
function hide(){
  let navTl = gsap.timeline();
  gsap.set(".nav-inner, .menu-btn", {
    pointerEvents: 'none',
  });
  navTl.to(".nav-item-line", {
    duration: 0.6,
    scaleX: 0,
    transformOrigin: "right center",
    ease: "Expo.inOut",
    stagger: -0.15
  }).to(".nav-link",{
    duration: 0.35,
    translateY: "100%",
    ease: "Expo.inOut",
    stagger:-0.15
  },
  0
  ).to(".nav-transition-slide",{
    duration:0.5,
    transformOrigin: "right center",
    scaleX: 0,
    ease: "Expo.inOut"
  }).set(".menu-btn", {
    pointerEvents: 'all',
  });
}
/* Section Gsap ----------------------------------------------------------------- */
const ani1 = gsap.timeline();
ani1.to("#section1 .t2", {yPercent: 450}, "text")
    .to("#section1 .t3", {yPercent: 150, xPercent: 52, scale: 0.3}, "text")
    .to("#section1 .t2", {opacity: 0}, "text")
	ScrollTrigger.create({
			animation: ani1,
			trigger: "#section1",
			start: "top top",
			end: "+=2500",
			scrub: true,
			pin: true,
			anticipatePin: 1,
			// markers: true
	});

  const ani2 = gsap.timeline();
  ani2.to("#section1 .text-bg img", {scale: 6, autoAlpha: 0})
      .to("#section1 .text-bg img", {autoAlpha: 0})
      .from("#section2",{yPercent:-150 , autoAlpha: 1})
      .from("#section2 .profile-content--1", {x: -800})
      .from("#section2 .profile-content--3", {x: 800})
      .from("#section2 .profile-content--2", {y: -1000})
  ScrollTrigger.create({
    animation: ani2,
    trigger: "#section1 .text-bg",
    start: "center center",
    end: "+=2000",
    scrub: true,
    pin: true,
    // markers: true,
    anticipatePin: 1,
  });

  const ani3 = gsap.timeline({scrollTrigger:{
    trigger: "#section3",
    start: "30% 50%",
    end: "70% 20%",
    scrub: true,
    // markers: true,
  }})

  ani3.to("#front2",{rotateX: "0deg",})
      .to("#front3",{rotateX: "0deg",})
      .to("#section3",{scale: "0.9"})
  /* 반응형 Section4 가로 슬라이드 */
  function SectionGroup__init(){
    $("#section4").each(function (index, node){
      let $group = $(node);
      let $section = $group.find(".row-box > .pub-list");

      gsap.to($section, {
        xPercent: -100 * ($section.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: $group,
          start: "top top",
          end: "+=" + ($section.length - 1) + "00%",
          pin: true,
          scrub: 1,
          // markers: true
        }
      })
    })
  };
  SectionGroup__init();

const ani5 = gsap.timeline();
ani5.from("#section6 .work1 .mockup",{x:innerWidth*-1, rotation:90, scale:0.1})
    .from("#section6 .work2 .mockup",{x:innerWidth*0.5, rotation:-90, scale:0.1})
    .from("#section6 .work3 .mockup",{x:innerWidth*-1, rotation:90, scale:0.1})
    .from("#section6 .work4 .mockup",{x:innerWidth*1, rotation:-90, scale:0.1})
ScrollTrigger.create({
  animation: ani5,
  trigger: "#section6",
  start: "top top",
  end: "+=2500",
  scrub: true,
  pin: false,
});

const h2s = gsap.utils.toArray("h2");
h2s.forEach(text => {
  gsap.from(text.querySelectorAll("span"), {
    yPercent: 110,
    autoAlpha: 0,
    rotation: 50,
    y: 110,
    delay: 0.2,
    ease: "circ.out",
    stagger: {
      amount: 1,
      from: "random"
    },
    scrollTrigger: {
      trigger: text,
      start: "top bottom",
      end: "+=400",
      // markers: true
    }
  });
});

// 새창 띄우기
function MM_openBrWindow(theURL, winName, features){
  window.open(theURL, winName, features);
}
const cards = Array.from(document.querySelectorAll('.card-inner'));
const tabFocus = document.querySelector('.tab-btn li')

// 탭메뉴 이동간 filp 초기화
tabFocus.addEventListener('click', () => {
  cards.forEach((card) => {
    card.classList.remove('is-filpped');
  });
});

// Card 토글클래스
cards.forEach((card) => {
  card.addEventListener('click', function(){
    card.classList.toggle('is-filpped');
  });
});


/* tilt js */
VanillaTilt.init(document.querySelectorAll(".card"), {
  max: 25,
  speed: 100,
  perspective: 4000,
  // scale: 1.1,
  reset: true,
  glare: true,
  transition: true,
  "max-glare": 0.5
});
VanillaTilt.init(document.querySelectorAll(".card"));

/* Scroll smooth */
const lenis = new Lenis({
  content: document.html,
});
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
});
gsap.ticker.lagSmoothing(0);

/* Modal 클릭이벤트 lenis 적용범위 수정 */
const openBtn = document.querySelectorAll(".open");
const MoPreBtn = document.querySelectorAll(".left_btn");
const MoNextBtn = document.querySelectorAll(".right_btn");
const MoButtons = [...openBtn, ...MoPreBtn, ...MoNextBtn];
MoButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const contents = document.querySelectorAll("#popup, #popup2,#popup3");
    contents.forEach((content) => {
      const lenis = new Lenis({ // lenis 적용 범위, 버튼 클릭시 모달창으로 이동
        content: content,
      });
      lenis.scrollTo(0,0); // 버튼 클릭 마다 lenis 스크롤 탑
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time)=>{
        lenis.raf(time * 1000);
      });
    });
  });
});
/* top btn */
const topBtn = document.querySelector(".totop");
topBtn.addEventListener("click", () => {
  const lenis = new Lenis({
    content: document.html,
  });
  lenis.scrollTo(0,0);
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time)=>{
    lenis.raf(time * 500);
  });
});
