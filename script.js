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

    // 模态窗口功能
    const modal = document.getElementById('myModal');
    const closeButton = document.querySelector('.close-button');
    const openModalButton = document.getElementById('openModalButton');

    // 打开模态窗口
    function openModal() {
        modal.style.display = 'block';
    }

    // 关闭模态窗口
    function closeModal() {
        modal.style.display = 'none';
    }

    // 点击关闭按钮关闭模态窗口
    closeButton.addEventListener('click', closeModal);

    // 点击窗口外部关闭模态窗口
    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            closeModal();
        }
    });

    // 点击打开模态窗口按钮
    openModalButton.addEventListener('click', openModal);

    // 幻灯片功能
    const slides = document.querySelectorAll('.slides img');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach(function (slide) {
            slide.style.display = 'none';
        });
        slides[index].style.display = 'block';
    }

    prevButton.addEventListener('click', function () {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    nextButton.addEventListener('click', function () {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

    // 初始化幻灯片
    showSlide(currentSlide);
});
