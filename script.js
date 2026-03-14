const header = document.querySelector('.site-header');
const onScroll = () => {
  if (window.scrollY > 10) {
    header.style.background = 'rgba(8, 14, 28, 0.86)';
  } else {
    header.style.background = 'rgba(8, 14, 28, 0.72)';
  }
};
window.addEventListener('scroll', onScroll);
onScroll();
