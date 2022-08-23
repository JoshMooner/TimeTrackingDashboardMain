const dataJson = "https://raw.githubusercontent.com/JoshMooner/TimeTrackingDashboardMain/main/assets/json/data.json"

function getDaily() {
    fetch(dataJson)
        .then( res => res.json)
        .then( data => {
            //console.log(data)
            tabla(data)
        })
}

function tabla(data) {
    console.log(data)
}