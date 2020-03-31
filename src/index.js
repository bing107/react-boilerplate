import './styles.css';

let imageLoaderEl = document.getElementById('image-loader');
let picNumber = 1;

imageLoaderEl.style.backgroundImage = `url('/assets/pic1.webp')`;

setInterval(() => {
  if (picNumber === 2) {
    picNumber = 1;
    imageLoaderEl.style.backgroundImage = `url('/assets/pic${picNumber}.webp')`;
  } else {
    picNumber = 2;
    imageLoaderEl.style.backgroundImage = `url('/assets/pic${picNumber}.webp')`;
  }
}, 8000);
