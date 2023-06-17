document.addEventListener('DOMContentLoaded', function(){ 
  let mainHeader = document.getElementById('main');
  mainHeader.addEventListener('click', (event)=>{
    // if (event.target.className == "header__button") {
    //     console.log('click on button');
    //   }
      console.log('main');
    });
    let buttonsArray = document.getElementsByClassName('header__button');
    Array.from(buttonsArray).forEach(element => {
      element.addEventListener('click', (e)=>{
        e.stopPropagation();
        // e.preventDefault();
        console.log('push button');
      })
  });
    
  });
