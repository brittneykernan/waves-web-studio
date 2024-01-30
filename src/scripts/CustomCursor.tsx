const animationDurationMax = 400;
const elementsWithCursor = document.querySelectorAll('.useCustomCursor');
const cursor = document.getElementById('cursor');

const cursorSize = cursor?.offsetWidth ?? 0;

let cursorX = 0;
let cursorY = 0;

let animationStartTime: number | null = null;
let isHovering = false;
let startScaleAnimation = false;

const setCursorPosition = (e: MouseEvent) => {
  cursorX = e.clientX - cursorSize / 2;
  cursorY = e.clientY - cursorSize / 2;
};

const animateCursor = (now: number) => {
  if (startScaleAnimation) {
    animationStartTime = now;
    startScaleAnimation = false;
  }

  const animationDuration = now - animationStartTime!;
  const isScaling = animationDuration <= animationDurationMax;

  cursor!.style.transform = `translate(${cursorX}px,${cursorY}px) translate3D(0,0,0)`;

  if (isHovering || isScaling) {
    requestAnimationFrame(animateCursor);
  }
};

const startAnimation = (e: Event) => {
  startScaleAnimation = true;
  isHovering = true;

  cursor?.classList.add('active');
  setCursorPosition(e as MouseEvent);
  requestAnimationFrame(animateCursor);
};

const endAnimation = () => {
  startScaleAnimation = true;
  isHovering = false;

  cursor?.classList.remove('active');
};

const startPress = () => {
  cursor?.classList.add('clicked');
};

const endPress = () => {
  setTimeout(() => {
    cursor?.classList.remove('clicked');
  }, 200);
};

const registerAnimation = (project: Element) => {
  project.addEventListener('mouseenter', startAnimation);
  // todo: you could register these on enter, and remove on exit if you see performance issues
  project.addEventListener('mouseleave', endAnimation);
  project.addEventListener('mousedown', startPress);
  project.addEventListener('mouseup', endPress);
};

const init = () => {
  document.body.addEventListener('mousemove', setCursorPosition);
  elementsWithCursor.forEach(registerAnimation);
};

export default init;
