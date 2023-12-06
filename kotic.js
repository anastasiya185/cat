
function startCountdown() {

    const endTime = new Date();
    endTime.setHours(endTime.getHours() + 32);
    endTime.setMinutes(endTime.getMinutes() + 0);
    endTime.setSeconds(endTime.getSeconds() + 60)

    function update() {
        const timeDiff = endTime - new Date();


        if (timeDiff <= 0) {
            clearInterval(timerInterval);
            document.getElementById('timer').innerHTML = "00:00:00";
            celebrate(); 
        } else {

            const hours = Math.floor(timeDiff / (1000 * 60 * 60));
            const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

 
            const formattedTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
            document.getElementById('timer').innerHTML = formattedTime;
        }
    }

 
    function padZero(number) {
        return number < 10 ? `0${number}` : number;
    }

    const timerInterval = setInterval(update, 1000);
}
startCountdown();


function celebrate() {
    // Задаем стиль фона с использованием изображения
    document.body.style.backgroundImage = 'url("IMG_1473.jpg")';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center center';

    // Очистка содержимого таймера
    document.getElementById('timer').innerHTML = "";

    // Задержка перед возвратом цвета фона
    setTimeout(() => {
        // Возвращаем цвет фона
        document.body.style.backgroundColor = "#001F3F";
        // Сбрасываем стиль фона
        document.body.style.backgroundImage = 'none';
    }, 5000); // Ждем 5 секунд, затем возвращаем цвет и сбрасываем фон
}
