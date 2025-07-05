const str1 = [
    "Baby, take my hand",
    "I want you to be my husband",
    "Cause you're my Iron Man",
    "And I love you 3000",
    "Baby, take a chance",
    "Cause I want this to be something",
    "Straight out of a Hollywood movie",2
]
const str11 = [
    "I see you standing there",
    "In your hulk outerwear",
    "And all I can think",
    "Is where is the ring",
    "Cause I know you wanna ask",
    "Scared the moment will pass",
    "I can see it in your eyes",
    "Just take me by surprise",
    "And all my friends they tell me they see",
    "You're planning to get on one knee",
    "But I want it to be out of the blue",
    "So make sure I have no clue",
    "When you ask",3
]
const str111 = [
    "Baby, take my hand",
    "I want you to be my husband",
    "Cause you're my Iron Man",
    "And I love you 3000",
    "Baby, take a chance",
    "Cause I want this to be something",
    "Straight out of a Hollywood movie",
]
const str1111 = [
    "Now we're having dinner",
    "And baby you're my winner",
    "I see the way you smile",
    "You're thinking about the aisle",
    "You reach in your pocket",
    "Emotions unlocking",
    "And before you could ask",
    "I answer too fast",
    "And all my friends they tell me they see",
    "You're planning to get on one knee",
    "So now I can't stop thinking about you",
    "I figured out all of the clues",
    "So now I ask",
]
const str11111=[
    "Baby, take my hand",
    "I want you to be my husband",
    "Cause you're my Iron Man",
    "And I love you 3000",
    "Baby, take a chance",
    "Cause I want this to be something",
    "Straight out of a Hollywood movie",
]
const str111111=[
    "No spoilers please",
    "No spoilers please",
]
const str1111111=[
    "Baby, take my hand",
    "I want you to be my husband",
    "Cause you're my Iron Man",
    "And I love you 3000",
    "Baby, take a chance",
    "Cause I want this to be something",
    "Straight out of a Hollywood movie, baby",
]
    const str11111111=[
    "No spoilers please",
    "No spoilers please",
    "No spoilers please",
    "No spoilers please",
    "And I love you 3000",
]
const str2 = [
    "宝贝，牵起我的手",
    "我想让你成为我的丈夫",
    "因为你是我的钢铁侠",
    "我爱你三千遍",
    "宝贝，抓住机会",
    "因为我希望这能有所不同",
    "就像好莱坞电影里的情节"
];

const str22 = [
    "我看见你站在那里",
    "穿着绿巨人的外套",
    "我满脑子想的都是",
    "戒指在哪里呢",
    "因为我知道你想开口",
    "害怕这一刻转瞬即逝",
    "我能从你眼中出来",
    "给我个惊喜吧",
    "我所有朋友都跟我说",
    "你打算单膝跪地求婚",
    "但我希望这一切突如其来",
    "所以确保我毫无察觉",
    "当你求婚的时候"
];

const str222 = [
    "宝贝，牵起我的手",
    "我想让你成为我的丈夫",
    "因为你是我的钢铁侠",
    "我爱你三千遍",
    "宝贝，抓住机会",
    "因为我希望这能有所不同",
    "就像好莱坞电影里的情节"
];

const str2222 = [
    "现在我们正在共进晚餐",
    "宝贝，你是我的赢家",
    "我看到你微笑的样子",
    "你在想着婚礼的红毯",
    "你把手伸进口袋",
    "情绪逐渐失控",
    "在你开口之前",
    "我回答得太快了",
    "我所有朋友都跟我说",
    "你打算单膝跪地求婚",
    "所以现在我止不住地想你",
    "我识破了所有的线索",
    "所以现在我问"
];

const str22222 = [
    "宝贝，牵起我的手",
    "我想让你成为我的丈夫",
    "因为你是我的钢铁侠",
    "我爱你三千遍",
    "宝贝，抓住机会",
    "因为我希望这能有所不同",
    "就像好莱坞电影里的情节",
    "那就给我个惊喜吧",
    "我边的朋友都跟我说",
    "你在计划着单膝跪地求婚",
    "但我希望这一切出乎意料",
    "所以确保我毫无头绪",
    "在你求婚的时候"
];

