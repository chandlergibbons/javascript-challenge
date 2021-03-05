// from data.js
var tableData = data;


// D3 selects
var table = d3.select('table');
var tbody = table.select('tbody');
var button = d3.select("#filter-btn");
var inputFeild = d3.select("#datetime");

var city_sect = d3.select("#city");
var state_sect = d3.select("#state");
var country_sect = d3.select("#country");
var shape_sect = d3.select("#shape");


// renders data on load
tableData.forEach(function (oneDatapoint) {
    var tr = tbody.append('tr');

    Object.values(oneDatapoint).forEach(function (values) {
        tr.append('td').text(values);
    })

});


// grabing new values for drop downs 
var citydrop = tableData.map(item => item.city)
    .filter((value, index, self) => self.indexOf(value) === index);

var statedrop = tableData.map(item => item.state)
    .filter((value, index, self) => self.indexOf(value) === index);

var countrydrop = tableData.map(item => item.country)
    .filter((value, index, self) => self.indexOf(value) === index);

var shapedrop = tableData.map(item => item.shape)
    .filter((value, index, self) => self.indexOf(value) === index);


// drop down tables creation
citydrop.forEach(function (values) {
    city_sect.append('option').text(values);
});

statedrop.forEach(function (values) {
    state_sect.append('option').text(values);
});

countrydrop.forEach(function (values) {
    country_sect.append('option').text(values);
});

shapedrop.forEach(function (values) {
    shape_sect.append('option').text(values);
});


// filtration
button.on('click', function () {

    // clears old data before droping in new filtered search
    tbody.html('');

    // grabs imputs from search bar
    var dateSelected = (inputFeild.node().value);
    var citySelected = (city_sect.node().value);
    var stateSelected = (state_sect.node().value);
    var countrySelected = (country_sect.node().value);
    var shapeSelected = (shape_sect.node().value);

    // handles filter logic 

    var filteredData = tableData;
    if (dateSelected) {
        filteredData = filteredData.filter(({ datetime }) => dateSelected.includes(datetime));
    }

    if (citySelected !== "All") {
        console.log(citySelected, typeof (citySelected));
        filteredData = filteredData.filter(({ city }) => citySelected.includes(city));
    };

    if (stateSelected !== "All") {
        filteredData = filteredData.filter(({ state }) => stateSelected.includes(state));
    };

    if (countrySelected !== "All") {
        filteredData = filteredData.filter(({ country }) => countrySelected.includes(country));
    };

    if (shapeSelected !== "All") {
        filteredData = filteredData.filter(({ shape }) => shapeSelected.includes(shape));
    };

    // displays filter result

    filteredData.forEach(function (oneDatapoint) {
        var tr = tbody.append('tr');

        Object.values(oneDatapoint).forEach(function (values) {
            tr.append('td').text(values);
        })

    });
});
