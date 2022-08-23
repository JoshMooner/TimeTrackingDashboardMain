const dataJson = "https://raw.githubusercontent.com/JoshMooner/TimeTrackingDashboardMain/main/assets/json/data.json"

const currentWork = document.querySelector('#currentWork')
const previousWork = document.querySelector('#previousWork')

const currentPlay = document.querySelector('#currentPlay')
const previousPlay = document.querySelector('#previousPlay')

const currentStudy = document.querySelector('#currentStudy')
const previousStudy = document.querySelector('#previousStudy')

const currentExercise = document.querySelector('#currentExercise')
const previousExercise = document.querySelector('#previousExercise')

const currentSocial = document.querySelector('#currentSocial')
const previousSocial = document.querySelector('#previousSocial')

const currentSelfCare = document.querySelector('#currentSelfCare')
const previousSelfCare = document.querySelector('#previousSelfCare')


function getDaily() {
    fetch(dataJson)
        .then(res => res.json())
        .then(data => {
            //console.log(data)
            dailyTable(data)
        })

    function dailyTable(data) {
        // console.log(data)
        //currentWork.innerHTML = ''
        for (let valor of data) {

            currentWork.innerHTML = `${valor.daily.currentDailyWork} hrs`
            previousWork.innerHTML = `Last Day - ${valor.daily.previousDailyWork} hrs`

            currentPlay.innerHTML = `${valor.daily.currentDailyPlay} hrs`
            previousPlay.innerHTML = `Last Day - ${valor.daily.previousDailyPlay} hrs`

            currentStudy.innerHTML = `${valor.daily.currentDailyStudy} hrs`
            previousStudy.innerHTML = `Last Day - ${valor.daily.previousDailyStudy} hrs`

            currentExercise.innerHTML = `${valor.daily.currentDailyExercise} hrs`
            previousExercise.innerHTML = `Last Day - ${valor.daily.previousDailyExercise}`

            currentSocial.innerHTML = `${valor.daily.currentDailySocial} hrs`
            previousSocial.innerHTML = `Last Day - ${valor.daily.previousDailySocial} hrs`

            currentSelfCare.innerHTML = `${valor.daily.currentDailySelfCare} hrs`
            previousSelfCare.innerHTML = `Last Day - ${valor.daily.previousDailySelfCare} hrs`


            //console.log(valor)
            // console.log(valor.daily)
            //console.log(valor.daily.currentDailyWork)
        }
    }
}