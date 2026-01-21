
document.getElementById("joinBtn").addEventListener("click", () => {
  alert("Welcome to FitLife 💪 Let's start!");
});

function scrollToContact() {
  window.location.href = "contact.html";
}

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  let start = 0;
  let end = counter.getAttribute("data-target");
  let speed = 30;

  let update = () => {
    start++;
    counter.innerText = start;
    if (start < end) {
      setTimeout(update, speed);
    }
  };

  update();
});
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", function () {
    document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
    this.classList.add("active");
  });
});
document.getElementById("contactForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  let msg = document.getElementById("formMsg");
  msg.style.color = "green";
  msg.innerText = "Message sent successfully ✔";

  this.reset();
});
