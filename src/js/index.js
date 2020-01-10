// Load scripts.
import Social from './social';
import Singleton from './singleton';

// Load styles.
import '../scss/style.scss'; 
// Register service worker.
import './registerServiceWorker';

let singleton = new Singleton(); // eslint-disable-line
let social = null;

function appStar() {
  social = new Social();
  social.startRender();
}

async function init() {
  await singleton.loadData();
  appStar();
}

document.addEventListener('DOMContentLoaded', init);
