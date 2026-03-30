document.getElementById('encodeBtn').addEventListener('click', ()=>{
  const text = document.getElementById('baseInput').value;
  document.getElementById('baseResult').textContent = btoa(text);
});

document.getElementById('decodeBtn').addEventListener('click', ()=>{
  const text = document.getElementById('baseInput').value;
  try{
    document.getElementById('baseResult').textContent = atob(text);
  }catch(e){
    document.getElementById('baseResult').textContent = 'Invalid Base64';
  }
});
