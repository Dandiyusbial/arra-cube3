// Toggle class aactive untuk hamburger menu
// const navbarNav = document.querySelector(".navbar-nav");
// Ketika Hamburger menu di klik
// document.querySelector("#hamburger-menu").onclick = () => {
//   navbarNav.classList.toggle("active");
// };


const hamburgerMenu = document.getElementById('hamburger-menu');
const navbarNav = document.querySelector('.navbar-nav');

hamburgerMenu.addEventListener('click', function(event) {
  event.stopPropagation();
  
  // Toggle class 'active' pada navbar-nav untuk membuka atau menutup menu
  navbarNav.classList.toggle('active');
});

// Tambahkan event listener untuk menutup menu saat pengguna mengklik di luar menu
document.addEventListener('click', function(event) {
  // Periksa apakah yang diklik bukan hamburger menu atau navbar-nav
  if (!event.target.closest('#hamburger-menu') && !event.target.closest('.navbar-nav')) {
    // Jika tidak, maka tutup menu dengan menghapus class 'active'
    navbarNav.classList.remove('active');
  }
});


// toggle untuk tombol search-form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// klik di luar side bar menu akan hilang
const hamburger = document.querySelector("#hamburger-menu");
const searchButton = document.querySelector("#search-button");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});




// kilk di luar modal dari pak dika

// window.onclick = (e) => {
//   if (e.target === itemDetailModal0) {
//     itemDetailModal0.style.display = "none";
//   }
// };


// Modal Box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");


itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close pada Modal
document.querySelector("#item-detail-modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};
document.querySelector("#item-detail-modal .button-back").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

// kilk di luar modal dari pak dika

// window.onclick = (e) => {
//   if (e.target === itemDetailModal) {
//     itemDetailModal.style.display = "none";
//   }
// };

// klik di luar modal berlaku semua modal
window.onclick = (e) => {
  if (e.target === itemDetailModal .style.display === "flex") {
    itemDetailModal.style.display = "none";
  }
  if (e.target === itemDetailModal2 .style.display === "flex") {
    itemDetailModal2.style.display = "none";
  }
  if (e.target === itemDetailModal3.style.display === "flex") {
    itemDetailModal3.style.display = "none";
  }
  if (e.target === itemDetailModal4.style.display === "flex") {
    itemDetailModal4.style.display = "none";
  }
  if (e.target === itemDetailModal5.style.display === "flex") {
    itemDetailModal5.style.display = "none";
  }
};


// Modal Box 2
const itemDetailModal2 = document.querySelector("#item-detail-modal2");
const itemDetailButton2 = document.querySelectorAll(".item-detail-button2");


itemDetailButton2.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal2.style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close pada Modal
document.querySelector("#item-detail-modal2 .close-icon").onclick = (e) => {
  itemDetailModal2.style.display = "none";
  e.preventDefault();
};
document.querySelector("#item-detail-modal2 .button-back").onclick = (e) => {
  itemDetailModal2.style.display = "none";
  e.preventDefault();
};


// Modal Box 3
const itemDetailModal3 = document.querySelector("#item-detail-modal3");
const itemDetailButton3 = document.querySelectorAll(".item-detail-button3");


itemDetailButton3.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal3.style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close pada Modal
document.querySelector("#item-detail-modal3 .close-icon").onclick = (e) => {
  itemDetailModal3.style.display = "none";
  e.preventDefault();
};
document.querySelector("#item-detail-modal3 .button-back").onclick = (e) => {
  itemDetailModal3.style.display = "none";
  e.preventDefault();
};




// Modal Box 4
const itemDetailModal4 = document.querySelector("#item-detail-modal4");
const itemDetailButton4 = document.querySelectorAll(".item-detail-button4");


itemDetailButton4.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal4.style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close pada Modal
document.querySelector("#item-detail-modal4 .close-icon").onclick = (e) => {
  itemDetailModal4.style.display = "none";
  e.preventDefault();
};
document.querySelector("#item-detail-modal4 .button-back").onclick = (e) => {
  itemDetailModal4.style.display = "none";
  e.preventDefault();
};


// Modal Box 5
const itemDetailModal5 = document.querySelector("#item-detail-modal5");
const itemDetailButton5 = document.querySelectorAll(".item-detail-button5");


itemDetailButton5.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal5.style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close pada Modal
document.querySelector("#item-detail-modal5 .close-icon").onclick = (e) => {
  itemDetailModal5.style.display = "none";
  e.preventDefault();
};
document.querySelector("#item-detail-modal5 .button-back").onclick = (e) => {
  itemDetailModal5.style.display = "none";
  e.preventDefault();
};





