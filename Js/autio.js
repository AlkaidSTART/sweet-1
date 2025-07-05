// 获取音频元素，与 HTML 中的 ID 保持一致
const audio = document.getElementById('audio');
const btn = document.querySelector('.btn');

// 封装事件监听函数
function setupAudioEventListeners() {
    // 监听音频开始播放事件
    audio.addEventListener('play', () => {
        console.log('音频开始播放');
    });

    // 监听音频暂停事件
    audio.addEventListener('pause', () => {
        console.log('音频已暂停');
    });

    // 监听音频播放结束事件
    audio.addEventListener('ended', () => {
        console.log('音频播放结束');
        // 移除 clicked 类，重置按钮样式
        btn.classList.remove('clicked');
        // 移除 fade-out 类
        btn.classList.remove('fade-out');
        // 显示按钮
        btn.style.display = 'block';
        // 恢复按钮点击事件
        btn.style.pointerEvents = 'auto';
    });

    // 监听音频加载元数据事件
    audio.addEventListener('loadedmetadata', () => {
        console.log(`音频元数据加载完成，时长: ${audio.duration} 秒`);
    });

    // 监听音频加载进度事件
    audio.addEventListener('progress', () => {
        const loaded = audio.buffered.length > 0 ? audio.buffered.end(0) : 0;
        const total = audio.duration;
        if (total > 0) {
            const percentage = (loaded / total) * 100;
            console.log(`音频加载进度: ${percentage.toFixed(2)}%`);
        }
    });

    // 监听音频播放错误事件
    audio.addEventListener('error', () => {
        console.error('音频播放出错');
    });
}

// 封装点击事件处理函数
function handleFirstClick() {
    audio.muted = false;
    audio.play()
      .then(() => {
            console.log('音频播放成功');
            // 添加 fade-out 类，触发过渡效果
            btn.classList.add('fade-out');
            // 过渡结束后隐藏按钮
            setTimeout(() => {
                btn.style.display = 'none';
            }, 500); 
        })
      .catch((error) => {
            console.error('尝试播放音频失败:', error);
        });
}

// 初始化音频事件监听
setupAudioEventListeners();

// 监听按钮点击事件
btn.addEventListener('click', handleFirstClick);