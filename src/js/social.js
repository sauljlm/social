import Singleton from './singleton';
import UI from './UI';

export default class Social {
  constructor() {

    // instances
    this.singleton = new Singleton();
    this.UI = null;

    // elements
    this.contPost = document.querySelector('.cont-post-js');

    // values
    this.random = false;
  }

  startRender() {
    this.UI = new UI();

    this.renderPosts();
  }

  renderPosts() {
    this.singleton.getData.posts.map((post) => {
      this.contPost.appendChild(this.UI.newPost(post));
    });
  }
}
