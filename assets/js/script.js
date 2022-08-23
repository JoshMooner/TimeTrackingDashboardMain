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

// const daily = document.getElementById("daily")
// daily.addEventListener("click", getDaily)

// const weekly = document.getElementById("weekly")
// weekly.addEventListener("click", getWeekly)

// const monthly = document.getElementById("monthly")
// monthly.addEventListener("click", getMonthly)


fetch(dataJson)
    .then(response => response.json())
    .then(data => showData(data))
    .catch(error => console.log(error))

const showData = (data) => {
    console.log(data)
}
// function getDaily() {
//     fetch(dataJson)
//         .then(res => res.json())
//         .then(data => {
//             dailyTable(data)
//         })

//     function dailyTable(data) {
//         for (let value of data) {

//             currentWork.innerHTML = `${value.daily.currentDailyWork} hrs`
//             previousWork.innerHTML = `Last Day - ${value.daily.previousDailyWork} hrs`

//             currentPlay.innerHTML = `${value.daily.currentDailyPlay} hrs`
//             previousPlay.innerHTML = `Last Day - ${value.daily.previousDailyPlay} hrs`

//             currentStudy.innerHTML = `${value.daily.currentDailyStudy} hrs`
//             previousStudy.innerHTML = `Last Day - ${value.daily.previousDailyStudy} hrs`

//             currentExercise.innerHTML = `${value.daily.currentDailyExercise} hrs`
//             previousExercise.innerHTML = `Last Day - ${value.daily.previousDailyExercise} 1hrs`

//             currentSocial.innerHTML = `${value.daily.currentDailySocial} hrs`
//             previousSocial.innerHTML = `Last Day - ${value.daily.previousDailySocial} hrs`

//             currentSelfCare.innerHTML = `${value.daily.currentDailySelfCare} hrs`
//             previousSelfCare.innerHTML = `Last Day - ${value.daily.previousDailySelfCare} hrs`


//             //console.log(value)
//             // console.log(value.daily)
//             //console.log(value.daily.currentDailyWork)
//         }
//     }
// }

// function getWeekly() {
//     fetch(dataJson)
//         .then(res => res.json())
//         .then(data => {
//             //console.log(data)
//             weeklyTable(data)
//         })

//     function weeklyTable(data) {
//         // console.log(data)
//         //currentWork.innerHTML = ''
//         for (let value of data) {

//             currentWork.innerHTML = `${value.weekly.currentWeeklyWork} hrs`
//             previousWork.innerHTML = `Last Week - ${value.weekly.previousWeeklyWork} hrs`

//             currentPlay.innerHTML = `${value.weekly.currentWeeklyPlay} hrs`
//             previousPlay.innerHTML = `Last Week - ${value.weekly.previousWeeklyPlay} hrs`

//             currentStudy.innerHTML = `${value.weekly.currentWeeklyStudy} hrs`
//             previousStudy.innerHTML = `Last Week - ${value.weekly.previousWeeklyStudy} hrs`

//             currentExercise.innerHTML = `${value.weekly.currentWeeklyExercise} hrs`
//             previousExercise.innerHTML = `Last Week - ${value.weekly.previousWeeklyExercise} 1hrs`

//             currentSocial.innerHTML = `${value.weekly.currentWeeklySocial} hrs`
//             previousSocial.innerHTML = `Last Week - ${value.weekly.previousWeeklySocial} hrs`

//             currentSelfCare.innerHTML = `${value.weekly.currentWeeklySelfCare} hrs`
//             previousSelfCare.innerHTML = `Last Week - ${value.weekly.previousDailySelfCare} hrs`


//             //console.log(value)
//             // console.log(value.daily)
//             //console.log(value.daily.currentDailyWork)
//         }
//     }
// }