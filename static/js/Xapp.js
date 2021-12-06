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

// create function to handle button click
function handleClick() {
    // set variable for date searching by datetime tag
    let date = d3.select("#datetime").property("value");
    // set var for default filter equal to original table data
    let filteredData = tableData;
    // add if statement to check for filtered date
    if (date) {
        filteredData = filteredData = filteredData.filter(row => row.datetime === date);
    }
    // rebuild table using filteredData, if no filter return original tableData
    buildTable(filteredData);
}

// listen for buttonclick event on filter-btn --> on click activate handleClick fxn
d3.selectAll("#filter-btn").on("click",handleClick);

// load original table when page loads
buildTable(tableData); 