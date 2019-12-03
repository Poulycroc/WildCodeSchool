var toggleNav = function() {
  if (this.classList.contains('openned')) {
    this.classList.remove('openned')
  } else {
    this.classList.add('openned')
  }
}



document.getElementById('navigation-btn').addEventListener('click', toggleNav());
