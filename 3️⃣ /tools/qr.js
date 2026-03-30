const generateQRBtn = document.getElementById('generateQRBtn');
generateQRBtn.addEventListener('click', ()=>{
  const text = document.getElementById('qrInput').value;
  const qrDiv = document.getElementById('qrResult');
  qrDiv.innerHTML = '';
  if(text){
    QRCode.toDataURL(text, {width:200}, function(err,url){
      if(err){ alert("Error generating QR"); return; }
      const img = document.createElement('img');
      img.src = url;
      qrDiv.appendChild(img);
    });
  }
});
