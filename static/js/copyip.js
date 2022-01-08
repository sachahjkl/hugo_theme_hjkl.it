const ID_BTN = 'copy-ip';

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById(ID_BTN);
  const { ip } = btn.dataset;
  btn.addEventListener('click', () => {
    navigator.clipboard.writeText(ip);
  });
});
