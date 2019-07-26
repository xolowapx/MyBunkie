const mySwitch =(x)=> {
 x.classList.toggle('change');
 const sidepanel = document.getElementById('sidebar');
const mainNav = document.getElementById('main');

sidepanel.classList.toggle('open');
mainNav.classList.toggle('add-margin');
}