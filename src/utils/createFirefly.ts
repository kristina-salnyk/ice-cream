export default function createFirefly(
  width: number,
  height: number,
  offsetTop: number,
  offsetLeft: number
): HTMLDivElement {
  const firefly = document.createElement('div');
  firefly.classList.add('firefly');
  firefly.innerHTML = '&#x2022;';

  firefly.style.left = Math.random() * width + offsetLeft + 'px';
  firefly.style.top = Math.random() * height + offsetTop + 'px';
  firefly.style.animationDuration = Math.random() * 10 + 5 + 's';
  firefly.style.animationDirection =
    Math.random() * 2 - 1 > 0 ? 'normal' : 'reverse';

  return firefly;
}
