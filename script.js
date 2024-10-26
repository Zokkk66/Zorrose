// script.js

document.addEventListener('DOMContentLoaded', function () {
    const title = document.getElementById('color-changing-title');
    const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
    let index = 0;
    setInterval(function () {
        title.style.color = colors[index];
        index = (index + 1) % colors.length;
    }, 1000);
});
