(function () {
  // Burger menu
  document.addEventListener('click', burgerInit);
  function burgerInit(e) {
    const burgerIcon = e.target.closest('.burger-icon');
    const burgerNavLink = e.target.closest('.nav__link');
    if (document.documentElement.clientWidth > 900) return;
    if (!burgerIcon && !burgerNavLink) return;

    if (!document.body.classList.contains('body--opened-menu')) {
      document.body.classList.add('body--opened-menu');
    } else {
      document.body.classList.remove('body--opened-menu');
    }
  }

  // Modal window
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelector('.about__img-button');

  modalBtn.addEventListener('click', openModal);
  modal.addEventListener('click', closeModal);

  function openModal(e) {
    e.preventDefault();
    document.body.classList.toggle('body--opened-modal');
  }

  function closeModal(e) {
    e.preventDefault();
    const target = e.target;

    if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
      document.body.classList.remove('body--opened-modal');
    }
  }

  // Tabs
  const tabControls = document.querySelector('.tab-controls');
  tabControls.addEventListener('click', toggleTab);

  function toggleTab(e) {
    const tabControl = e.target.closest('.tab-controls__link');

    if (!tabControl) return;
    e.preventDefault();
    if (tabControl.classList.contains('tab-controls__link--active')) return;

    const tabContentId = tabControl.getAttribute('href');
    const tabContent = document.querySelector(tabContentId);
    const activeControl = document.querySelector('.tab-controls__link--active');
    const activeContent = document.querySelector('.tab-content--show');

    if (activeControl) activeControl.classList.remove('tab-controls__link--active');

    if (activeContent) activeContent.classList.remove('tab-content--show');

    tabControl.classList.add('tab-controls__link--active');
    tabContent.classList.add('tab-content--show');
  }

  // Accordion
  const accordionLists = document.querySelectorAll('.accordion-list');

  accordionLists.forEach(el => {
    el.addEventListener('click', e => {
      const accordionList = e.currentTarget;
      const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened');
      const accordionOpenedContent = accordionList.querySelector(
        '.accordion-list__item--opened .accordion-list__content',
      );

      const accordionControl = e.target.closest('.accordion-list__control');

      if (!accordionControl) return;
      e.preventDefault();
      const accordionItem = accordionControl.parentElement;
      const accordionContent = accordionControl.nextElementSibling;

      if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
        accordionOpenedItem.classList.remove('accordion-list__item--opened');
        accordionOpenedContent.style.maxHeight = null;
      }

      accordionItem.classList.toggle('accordion-list__item--opened');

      if (accordionItem.classList.contains('accordion-list__item--opened')) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      } else {
        accordionContent.style.maxHeight = null;
      }
    });
  });

  // Gallery swiper slider
  new Swiper('.gallery__slider', {
    slidesPerView: 1.5,
    spaceBetween: 15,
    pagination: {
      el: '.gallery__pagination',
      type: 'fraction',
    },
    navigation: {
      prevEl: '.gallery__prev',
      nextEl: '.gallery__next',
    },

    breakpoints: {
      451: {
        slidesPerView: 2,
      },
      601: {
        slidesPerView: 3,
      },
      801: {
        spaceBetween: 32,
      },
      1101: {
        slidesPerView: 4,
      },
    },
  });

  // Testimonials swiper slider
  new Swiper('.testimonials__slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    navigation: {
      prevEl: '.testimonials__prev',
      nextEl: '.testimonials__next',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    breakpoints: {
      901: {
        slidesPerView: 1.5,
      },
      1201: {
        slidesPerView: 2.05,
      },
    },
  });

  // Input mask for phone
  const telInputs = document.querySelectorAll('input[type="tel"]');
  const im = new Inputmask('+7 (999) 999-99-99');
  im.mask(telInputs);
})();
