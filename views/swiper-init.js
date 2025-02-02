// swiper-init.js

// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     loop: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });
  

const swiper = new Swiper('.swiper', {
    loop: true,
  
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<p class="' + className + '">' + (index + 1) + '</p>'; // Измените на свой кастомный элемент
        },
    },
  
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

// Обновление текста над пагинацией
const paginationLabels = document.querySelectorAll('.pagination-label');
const updatePaginationLabels = () => {
    const activeIndex = swiper.realIndex; // Получаем индекс активного слайда
    paginationLabels.forEach((label, index) => {
        label.style.display = index === activeIndex ? 'block' : 'none'; // Показываем только активный
    });
};

// Инициализация
updatePaginationLabels();

// Обновление при смене слайда
swiper.on('slideChange', () => {
    updatePaginationLabels();
});
