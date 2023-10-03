let timeoutID;
const notification = document.querySelector("#notification");
const openBtn = document.querySelector(".openBtn")
const closeBtn = document.querySelector(".closeBtn")

function showNotification() {
  notification.style.display = "block";
  notification.classList.add("active");

  const timerAnimation = document.createElement("div");
  timerAnimation.classList.add("timer-animation");
  notification.appendChild(timerAnimation);

  timeoutID = setTimeout(() => {
    closeNotification();
  }, 3000);
}

function closeNotification() {
  clearTimeout(timeoutID);

  notification.style.animation = "fadeOut 0.3s forwards";

  setTimeout(() => {
    notification.style.display = "none";
    notification.style.animation = "fadeIn 0.3s forwards";
    const timerAnimation = document.querySelector(".timer-animation");
    timerAnimation.remove();
  }, 300);
}
openBtn.addEventListener("click" ,showNotification)
closeBtn.addEventListener("click", closeNotification)
