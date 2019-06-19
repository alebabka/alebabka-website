//Setup AnimateCSS
function animateCSS(element, animationName, callback) {
  const node = document.querySelector(element);
  node.classList.add("animated", animationName);

  function handleAnimationEnd() {
    node.classList.remove("animated", animationName);
    node.removeEventListener("animationend", handleAnimationEnd);

    if (typeof callback === "function") callback();
  }

  node.addEventListener("animationend", handleAnimationEnd);
}
//Nav
const navbar = document.querySelector("#nav");
const navStripe = document.querySelector("#nav-stripe");
const lace = document.querySelector(".lace");
const logo = document.querySelector("#logo-image");
const logoContainer = document.querySelector(".nav-logo");
const baseUrl = window.location.origin;
window.addEventListener("scroll", function(e) {
  const lastPosition = window.scrollY;
  if (lastPosition > 300) {
    navbar.classList.add("active");
    navbar.classList.add("animated", "slideInDown");
    navStripe.classList.add("visible");
    //navStripe.classList.add("animated", "slideInLeft");
    lace.classList.add("visible");
    //lace.classList.add("animated", "slideInRight");
    logo.src = "/jekyll-alebabka/assets/img/logo_white.png";
    //logoContainer.classList.add("animated", "slideInDown");
    logoContainer.classList.add("logo-small");
  } else if (navbar.classList.contains("active")) {
    navbar.classList.remove("active");
    navbar.classList.remove("animated", "slideInDown");
    navStripe.classList.remove("visible");
    //navStripe.classList.remove("animated", "slideInLeft");
    lace.classList.remove("visible");
    //lace.classList.remove("animated", "slideInRight");
    logo.src = "/jekyll-alebabka/assets/img/logo_frame.png";
    //logoContainer.classList.remove("animated", "slideInDown");
    logoContainer.classList.remove("logo-small");
  } else {
    navbar.classList.remove("active");
    navbar.classList.remove("animated", "slideInDown");
    navStripe.classList.remove("visible");
    //navStripe.classList.remove("animated", "slideInLeft");
    lace.classList.remove("visible");
    //lace.classList.remove("animated", "slideInRight");
    logo.src = "/jekyll-alebabka/assets/img/logo_frame.png";
    //logoContainer.classList.remove("animated", "slideInDown");
    logoContainer.classList.remove("logo-small");
  }
});

//End Nav
//Responsive-Nav
const menu = document.querySelector(".sidebar-menu");
const menuBtn = document.querySelector(".menu-btn");
const sidebarExit = document.querySelector(".sidebar-btn");
let showMenu = false;

menuBtn.addEventListener("click", toggleMenuIn);
sidebarExit.addEventListener("click", toggleMenuOut);
function toggleMenuIn() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.remove("hidden");
    menu.classList.add("visible");
    menu.classList.remove("fadeOutLeft");
    //menu.classList.remove("animated", "slideOutLeft");
    menu.classList.add("animated", "slideInLeft");
    //navItems.forEach(item => item.classList.add("show"));

    //Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("visible");
    menu.classList.remove("animated", "slideInLeft");
    //menu.classList.add("animated", "slideOutLeft");
    menu.classList.add("fadeOutLeft");
    setTimeout(function() {
      menu.classList.add("hidden");
    }, 500);
    //navItems.forEach(item => item.classList.remove("show"));

    //Set Menu State
    showMenu = false;
  }
}
function toggleMenuOut() {
  menuBtn.classList.remove("close");
  menu.classList.remove("visible");
  menu.classList.remove("animated", "slideInLeft");
  //menu.classList.add("animated", "slideOutLeft");
  menu.classList.add("fadeOutLeft");
  setTimeout(function() {
    menu.classList.add("hidden");
  }, 500);
  //navItems.forEach(item => item.classList.remove("show"));

  //Set Menu State
  showMenu = false;
}
//End Responsive-Nav
//Offer Opis
$(function() {
  $(".scroll-down").click(function() {
    $("html, body").animate(
      { scrollTop: $(".offer-content").offset().top },
      "slow"
    );
    return false;
  });
});
// const btnOffer = document.querySelector(".btn-torty");
// const opis = document.querySelector(".opis");

// btnOffer.addEventListener("click", function(e) {
//   if (!opis.classList.contains("active")) {
//     opis.classList.add("active", "animated", "fadeInDown");
//     document.getElementById("rodzaje").style.border = "3px solid #9b59b6";
//   } else if (opis.classList.contains("active")) {
//     opis.classList.remove("active", "animated", "fadeInDown");
//     document.getElementById("rodzaje").style.border = "0";
//   } else {
//     opis.classList.remove("active", "animated", "fadeInDown");
//     document.getElementById("rodzaje").style.border = "0";
//   }
// });

