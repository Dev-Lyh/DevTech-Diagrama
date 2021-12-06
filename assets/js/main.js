var bannerText = document.querySelector('.bannerText')
let userpass = document.getElementById('userPass')
let visibleToggle = document.getElementById('visible')

bannerText.innerHTML = `Aprenda e se desenvolva através da DEV`

function toggleView (e) {
  if(visibleToggle == true) {
    userpass.type = "text"
  }
}