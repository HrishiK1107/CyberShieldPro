// app.js - CyberShield Pro interactive logic

// ----------------- Data -----------------
const data = {
  vulnerabilities: [
    { id: "CVE-2024-1234", severity: "Critical", score: 9.8, type: "RCE", status: "Open", affected_systems: 15 },
    { id: "CVE-2024-2345", severity: "High", score: 8.5, type: "SQLi", status: "Patched", affected_systems: 3 },
    { id: "CVE-2024-3456", severity: "Medium", score: 6.2, type: "XSS", status: "Open", affected_systems: 7 },
    { id: "CVE-2024-4567", severity: "High", score: 7.9, type: "Authentication Bypass", status: "Open", affected_systems: 2 }
  ],
  mitre_techniques: [
    { id: "T1566", name: "Phishing", tactic: "Initial Access", detection_count: 23 },
    { id: "T1055", name: "Process Injection", tactic: "Privilege Escalation", detection_count: 8 },
    { id: "T1003", name: "Credential Dumping", tactic: "Credential Access", detection_count: 12 },
    { id: "T1090", name: "Proxy", tactic: "Command and Control", detection_count: 5 }
  ],
  security_metrics: {
    threat_score: 7.2,
    vulnerabilities_open: 18,
    systems_scanned: 156,
    compliance_percentage: 87
  }
};

// ----------------- Metrics -----------------
function updateMetrics() {
  document.getElementById("criticalVuln").textContent = data.security_metrics.vulnerabilities_open;
  document.getElementById("systemsSecured").textContent = data.security_metrics.systems_scanned;
  document.getElementById("threatScore").textContent = `${data.security_metrics.threat_score}/10`;
  document.getElementById("compliancePercent").textContent = `${data.security_metrics.compliance_percentage}%`;
  document.getElementById("last-updated").textContent = new Date().toLocaleString();
}

// ----------------- Charts -----------------
function renderCharts() {
  const mitreCtx = document.getElementById("mitreChart").getContext("2d");
  new Chart(mitreCtx, {
    type: "bar",
    data: {
      labels: data.mitre_techniques.map(t => `${t.id} - ${t.name}`),
      datasets: [{
        label: "Detections",
        data: data.mitre_techniques.map(t => t.detection_count),
        backgroundColor: ["#1FB8CD", "#FFC185", "#B4413C", "#5D878F"]
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: { x: { grid: { display: false } }, y: { beginAtZero: true } }
    }
  });

  const vulnCtx = document.getElementById("vulnerabilityChart").getContext("2d");
  const severityCounts = { Critical: 0, High: 0, Medium: 0, Low: 0 };
  data.vulnerabilities.forEach(v => severityCounts[v.severity]++);
  new Chart(vulnCtx, {
    type: "pie",
    data: {
      labels: Object.keys(severityCounts),
      datasets: [{
        data: Object.values(severityCounts),
        backgroundColor: ["#DB4545", "#FFC185", "#D2BA4C", "#5D878F"]
      }]
    },
    options: { responsive: true, plugins: { legend: { position: "bottom" } } }
  });

  const mlCtx = document.getElementById("mlChart").getContext("2d");
  new Chart(mlCtx, {
    type: "line",
    data: {
      labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
      datasets: [{
        label: "Accuracy %",
        data: [92, 92.5, 93, 94, 94.2, 95, 96.2],
        borderColor: "#1FB8CD",
        backgroundColor: "rgba(31,184,205,0.2)",
        tension: 0.4,
        fill: true
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: { y: { suggestedMin: 90, suggestedMax: 100 } }
    }
  });
}

// ----------------- Navigation -----------------
function setupNavigation() {
  const links = document.querySelectorAll(".nav-link");
  const modules = document.querySelectorAll(".module");
  const titleMap = {
    dashboard: "Security Operations Dashboard",
    "threat-intel": "AI Threat Intelligence",
    pentest: "Automated Penetration Testing Suite",
    redteam: "Red Team Operations Center",
    "ml-analytics": "Machine Learning Security Analytics",
    "cloud-security": "Cloud Security Assessment",
    forensics: "Digital Forensics & Incident Response"
  };
  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const moduleId = link.dataset.module;
      // update active link
      links.forEach(l => l.classList.toggle("active", l === link));
      // show corresponding module
      modules.forEach(m => m.classList.toggle("active", m.id === moduleId));
      // update header & breadcrumb
      document.getElementById("page-title").textContent = titleMap[moduleId];
      document.getElementById("breadcrumb-text").textContent = `Home / ${titleMap[moduleId]}`;
    });
  });
}

// ----------------- Theme Toggle -----------------
function setTheme(theme) {
  document.documentElement.setAttribute("data-color-scheme", theme);
  const iconHtml = theme === "dark" ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
  document.getElementById("theme-toggle-btn").innerHTML = iconHtml;
}

function setupThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle-btn");
  if (!toggleBtn) return;
  // establish initial theme based on attribute or OS preference
  const preferred = document.documentElement.getAttribute("data-color-scheme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  setTheme(preferred);

  toggleBtn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-color-scheme") || "light";
    const newTheme = current === "dark" ? "light" : "dark";
    setTheme(newTheme);
  });
}

// ----------------- Init -----------------
window.addEventListener("DOMContentLoaded", () => {
  updateMetrics();
  renderCharts();
  setupNavigation();
  setupThemeToggle();
});
