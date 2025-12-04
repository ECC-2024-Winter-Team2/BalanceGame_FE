
# 🎨 Balance Game Frontend (밸런스 게임)

**ECC 2024 Winter Team 2** 프로젝트의 프론트엔드 리포지토리입니다.
사용자가 '밸런스 게임'에 참여하여 투표하고, 실시간 통계를 확인하며 커뮤니티 활동을 할 수 있는 웹 인터페이스를 제공합니다.

## 📝 프로젝트 소개

**"나는 근본 인간일까?"**
이 웹 서비스는 사용자의 선택이 대중적인 선택('근본')과 얼마나 일치하는지 확인해 주는 게임입니다.

  * **인터랙티브 UI**: 부드럽고 직관적인 디자인으로 몰입감 있는 게임 경험 제공
  * **결과 시각화**: 실시간 퍼센트 바(Bar)와 결과 페이지를 통해 나의 위치를 시각적으로 확인
  * **반응형 디자인**: 다양한 화면 크기(모바일/데스크탑)에 최적화

## 👥 Team Members

| 이름 | 역할 | 학과 |
| :--- | :--- | :--- |
| **최준희** | **Frontend** | 사이버보안학과 |
| **이정민** | **UI/UX** | 국제학과 |
| **명진** | Backend | 컴퓨터공학과 |
| **송예린** | Backend | 컴퓨터공학과 |

## 🛠 Tech Stack

| 분류 | 기술 |
| :--- | :--- |
| **Framework** | React 19 |
| **Routing** | React Router DOM 7.1.5 |
| **Styling** | Styled Components 6.1.14 |
| **Package Manager** | npm / Yarn |
| **Deployment** | Vercel / Netlify (Optional) |

## 📂 프로젝트 구조 (Project Structure)

```
src
├── components
│   ├── category       # 카테고리 선택 UI
│   ├── game           # 게임 플레이 화면 (투표 기능)
│   ├── main           # 랜딩 페이지 및 닉네임 입력
│   ├── percentage     # 결과 계산 화면
│   └── result         # 최종 통계 화면
├── consts             # 상수 관리 (API URL 등)
├── utils              # 유틸리티 함수 (API Fetcher)
├── App.js             # 메인 앱 컴포넌트
└── index.js           # Entry Point
```

## ✨ 주요 기능

1.  **랜딩 및 유저 설정**
      * 인트로 애니메이션 및 닉네임 등록
      * API를 통한 닉네임 중복 확인
2.  **카테고리 선택**
      * 다양한 게임 카테고리(연애, 음식 등) 탐색 및 선택
      * 마우스 오버(Hover) 시각 효과 제공
3.  **게임 플레이**
      * 두 가지 대조적인 선택지 표시
      * 투표 클릭 시 즉각적인 피드백 제공
      * 진행 상황 표시 (라운드당 10문제)
4.  **결과 및 통계**
      * **'근본' 점수**: 대중의 선택과 일치하는 정도를 퍼센트로 표시
      * **상세 통계**: 플레이한 카테고리의 각 질문별 투표 비율 확인

## 🚀 설치 및 실행 방법 (Getting Started)

로컬 환경에서 프론트엔드 애플리케이션을 실행하려면 다음 단계를 따르세요.

### 1\. 사전 요구사항 (Prerequisites)

  * **Node.js** (v18 이상 권장)
  * **npm** 또는 **yarn**

### 2\. 설치 (Installation)

리포지토리를 클론하고 의존성 패키지를 설치합니다.

```bash
git clone https://github.com/ecc-2024-winter-team2/balancegame_fe.git
cd balancegame_fe

# 의존성 설치
npm install
# 또는
yarn install
```

### 3\. 환경 설정 (Configuration)

API URL은 `src/consts/api.js` 파일에 설정되어 있습니다.
현재는 개발 서버 주소로 설정되어 있습니다:
`http://ec2-43-200-237-253.ap-northeast-2.compute.amazonaws.com:8080/api`

로컬 백엔드 서버를 사용하는 경우, 이 URL을 본인의 환경에 맞게(`http://localhost:8080/api`) 수정해야 할 수 있습니다.

### 4\. 실행 (Run)

개발 서버를 시작합니다.

```bash
npm start
# 또는
yarn start
```



  * **CORS 오류**: API 호출 시 CORS 오류가 발생하면, 백엔드 서버 설정에서 `http://localhost:3000` 오리진 허용 여부를 확인하세요.
  * **모듈을 찾을 수 없음**: `node_modules` 폴더를 삭제하고 `npm install`을 다시 실행해 보세요.
