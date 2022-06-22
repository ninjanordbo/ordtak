const update = document.querySelector('#update-button')
const next = document.querySelector('#nesteOrdtak')

update.addEventListener('click', _ => {
    fetch('/ordtak', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        
      })
    })
  })

  next.addEventListener ('click', _ =>{
    fetch('/', {
      method:'get',
      headers:{'Content-Type': 'application/json' },
      body:JSON.stringify({
        
      })
   
      
    })
  })


