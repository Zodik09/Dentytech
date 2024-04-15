function locomotive() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    lerp: 0.1,
  });
}
locomotive();
function loader() {
  let tl = gsap.timeline();
  tl.to("#loader .yellow", {
    bottom: "100vh",
    duration: 0.4,
    delay: 0.5,
    ease: "expo.out",
  });
  tl.to(
    "#loader video",
    {
      bottom: "100vh",
      duration: 0.5,
      delay: 0.5,
      ease: "expo.out",
    },
    "gotogether"
  );
  tl.to(
    ".loaderHeading h1, #loaderRightNav a, .bottomNav a",
    {
      color: "black",
      duration: 0.5,
      delay: 0.5,
    },
    "gotogether"
  );
  tl.to(
    "#loaderRightNav svg g, .bottomNav svg polyline",
    {
      stroke: "black",
      duration: 0.5,
      delay: 0.5,
    },
    "gotogether"
  );
  tl.to(
    "#loader nav svg path",
    {
      fill: "black",
      duration: 0.5,
      delay: 0.5,
    },
    "gotogether"
  );
  tl.to(".loaderHeading", {
    opacity: 1,
    duration: 0.2,
    ease: "expo.out",
  });
  tl.to("#loader", {
    opacity: 0,
  });
  tl.to("#loader", {
    display: "none",
  });
}
loader();
function rotate() {
  const svg = document.getElementById("rotation");
  const nav = document.querySelectorAll(".links");
  let rotated = false;

  svg.addEventListener("click", function () {
    if (rotated) {
      svg.style.transform = "rotate(45deg)";
      nav.forEach((e) => {
        e.style.transform = "translateX(0px)";
      });
    } else {
      svg.style.transform = "rotate(180deg)";
      nav.forEach((e) => {
        e.style.transform = "translateX(250px)";
      });
    }
    rotated = !rotated;
  });
}
rotate();
function bgimage() {
  var mainHeadings = document.querySelectorAll(".mainHeading");
  var page2 = document.querySelector("#page2");
  mainHeadings.forEach((e) => {
    e.addEventListener("mouseenter", () => {
      var bgimg = e.getAttribute("data-img");
      page2.style.backgroundImage = `url(${bgimg})`;
    });
  });
}
bgimage();
