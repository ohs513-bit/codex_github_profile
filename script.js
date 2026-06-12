const projects = [
  {
    title: "TaskFlow Dashboard",
    summary:
      "팀 업무 현황을 한 화면에서 확인하는 대시보드입니다. 상태별 작업량, 담당자별 병목, 마감 임박 업무를 빠르게 파악하도록 설계했습니다.",
    problem: "업무가 여러 도구에 흩어져 우선순위와 병목 지점을 판단하기 어려웠습니다.",
    result: "핵심 지표를 카드와 차트로 정리해 회의 전 확인 시간을 줄이는 흐름을 만들었습니다.",
    stack: ["React", "TypeScript", "Chart UI", "GitHub Pages"],
    github: "https://github.com/",
    demo: "https://pages.github.com/",
    theme: "dashboard",
  },
  {
    title: "StudyMate Planner",
    summary:
      "학습 목표, 일정, 복습 주기를 관리하는 개인 학습 플래너입니다. 작은 계획과 회고를 반복할 수 있도록 구성했습니다.",
    problem: "학습 기록은 남지만 다음 행동으로 이어지는 구조가 부족했습니다.",
    result: "오늘의 할 일, 주간 진행률, 회고 입력을 연결해 꾸준히 개선하는 루틴을 만들었습니다.",
    stack: ["JavaScript", "LocalStorage", "Responsive UI", "Accessibility"],
    github: "https://github.com/",
    demo: "https://pages.github.com/",
    theme: "planner",
  },
  {
    title: "API Health Monitor",
    summary:
      "API 응답 상태와 지연 시간을 모니터링하는 경량 도구입니다. 장애 징후를 빠르게 확인할 수 있도록 로그와 상태를 분리했습니다.",
    problem: "작은 프로젝트에서도 API 장애를 늦게 발견하는 문제가 있었습니다.",
    result: "상태 확인, 응답 시간 기록, 실패 로그를 한 화면에 모아 디버깅 시작 시간을 줄였습니다.",
    stack: ["Node.js", "REST API", "Monitoring", "Documentation"],
    github: "https://github.com/",
    demo: "https://pages.github.com/",
    theme: "monitor",
  },
];

const visuals = {
  dashboard: `
    <svg viewBox="0 0 520 360" role="img" aria-label="대시보드 프로젝트 미리보기">
      <rect width="520" height="360" fill="#f2f7ff"/>
      <rect x="44" y="42" width="432" height="276" rx="28" fill="#ffffff"/>
      <rect x="74" y="72" width="136" height="18" rx="9" fill="#191f28"/>
      <rect x="74" y="122" width="104" height="86" rx="20" fill="#3182f6"/>
      <rect x="196" y="122" width="104" height="86" rx="20" fill="#eef6ff"/>
      <rect x="318" y="122" width="104" height="86" rx="20" fill="#f2f4f6"/>
      <rect x="74" y="238" width="348" height="26" rx="13" fill="#f2f4f6"/>
      <rect x="74" y="238" width="246" height="26" rx="13" fill="#3182f6"/>
    </svg>
  `,
  planner: `
    <svg viewBox="0 0 520 360" role="img" aria-label="플래너 프로젝트 미리보기">
      <rect width="520" height="360" fill="#f8fafc"/>
      <rect x="58" y="46" width="404" height="268" rx="30" fill="#ffffff"/>
      <circle cx="112" cy="108" r="28" fill="#3182f6"/>
      <rect x="158" y="90" width="206" height="16" rx="8" fill="#191f28"/>
      <rect x="158" y="120" width="142" height="12" rx="6" fill="#8b95a1"/>
      <rect x="90" y="176" width="340" height="42" rx="18" fill="#f2f4f6"/>
      <rect x="90" y="236" width="250" height="42" rx="18" fill="#e8f3ff"/>
      <rect x="356" y="236" width="74" height="42" rx="18" fill="#3182f6"/>
    </svg>
  `,
  monitor: `
    <svg viewBox="0 0 520 360" role="img" aria-label="모니터링 프로젝트 미리보기">
      <rect width="520" height="360" fill="#f2f7ff"/>
      <rect x="52" y="54" width="416" height="252" rx="30" fill="#ffffff"/>
      <rect x="88" y="90" width="112" height="82" rx="22" fill="#191f28"/>
      <rect x="224" y="90" width="208" height="82" rx="22" fill="#f2f4f6"/>
      <path d="M244 132 L286 112 L326 138 L366 104 L418 128" fill="none" stroke="#3182f6" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="88" y="208" width="344" height="18" rx="9" fill="#f2f4f6"/>
      <rect x="88" y="246" width="276" height="18" rx="9" fill="#e8f3ff"/>
      <circle cx="402" cy="255" r="16" fill="#00b894"/>
    </svg>
  `,
};

const projectList = document.querySelector("#projectList");

projectList.innerHTML = projects
  .map(
    (project) => `
      <article class="project-card">
        <div class="project-media">${visuals[project.theme]}</div>
        <div class="project-content">
          <h3>${project.title}</h3>
          <p>${project.summary}</p>
          <p><strong>문제:</strong> ${project.problem}</p>
          <p><strong>결과:</strong> ${project.result}</p>
          <div class="project-meta">
            ${project.stack.map((item) => `<span class="tag">${item}</span>`).join("")}
          </div>
          <div class="project-links">
            <a class="button primary" href="${project.demo}" target="_blank" rel="noreferrer">Demo</a>
            <a class="button secondary" href="${project.github}" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </article>
    `,
  )
  .join("");
