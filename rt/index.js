const canvas = document.getElementById('drawing');
const ctx = canvas.getContext('2d');

const sizeInput = document.getElementById('size');
const renderBtn = document.getElementById('render');

renderBtn.addEventListener('click', () => {
    const size = parseInt(sizeInput.value) || 0;
    canvas.width = size;
    canvas.height = size;

    let start = new Date().getTime();
    wasm.draw(ctx, size, size);
    let end = new Date().getTime();
    let time = end - start;

    const log = document.getElementById('log');
    log.innerText = 'Render time: ' + time + 'ms';
});
