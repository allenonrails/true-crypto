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


// filter list li click events

function fliterCheckboxEvents(){
  let checkboxItems = document.querySelectorAll('.filter-list__item');

  checkboxItems.forEach(li => {
    li.querySelector('.checkbox-item').addEventListener('click', function(){
      let input = li.querySelector('.filter-list__input');
      this.parentElement.classList.toggle('checkbox-active')
      if (input.checked == false){
        input.checked = 'true'
        numCounterInTheFilterUl()
      } else if (input.checked){
        input.checked = ''
        numCounterInTheFilterUl()
      }
      
    })
  });
}

// btn filter reset

function fliterCheckboxActiveReset(){
  document.querySelector('.calendar-filter__btn').addEventListener('click', function(){
    document.querySelectorAll('.filter-list__item').forEach(li => {
      let input = li.querySelector('.filter-list__input');
      if (li.classList.contains('checkbox-active')){
        input.checked = ''
        li.classList.remove('checkbox-active')
        numCounterInTheFilterUl()
      }
    });
  })
}

fliterCheckboxEvents()
fliterCheckboxActiveReset()

// filter list header num counter

function numCounterInTheFilterUl(){
  document.querySelectorAll('.filter-list').forEach(list => {
    let countActiveItems = list.querySelectorAll('.checkbox-active').length;
    list.querySelector('.filter-list__title > span').innerText = countActiveItems
  })
}

numCounterInTheFilterUl()

// modal filter

function filterModal(){
  document.querySelector('.calendar__filter-btn').addEventListener('click', function(){
    document.querySelector('body').classList.add('hidden')
    document.querySelector('.mask').style.display = 'block'
    document.querySelector('.calendar__filter-block').style.display = 'block'
    document.querySelector('.filter-modal-cross').addEventListener('click', function(){
      document.querySelector('body').classList.remove('hidden')
      document.querySelector('.mask').style.display = 'none'
      document.querySelector('.calendar__filter-block').style.display = 'none'
    })
  })
}

filterModal()

// modal calendar day

function calendarDayModal(){
  document.querySelectorAll('.calendar__day').forEach(block => {
    block.addEventListener('click', function(){
      let modal = document.querySelector('.calendar-block-modal');

      document.querySelector('body').classList.add('hidden')
      document.querySelector('.mask').style.display = 'block'
      modal.style.display = 'block'

      // inner content
      data = [
        '.calendar-day__date',
        '.calendar-day__time-nums',
        '.calendar-day__title',
        '.calendar-day__descrption'
      ]
      data.forEach(className => {
        modal.querySelector(className).innerText = block.querySelector(className).textContent
      });

      document.querySelector('.calendar-block-modal__close').addEventListener('click', function(){
        document.querySelector('body').classList.remove('hidden')
        document.querySelector('.mask').style.display = 'none'
        modal.style.display = 'none'
      })
    })
  })
}

calendarDayModal()
