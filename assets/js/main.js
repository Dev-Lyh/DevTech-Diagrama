const bannerText = document.querySelector('.bannerText')

bannerText.innerHTML = `Aprenda e se desenvolva através da DEV`

const menuOpen = document.getElementById('openMenu')
const menuClose = document.getElementById('closeMenu')
const navBar = document.querySelector('.navBar')

const lupa = document.querySelector('.lupa')
const searchForm = document.getElementById('searchForm')

menuOpen.addEventListener('click', () => {
  navBar.classList.add('active')
  menuOpen.style.display = 'none'
  menuClose.style.display = 'block'
})

menuClose.addEventListener('click', () => {
  navBar.classList.remove('active')
  searchForm.classList.remove('active')
  menuOpen.style.display = 'block'
  menuClose.style.display = 'none'
})

lupa.addEventListener('click', () => {
  searchForm.classList.add('active')
  menuOpen.style.display = 'none'
  menuClose.style.display = 'block'
})