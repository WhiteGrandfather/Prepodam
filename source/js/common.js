// $('.center').slick({
//   centerMode: true,
//   centerPadding: '60px',
//   slidesToShow: 3,
//   responsive: [
//     {
//       breakpoint: 1023,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 1
//       }
//     },
//     {
//       breakpoint: 321,
//       settings: {
//         infinite: false,
//         arrows: false,
//         centerMode: true,
//         centerPadding: '20px',
//         slidesToShow: 1,
//         adaptiveHeight: true
//       }
//     }
//   ]
// });

$('.center').slick({
  dots: true,
  arrows: true,
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 4000,
      settings: {
        dots: false,
        arrows: false,
        centerMode: true,
        centerPadding: '26px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 1024,
      settings: {
        dots: true,
        arrows: true,
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 500,
      settings: {
        infinite:false,
        dots: true,
        centerMode: true,
        centerPadding: '27px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 323,
      settings: {
        arrows: false,
        dots: false,
        centerMode: true,
        centerPadding: '28px',
        slidesToShow: 1
      }
    }
  ]
});
