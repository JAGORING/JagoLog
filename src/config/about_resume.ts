export const RESUME_DATA = {
  name: '이하린',
  location: '대한민국 서울특별시 (한국 표준시)',
  locationLink: 'https://www.google.com/maps/place/seoul',
  about: `3년차 프론트엔드 개발자로서, 지난 결과에 머무르지 않고 앞으로의 기회를 향해 끊임없이 도전하며, 서비스 구조와
            코드를 지속적으로 고민해 팀과 함께 성장하는 동료가 되겠습니다.`,
  summary: ``,
  avatarUrl: '/images/body_bg.jpg',
  contact: {
    email: 'leeharin115@gmail.com',
    social: [
      {
        name: 'GitHub',
        url: 'https://github.com/JAGORING',
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/harin-lee-74b84b254/',
      },
    ],
  },
  skills: ['Javascript', 'Typescript', 'React.js', 'Next.js'],

  works: [
    {
      company: '삼성엔지니어링 공간설계시스템',
      start: '2023.03',
      end: '2025.02',
      points: [
        '사용기술: React, TypeScript, ApexCharts, AG Grid',
        '- 공통 컴포넌트화 및 UI 구조 개선을 통해 코드 재사용성 증가 및 유지보수성 향상',
        '- ApexCharts를 활용해 라인/바 차트 등 다양한 차트 유형을 적용하여 데이터 시각화 기능 구현 및 대시보드 UX 개선',
        '- 팀 내 react-query 도입을 주도하여 상태 관리 효율성 및 데이터 패칭 성능 최적화',
        '- 무한 스크롤 및 API 호출 방식 최적화로 초기 로딩 속도를 절반 이상 단축',
      ],
    },

    {
      company: '하비비커뮤니케이션 땡큐캠핑',
      start: '2022.12',
      end: '2023.03',
      points: [
        '사용기술: React, TypeScript, Next.js, react-query, redux-toolkit',
        '- react-query의 캐싱 및 중복 요청 방지 기능을 활용하여 검색 속도 단축',
        '- redux-toolkit을 활용해 예약 상태 및 총액을 효율적으로 관리하고 세부 정보를 실시간 반영',
        '- 카카오 맵 API를 연동하여 캠핑장 위치 및 지도 마커 기능 제공하여 사용자 경험 개선',
        '- 구매한 상품과 예약 내역을 쉽게 확인할 수 있도록 UI 및 데이터 연동',
      ],
    },
    {
      company: '삼성이앤에이 전기설계시스템',
      start: '2022.08',
      end: '2022.11',
      points: [
        '사용기술: React, TypeScript',
        '- 프로젝트 구조 설계 및 컴포넌트 모듈화',
        '- 신규 기능 개발 및 유지보수 프로세스 개선',
      ],
    },
  ],

  education: {
    school: '한세대학교',
    period: '2017.03 - 2021.08',
    degree: '컴퓨터공학과',
    grade: '학점: 4.28 / 4.5',
  },

  Certifications: [
    {
      title: '노마드 스터디 10주 완성반',
      period: '2024.12',
      points: 'React, framer-motion, TypeScript, TailwindCSS, NextJS, Prisma',
    },
    {
      title: 'Programmers JavaScript Study 15기',
      period: '2022.06',
      points: '5주간 정해진 미션(필수 + 보너스)을 제출하고 코드리뷰를 주고 받는 스터디',
    },
    {
      title: '정보처리기사',
      period: '2021.06',
      points: '발행 기관: 한국산업인력공단',
    },
  ],
};

