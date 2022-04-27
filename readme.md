# 서울와인
안녕하세요. 서울와인이라는 사이트를 리뉴얼 해보았습니다.
[서울 와인 사이트 바로가기](https://www.seoulwine.net/)

## CDN와 플러그인

### Favicon(파비콘, favorite icon)
웹페이지를 나타내는 아이콘, 웹페이지의 로고를 설정합니다.
```
<link rel="shortcut icon" href="favicon.ico" /> 
<link rel="icon" href="./favicon.png" />
```
favicon.ico 64 x 64 (px) 또는 32 x 32 또는 16 x 16    
favicon.png 500 x 500 (px)

### Google icon
웹페이지가 소셜 미디어(페이스북 등)로 공유될 때 우선적으로 활용되는 정보를 지정합니다.

### 오픈 그래프(The Open Graph protocol)
웹페이지가 소셜 미디어(페이스북 등)로 공유될 때 우선적으로 활용되는 정보를 지정합니다.
[더 많은 오픈그래프 속성 보기](https://ogp.me/)
```
og:type: 페이지의 유형(E.g, website, video.movie)
og:site_name: 속한 사이트의 이름
og:title: 페이지의 이름(제목)
og:description: 페이지의 간단한 설명
og:image: 페이지의 대표 이미지 주소(URL)
og:url: 페이지 주소(URL)
```

### 트위터 카드(Twitter Cards)
트위터 카드를 사용하면 풍부한 사진, 비디오 및 미디어 경험을 트윗에 첨부하여
웹 사이트로 트래픽을 유도할 수 있습니다. 콘텐츠에 대한 링크를 트윗하는 사용자는
팔로워에게 표시되는 트윗에 "카드"가 추가됩니다.
[트위터 카드 속성 확인하기](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary)
```
twitter:card: 카드 속성(summary값으로 설정해야 합니다.)
twitter:site: 트위터 사이트
twitter:title: 페이지의 이름(제목)
twitter:description: 페이지의 간단한 설명
twitter:image: 페이지의 대표 이미지 주소(URL)
twitter:url: 페이지 주소(URL)
```

### swiper slide
swiper에서 제공하는 다양한 속성을 활용하여 반응형과 PC형에서 슬라이드를 제작할 수 있습니다.
[스와이퍼 슬라이드 알아보기](https://swiperjs.com/)
```html
<link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css"/>
<script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>
```

### Lodash
array, collection, date 등 데이터의 필수적인 구조를
쉽게 다룰 수 있게끔 하는데에 사용됩니다.
ㅡ.(변수)으로 작성되며 lodash wrapper로 변수를 감싸게 되면서
해당 변수에 대한 chaining을 시작합니다.
[Lodash의 메소드 확인하기](https://lodash.com/docs/4.17.15)
```
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"
integrity="sha512-H6cPm97FAsgIKmlBA4s774vqoN24V5gSQL4yBTDOY2su2DeXZVhQPxFK4P6GPdnZqM9fg1G3cMv5wD7e6cFLZQ=="
crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

### Gsap
복잡한 애니메이션을 구현할 때 사용합니다.    
[gsap의 더 많은 프로퍼티 확인하기](https://greensock.com/docs/v3/GSAP/gsap.to())
[gsap활용 기초 예시 확인하기](https://lpla.tistory.com/106)
```
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"
integrity="sha512-H6cPm97FAsgIKmlBA4s774vqoN24V5gSQL4yBTDOY2su2DeXZVhQPxFK4P6GPdnZqM9fg1G3cMv5wD7e6cFLZQ=="
crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```


## 함수

### addEventListener
>요소.addEventListener('이벤트', 함수(내용))
addEventListener를 통해 이벤트를 부여하며 함수(내용)이 실행됩니다.

### 유저가 자주 이용하는 패널에 호버하면 배경바뀌기
패널이 어떤 것인지에 따라 배경이 바뀝니다.    
패널(총 4개)을 모두 담아 index를 체크하여 배경 파일의 이름에 접근합니다.
```javascript
function bgChange(index){
  const panelHover = document.querySelectorAll('.panel.pc > div');
  const panelBg = document.querySelector('.panel.pc');
    panelBg.style.background = `url(image/panel/bg_${index}.jpg) no-repeat center center`;
    panelBg.style.backgroundSize = 'cover';
    panelBg.style.transition = 'all 0.4s';
};
```