const button_show = document.getElementById('button_show');
const button_close = document.getElementById('button_close');
const modal = document.getElementById('modal');

function show_modal() {
  const x = modal.classList.contains('show');
  if (x) {
    modal.classList.remove('show');
  } else {
    modal.classList.add('show');
  }
}
// play
const button_show_play = document.getElementById('show_play');
const button_close_play = document.getElementById('close_play');
const modal_play = document.getElementById('modal_play');

function show_modal_play() {
  const x = modal_play.classList.contains('close_play');
  if (x) {
    modal_play.classList.remove('close_play');
  } else {
    modal_play.classList.add('close_play');
  }
}

button_show_play.addEventListener('click', show_modal_play());

// shrink navbar
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const links = document.querySelectorAll('.menu a');
  const navigation = document.getElementById('navigation');

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    links.forEach((e) => (e.style.fontSize = '.9rem'));
    navigation.style.backgroundColor = '#fff';
    navigation.style.height = '36px';
    navigation.style.boxShadow =
      '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)';
  } else {
    navigation.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    links.forEach((e) => (e.style.fontSize = '1rem'));
    navigation.style.height = 'auto';
    navigation.style.boxShadow =
      '0 1px 1px rgba(0, 0, 0, 0.06), 0 1px 1px rgba(0, 0, 0, 0.08)';
  }
}
