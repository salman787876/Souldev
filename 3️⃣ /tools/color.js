const colorPicker = document.getElementById('colorPicker');
const hexCode = document.getElementById('hexCode');
const rgbCode = document.getElementById('rgbCode');
const colorPreview = document.getElementById('colorPreview');

colorPicker.addEventListener('input', ()=>{
  const color = colorPicker.value;
  hexCode.textContent = color;

  const bigint = parseInt(color.slice(1),16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  rgbCode.textContent = `rgb(${r},${g},${b})`;
  colorPreview.style.background = color;
});
