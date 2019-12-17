// Load scripts.
import Player from './player';
import Singleton from './singleton';

// Load styles.
import '../scss/style.scss'; 
// Register service worker.
import './registerServiceWorker';

let singleton = new Singleton(); // eslint-disable-line
let player = null;

function appStar() {
  player = new Player();
  player.startRender();
}

async function init() {
  await singleton.loadData();
  appStar();
}

document.addEventListener('DOMContentLoaded', init);
