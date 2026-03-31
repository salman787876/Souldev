function playClick() {
  const sound = document.getElementById('clickSound');
  if (sound) sound.play();
}

function scanLink() {
  playClick();

  let link = document.getElementById('linkInput').value.trim();
  const result = document.getElementById('result');

  if (!link) {
    result.innerHTML = "❌ اكتب رابط أول";
    result.className = "danger";
    return;
  }

  // إذا ما فيه https نضيفه تلقائي
  if (!link.startsWith("http://") && !link.startsWith("https://")) {
    link = "https://" + link;
  }

  let score = 0;
  let reasons = [];

  if (link.startsWith("https://")) {
    score++;
  } else {
    reasons.push("❗ الرابط غير آمن (HTTP)");
  }

  if (link.includes("@")) {
    reasons.push("❗ يحتوي @ (محاولة خداع)");
  } else {
    score++;
  }

  if (link.match(/\d{3,}/)) {
    reasons.push("❗ يحتوي أرقام كثيرة (مشبوه)");
  } else {
    score++;
  }

  if (link.includes("login") || link.includes("free") || link.includes("verify")) {
    reasons.push("❗ كلمات تصيد");
  } else {
    score++;
  }

  // النتيجة
  if (score >= 4) {
    result.innerHTML = "✅ الرابط آمن غالبًا";
    result.className = "safe";
  } else if (score >= 2) {
    result.innerHTML = "⚠️ الرابط مشبوه <br>" + reasons.join("<br>");
    result.className = "warn";
  } else {
    result.innerHTML = "🚨 الرابط خطير <br>" + reasons.join("<br>");
    result.className = "danger";
  }
}
document.getElementById("linkInput").addEventListener("keypress", function(e){
  if(e.key === "Enter"){
    scanLink();
  }
});
