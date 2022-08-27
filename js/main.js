const form = document.forms['formCard']
const button = document.querySelector('.submitButton')
const spanError = document.querySelectorAll('.spanError')
const continueButton = document.querySelector('.continueButton')
function result() {
    let { name, cardNumber, dateMm, dateYy, cvc} = form
    let valid = true
    name.onkeyup = () => {
        if (!isNaN(name.value)) {
            name.classList.add('error')
            spanError[0].innerText = 'alphanumeric characters only'
            spanError[0].classList.add('active')
            valid = false
        } else {
            document.querySelector('.name').innerText = name.value
            name.classList.remove('error')
            spanError[0].classList.remove('active')
            valid = true
        }
    }
    cardNumber.onkeyup = () => {
        if(isNaN(cardNumber.value)) {
            cardNumber.classList.add('error')
            spanError[1].innerText = 'Numeric characters only'
            spanError[1].classList.add('active')
            valid = false
        }
         else {
            document.querySelector('#cardDate').innerText = mcc(cardNumber.value)
            cardNumber.classList.remove('error')
            spanError[1].classList.remove('active')
            function mcc(v){
                v = v.replace(/\D/g,"")
                v = v.replace(/(\d{4})/g, "$1 ")
                v = v.replace(/\.$/, "")
                v = v.substring(0, 19)
              
                return v;
            }
            valid = true
        }
    }    
    dateMm.onkeyup = () => {
        if (dateMm.value >= 13) {
            spanError[2].classList.add('active')
            spanError[2].innerText = 'invalid date'
            valid = false
        }else if(dateMm.value.length === 2) {
            dateMm.setAttribute('disabled', 'disabled')
            document.querySelector('.spanM').innerText = dateMm.value + '/'
        }  else {
            spanError[2].classList.remove('active')
            valid = true
        }
    }
    dateYy.onkeyup = () => {
        if(dateYy.value.length === 2){
            dateYy.setAttribute('disabled', 'disabled')
            document.querySelector('.spanY').innerText = dateYy.value
        }
    }
    cvc.onkeyup = () => {
        if(cvc.value.length === 3) {
            cvc.setAttribute('disabled', 'disabled')
            document.querySelector('.cvc').innerText = cvc.value
        }
    }
    form.onsubmit = e => {
        if(!name.value || name.value === ' ') {
            name.classList.add('error')
            spanError[0].innerText = "Can't be blank"
            spanError[0].classList.add('active')
            valid = false
        } else if (!cardNumber.value || cardNumber.value === " ") {
            cardNumber.classList.add('error')
            spanError[1].innerText = "Can't be blank"
            spanError[1].classList.add('active')
            valid = false
        } else if(!dateMm.value || dateMm.value === ' ') {
            dateMm.classList.add('error')
            spanError[2].innerText = "Can't be blank"
            spanError[2].classList.add('active')
            valid = false
        } else if (!dateYy.value || dateYy.value === ' ') {
            dateYy.classList.add('error')
            spanError[3].innerText = "Can't be blank"
            spanError[3].classList.add('active')
            valid = false
        } else if (!cvc.value || cvc.value === ' ') {
            cvc.classList.add('error')
            spanError[4].innerText = "Can't be blank"
            spanError[4].classList.add('active')
            valid = false
        }
        else {
            name.classList.remove('error')
            cardNumber.classList.remove('error')
            dateMm.classList.remove('error')
            dateYy.classList.remove('error')
            cvc.classList.remove('error')
            spanError[2].classList.remove('active')
            spanError[3].classList.remove('active')
            spanError[4].classList.remove('active')
            valid = true
        }
        if(valid === true) {
            e.preventDefault()
            document.querySelector('.cardInput').classList.add('hidden')
            document.querySelector('.complete').classList.add('show')
        } else {
            e.preventDefault()
        }
    }
    continueButton.onclick = () => {
        window.location.reload()
    }
}

result()
