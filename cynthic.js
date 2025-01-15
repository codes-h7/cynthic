var timeout;

const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

function circlemouse(xsacle, yscale) {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      ".circle"
    ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xsacle} , ${yscale})`;
  });
}
circlemouse();

function circleshape() {
  let xsacle = 1; // define default value of mouse coursor
  let yscale = 1; // define default value of mouse coursor

  let xpre = 0;
  let ypre = 0;
  window.addEventListener("mousemove", function (dets) {
    xpre = dets.clientX;
    ypre = dets.clientY;
    xsacle = gsap.utils.clamp(0.5, 1.2, dets.clientX - xpre);
    yscale = gsap.utils.clamp(0.5, 1.2, dets.clientY - ypre);
    circlemouse(xsacle, yscale);
  });
}
circleshape();

// document.querySelectorAll(".elem").forEach(function (elem) {
//   elem.addEventListener("mousemove", function (dets) {
//     let imgg = elem.clientY - elem.getBoundingClientRect().top;
//     gsap.to(elem.querySelector("img"), {
//       opacity: 1,
//       ease: Power1,
//       top:imgg,
//       left:dets.clientX
//     });
//   });
// });
document.querySelectorAll(".elem").forEach(function (elem) {
  let rotate = 0; //default value of rotate
  let diffrotate = 0;
  elem.addEventListener("mousemove", function (dets) {
    diffrotate = dets.clientX - rotate;
    rotate = dets.clientX;
    let imgg = elem.clientY - elem.getBoundingClientRect().top;
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      left: dets.clientX,
      top: imgg,
      rotate: gsap.utils.clamp(-20, 20, diffrotate),
    });
  });
  elem.addEventListener("mouseleave", function (img) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      duration:.5,
      ease: Power1
    });
  });
});
// gsap start from here
function animation() {
  let elem = gsap.timeline();
  elem.from(".nav", { duration: 1, y: "-10", opacity: 0 });
  elem.to(".boundring-elem", {
    duration: 1,
    y: "-5",
    opacity: 1,
    stagger: 0.5,
  });
  elem.from(".hero-fotter", {
    duration: 1,
    y: "30",
    opacity: 0,
  });
  elem.from(".chotte-heading", {
    duration: 1,
    y: "30",
    opacity: 0,
  });
  gsap.from(".page2", {
    duration: 1,
    y: "100",
    opacity: 0,
    //   scrollTrigger: {
    //     trigger: ".elem",
    //     // scroller: "body",
    //     start: "top 80%",
    //     end: "top 82%",
    //     scrub: 2,
    //     markers: true
    // }
  });
}
animation();
