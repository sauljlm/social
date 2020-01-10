// Load scripts.
import Social from './social';
import Singleton from './singleton';

// Load styles.
import '../scss/style.scss'; 
// Register service worker.
import './registerServiceWorker';

let singleton = new Singleton(); // eslint-disable-line
let social = null;

const btnPosts = document.querySelector('.nav__item--posts');
const btnPeople = document.querySelector('.nav__item--people');
const btnProfile = document.querySelector('.nav__item--profile');
const contPages = document.querySelector('.slider');

function appStar() {
  social = new Social();
  social.startRender();
}

async function init() {
  await singleton.loadData();
  appStar();
}

btnPosts.addEventListener('click', () => {
  contPages.style.left = '0%';
});
btnPeople.addEventListener('click', () => {
  contPages.style.left = '-100%';
});
btnProfile.addEventListener('click', () => {
  contPages.style.left = '-200%';
});

document.addEventListener('DOMContentLoaded', init);
