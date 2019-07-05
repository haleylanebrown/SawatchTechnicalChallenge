    var vehicles = []

    function getData() {
        $.ajax({
            url: "https://api.sawatchlabs.com/models/13/2017",
            method: "GET"
        }).then(response => {
            for (var i = 0; i < response.data.length; i++) {
                vehicles.push(response.data[i])
            }
            vehicles.sort((a, b) => {
                var vehicleA = a.vehicle_model.toUpperCase();
                var vehicleB = b.vehicle_model.toUpperCase();
                return (vehicleA < vehicleB) ? -1 : (vehicleA > vehicleB) ? 1 : 0;
            });
            fillTable()
        })
    }

    function fillTable(){
        for (var i = 0; i < vehicles.length; i++) {
            var year = vehicles[i].vehicle_year
            var make = vehicles[i].make
            var model = vehicles[i].vehicle_model
            var displacement = vehicles[i].displacement
            var cylinders = vehicles[i].cylinders
            var vehicleClass = vehicles[i].class

            var newRow = $("<tr>").append(
                $("<td>").text(year),
                $("<td>").text(make),
                $("<td>").text(model),
                $("<td>").text(displacement),
                $("<td>").text(cylinders),
                $("<td>").text(vehicleClass)

            )
            $("#data").append(newRow);
        }
    }

    $(document).ready(function () {
        getData()
    })
