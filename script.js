const tabButtons = document.querySelectorAll('.tab-button');
const tabPanels = document.querySelectorAll('.tab-panel');

const activateTab = (target) => {
  tabButtons.forEach((button) => {
    const isActive = button.dataset.tab === target;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-selected', String(isActive));
  });

  tabPanels.forEach((panel) => {
    panel.hidden = panel.id !== `panel-${target}`;
  });
};

tabButtons.forEach((button) => {
  button.addEventListener('click', () => activateTab(button.dataset.tab));
});
