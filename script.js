const state = document.getElementById('state')

const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const getTime = () => {
    const date = new Date()
    const weekDay = date.getDay()
    var hours = date.getHours()

    verifyDate(weekDay, hours, date)
}

const verifyDate = (weekDay, hours, date) => {

    var minutes = date.getMinutes()
    var seconds = date.getSeconds()

    if((weekDay === 1 && (hours == 13 || hours == 14)) || (weekDay === 3 && (hours == 15 || hours == 16))) {
       state.textContent = "Você está triste. Sinto muito! Está ocorrendo a aula de Projeto de Carreira! Faltam:"

       document.getElementById('pngfalso').style.display = 'none'

       var timeout = setInterval(() => {

            if(minutes == 59 && seconds == 59) {
                minutes = 0
                seconds = 0
                hours++
            } else if(seconds == 59) {
                seconds = 0
                minutes++
            } else  {
                seconds++
            } 

            if(weekDay === 1){
                horas.textContent = 14 - hours
                minutos.textContent = 59 - minutes
                segundos.textContent = 59 - seconds
            }
            else if(weekDay === 3){
                horas.textContent = 16 - hours
                minutos.textContent = 59 - minutes
                segundos.textContent = 59 - seconds
            }

            if((hours === 15 && weekDay === 2) || (hours === 17 && weekDay === 3)) {
                clearInterval(timeout)
            }

        }, 1000)
    }

    else{
        state.textContent = "Você não está em aula de Projeto de Carreira! Sorria!"
        document.getElementById('cronometro').style.display = 'none'
    }
}

window.addEventListener('load', getTime())