export const SIDE_PROJECT = [
  {
    title: 'Jagolog',
    period: '2025.03',
    description: 'Next.js와 MDX를 활용하여 개인 기술 블로그를 개발. 블로그 포스트 작성 및 코드 하이라이팅 기능 제공',
    details: {
      purpose: '기술 블로그를 직접 운영하며 MDX 기반 포스트 관리 및 정적 사이트 생성 경험 습득',
      techs: ['Next.js', 'TypeScript', 'MDX', 'Tailwind CSS'],
      features: ['MDX를 활용한 블로그 포스트 작성 기능', '다크 모드 지원 및 반응형 디자인'],
      images: ['/images/jagolog1.jpg', '/images/jagolog2.jpg'],
    },
  },
  {
    title: '에코그램 식물일지',
    period: '2023.12',
    description:
      '외주 프로젝트로 팀원들과 협업하여 식물 성장 일지를 기록하는 웹 애플리케이션 개발. 성장일지 작성 및 상세 페이지 구현',
    details: {
      purpose: '사용자가 자신의 식물 성장 과정을 기록하고 공유할 수 있는 SNS 기반 플랫폼 구축',
      techs: ['React', 'TypeScript', 'MUI'],
      features: ['사용자 맞춤 성장일지 작성 및 이미지 업로드', '식물 성장 데이터 시각화 기능'],
      images: ['/images/ecogram1.jpg'],
    },
  },
  {
    title: 'Memong',
    period: '2023.12',
    description: '미몽컴퍼니의 웹 소개 페이지 개발. 기업 정보 및 서비스 소개를 위한 반응형 웹사이트 구축',
    details: {
      purpose: '기업 브랜드 홍보를 위한 웹사이트 제작 및 유지보수',
      techs: ['React', 'JavaScript', 'Styled-Components'],
      features: ['기업 소개 및 서비스 설명 페이지 구성', 'SEO 최적화 및 반응형 디자인 적용'],
      images: ['/images/memong1.jpg'],
    },
  },
  {
    title: '이별끝에 우리가 만난다면',
    period: '2023.07',
    description: '게임 소개 및 다운로드 지원을 위한 웹사이트 개발. 게임 정보, 스크린샷, 플레이 방법 안내',
    details: {
      purpose: '출시된 인디 게임의 홍보 및 다운로드 유도',
      techs: ['React', 'JavaScript', 'Styled-Components'],
      features: ['게임 소개 페이지 및 스크린샷 갤러리 제공', '게임 다운로드 및 플레이 가이드 제공'],
      images: ['/images/game_promo1.jpg'],
    },
  },
  {
    title: '크롬 확장프로그램',
    period: '2022',
    description: '웹사이트 방문 시 모든 이미지를 지정된 대체 이미지로 변경하는 크롬 확장 프로그램 개발',
    details: {
      purpose: '웹 콘텐츠 필터링 기능을 구현하며 브라우저 확장 프로그램 개발 경험 습득',
      techs: ['JavaScript', 'Chrome Extensions API'],
      features: ['웹사이트 내 이미지 일괄 변경 기능', '사용자 정의 이미지 적용 옵션'],
      images: ['/images/chrome_extension1.jpg'],
    },
  },
  {
    title: 'Game Machine',
    period: '2021',
    description: 'JavaScript를 활용하여 T-Rex Jump Game 및 Breakout Game 개발. 키보드 이벤트 및 캔버스 활용',
    details: {
      purpose: '클래식 게임 구현을 통해 JavaScript 기반 게임 개발 경험 습득',
      techs: ['JavaScript'],
      features: ['T-Rex Jump Game, Breakout Game 개발', '키보드 입력을 활용한 캐릭터 조작 및 충돌 감지'],
      images: ['/images/game1.jpg'],
    },
  },
  {
    title: '리더스 도준',
    period: '2022.07',
    description: '리더스 도준 한방 병원의 웹사이트를 외주 프로젝트로 개발. 병원 소개 및 예약 문의 기능 구현',
    details: {
      purpose: '의료 기관의 온라인 홍보 및 환자 편의를 위한 웹사이트 구축',
      techs: ['JavaScript', 'Bootstrap'],
      features: ['병원 정보 및 진료 과목 소개', '예약 문의 및 위치 안내 페이지'],
      images: ['/images/leaders1.jpg'],
    },
  },
];
