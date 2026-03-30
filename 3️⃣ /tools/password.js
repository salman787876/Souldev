const hashPassBtn = document.getElementById('hashPassBtn');
hashPassBtn.addEventListener('click', async ()=>{
  const input = document.getElementById('passInput').value;
  const enc = new TextEncoder();
  const hashBuffer = await crypto.subtle.digest('SHA-256', enc.encode(input));
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2,'0')).join('');
  document.getElementById('hashedPass').textContent = hashHex;
});
