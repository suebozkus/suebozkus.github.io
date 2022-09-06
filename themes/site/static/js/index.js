// TODO 1. Select Element with Javascript.
// TODO 2. After selection, add event listener.
// TODO 3. Select body element and toggle class to the body.
// TODO 4. Add some css for the dark theme of this class.

const toggler = document.getElementById("toggletheme");
toggler.addEventListener("change", (e) => {
  const body = document.getElementById("body");
  body.classList.toggle("darktheme");
});

// TODO 1. Hide the Elements.
// TODO 2. Scroll Event listener.
// TODO 3. Calculate off-set of the blocks and define threshhold when to show.
// TODO 4. Show the elements.
// TODO 5. Trigger the reveal effect in initial offset.

document.addEventListener("scroll", (e) => {
  if (
    window.scrollY + window.innerHeight - 300 >
    document.getElementById("projects").offsetTop
  ) {
    document.getElementById("projects").classList.remove("opacity-0");
  }
  if (
    window.scrollY + window.innerHeight - 300 >
    document.getElementById("contact").offsetTop
  ) {
    document.getElementById("contact").classList.remove("opacity-0");
  }
});

// Fetch IDs
// Upon click, show modal
// Upon close, close modal

const open = document.getElementById('open');
const modal_container = document.getElementById('modal-container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  modal_container.classList.add('show');
});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
})


grecaptcha.ready(function() {
  grecaptcha.execute('6LcHItUhAAAAANY6vx8wLFS7rvBkm7HZcAieTjKI', {action: 'homepage'})
  .then(function(token) {
    document.getElementById('captchaResponse').value = token;
  });
});