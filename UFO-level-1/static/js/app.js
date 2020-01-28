// Assign the data from `data.js` to a descriptive variable
var tableData = data;
// console.log(tableData);

// Create Array for Dates from table data and find unique list for
// Selection Criteria

dataDates = tableData.map(function(data) {
   return data.datetime;
});

//Unique selection list
var selectDate = [...new Set(dataDates)];

// Build Drop down list for Dates
var dateList = d3.select("#dropdown-date");

selectDate.forEach(date => {
   var cell = dateList.append("option");
   cell.text(date);
});

// ************************************//
// Selection Button and Display Coding

// Assign Button to a variable
var button = d3.select("#myForm");

// Button handler Listen for button click
//  gather data that matches selection and display on table
button.on("click", function() {

    var inputElement = d3.select("#dropdown-date");
    var inputValue = inputElement.property("value");

    var filteredData = tableData.filter(site => site.datetime === inputValue);

    console.log(filteredData);
   
    var tbody = d3.select("tbody");
    tbody.html("");
    
    filteredData.forEach(site => {
        // console.log(site);
        //Use d3 to append one table row `tr` for each site object
        var row = tbody.append("tr");
      
        // Use `Object.entries` to log each siting information 
        Object.entries(site).forEach(([key, value]) => {
           console.log(key, value);
      
        // Use d3 to append 1 cell per siting values
           var cell = row.append("td");
      
        // Use d3 to update each cell's text with siting data
           cell.text(value);
        });
    });
});
