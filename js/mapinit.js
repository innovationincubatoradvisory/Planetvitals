
fetch('https://planetvitals-backend-py.iinerds.com/map')
    .then(response => {
        return response.json()
    })
    .then(data => {
        // Work with JSON data here
        console.log("data.dataForMap")
        initializeMap(data.dataForMap)

    })
    .catch(err => {
        // Do something for an error here
    })