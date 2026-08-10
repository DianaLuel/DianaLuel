const pencilCursor = document.querySelector('.pencil-cursor');
const trailCanvas = document.querySelector('.pencil-trail');
const trailContext = trailCanvas.getContext('2d');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');

let lastPoint = null;
let strokes = [];
let animationFrame;

function resizeCanvas() {
    const pixelRatio = window.devicePixelRatio || 1;
    trailCanvas.width = window.innerWidth * pixelRatio;
    trailCanvas.height = window.innerHeight * pixelRatio;
    trailCanvas.style.width = `${window.innerWidth}px`;
    trailCanvas.style.height = `${window.innerHeight}px`;
    trailContext.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
}

function drawTrail(time) {
    trailContext.clearRect(0, 0, window.innerWidth, window.innerHeight);
    strokes = strokes.filter((stroke) => time - stroke.createdAt < 700);

    strokes.forEach((stroke) => {
        const progress = (time - stroke.createdAt) / 700;
        const opacity = (1 - progress) * 0.55;
        const scale = 1 - progress * 0.6;

        trailContext.save();
        trailContext.globalAlpha = opacity;
        trailContext.strokeStyle = '#d92626';
        trailContext.lineWidth = 2.5 * scale;
        trailContext.lineCap = 'round';
        trailContext.beginPath();
        trailContext.moveTo(stroke.fromX, stroke.fromY);
        trailContext.lineTo(stroke.toX, stroke.toY);
        trailContext.stroke();
        trailContext.restore();
    });

    animationFrame = requestAnimationFrame(drawTrail);
}

function followPencil(event) {
    pencilCursor.style.transform = `translate(${event.clientX - 7}px, ${event.clientY - 43}px) rotate(42deg)`;
    pencilCursor.classList.add('is-visible');

    if (!reducedMotion.matches && lastPoint) {
        const distance = Math.hypot(event.clientX - lastPoint.x, event.clientY - lastPoint.y);
        if (distance > 3) {
            strokes.push({
                fromX: lastPoint.x,
                fromY: lastPoint.y,
                toX: event.clientX,
                toY: event.clientY,
                createdAt: performance.now()
            });
        }
    }

    lastPoint = { x: event.clientX, y: event.clientY };
}

function startPencil() {
    if (!finePointer.matches) return;
    resizeCanvas();
    document.documentElement.classList.add('pencil-cursor-active');
    window.addEventListener('pointermove', followPencil);
    window.addEventListener('resize', resizeCanvas);
    document.addEventListener('mouseleave', () => {
        pencilCursor.classList.remove('is-visible');
        lastPoint = null;
    });
    animationFrame = requestAnimationFrame(drawTrail);
}

startPencil();
