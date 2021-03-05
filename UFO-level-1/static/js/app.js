// from data.js
var tableData = data;


// D3 Selects
var table = d3.select('table');
var tbody = table.select('tbody');
var button = d3.select("#filter-btn");
var inputFeild = d3.select("#datetime");


// handles data filter logic and returns table filtered
button.on('click', function() {
  
 // clears table before new reult populates  
  tbody.html('');
    
//  grabs value from filter search 
    var selected = (inputFeild.node().value);
  
// filters data on search
    const res = tableData.filter(({
    datetime
    }) => selected.includes(datetime));

// returns filtered data     
    ret = res;
    res.forEach(function(oneDatapoint) {
        var tr = tbody.append('tr');
        
        Object.values(oneDatapoint).forEach(function(values) {
                tr.append('td').text(values);
        })
    
});
});

// renders table on page load
tableData.forEach(function (oneDatapoint) {
        var tr = tbody.append('tr');
    
        Object.values(oneDatapoint).forEach(function (values) {
            tr.append('td').text(values);
        })
    
    });