// script.js

document.addEventListener('DOMContentLoaded', function () {
    const text = document.getElementById('color-changing-text');
    const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
    let index = 0;
    setInterval(function () {
        text.style.color = colors[index];
        index = (index + 1) % colors.length;
    }, 1000);

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
});
