// burger menu animation and appearance

function burgerToggleAnimation(){
  let burger      = document.querySelector('.burger'),
      navbarMenu  = document.querySelector('.navbar__menu'),
      navbarLinks = document.querySelectorAll('.navbar__link');

  burger.addEventListener('click', function(){
    document.querySelector('body').classList.toggle('hidden')
    burger.classList.toggle('burger-toggle')
    navbarMenu.classList.toggle('navbar-active')

    navbarLinks.forEach( (link, index) => {
      if (link.style.animation) {
        link.style.animation = ''
      } else {
        link.style.animation = `navbarItemsFade .5s ease forwards ${index / navbarLinks.length + 0.3}s`
      }
    })
  })
}

burgerToggleAnimation()
