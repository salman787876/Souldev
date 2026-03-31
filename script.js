const sendBtn = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');
const clickSound = document.getElementById('clickSound');

// تشغيل صوت عند الضغط
function playClick() {
  clickSound.currentTime = 0;
  clickSound.play();
}

// إضافة رسالة للمحادثة
function addMessage(content, type) {
  const msg = document.createElement('div');
  msg.classList.add('message', type === 'user' ? 'user-msg' : 'ai-msg');
  msg.textContent = content;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// محاكاة رد AI (تقدر تربطه لاحقًا بـ API)
function getAIResponse(userText) {
  // مثال ذكي: ممكن تغيره لـ أي AI API
  return "🤖 AI: فهمت كلامك \"" + userText + "\". هذا رد تجريبي.";
}

sendBtn.addEventListener('click', () => {
  playClick();
  const text = userInput.value.trim();
  if (!text) return;
  addMessage(text, 'user');
  userInput.value = '';

  // تأخير بسيط لرد AI
  setTimeout(() => {
    const aiReply = getAIResponse(text);
    addMessage(aiReply, 'ai');
  }, 500);
});

// دعم الضغط على Enter
userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendBtn.click();
});
