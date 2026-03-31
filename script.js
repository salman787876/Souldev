const sendBtn=document.getElementById('send-btn');
const userInput=document.getElementById('user-input');
const chatWindow=document.getElementById('chat-window');
const clickSound=document.getElementById('clickSound');

function playClick(){clickSound.currentTime=0;clickSound.play();}

function addMessage(content,type){
  const msg=document.createElement('div');
  msg.classList.add('message',type==='user'?'user-msg':'ai-msg');
  msg.textContent=content;
  chatWindow.appendChild(msg);
  chatWindow.scrollTop=chatWindow.scrollHeight;
}

// محاكاة ردود AI مثل ChatGPT
function getAIResponse(text){
  const responses=[
    `🤖 فهمت كلامك "${text}"!`,
    `💡 AI يجيب لك فكرة عن: "${text}"`,
    `📘 هذا رد تجريبي على: "${text}"`,
    `✨ رد احترافي على: "${text}"`,
    `🤔 تحليل لرسالتك "${text}" تم!`
  ];
  return responses[Math.floor(Math.random()*responses.length)];
}

sendBtn.addEventListener('click',()=>{
  playClick();
  const text=userInput.value.trim();
  if(!text)return;
  addMessage(text,'user');
  userInput.value='';
  setTimeout(()=>{addMessage(getAIResponse(text),'ai');},400);
});

userInput.addEventListener('keypress',(e)=>{if(e.key==='Enter')sendBtn.click();});
