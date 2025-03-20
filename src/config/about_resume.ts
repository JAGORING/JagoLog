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
        '- 컴포넌트 재사용성 강화 및 공통 UI 개선',
        '- ApexCharts를 활용한 데이터 시각화기능 구현 및 대시보드 개선',
        '- 코드 리팩토링 및 팀 내 react-query 도입으로 상태 관리 최적화',
        '- 무한 스크롤 및 API 최적화 적용 후 초기 로딩 속도 개선',
      ],
    },

    {
      company: '하비비커뮤니케이션 땡큐캠핑',
      start: '2022.12',
      end: '2023.03',
      points: [
        '사용기술: React, TypeScript, Next.js, react-query, redux-toolkit',
        '- react-query를 활용한 비동기 데이터 최적화를 통해 검색 속도 향상',
        '- redux-toolkit을 사용하여 예약 상태 관리, 예약 총액 및 세부 정보 실시간 반영',
        '- 카카오 맵 API 연동을 통해 캠핑장 위치 제공 및 사용자 경험 개선',
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
    period: '2025.02-2025.03',
    description: '자체 개발한 웹 애플리케이션으로, React와 Node.js를 활용해 구현했습니다.',
    details: {
      purpose: '프로젝트의 목적은 ...',
      tech: 'React, Node.js 등',
      features: ['주요기능 1', '주요기능 2'],
      images: ['/images/jagolog1.jpg', '/images/jagolog2.jpg'],
    },
  },
  {
    title: 'SNS',
    period: '2024.12',
    description: '자체 개발한 웹 애플리케이션으로, React와 Node.js를 활용해 구현했습니다.',
    details: {
      purpose: 'SNS 플랫폼 개발을 통한 소셜 네트워크 구축',
      tech: 'React, Node.js, Socket.io',
      features: ['주요기능 1', '주요기능 2'],
      images: ['/images/body_bg.jpg', '/images/body_bg.jpg', '/images/body_bg.jpg'],
    },
  },
  {
    title: '에코그램 식물일지',
    period: '2023.12',
    description: '식물 성장 일지 관련 구현 (성장일지 작성 페이지, 디테일 페이지)',
    details: {
      purpose: 'SNS 플랫폼 개발을 통한 소셜 네트워크 구축',
      tech: 'React, Node.js, Socket.io',
      features: ['주요기능 1', '주요기능 2'],
      images: ['/images/sns1.jpg'],
    },
  },
  {
    title: 'Memong',
    period: '2023.12',
    description: '자체 개발한 웹 애플리케이션으로, React와 Node.js를 활용해 구현했습니다.',
    details: {
      purpose: 'SNS 플랫폼 개발을 통한 소셜 네트워크 구축',
      tech: 'React, Node.js, Socket.io',
      features: ['주요기능 1', '주요기능 2'],
      images: ['/images/sns1.jpg'],
    },
  },
  {
    title: '이별끝에 우리가 만난다면',
    period: '2023.07',
    description: '회사 동료가 개발한 게임의 소개 페이지',
    details: {
      purpose: 'SNS 플랫폼 개발을 통한 소셜 네트워크 구축',
      tech: 'React, Node.js, Socket.io',
      features: ['주요기능 1', '주요기능 2'],
      images: ['/images/sns1.jpg'],
    },
  },
  {
    title: '크롬 확장프로그램',
    period: '2022',
    description: '특정 사이트에 들어가면 이미지를 전부 대체 이미지로 바꿔주는 프로그램',
    details: {
      purpose: 'SNS 플랫폼 개발을 통한 소셜 네트워크 구축',
      tech: 'React, Node.js, Socket.io',
      features: ['주요기능 1', '주요기능 2'],
      images: ['/images/sns1.jpg'],
    },
  },
  {
    title: 'Game machine',
    period: '2021',
    description: 'JavaScript로 T-Rex Jump Game, breakout game 만들어보기',
    details: {
      purpose: 'SNS 플랫폼 개발을 통한 소셜 네트워크 구축',
      tech: 'React, Node.js, Socket.io',
      features: ['주요기능 1', '주요기능 2'],
      images: ['/images/sns1.jpg'],
    },
  },
  {
    title: '리더스 도준',
    period: '2022.07',
    description: '자체 개발한 웹 애플리케이션으로, React와 Node.js를 활용해 구현했습니다.',
    details: {
      purpose: 'SNS 플랫폼 개발을 통한 소셜 네트워크 구축',
      tech: 'React, Node.js, Socket.io',
      features: ['주요기능 1', '주요기능 2'],
      images: ['/images/sns1.jpg'],
    },
  },
];
