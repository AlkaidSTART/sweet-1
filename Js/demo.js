
// 获取按钮元素
const btnn = document.querySelector('.btn');

// 添加点击事件监听器
btnn.addEventListener('click', () => {
    // 添加 clicked 类触发动画
    btnn.classList.add('clicked');
    // 动画结束后移除按钮的点击事件
    btnn.addEventListener('animationend', () => {
        btnn.style.pointerEvents = 'none';
    }, { once: true });
});
