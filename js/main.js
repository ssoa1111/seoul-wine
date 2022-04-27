
//마우스 포인터
const cursor = document.querySelector('#cursor');
const cursorCircle = cursor.querySelector('.cursor__circle');

const mouse = { x: -100, y: -100 }; // mouse pointer's coordinates
const pos = { x: 0, y: 0 }; // cursor's coordinates
const speed = 0.1; // between 0 and 1

const updateCoordinates = e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
}

window.addEventListener('mousemove', updateCoordinates);

function getAngle(diffX, diffY) {
  return Math.atan2(diffY, diffX) * 180 / Math.PI;
}

function getSqueeze(diffX, diffY) {
  const distance = Math.sqrt(
    Math.pow(diffX, 2) + Math.pow(diffY, 2)
  );
  const maxSqueeze = 0.15;
  const accelerator = 1500;
  return Math.min(distance / accelerator, maxSqueeze);
}

const updateCursor = () => {
  const diffX = Math.round(mouse.x - pos.x);
  const diffY = Math.round(mouse.y - pos.y);
  
  pos.x += diffX * speed;
  pos.y += diffY * speed;
  
  const angle = getAngle(diffX, diffY);
  const squeeze = getSqueeze(diffX, diffY);
  
  const scale = 'scale(' + (1 + squeeze) + ', ' + (1 - squeeze) +')';
  const rotate = 'rotate(' + angle +'deg)';
  const translate = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';

  cursor.style.transform = translate;
  cursorCircle.style.transform = rotate + scale;
};

function loop() {
  updateCursor();
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);


const cursorModifiers = document.querySelectorAll('[cursor-class]');

cursorModifiers.forEach(curosrModifier => {
  curosrModifier.addEventListener('mouseenter', function() {
    const className = this.getAttribute('cursor-class');
    cursor.classList.add(className);
  });
  
  curosrModifier.addEventListener('mouseleave', function() {
    const className = this.getAttribute('cursor-class');
    cursor.classList.remove(className);
  });
});



//상단 search 버튼
const searchIcon = document.querySelector('.total-menu.mobile .search');
const closeIcon = document.querySelector('.total-menu.mobile .close');
const searchBox = document.querySelector('.total-menu.mobile .search-box')
const textfocus = document.querySelector('input');
searchIcon.addEventListener('click',()=>{
    searchBox.classList.remove('hide');
    closeIcon.classList.remove('hide');
    searchIcon.classList.add('hide');
    textfocus.focus();
});
closeIcon.addEventListener('click',()=>{
  searchBox.classList.add('hide');
  closeIcon.classList.add('hide');
  searchIcon.classList.remove('hide');
});


//햄버거 버튼
const toggleBtn = document.querySelector('.button_container');
const menuVisible = document.querySelector('.total-menu.mobile .menu__overlay');
let classOn = false;
toggleBtn.addEventListener('click',function(){
    classOn = !classOn;
    if(classOn){
        toggleBtn.classList.add('active');
        menuVisible.classList.add('open');
    }else{
        toggleBtn.classList.remove('active');
        menuVisible.classList.remove('open');
    }
});

//상단 소개 스와이퍼
new Swiper('.introduce .swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
    slidesPerView: 1, //한 번에 보여줄 슬라이드 개수
});

// const showEl = document.querySelectorAll('.meriot-right img');
// const classHas = document.querySelector('.swiper-slide');
// if(classHas.classList.contains('-active')){
// showEl.forEach(function(showEl, index){
//     //gsop문법 => gsap.to(요소, 지속시간초단위, 옵션)
//     gsap.to(showEl, 1, {
//         delay : (index + 1) * 0.7, //0.7, 1.4, 2.1, 2.8
//         translateX : 0,
//     })
// });
// }

//판넬 스와이퍼 mobile
new Swiper('.panel .swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay : {
        delay : 4000
    },
    navigation : {
      prevEl : ".panel .swiper-prev",
      nextEl : ".panel .swiper-next"
    },
    slidesPerView: 1, //한 번에 보여줄 슬라이드 개수
    breakpoints: { //반응형 조건 속성
      768: { //640 이상일 경우
        slidesPerView: 2, //레이아웃 2열
      },
    }
  });
   
//판넬 배경 변경 pc
function bgChange(index){
  const panelHover = document.querySelectorAll('.panel.pc > div');
  const panelBg = document.querySelector('.panel.pc');
    panelBg.style.background = `url(image/panel/bg_${index}.jpg) no-repeat center center`;
    panelBg.style.backgroundSize = 'cover';
    panelBg.style.transition = 'all 0.4s';
};


//recommend
// const wineHover = document.querySelector('.recommend-wine img');
// wineHover.addEventListener('hover',()=>{
//   if(wineHover[1].classList.contains('hide')){
//     wineHover.classList.remove('hide');
//   }
// })


//popular 스와이퍼
new Swiper('.popular .swiper', {
  direction: 'horizontal',
  loop: true,
  autoplay : {
      delay : 3000
  },
  navigation : {
    prevEl : ".popular .swiper-prev",
    nextEl : ".popular .swiper-next"
  },
  slidesPerView: 1, //한 번에 보여줄 슬라이드 개수
  breakpoints: { //반응형 조건 속성
    600: { //640 이상일 경우
      slidesPerView: 2, //레이아웃 2열
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});







//top btn
window.addEventListener('scroll',
    _.throttle(function(){
        if(window.scrollY > 500){
            //bebgeEl.style.display = 'none';
            //gsop문법 => gsap.to(요소, 지속시간초단위, 옵션)
            // gsap.to(bebgeEl,0.6,{
            //     opacity : 0,
            //     display : 'none'
            // });
            // 상단으로 스크롤 버튼 보이기!
            gsap.to(toTopEl, 0.5, {
              opacity : 1,
      });
        }else{
            //bebgeEl.style.display = 'block';
            // gsap.to(bebgeEl,0.6,{
            //     opacity : 1,
            //     display : 'block'
            // });
            // 상단으로 스크롤 버튼 숨기기!
            gsap.to(toTopEl, 0.5, {
                opacity : 0,
      });

        }
    },300)
);

const toTopEl = document.querySelector("#to-top");
toTopEl.addEventListener('click', function () {
  // 페이지 위치를 최상단으로 부드럽게(0.7초 동안) 이동.
  gsap.to(window, .7, {
    scrollTo: 0
  });
});
