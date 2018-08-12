function changeBackground (el, value) {
  var element = document.getElementById(el)
  // remove former class and add the new one chosen by user
  var formerClass = element.className
  if (formerClass !== '') {
    element.classList.remove(formerClass)
  }
  element.classList.add(value)
}

var dropdown = document.getElementById('dropdown')
dropdown.addEventListener('click', function () {
  var animal = dropdown.value
  // remove former class and add the new one chosen by user
  changeBackground('header', animal)
})

var save = document.getElementById('field_save')
save.addEventListener('click', function () {
  var saveValue = document.querySelector('input[name=save]:checked').value
  // change the background depending on the user choice
  changeBackground('general_background', saveValue)
})

// set change colors of logos on hover
var logos = document.getElementsByTagName('svg')
for (const logo of logos) {
  let logoName = logo.id
  let backName = logoName + '_back'
  let drawName = logoName + '_draw'
  logo.addEventListener('mouseenter', function () {
    logo.children[backName].setAttribute('fill', 'hsl(260,100%,60%)')
    logo.children[drawName].setAttribute('fill', 'hsl(260,50%,90%)')
  })
  logo.addEventListener('mouseleave', function () {
    logo.children[backName].setAttribute('fill', 'hsl(260,50%,90%)')
    logo.children[drawName].setAttribute('fill', 'hsl(260,100%,60%)')
  })
}
