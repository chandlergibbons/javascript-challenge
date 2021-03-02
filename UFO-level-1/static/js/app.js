// from data.js
var tableData = data;



console.log(tableData);

// YOUR CODE HERE!
function makeTableHTML(tableData) {
    var result = "";
    for(var i=0; i<tableData.length; i++) {
        result += "<tr>";
        for(var j=0; j<tableData[i].length; j++){
            result += "<td>"+tableData[i][j]+"</td>";
            console.log(tableData[i][j]);
        }
        result += "</tr>";
    }
    result += "</table>";
    
    return result;
}



