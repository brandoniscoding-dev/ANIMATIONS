function setState(state) {
    const container = document.getElementById('container');
    const soleil = document.getElementById('emoji-soleil');
    const lune = document.getElementById('emoji-lune');

    container.className = '';
    soleil.classList.remove('rotate');
    lune.classList.remove('oscillate');

    // Reset positions for transition
    soleil.style.bottom = '-100%';
    lune.style.bottom = '-100%';
    soleil.style.opacity = 0;
    lune.style.opacity = 0;

    // Force reflow to apply the reset positions
    void soleil.offsetWidth;
    void lune.offsetWidth;

    if (state === 'jour') {
        container.classList.add('jour');
        soleil.classList.add('rotate');
        soleil.style.opacity = 1;
        soleil.style.bottom = '10%';
    } else if (state === 'nuit') {
        container.classList.add('nuit');
        lune.classList.add('oscillate');
        lune.style.opacity = 1;
        lune.style.bottom = '10%';
    } else if (state === 'jourNuit') {
        container.classList.add('jourNuit');
        soleil.classList.add('rotate');
        lune.classList.add('oscillate');
        soleil.style.opacity = 1;
        lune.style.opacity = 1;
        soleil.style.bottom = '10%';
        lune.style.bottom = '10%';
    }
}
