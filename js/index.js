var swiper = new Swiper(".popular_content", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      prevEl: ".swiper-button-next",
      nextEl: ".swiper-button-prev",
    },
    breakpoints:
    {
        280: {
            slidesPerView: 1,
            spaceBetween: 10,
        },

        320: {
            slidesPerView: 2,
            spaceBetween: 10,
        },

        510: {
            slidesPerView: 2,
            spaceBetween: 10,
        },

        758: {
            slidesPerView: 3,
            spaceBetween: 15,
        },

        900: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
  });


// Show Video

let playBtn = document.querySelector('.play_quran');
let video   = document.querySelector('.video_container');
let myVideo  = document.querySelector('#myVideo');
let closeBtn = document.querySelector('.close_video');

playBtn.onclick = () =>{
  video.classList.add("show_video");

  // Auto play when click on button
  myVideo.play();
}


closeBtn.onclick = () =>{
  video.classList.remove("show_video");

  // Pause on button
  myVideo.pause();
}