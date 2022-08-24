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

const daily = document.getElementById("daily")
daily.addEventListener("click", getDaily)

const weekly = document.getElementById("weekly")
weekly.addEventListener("click", getWeekly)

const monthly = document.getElementById("monthly")
monthly.addEventListener("click", getMonthly)

function getDaily() {
    fetch(dataJson)
        .then(response => response.json())
        .then(data => showData(data))
        .catch(error => console.log(error))

    const showData = (data) => {
        currentWork.innerHTML = `${data[0].currentDailyWork}hrs`
        previousWork.innerHTML = `Last Day - ${data[0].previousDailyWork}hrs`

        currentPlay.innerHTML = `${data[0].currentDailyPlay}hrs`
        previousPlay.innerHTML = `Last Day - ${data[0].previousDailyPlay}hrs`

        currentStudy.innerHTML = `${data[0].currentDailyStudy}hrs`
        previousStudy.innerHTML = `Last Day - ${data[0].previousDailyStudy}hrs`

        currentExercise.innerHTML = `${data[0].currentDailyExercise}hrs`
        previousExercise.innerHTML = `Last Day - ${data[0].previousDailyExercise}hrs`

        currentSocial.innerHTML = `${data[0].currentDailySocial}hrs`
        previousSocial.innerHTML = `Last Day - ${data[0].previousDailySocial}hrs`

        currentSelfCare.innerHTML = `${data[0].currentDailySelfCare}hrs`
        previousSelfCare.innerHTML = `Last Day - ${data[0].previousDailySelfCare}hrs`
    }
}

function getWeekly() {
    fetch(dataJson)
        .then(response => response.json())
        .then(data => showData(data))
        .catch(error => console.log(error))

    const showData = (data) => {
        currentWork.innerHTML = `${data[1].currentWeeklyWork}hrs`
        previousWork.innerHTML = `Last Week - ${data[1].previousWeeklyWork}hrs`

        currentPlay.innerHTML = `${data[1].currentWeeklyPlay}hrs`
        previousPlay.innerHTML = `Last Week - ${data[1].previousWeeklyPlay}hrs`

        currentStudy.innerHTML = `${data[1].currentWeeklyStudy}hrs`
        previousStudy.innerHTML = `Last Week - ${data[1].previousWeeklyStudy}hrs`

        currentExercise.innerHTML = `${data[1].currentWeeklyExercise}hrs`
        previousExercise.innerHTML = `Last Week - ${data[1].previousWeeklyExercise}hrs`

        currentSocial.innerHTML = `${data[1].currentWeeklySocial}hrs`
        previousSocial.innerHTML = `Last Week - ${data[1].previousWeeklySocial}hrs`

        currentSelfCare.innerHTML = `${data[1].currentWeeklySelfCare}hrs`
        previousSelfCare.innerHTML = `Last Week - ${data[1].previousWeeklySelfCare}hrs`
    }
}

function getMonthly() {
    fetch(dataJson)
        .then(response => response.json())
        .then(data => showData(data))
        .catch(error => console.log(error))

    const showData = (data) => {
        currentWork.innerHTML = `${data[2].currentMonthlyWork}hrs`
        previousWork.innerHTML = `Last Month - ${data[2].previousMonthlyWork}hrs`

        currentPlay.innerHTML = `${data[2].currentMonthlyPlay}hrs`
        previousPlay.innerHTML = `Last Month - ${data[2].previousMonthlyPlay}hrs`

        currentStudy.innerHTML = `${data[2].currentMonthlyStudy}hrs`
        previousStudy.innerHTML = `Last Month - ${data[2].previousMonthlyStudy}hrs`

        currentExercise.innerHTML = `${data[2].currentMonthlyExercise}hrs`
        previousExercise.innerHTML = `Last Month - ${data[2].previousMonthlyExercise}hrs`

        currentSocial.innerHTML = `${data[2].currentMonthlySocial}hrs`
        previousSocial.innerHTML = `Last Month - ${data[2].previousMonthlySocial}hrs`

        currentSelfCare.innerHTML = `${data[2].currentMonthlySelfCare}hrs`
        previousSelfCare.innerHTML = `Last Month - ${data[2].previousMonthlySelfCare}hrs`
    }
}