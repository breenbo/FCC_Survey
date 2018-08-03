var dropdown = document.getElementById('dropdown')
dropdown.addEventListener('click', function() {
  var animal = dropdown.value
  var header = document.getElementsByTagName('header')[0]
  // remove former class and add the new one chosen by user
  var formerClass = header.className
  if (formerClass != "") {
    header.classList.remove(formerClass)
  }
  header.classList.add(animal)
})
