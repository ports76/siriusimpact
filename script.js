let rank = "Recruit";
let modulesCompleted = 0;

const ranks = [
  "Recruit", "Private", "Corporal", "Sergeant",
  "Lieutenant", "Captain", "Major", "Colonel", "Corporate Hero"
];

const moduleData = {
  corporate: "🦸‍♂️ Corporate Hero training includes: Resilience, Supportiveness, Compliance.",
  cq: "🌍 Cultural Intelligence: Learn how to lead inclusively across nationalities and backgrounds.",
  nonverbal: "👀 Non-verbal Communication: Decode body language, eye contact, posture, and micro-expressions.",
  influence: "🎯 Influence: Apply Cialdini’s 7 principles for ethical persuasion and leadership impact.",
  cmi: "📚 CMI Pathway:\n- Level 3 Award in Leadership\n- Level 5 Certificate in Coaching\n- Level 5 Diploma in Strategic Management",
  coaching: "🧠 Coaching: How to develop teams and unlock human potential through ICF-based coaching methods.",
  resilience: "💪 Resilience: Techniques for stress management, mindset, and bounce-back performance.",
  support: "🤝 Supportiveness: Create psychological safety and inclusion across high-performance teams.",
  compliance: "📋 Compliance: Understand policy frameworks, ethics, and regulatory boundaries for leaders."
};

function openModule(name) {
  const content = moduleData[name] || "This module content is coming soon...";
  document.getElementById("moduleContent").innerText = content;
  modulesCompleted++;
  updateRank();
  speak(content);
}

function updateRank() {
  const newRank = ranks[Math.min(modulesCompleted, ranks.length - 1)];
  if (newRank !== rank) {
    rank = newRank;
    document.getElementById("rankBadge").innerText = rank;
  }
}

function speak(text) {
  const isOn = document.getElementById("voiceToggle").checked;
  if (!isOn || !window.speechSynthesis) return;
  const msg = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(msg);
}
