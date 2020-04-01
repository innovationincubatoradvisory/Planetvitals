function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};
a=getUrlParameter('country');

//Old Data
fetch('https://planetvitals-backend-py.iinerds.com/history/'+a)
    .then(response => {
        return response.json()
    })
    .then(data => {
        // Work with JSON data here
        dt = data.data
        if (dt && dt.length) {
            dt.forEach(item => {
               console.log(item)
            });
        }
    })
    .catch(err => {
        // Do something for an error here
    })

    //New Data
fetch('https://planetvitals-backend-py.iinerds.com/data/'+a)
.then(response => {
    return response.json()
})
.then(data => {
    // Work with JSON data here
    dt = data.data
    if (dt && dt.length) {
        dt.forEach(item => {
           console.log(item)
        });
    }
})
.catch(err => {
    // Do something for an error here
})