//Gallery
// $(document).ready(function() {
//   $("#lightGallery").lightGallery();
// });
$("#btn-torty").on("click", function() {
  $(this).lightGallery({
    dynamic: true,
    dynamicEl: [
      {
        src: "../assets/img/torty/torty-1.jpg",
        thumb: "../assets/img/torty/torty-1.jpg"
      },
      {
        src: "../assets/img/torty/torty-2.jpg",
        thumb: "../assets/img/torty/torty-2.jpg"
      },
      {
        src: "../assets/img/torty/torty-3.jpg",
        thumb: "../assets/img/torty/torty-3.jpg"
      },
      {
        src: "../assets/img/torty/torty-4.jpg",
        thumb: "../assets/img/torty/torty-4.jpg"
      },
      {
        src: "../assets/img/torty/torty-5.jpg",
        thumb: "../assets/img/torty/torty-5.jpg"
      },
      {
        src: "../assets/img/torty/torty-6.jpg",
        thumb: "../assets/img/torty/torty-6.jpg"
      },
      {
        src: "../assets/img/torty/torty-8.jpg",
        thumb: "../assets/img/torty/torty-8.jpg"
      },
      {
        src: "../assets/img/torty/torty-9.jpg",
        thumb: "../assets/img/torty/torty-9.jpg"
      },
      {
        src: "../assets/img/torty/torty-10.jpg",
        thumb: "../assets/img/torty/torty-10.jpg"
      },
      {
        src: "../assets/img/torty/torty-11.jpg",
        thumb: "../assets/img/torty/torty-11.jpg"
      },
      {
        src: "../assets/img/torty/torty-12.jpg",
        thumb: "../assets/img/torty/torty-12.jpg"
      },
      {
        src: "../assets/img/torty/torty-13.jpg",
        thumb: "../assets/img/torty/torty-13.jpg"
      },
      {
        src: "../assets/img/torty/torty-14.jpg",
        thumb: "../assets/img/torty/torty-14.jpg"
      },
      {
        src: "../assets/img/torty/torty-15.jpg",
        thumb: "../assets/img/torty/torty-15.jpg"
      },
      {
        src: "../assets/img/torty/torty-16.jpg",
        thumb: "../assets/img/torty/torty-16.jpg"
      },
      {
        src: "../assets/img/torty/torty-17.jpg",
        thumb: "../assets/img/torty/torty-17.jpg"
      }
    ]
  });
});
$("#btn-babeczki").on("click", function() {
  $(this).lightGallery({
    dynamic: true,
    dynamicEl: [
      {
        src: "../assets/img/babeczki/babeczki-1.jpg",
        thumb: "../assets/img/babeczki/babeczki-1.jpg"
      },
      {
        src: "../assets/img/babeczki/babeczki-2.jpg",
        thumb: "../assets/img/babeczki/babeczki-2.jpg"
      },
      {
        src: "../assets/img/babeczki/babeczki-3.jpg",
        thumb: "../assets/img/babeczki/babeczki-3.jpg"
      },
      {
        src: "../assets/img/babeczki/babeczki-4.jpg",
        thumb: "../assets/img/babeczki/babeczki-4.jpg"
      },
      {
        src: "../assets/img/babeczki/babeczki-5.jpg",
        thumb: "../assets/img/babeczki/babeczki-5.jpg"
      },
      {
        src: "../assets/img/babeczki/babeczki-6.jpg",
        thumb: "../assets/img/babeczki/babeczki-6.jpg"
      }
    ]
  });
});
$("#btn-ciasta").on("click", function() {
  $(this).lightGallery({
    dynamic: true,
    dynamicEl: [
      {
        src: "../assets/img/ciasta/ciasta-1.jpg",
        thumb: "../assets/img/ciasta/ciasta-1.jpg"
      },
      {
        src: "../assets/img/ciasta/ciasta-2.jpg",
        thumb: "../assets/img/ciasta/ciasta-2.jpg"
      },
      {
        src: "../assets/img/ciasta/ciasta-3.jpg",
        thumb: "../assets/img/ciasta/ciasta-3.jpg"
      },
      {
        src: "../assets/img/ciasta/ciasta-4.jpg",
        thumb: "../assets/img/ciasta/ciasta-4.jpg"
      },
      {
        src: "../assets/img/ciasta/ciasta-5.jpg",
        thumb: "../assets/img/ciasta/ciasta-5.jpg"
      },
      {
        src: "../assets/img/ciasta/ciasta-6.jpg",
        thumb: "../assets/img/ciasta/ciasta-6.jpg"
      },
      {
        src: "../assets/img/ciasta/ciasta-7.jpg",
        thumb: "../assets/img/ciasta/ciasta-7.jpg"
      },
      {
        src: "../assets/img/ciasta/ciasta-8.jpg",
        thumb: "../assets/img/ciasta/ciasta-8.jpg"
      },
      {
        src: "../assets/img/ciasta/ciasta-9.jpg",
        thumb: "../assets/img/ciasta/ciasta-9.jpg"
      }
    ]
  });
});
//
