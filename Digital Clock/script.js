setInterval(() => {
    // Get time indicator elements
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');

    // Digits time indicator
    let hh = document.getElementById('hh');
    let mm = document.getElementById('mm');
    let ss = document.getElementById('ss');
    // Dot time indicator
    let dotH = document.querySelector('.h_dot');
    let dotM = document.querySelector('.m_dot');
    let dotS = document.querySelector('.s_dot');

    // Get current time
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let ap = h >= 12 ? 'PM' : 'AM';

    // CONVERT TO 12HR
    if (h > 12) {
        h = h - 12;
    }
    // Add 0 before single digit
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    // Set time and label
    hours.innerHTML = h + ' Hours';
    minutes.innerHTML = m + ' Minutes';
    seconds.innerHTML = s + ' Seconds';
    ampm.innerHTML = ap;

    // Set the time circulator
    hh.style.strokeDashoffset = 440 - (440 * h) / 12;
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;

    // Set time position indicator
    dotH.style.transform = `rotate(${h * 30}deg)`;
    dotM.style.transform = `rotate(${m * 6}deg)`;
    dotS.style.transform = `rotate(${s * 6}deg)`;
}, 1000);
