function locomotive() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    lerp: 0.1,
  });
}
locomotive();
function loader() {
  var tl = gsap.timeline();

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
      delay: 0.5
    },
    "gotogether"
  );
  tl.to(
    "#loaderRightNav svg g, .bottomNav svg polyline",
    {
      stroke: "black",
      duration: 0.5,
      delay: 0.5
    },
    "gotogether"
  );

  tl.to(
    "#loader nav svg path",
    {
      fill: "black",
      duration: 0.5,
      delay: 0.5
    },
    "gotogether"
  );
  tl.to(".loaderHeading", {
    opacity: 1,
    duration: 0.2,
    ease: "expo.out",
  });
  tl.to("#loader",{
    opacity: 0
  })
  tl.to("#loader",{
    display: "none"
  })
}
loader();
