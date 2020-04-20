fetch('https://planetvitals-backend-py.iinerds.com/prevday')
    .then(response => {
        return response.json()
    })
    .then(data => {
        // Work with JSON data here
        regions = data.data
        if (regions && regions.length) {
            regions.forEach(item => {
                let itemactive = item.confirmed - item.deaths - item.recovered;
                if (itemactive == 0) {
                    document.getElementById("tb-content-2").innerHTML += '<tr class="table-info">' + "<td>" + '<a href="https://planetvitals.com/country.html?country='+item.country+'">'+item.country + "</a></td>" + '<td>' + item.confirmed + "</td>" + '<td>' + item.change_confirmed + "</td>" + '<td style="color:darkred;">' + item.deaths + "</td>" + '<td style="color:darkred;">' + item.change_deaths + "</td>" +  '<td style="color:red;">' + item.serious_cases + "</td>" +'<td style="color:orange;">' + itemactive + "</td>" +'<td style="color:green;">'  + item.recovered + "</td>" +   "<td>" + item.totalcases_pp + "</td>" +"<td>" + item.deaths_pp + "</td>"  +"</tr>";                    
                } else {
                    document.getElementById("tb-content-2").innerHTML += "<tr>"  +"<td>" + '<a href="https://planetvitals.com/country.html?country='+item.country+'">'+item.country + "</a></td>" + '<td>' + item.confirmed + "</td>" + '<td>' + item.change_confirmed + "</td>" + '<td style="color:darkred;">' + item.deaths + "</td>" + '<td style="color:darkred;">' + item.change_deaths + "</td>" +  '<td style="color:red;">' + item.serious_cases + "</td>" +'<td style="color:orange;">' + itemactive + "</td>" +'<td style="color:green;">'  + item.recovered + "</td>" +   "<td>" + item.totalcases_pp + "</td>" +"<td>" + item.deaths_pp + "</td>"  +"</tr>";
                }

            });
        }
        $(document).ready( function () {
            $('#country-table-2').DataTable({
                "order": [[ 1, "desc" ]]
            });
        } );
    })
    .catch(err => {
        // Do something for an error here
    })