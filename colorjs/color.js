const body = document.querySelector("#hexcolors");
const h1 = document.querySelector("#headin");
const clickMe = document.querySelector("#click");
const spa = document.querySelector(".hex");

clickMe.addEventListener("click", function () {
  let nums = "0123456789abcdef";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += nums[Math.floor(Math.random() * nums.length)];
  }
  spa.textContent= color;
  body.style.background = color;
});

clickMe.addEventListener("mouseover", function () {
  clickMe.style.boxShadow = "6px 6px 10px black ";
});
clickMe.addEventListener("mouseout", function () {
  clickMe.style.boxShadow = "";
});
