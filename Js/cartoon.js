const canvas = document.querySelector(`#rain`);
const ctx = canvas.getContext(`2d`);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 创建雨滴数组
const raindrops = [];

// 初始化雨滴
function initrain() {
    for (let i = 0; i < 150; i++) {
        raindrops[i] = {
            x: Math.random() * canvas.width, // 随机水平位置
            y: 0, // 从顶部开始
            len: Math.random() * 100, // 雨滴长度
            speed: Math.random() * 10 // 下落速度
        };
    }
}

// 绘制雨滴
function drawrain() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#000'; // 雨滴颜色
    ctx.lineWidth = 1; // 雨滴线宽

    raindrops.forEach(raindrop => {
        ctx.beginPath();
        ctx.moveTo(raindrop.x, raindrop.y);
        ctx.lineTo(raindrop.x, raindrop.y + raindrop.len);
        ctx.stroke();

        raindrop.y += raindrop.speed;

        // 若雨滴超出底部，重置到顶部
        if (raindrop.y > canvas.height) {
            raindrop.y = 0;
            raindrop.x = Math.random() * canvas.width;
        }
    });

    requestAnimationFrame(drawrain);
}

initrain();
requestAnimationFrame(drawrain);







