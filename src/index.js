import './styles.css';
import logo from './assets/logo.svg';
import pic1 from './assets/pic1.webp';
import pic2 from './assets/pic2.webp';

let showAPic = true;
let imageLoaderEl = document.getElementById('image-loader');
let logoEl = document.getElementById('logo');

logoEl.setAttribute('src', logo);

imageLoaderEl.style.backgroundImage = `url(${pic1})`;

setInterval(() => {
  if (showAPic) {
    imageLoaderEl.style.backgroundImage = `url(${pic2})`;
    showAPic = false;
  } else {
    showAPic = true;
    imageLoaderEl.style.backgroundImage = `url(${pic1})`;
  }
}, 8000);