const str222222 = [
    "请别剧透",
    "请别剧透~"
];

const str2222222 = [
    "宝贝，牵起我的手",
    "我想让你成为我的丈夫",
    "因为你是我的钢铁侠",
    "我爱你三千遍",
    "宝贝，抓住机会",
    "因为我希望这能有所不同",
    "就像好莱坞电影里的情节，宝贝"
];

const str22222222 = [
    "请别剧透",
    "请别剧透~",
    "请别剧透~~",
    "请别剧透~~~",
    "我爱你三千遍"
];
const length1 = str1.length;
const length2 = str2.length;
const audio1 = document.getElementById('audio');
const btn1 = document.querySelector('.btn');

let currentIndex = 0; // 用于记录当前歌词的索引
let intervalId;

// 定义歌词数组和对应的间隔时间
const lyricConfig = [
    { eng: str1, chi: str2, interval: 2500 },
    { eng: str11, chi: str22, interval: 3300 },
    { eng: str111, chi: str222, interval: 2500 },
    { eng: str1111, chi: str2222, interval: 3300 },
    { eng: str11111, chi: str22222, interval: 2500 },
    { eng: str111111, chi: str222222, interval: 5000 },
    { eng: str1111111, chi: str2222222, interval: 3100 },
    { eng: str11111111, chi: str22222222, interval: 4600 }
];

function playAudio() {
    // 监听音频的 play 事件
    audio1.addEventListener('play', () => {
        // 重置索引
        currentIndex = 0;
        // 延迟 1000 毫秒（1 秒）后开始显示第一组歌词
        setTimeout(() => {
            showLyrics(0, 0);
        }, 1000);
    });

    // 监听音频的 ended 事件
    audio1.addEventListener('ended', () => {
        const box1 = document.querySelector('#box1');
        const box2 = document.querySelector('#box2');
        // 让英文和中文歌词容器透明度变为 0
        box1.style.opacity = 0;
        box2.style.opacity = 0;
        // 清除定时器
        clearInterval(intervalId);
    });

    // 自定义每组歌词首条显示的延时时间，单位：毫秒
    const firstLineDelay = 1500; 

    function showLyrics(configIndex, lineIndex) {
        if (configIndex >= lyricConfig.length) {
            // 所有歌词显示完毕，清除定时器
            clearInterval(intervalId);
            return;
        }

        const { eng, chi, interval } = lyricConfig[configIndex];

        const delay = lineIndex === 0 ? firstLineDelay : interval;

        intervalId = setTimeout(() => {
            if (lineIndex < eng.length && lineIndex < chi.length) {
                const box1 = document.querySelector('#box1');
                const box2 = document.querySelector('#box2');

                // 让英文歌词透明度变为 0
                box1.style.opacity = 0;

                // 等待过渡效果完成后更新英文歌词
                setTimeout(() => {
                    box1.innerHTML = eng[lineIndex];
                    box1.style.opacity = 1;
                }, 500); // 500ms 与 CSS 过渡时间一致

                // 逐字渐出显示中文歌词
                showCharactersGradually(box2, chi[lineIndex]);
                // 设置定时器显示下一句歌词
                showLyrics(configIndex, lineIndex + 1);
            } else {
                // 当前组歌词显示完毕，显示下一组
                showLyrics(configIndex + 1, 0);
            }
        }, delay);
    }

    // 逐字渐出显示歌词的函数
    function showCharactersGradually(box, text) {
        box.innerHTML = ''; // 清空原有内容
        const chars = text.split('');
        chars.forEach((char, index) => {
            const span = document.createElement('span');
            span.classList.add('fade-in-char');
            span.textContent = char;
            span.style.animationDelay = `${index * 0.1}s`; // 每个字符延迟 0.1 秒
            box.appendChild(span);
        });
    }
}

btn1.addEventListener('click', () => {
    playAudio();
    audio1.play();
});




