setInterval(() => {
    function addZero(i) {
        if(i < 10) {
            i = "0" + i
        }
        return i
    }

    let date = new Date()
    //console.log(date)
    
    let h = addZero(date.getHours())
    let m = addZero(date.getMinutes())
    let s = addZero(date.getSeconds())

    let hours = document.querySelector("#hours")
    let minute = document.querySelector("#mins")
    let second = document.querySelector("#secs")

    hours.textContent = h
    minute.textContent = m 
    second.textContent = s
}, 1000)