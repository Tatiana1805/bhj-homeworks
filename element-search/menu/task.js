const link = document.querySelector('.menu_main');
link.addEventListener('click', element => {
  const open = element.target
  if (!open.classList.contains('menu__link')) return false
  const menuItem = open.closest('.menu__item')
  if (!menuItem.querySelector('.menu_sub')) return false
  element.preventDefault();
  let menuActive = menuItem.querySelector('.menu_active')
  if (menuActive) {
    menuActive.classList.remove('menu_active');
    return false
  } 
  menuActive = link.querySelector('.menu_active')
  if (menuActive) menuActive.classList.remove('menu_active');
  menuItem.querySelector('.menu_sub').classList.add('menu_active')
})
