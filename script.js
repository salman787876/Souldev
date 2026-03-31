const sendBtn = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const chatWindow = document.getElementById('chat-window');
const clickSound = document.getElementById('clickSound');

// ضع هنا مفتاح OpenAI API الخاص بك
const OPENAI_API_KEY = "YOUR_API_KEY_HERE";

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

// إرسال الرسالة لـ OpenAI API
async function getAIResponse(message) {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{role:"user", content: message}],
        temperature: 0.7
      })
    });
    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    return "حدث خطأ في الرد. حاول مرة أخرى.";
  }
}

async function sendMessage() {
  const text = userInput.value.trim();
  if (!text) return;
  playClick();
  addMessage(text, 'user');
  userInput.value = '';
  const aiReply = await getAIResponse(text);
  addMessage(aiReply, 'ai');
}

sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendMessage();
});
