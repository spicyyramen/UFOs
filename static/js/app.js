// import data from data.js
const tableData=data;

// reference the HTML table using d3
var tbody = d3.select("tbody");

// create function to iterate through data and append to table
function buildTable(data) {
    // clears out any existing data
    tbody.html("");
    // loop through each object, append row + cells 
    data.forEach((dataRow) => {
        // append row to table body
        let row = tbody.append("tr");
        // loop through each field in dataRow and add table data
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });


}