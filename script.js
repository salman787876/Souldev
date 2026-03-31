function playClick() {
  document.getElementById('clickSound').play();
}

function scanLink() {
  playClick();

  const link = document.getElementById('linkInput').value;
  const result = document.getElementById('result');

  if (!link) {
    result.innerHTML = "❌ اكتب رابط";
    return;
  }

  let score = 0;

  if (link.startsWith("https://")) score++;
  if (!link.includes("@")) score++;
  if (!link.includes("free") && !link.includes("login")) score++;
  if (!link.match(/\d{3,}/)) score++;

  if (score >= 4) {
    result.innerHTML = "✅ الرابط آمن غالبًا";
    result.className = "safe";
  } else if (score >= 2) {
    result.innerHTML = "⚠️ الرابط مشبوه";
    result.className = "warn";
  } else {
    result.innerHTML = "🚨 الرابط خطير";
    result.className = "danger";
  }
}
