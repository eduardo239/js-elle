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
