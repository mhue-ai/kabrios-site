const header = document.querySelector('.site-header');

const onScroll = () => {
  if (!header) return;
  header.style.background = window.scrollY > 10
    ? 'rgba(8, 14, 28, 0.86)'
    : 'rgba(8, 14, 28, 0.72)';
};

window.addEventListener('scroll', onScroll);
onScroll();

const tabButtons = document.querySelectorAll('.tab-button');
const tabPanels = document.querySelectorAll('.tab-panel');

const activateTab = (target) => {
  tabButtons.forEach((button) => {
    const isActive = button.dataset.tab === target;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-selected', String(isActive));
  });

  tabPanels.forEach((panel) => {
    const isActive = panel.id === `panel-${target}`;
    panel.classList.toggle('active', isActive);
    panel.hidden = !isActive;
  });
};

tabButtons.forEach((button) => {
  button.addEventListener('click', () => activateTab(button.dataset.tab));
  button.addEventListener('keydown', (event) => {
    if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;

    const buttons = [...tabButtons];
    const currentIndex = buttons.indexOf(button);
    const direction = event.key === 'ArrowRight' ? 1 : -1;
    const nextIndex = (currentIndex + direction + buttons.length) % buttons.length;
    buttons[nextIndex].focus();
    activateTab(buttons[nextIndex].dataset.tab);
  });
});
