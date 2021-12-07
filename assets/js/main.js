const bannerText = document.querySelector('.bannerText')

bannerText.innerHTML = `Aprenda e se desenvolva através da DEV`

const menuOpen = document.getElementById('openMenu')
const menuClose = document.getElementById('closeMenu')
const navBar = document.querySelector('.navBar')

menuOpen.addEventListener('click', () => {
  navBar.classList.add('active')
  menuOpen.style.display = 'none'
  menuClose.style.display = 'block'
})

menuClose.addEventListener('click', () => {
  navBar.classList.remove('active')
  menuOpen.style.display = 'block'
  menuClose.style.display = 'none'
})