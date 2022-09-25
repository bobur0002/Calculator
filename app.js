const btns = document.querySelectorAll('.btn'),
input = document.querySelector('input')
let string =''
btns.forEach((b)=>{
    b.addEventListener('click', (e)=>{
        if(e.target.innerText == '='){
            let result = eval(string)
            input.value = result
        }else if(e.target.innerText == 'C'){
            string =' '
            input.value = string
        }else{
            string += e.target.innerText
            input.value = string
        }
    })
    })
