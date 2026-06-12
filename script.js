const projects = [
  {
    title: "TaskFlow Dashboard",
    summary:
      "팀 업무 현황을 한 화면에서 파악할 수 있는 대시보드입니다. 상태별 작업량, 담당자별 병목, 마감 임박 업무를 시각화했습니다.",
    problem: "업무가 여러 도구에 흩어져 우선순위와 병목 지점을 빠르게 판단하기 어려웠습니다.",
    result: "핵심 지표를 카드와 차트로 정리해 회의 전 확인 시간을 줄이는 흐름을 만들었습니다.",
    stack: ["React", "TypeScript", "Chart UI", "GitHub Pages"],
    github: "https://github.com/",
    demo: "https://pages.github.com/",
    theme: "dashboard",
  },
  {
    title: "StudyMate Planner",
    summary:
      "학습 목표, 일정, 복습 주기를 관리하는 개인 학습 플래너입니다. 작은 단위의 계획과 회고를 반복하도록 설계했습니다.",
    problem: "학습 기록은 남지만 다음 행동으로 이어지는 구조가 부족했습니다.",
    result: "오늘의 할 일, 주간 진행률, 회고 입력을 연결해 꾸준히 개선할 수 있는 루틴을 만들었습니다.",
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
      <rect width="520" height="360" fill="#edf3ef"/>
      <rect x="34" y="36" width="110" height="288" rx="8" fill="#256f58"/>
      <rect x="174" y="44" width="250" height="18" rx="8" fill="#17211d"/>
      <rect x="174" y="88" width="86" height="72" rx="8" fill="#ffffff"/>
      <rect x="278" y="88" width="86" height="72" rx="8" fill="#ffffff"/>
      <rect x="382" y="88" width="86" height="72" rx="8" fill="#ffffff"/>
      <rect x="174" y="198" width="294" height="100" rx="8" fill="#ffffff"/>
      <rect x="200" y="250" width="28" height="30" rx="6" fill="#4e75a6"/>
      <rect x="246" y="222" width="28" height="58" rx="6" fill="#d76d4b"/>
      <rect x="292" y="236" width="28" height="44" rx="6" fill="#c99938"/>
      <rect x="338" y="210" width="28" height="70" rx="6" fill="#256f58"/>
      <rect x="384" y="230" width="28" height="50" rx="6" fill="#4e75a6"/>
    </svg>
  `,
  planner: `
    <svg viewBox="0 0 520 360" role="img" aria-label="플래너 프로젝트 미리보기">
      <rect width="520" height="360" fill="#f7f0e8"/>
      <rect x="58" y="46" width="404" height="268" rx="8" fill="#ffffff"/>
      <rect x="88" y="82" width="176" height="16" rx="8" fill="#17211d"/>
      <rect x="88" y="126" width="344" height="42" rx="8" fill="#edf3ef"/>
      <rect x="104" y="141" width="14" height="14" rx="4" fill="#256f58"/>
      <rect x="88" y="184" width="344" height="42" rx="8" fill="#edf3ef"/>
      <rect x="104" y="199" width="14" height="14" rx="4" fill="#d76d4b"/>
      <rect x="88" y="242" width="150" height="42" rx="8" fill="#256f58"/>
      <rect x="260" y="242" width="172" height="42" rx="8" fill="#c99938"/>
    </svg>
  `,
  monitor: `
    <svg viewBox="0 0 520 360" role="img" aria-label="모니터링 프로젝트 미리보기">
      <rect width="520" height="360" fill="#eaf0f7"/>
      <rect x="48" y="48" width="424" height="264" rx="8" fill="#ffffff"/>
      <rect x="78" y="80" width="132" height="86" rx="8" fill="#256f58"/>
      <rect x="230" y="80" width="212" height="86" rx="8" fill="#edf3ef"/>
      <path d="M248 132 L286 112 L324 138 L362 100 L424 128" fill="none" stroke="#4e75a6" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="78" y="198" width="364" height="18" rx="8" fill="#17211d"/>
      <rect x="78" y="236" width="304" height="14" rx="7" fill="#9aa9a2"/>
      <rect x="78" y="268" width="250" height="14" rx="7" fill="#d76d4b"/>
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
