console.log('Funguju!')

const karticky = document.querySelectorAll('.karticka').forEach ((element)=>{
    element.addEventListener ("click",(evt)=> {
        evt.target.classList.add("otocena")
    
    })
})

//karticky[0].classList.remove('otocena')

