# 원티드 프리온보딩 2-1 1팀

## 배포 링크

[**누르시면 이동합니다!**](https://d1b4xl9hekxfoi.cloudfront.net/)

# 팀 소개

| 이름         | github                         |
| ------------ | ------------------------------ |
| 박승민(팀장) | https://github.com/pmb087      |
| 김정현       | https://github.com/task11      |
| 김준호       | https://github.com/kimjuno97   |
| 윤태성       | https://github.com/taesung1993 |
| 임형섭       | https://github.com/4hsnim      |
| 조서연       | https://github.com/sycho09     |

# 기술 스택

<img src="https://img.shields.io/badge/javascript_ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/React.js-61DAFB?style=for-the-badge&logo=react&logoColor=white">
<img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">

# 실행 방법

1. 프로젝트 관련 라이브러리를 설치합니다.

```bash
npm install
```

2. 프로젝트를 실행합니다.

```bash
npm start
```

# 디렉토리 구조

```
📦 src
┣ 📂 components /- 컴포넌트 집합
┃ ┣ 📂 atoms /- 분해 불가능한 원자 단위 컴포넌트
┃ ┣ 📂 icons /- 아이콘 컴포넌트
┃ ┣ 📂 molecules /- atom이 결합된 컴포넌트
┃ ┣ 📂 organisms /- atom, molecule 등이 결합된 컨텍스트를 가지는 컴포넌트
┃ ┣ 📂 pages /- 콘텐츠 페이지 컴포넌트
┃ ┣ 📂 templates /- 와이어 프레임 컴포넌트
┃ ┣ 📜 GlobalStyle.js /- 글로벌 스타일 컴포넌트
┃ ┗ 📜 Router.js /- 라우터 관리 컴포넌트
┣ 📂 utils /- 로직 분리
┃ ┣ 📂 classes /- 데이터 response 타입 관리
┃ ┣ 📂 constants /- 상수 데이터 관리
┃ ┣ 📂 contexts /- 컨텍스트 API 관리
┃ ┣ 📂 hooks /- 커스텀 훅 관리
┃ ┣ 📂 server /- 커스텀 Axios instance
┃ ┗ 📂 services /- API 호출 서비스
┣ 📜 Router.js /- 라우터 관리 컴포넌트
┣ 📜 App.js
┗ 📜 index.js
```

# 동료학습

## Projects

각자 과제 구현 후 Github Discuussion을 통한 토론 결과로 best practice를 산출하여 리팩토링하는 방식을 채택했습니다.

1. Discussion을 통한 Best base code 채택
2. 기능 별 Best practice 선정
3. Base code를 Best practice 코드로 리팩토링
4. PR은 3명 이상으로부터 approved 되어야 merge 가능

> ### 코드 및 커밋 컨벤션은 Git Hooks와 husky를 사용해 자동화했습니다.

## Code Convention

- [prettier](https://github.com/7th-wanted-pre-onboarding-frontend/assignment-week1-1/blob/main/.prettierrc.json)
- [eslint](https://github.com/7th-wanted-pre-onboarding-frontend/assignment-week1-1/blob/main/.eslintrc.js)

## Commit Convention

### commitlint

- 사용 이유: 팀의 생산성 향상과 커밋 메세지 히스토리의 관리를 위해 통일성이 필요하다고 판단하였기 때문에 사용하였습니다.
- [Commitlint 문서](https://commitlint.js.org/#/)를 참고하여 설정하였습니다.

  <img width="689" alt="2022-10-28_08 33 50" src="https://user-images.githubusercontent.com/56210700/198418936-4d3fc67a-7bf2-40b5-bf80-421d235c4621.png">

# best practice 토론 과정

- [Organization](https://github.com/7th-wanted-pre-onboarding-frontend)을 만들어 [Discussion](https://github.com/orgs/7th-wanted-pre-onboarding-frontend/discussions/categories/-c-2-1-assignment)을 이용하여 서로의 의견을 공유하여 best practice를 도출하였습니다.

# best practice 선정 이유

## 1. Atomic design pattern

- 과제 요구사항인 [figma](https://www.figma.com/file/XdncFdXWdILLifRIJKqIi1/%EC%8B%A4%EB%AC%B4%ED%98%95-%EB%A9%B4%EC%A0%91---%EC%9B%B9-%ED%94%84%EB%A1%A0%ED%8A%B8?node-id=1%3A2)
  의 컴포넌트 설계 구조를 활용하여 Atomic design pattern을 도입했습니다.

- [토론](https://github.com/orgs/7th-wanted-pre-onboarding-frontend/discussions/19)을 통해 컴포넌트 설계 기준을 정의했습니다.

  - ADP 활용 기준
  - **`Atoms`** 는 요소의 **Style**만 담당한다.
    - **Atom**은 구현하고자 하는 페이지에 재 사용 되는 것을 염두 하여 **Style**을 구성하고 파일 이름을 정한다.
    - **ex)** `Body1.js` , `Body2,js` , `Title3.js` , `Title4.js` , `Container.js` . . .
  - **`Molecules`** 는 **Atom**으로 구성된다.
  - **`Organisms`** 는 [ **Atom** , **Molecule** , **Organism** ] 로 구성된다.

## 2. 필터 기능 강화

- 기존 필터에는 차량 크기에 대한 속성 4개 밖에 없었지만, 연료에 대한 속성 3개를 추가
- 커스텀훅인 useSwiper로, 마우스 휠을 이용하거나 또는 드래그를 이용해서 스크롤을 넘길 수 있다.
- 필터 메뉴는 연료 필터, 크기 필터를 선택할 수 있다.

  - 둘 다 선택하지 않으면, All 활성화
  - All 필터를 누르면: All 활성화, 두 필터 비활성화 처리

- [토론](https://github.com/orgs/7th-wanted-pre-onboarding-frontend/discussions/18)을 통해서 카테고리 바의 아이템 추가 및 필터 기능 강화

https://github.com/7th-wanted-pre-onboarding-frontend/pre-onboarding-7th-2-1-1/blob/007d4cd0fabe08a4bdcec985e0c66b2c8160d039/src/components/molecules/Filters.js#L1-L94

## 3. Custom Aixos

- Axios 호출 로직을 분리
- Car API 호출 관련 로직에서 해당 Custom Aixos를 import하여 사용

https://github.com/7th-wanted-pre-onboarding-frontend/pre-onboarding-7th-2-1-1/blob/007d4cd0fabe08a4bdcec985e0c66b2c8160d039/src/utils/server/request.js#L1-L7

## 4. Context API

- Custom Context Provider 구현
- Reducer, Dispatcher를 사용한 flux 패턴의 전역 상태관리 구현

https://github.com/7th-wanted-pre-onboarding-frontend/pre-onboarding-7th-2-1-1/blob/007d4cd0fabe08a4bdcec985e0c66b2c8160d039/src/utils/contexts/CarProvider.js#L1-L54

# 사용 라이브러리

### production

- axios
- styled-components
  - styled-reset

### dev

- commitlint
- eslint
- prettier
- husky
