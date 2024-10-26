// script.js

document.addEventListener('DOMContentLoaded', function () {
    const text = document.getElementById('color-changing-text');
    const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
    let index = 0;
    setInterval(function () {
        text.style.color = colors[index];
        index = (index + 1) % colors.length;
    }, 1000);
});
