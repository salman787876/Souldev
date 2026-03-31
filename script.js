const sendBtn = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const chatWindow = document.getElementById('chat-window');
const clickSound = document.getElementById('clickSound');

function playClick() {
  clickSound.currentTime = 0;
  clickSound.play();
}

function addMessage(content, type) {
  const msg = document.createElement('div');
  msg.classList.add('message', type === 'user' ? 'user-msg' : 'ai-msg');
  msg.textContent = content;
  chatWindow.appendChild(msg);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

// ردود AI تجريبية
function getAIResponse(text) {
  const responses = [
    `🤖 فهمت كلامك "${text}"!`,
    `💡 AI يقترح: "${text}"`,
    `✨ هذا رد تجريبي على: "${text}"`,
    `📘 تحليل لرسالتك: "${text}"`,
    `🤔 AI يجيب على: "${text}"`
  ];
  return responses[Math.floor(Math.random() * responses.length)];
}

function sendMessage() {
  const text = userInput.value.trim();
  if (!text) return;
  playClick();
  addMessage(text, 'user');
  userInput.value = '';
  setTimeout(() => {
    addMessage(getAIResponse(text), 'ai');
  }, 400);
}

sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendMessage();
});
