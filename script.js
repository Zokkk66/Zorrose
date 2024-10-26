// script.js

document.addEventListener('DOMContentLoaded', function () {
    const title = document.getElementById('color-changing-title');
    const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
    let index = 0;
    setInterval(function () {
        title.style.color = colors[index];
        index = (index + 1) % colors.length;
    }, 1000);

    // 搜索框功能
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const searchFeedback = document.getElementById('searchFeedback');

    searchButton.addEventListener('click', function () {
        const query = searchInput.value;
        // 这里可以添加搜索逻辑
        searchFeedback.textContent = '搜索结果：' + query;
    });
});
