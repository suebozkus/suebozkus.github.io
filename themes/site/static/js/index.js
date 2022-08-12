// TODO 1. Select Element with Javascript.
// TODO 2. After selection, add event listener.
// TODO 3. Select body element and toggle class to the body.
// TODO 4. Add some css for the dark theme of this class.

const toggler = document.getElementById("toggletheme");
toggler.addEventListener ("change", (e) => {
    const body = document.getElementById("body");
    body.classList.toggle("darktheme");
})
