export const RESUME_DATA = {
  name: '이하린',
  location: '대한민국 서울특별시 (한국 표준시)',
  locationLink: 'https://www.google.com/maps/place/seoul',
  about: `안녕하세요. 코드 한 줄이 사용자 흐름을 바꿀 수 있다고 믿는 3년차 주니어 프론트엔드 개발자 이하린입니다.
사소한 동작 하나도 설계의 결과라고 생각하며 구조적인 개선과 사용자 경험 사이의 균형을 고민합니다.`,
  summary: ``,
  avatarUrl: '/images/JAGORING.jpg',
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
      desc: '배관 설계 및 자재 발주 업무의 엑셀 기반 운영을 시스템화하여 데이터 정합성과 업무 효율을 개선하는 내부 플랫폼',
      start: '2023.03',
      end: '2025.02',
      points: [
        '사용기술: React, TypeScript, react-query, MUI, ApexCharts, AG Grid',
        '- Recoil 기반 상태 관리의 복잡성과 중복 호출 문제를 React Query로 구조 개선',
        '- 조건문 누적으로 확장되던 UI 컴포넌트를 Compound Component 패턴으로 리팩토링',
        '- 대시보드 필터 입력 시 debounce 적용으로 불필요한 API 호출 방지 및 UX 최적화',
        '- 컨테이너 파일 내 비즈니스 로직을 커스텀 훅으로 분리해 코드 복잡도 절감',
        '- PDF 다중 다운로드 누락 문제를 async/await 기반 순차 처리 방식으로 해결',
        '- AG Grid에 React Query 연동하여 페이지 단위 데이터만 요청, 초기 로딩 50% 단축',
        '- Infinite Row Model 적용으로 팝업 내 대량 데이터 스크롤 성능 개선',
      ],
    },

    {
      company: '하비비커뮤니케이션 땡큐캠핑',
      desc: '캠핑장 예약과 상품 구매가 가능한 사용자 중심 플랫폼',
      start: '2022.12',
      end: '2023.03',
      points: [
        '사용기술: React, TypeScript, Next.js, React Query, Redux Toolkit, styled-components, Kakao Map API',
        '- HTML 기반 사이트를 React로 전환하며 프로젝트 초기 구조 설계와 상태 관리 흐름 구성에 참여',
        '- 캠핑장 검색부터 예약 내역 확인까지 전체 예약 흐름 UI 구현 및 API 연동',
        '- Redux Toolkit으로 숙박 기간, 캠핑장 정보 등 예약 관련 상태를 구조적으로 관리',
        '- React Query로 휴대폰 인증, 빈자리 알림 등 예약 프로세스 비동기 요청 처리 및 상태 실시간 반영',
        '- Kakao Map API 연동으로 캠핑장 위치와 상세 정보 시각화하여 사용자 편의 향상',
      ],
    },
    {
      company: '삼성이앤에이 전기설계시스템',
      desc: '전기설계팀의 도면 설계 및 케이블 발주 데이터를 시스템화하여 정합성 확보 및 업무 효율을 높이기 위한 내부 플랫폼',
      start: '2022.08',
      end: '2022.11',
      points: [
        '사용기술: React, TypeScript',
        '- 반복되는 UI 요소를 컴포넌트화해 재사용성과 개발 효율성 향상',
        '- 기존 기능 유지보수 및 신규 기능 개발에 참여해 실무 감각을 쌓음',
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
      points: [
        '- React, framer-motion, TypeScript, TailwindCSS, NextJS, Prisma 실무 기술 스택 기반 과제 수행',
        '- 10주간 주차별 과제를 완성하고 팀원들과 상호 코드 리뷰를 진행하며 다양한 구현 방식에 대한 인사이트 습득',
      ],
    },
    {
      title: 'Programmers JavaScript Study 15기',
      period: '2022.06',
      points: [
        '- 5주간 JavaScript 과제를 해결하고 Git fork 및 브랜치 전략을 활용',
        '- Pull Request 기반의 코드 리뷰를 통해 다양한 해결 방식과 코드 개선점 학습',
      ],
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
    description:
      'Next.js와 MDX를 활용하여 개인 기술 블로그를 개발하고 운영. 기술 포스트 작성, 다크 모드 등의 기능 제공',
    type: '사이드 프로젝트 / 개인',
    details: {
      purpose: '기술적인 고민과 학습 내용을 기록하고 공유하기 위해 정적 사이트 기반의 개인 블로그를 직접 구축하고 운영',
      techs: ['Next.js', 'TypeScript', 'MDX', 'Tailwind CSS'],
      features: [
        'MDX 기반의 포스트 작성 시스템 구축',
        '문법 하이라이팅 및 코드 블럭 스타일 적용',
        '다크 모드 전환 기능 구현 (Tailwind CSS 활용)',
        '모바일/PC 환경 모두 대응하는 반응형 레이아웃 구성',
      ],
      roles: [
        'Next.js 기반 블로그 구조 및 라우팅 구성',
        'MDX 설정 및 커스텀 컴포넌트 렌더링 처리',
        'Tailwind CSS를 활용한 디자인 시스템 및 테마 적용',
      ],
      highlights: [
        'Next.js와 MDX를 활용해 정적 사이트 생성(SSG) 및 콘텐츠 관리 경험',
        '다크 모드 및 반응형 지원 등 사용자 편의성을 고려한 블로그 기능 구현',
        '지속적으로 운영 및 개선 중인 개인 기술 블로그 프로젝트',
      ],
    },
  },
  {
    title: '🌱 에코그램 식물일지',
    period: '2023.12',
    description: 'IoT 기반 식물 재배기와 연동되는 식물 성장일지 기록용 웹 애플리케이션 개발',
    demoSite: 'https://platform.foxdata.com/en/app-profile/6475570920/DE/as',
    type: '외주 / 팀 프로젝트',
    details: {
      purpose:
        'IoT 기반 식물 재배기와 연동되는 식물 성장일지 기록용 웹 애플리케이션 개발. 기존 모바일 웹사이트에 성장일지 기능을 추가하고 이를 기반으로 하이브리드 앱(iOS, AOS) 런칭을 목표로 진행된 프로젝트.',
      goals: [
        '사용자가 자신의 식물 성장 과정을 사진과 함께 기록하고 다른 유저와 공유할 수 있도록 지원',
        'IoT 식물 재배기에서 수집된 온도·습도 데이터를 기반으로 성장일지를 생성하고 센서 데이터를 시각화',
        '기존 UI 디자인을 유지하며 신규 기능 구현 및 API 연동',
      ],
      techs: ['React', 'TypeScript', 'MUI', 'Recharts'],
      roles: [
        '식물 성장일지 메인 및 상세 화면 전체 UI 구현',
        '작성, 이미지 업로드, 기록 추가 등 성장일지 작성 기능 개발',
        '내 성장일지 / 전체 성장일지 탭 구조 및 데이터 연동 구현',
        '성장일지 목록 조회 및 상세 API 연동 처리',
        'Recharts를 활용한 온도/습도 데이터 시각화',
      ],
      highlights: [
        'IoT 센서 데이터를 사용하여 Recharts로 온습도 차트를 시각화함',
        '성장일지 생성, 상세 보기, 기록 추가 등 다양한 API 연동 경험 보유',
        '하이브리드 앱 구조 및 API 명세를 기반으로 외주 팀원과의 협업 진행',
      ],
      images: [
        '/side-projects/ecogram/1.png',
        '/side-projects/ecogram/2.png',
        '/side-projects/ecogram/4.png',
        '/side-projects/ecogram/5.png',
        '/side-projects/ecogram/6.png',
      ],
    },
  },
  {
    title: 'Memong',
    period: '2023.10',
    demoSite: 'https://memong.netlify.app/',
    description:
      '미몽컴퍼니의 브랜드 소개를 위한 웹사이트 개발 프로젝트로 기업 정보와 서비스 안내를 담은 반응형 웹페이지 구현',
    type: '외주 / 개인 프로젝트',
    details: {
      purpose: 'Figma로 기획된 브랜드 소개용 웹페이지를 실제 반응형 웹사이트로 구현',
      techs: ['React', 'JavaScript', 'Styled-Components'],
      features: [
        '기업 소개, 핵심 가치, 서비스 내용 등을 전달하는 정보 중심 페이지 구성',
        '모바일 및 다양한 디바이스에 대응하는 반응형 스타일링 적용',
      ],
      roles: [
        'Figma 디자인 시안에 맞춰 전체 페이지 구조 및 컴포넌트 구현',
        'Styled-Components를 활용한 반응형 스타일 적용',
        '레이아웃 및 텍스트 구조를 브랜드 성격에 맞게 재현',
      ],
      highlights: [
        '실제 기업의 디자인 시안을 바탕으로 정적 웹페이지를 완성한 외주 프로젝트',
        '디자인 구현 정확도와 반응형 대응을 고려하여 퍼블리싱 및 UI 구성 수행',
        '클라이언트 요구 사항에 맞춘 정보 전달 중심 구조 설계 경험',
      ],
    },
  },
  {
    title: '이별끝에 우리가 만난다면',
    period: '2023.07',
    demoSite: 'https://fascinating-tartufo-751f46.netlify.app/',
    description: '출시된 인디 게임을 소개하기 위한 프로모션 웹사이트를 개발',
    type: '사이드 프로젝트 / 개인 (회사 동료 요청)',
    details: {
      purpose: '회사 동료가 출시한 인디 게임의 세계관과 콘텐츠를 소개하기 위한 랜딩 페이지 제작',
      techs: ['React', 'JavaScript', 'Styled-Components'],
      features: [
        '게임 소개, 줄거리 등 상세 정보를 시각적으로 구성',
        '게임 분위기를 전달하는 스크린샷 및 video 갤러리 구성',
        '디바이스 해상도에 대응한 반응형 레이아웃 적용',
      ],
      roles: [
        'React를 활용하여 웹사이트 전체 페이지 구조 설계 및 구현',
        '게임 콘텐츠에 맞춘 구성 흐름 설계 및 컴포넌트화',
        'Styled-Components를 활용한 테마 적용 및 반응형 스타일링 처리',
      ],
      highlights: [
        '게임 개발자 동료의 요청으로 실제 게임 홍보용 웹사이트 제작',
        '게임의 분위기와 콘텐츠 전달에 집중한 구조 구성 및 색상 조합으로 몰입감 있는 랜딩 페이지 구현',
      ],
      images: [
        '/side-projects/if/1.png',
        '/side-projects/if/2.png',
        '/side-projects/if/3.png',
        '/side-projects/if/4.png',
      ],
    },
  },
  {
    title: '크롬 확장프로그램',
    period: '2023.05',
    description: '웹사이트 방문 시 모든 이미지를 지정된 대체 이미지로 바꾸는 크롬 확장 프로그램 개발',
    type: '사이드 프로젝트 / 개인',
    details: {
      purpose: '브라우저 확장 프로그램 구조 및 API 사용 경험 습득',
      techs: ['JavaScript', 'Chrome Extensions API'],
      features: [
        '웹사이트 내 모든 이미지를 사용자 지정 이미지로 일괄 변경',
        '옵션 페이지를 통한 사용자 이미지 URL 입력 기능 제공',
      ],
      roles: [
        '웹 페이지의 DOM 요소를 탐색하여 이미지 대체 기능 구현',
        '옵션 페이지 UI 및 스토리지 연동을 통한 사용자 설정 기능 개발',
      ],
      highlights: [
        'Chrome Extensions의 content script, storage API 등 구조를 이해하고 직접 구현',
        '실시간 DOM 조작을 통해 이미지 리소스를 대체하는 기능을 순수 JS로 구현',
      ],
    },
  },
  {
    title: 'Game Machine',
    period: '2022.01',
    demoSite: 'https://arcadegame0.netlify.app/',
    description: 'JavaScript 기반의 미니 게임 모음 웹사이트. 프론트엔드 2인이 협업하여 총 4종의 클래식 게임 구현',
    type: '사이드 프로젝트 / 협업 (프론트 2인)',
    details: {
      purpose: 'Canvas와 JavaScript를 활용해 고전 게임을 직접 구현하며 게임 개발의 기본 구조와 로직을 경험',
      techs: ['JavaScript'],
      features: [
        '총 4개의 클래식 게임(T-Rex Jump, Breakout, Snake, Pong) 실행 가능',
        'Canvas API를 활용한 실시간 렌더링, 키보드 조작 및 충돌 감지 처리',
        '각 게임의 UI/UX를 단순하면서도 직관적으로 구성',
      ],
      roles: [
        '4개의 게임 중 T-Rex Jump Game 및 Breakout Game 구현 담당',
        'Canvas를 활용한 도형 렌더링 및 충돌 감지, 점수 계산 로직 개발',
        '키보드 이벤트를 통한 캐릭터 이동, 점프 등 사용자 조작 처리',
        '게임 상태(시작, 종료, 재시작 등) 흐름 제어 로직 구성',
      ],
      highlights: [
        'Canvas 기반 애니메이션 루프와 실시간 인터랙션 구조를 직접 구현',
        '각 게임별 로직과 구조를 문서화하여 협업 시 명확한 역할 구분에 기여',
        '게임 개발을 통해 JavaScript의 이벤트 처리와 상태 흐름에 대한 이해도 향상',
      ],
      images: [
        '/side-projects/gameMachine/1.png',
        '/side-projects/gameMachine/2.png',
        '/side-projects/gameMachine/3.png',
        '/side-projects/gameMachine/4.png',
        '/side-projects/gameMachine/5.png',
        '/side-projects/gameMachine/6.png',
      ],
    },
  },
  {
    title: '리더스 도준',
    period: '2021.03',
    demoSite: 'https://leadersdojun.netlify.app/',
    description:
      '리더스 도준 한방 병원의 웹사이트를 외주 프로젝트로 개발. 병원 소개 및 진료 과목 안내를 위한 웹사이트 구현',
    type: '외주 / 개인 프로젝트',
    details: {
      purpose: '의료 기관의 온라인 홍보 및 진료 정보 제공을 위한 반응형 웹사이트 구축',
      techs: ['JavaScript', 'Bootstrap'],
      features: ['병원 소개, 의료진, 진료 과목 등의 정보 제공', '모바일 대응을 위한 반응형 UI 설계 및 구현'],
      roles: ['웹사이트 전체 구조 및 콘텐츠 설계', '반응형 레이아웃 구성 및 스타일링 (Bootstrap 활용)'],
      highlights: [
        'Bootstrap을 활용해 빠르게 반응형 웹사이트 레이아웃을 구현',
        '요구사항 분석부터 디자인, 개발까지 전 과정 단독 수행',
        '의료 서비스 성격에 맞는 신뢰감 있는 UI/UX 구성에 집중',
      ],
      images: ['/side-projects/leaders/1.png'],
    },
  },
];
