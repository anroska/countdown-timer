document.addEventListener('DOMContentLoaded',
    () => {
        const countdownTimer = new Date('Feb 1 2023 00:00:00');

        const daysVal = document.querySelector('.time-count__days .time-count__val');
        const hoursVal = document.querySelector('.time-count__hours .time-count__val');
        const minVal = document.querySelector('.time-count__min .time-count__val');
        const secVal = document.querySelector('.time-count__sec .time-count__val');

        const daysText = document.querySelector('.time-count__days .time-count__text');
        const hoursText = document.querySelector('.time-count__hours .time-count__text');
        const minText = document.querySelector('.time-count__min .time-count__text');
        const secText = document.querySelector('.time-count__sec .time-count__text');


            const timeCount = () => {
            let now = new Date();
            let leftUntil = countdownTimer - now;


            let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
            let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
            let minutes = Math.floor(leftUntil / 1000 / 60) % 60;
            let seconds = Math.floor(leftUntil / 1000) % 60;

            daysVal.innerText = days;
            hoursVal.innerText = hours;
            minVal.innerText = minutes;
            secVal.innerText = seconds;
            };

        timeCount();
        setInterval(timeCount, 1000);
    })

