import Singleton from './singleton';

export default class UI {
  constructor() {
    this.singleton = new Singleton();
  }
  
  newPost(element) {
    const post = document.createElement('li');
    const name = document.createElement('p');

    post.setAttribute('class', 'post');
    name.setAttribute('class', 'post__name');

    name.innerHTML = `${element.name}`;

    post.appendChild(this.newGallery(element));
    post.appendChild(name);

    return post;
  }

  newGallery(element) {
    const contGallery = document.createElement('div');
    const gallery = document.createElement('div');
    const btnPrevious = document.createElement('button');
    const btnNext = document.createElement('button');
    let quantity = null;

    element.Img_src.map((url => {
      const image = document.createElement('div');
      quantity = element.Img_src.length;

      image.setAttribute('class', 'post__image');
      image.style.backgroundImage = `url(${url})`;
      gallery.style.width = quantity + "00%";

      gallery.appendChild(image);
    }));

    gallery.setAttribute('class', 'post__gallery');
    contGallery.setAttribute('class', 'post__cont-gallery');
    btnPrevious.setAttribute('class', 'post__btn-previous post__btn');
    btnNext.setAttribute('class', 'post__btn-next post__btn');
    gallery.setAttribute('data-left', 0);

    btnPrevious.addEventListener('click' , () => this.galleryAction('previous', gallery, quantity));
    btnNext.addEventListener('click' , () => this.galleryAction('next', gallery, quantity));

    contGallery.appendChild(btnPrevious);
    contGallery.appendChild(btnNext);
    contGallery.appendChild(gallery);

    return contGallery;
  }

  galleryAction(action, gallery, quantity) {
    const currentLeft = parseInt(gallery.getAttribute('data-left'));
    let newLeft = null;

    if (action === 'previous') {
      if (currentLeft < 0) {
        newLeft = currentLeft + 100;
        gallery.style.left = `${newLeft}%`;
        gallery.setAttribute('data-left', newLeft);
      }
    } else if (action === 'next') {
      console.log(currentLeft)
      if (currentLeft > (quantity * -100) + 100) {
        newLeft = currentLeft - 100;
        gallery.style.left = `${newLeft}%`;
        gallery.setAttribute('data-left', newLeft);
      }
    }
  }

  newUserForm() {
    const form = document.createElement('form');

    gallery.setAttribute('class', 'post__gallery');

    return form;
  }
}
