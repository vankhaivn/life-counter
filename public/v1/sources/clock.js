fetch('./configs.json')
    .then(response => response.json())
    .then(data => {
        let days = document.getElementById('days')
        let hrs = document.getElementById('hrs')
        let min = document.getElementById('min')
        let sec = document.getElementById('sec')
        let startDateHtml = document.getElementById('startDate')
        const startDateArray = data.start_date.split('-')
        const startDate = new Date(startDateArray[2], startDateArray[1] - 1, startDateArray[0])
        startDateHtml.innerHTML = data.start_date
        setInterval(() => {
            let currentTime = new Date()
            let difference = currentTime.getTime() - startDate.getTime()
            let daysCount = Math.ceil(difference / (1000 * 60 * 60 * 24))
            days.innerHTML = daysCount
            hrs.innerHTML = currentTime.getHours()
            min.innerHTML = currentTime.getMinutes()
            sec.innerHTML = currentTime.getSeconds()
        }, 1000)
    })
    .catch(error => console.error('Error:', error))
