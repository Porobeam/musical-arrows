const playDo = () => {
    const audio = new Audio(`src/do.wav`);
    audio.play();
    document.getElementById('left').classList.add('active');
};

const playRe = () => {
    const audio = new Audio(`src/re.wav`);
    audio.play();
    document.getElementById('down').classList.add('active');
};

const playMi = () => {
    const audio = new Audio(`src/mi.wav`);
    audio.play();
    document.getElementById('up').classList.add('active');
};

const playFa = () => {
    const audio = new Audio(`src/fa.wav`);
    audio.play();
    document.getElementById('right').classList.add('active');
};


document.addEventListener('keydown', function(event)
{
    if (event.key === 'ArrowLeft')
    {
        playDo();
        document.addEventListener('keyup', function()
        {
            document.getElementById('left').classList.remove('active');
        });
    }
    else if (event.key === 'ArrowDown')
    {
        playRe();
        document.addEventListener('keyup', function() {
            document.getElementById('down').classList.remove('active');
        });
    }
    else if (event.key === 'ArrowUp')
    {
        playMi();
        document.addEventListener('keyup', function() {
            document.getElementById('up').classList.remove('active');
        });
    }
    else
    {
        playFa();
        document.addEventListener('keyup', function() {
            document.getElementById('right').classList.remove('active');
        });
    }
});