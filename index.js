  const closeBtn = document.querySelector(".close-btn");
  const topStrip = document.querySelector(".top-strip");

    closeBtn.addEventListener("click", () => {
      topStrip.style.display = "none";
    });

    /* SIDEBAR MENU */

    const menu = document.querySelector(".menu");
    const sideMenu = document.querySelector(".side-menu");
    const closeMenu = document.querySelector(".close-menu");

    menu.addEventListener("click", () => {
      sideMenu.classList.add("active");
    });

    closeMenu.addEventListener("click", () => {
      sideMenu.classList.remove("active");
    });

    // ================= LEADERSHIP CAROUSEL =================

const grid = document.getElementById("leadershipGrid");

const nextBtn = document.getElementById("nextBtn");

const prevBtn = document.getElementById("prevBtn");

nextBtn.addEventListener("click", () => {

  grid.scrollBy({
    left:350,
    behavior:"smooth"
  });

});

prevBtn.addEventListener("click", () => {

  grid.scrollBy({
    left:-350,
    behavior:"smooth"
  });

});

// ================= SMOOTH SCROLL =================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function(e){

    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if(target){

      target.scrollIntoView({
        behavior:"smooth"
      });

    }

  });

});