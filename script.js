var pwd = document.querySelector('#pwd');
var cpwd = document.querySelector('#cpwd');

cpwd.addEventListener('input', toggleError);
pwd.addEventListener('input', toggleError);
function toggleError(e) {
  if (!e.target.classList.contains('error') & cpwd.value != pwd.value) {
    pwd.classList.toggle('error');
    cpwd.classList.toggle('error');
  }
  else if (e.target.classList.contains('error') & cpwd.value == pwd.value) {
    pwd.classList.toggle('error');
    cpwd.classList.toggle('error');
  }

}