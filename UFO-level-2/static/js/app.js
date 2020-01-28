// Assign the data from `data.js` to a descriptive variable
var tableData = data;
// console.log(tableData);

// Create Array for each field from table data to find unique list for
// Selection Criteria (date/city/state/country/shape)

dataDates = tableData.map(function(data) {
   return data.datetime;
});

dataCity = tableData.map(function(data) {
   return data.city;
});

dataState = tableData.map(function(data) {
   return data.state;
});

dataCountry = tableData.map(function(data) {
   return data.country;
});

dataShape = tableData.map(function(data) {
   return data.shape;
})

//Unique selection list
var selectDate = [...new Set(dataDates)];
var selectCity = [...new Set(dataCity)];
var selectState = [...new Set(dataState)];
var selectCountry = [...new Set(dataCountry)];
var selectShape = [...new Set(dataShape)];

// Build Drop down list for Dates
var dateList = d3.select("#dropdown-date");

selectDate.forEach(date => {
   var cell = dateList.append("option");
   cell.text(date);
});

// Build Drop down list for States
var stateList = d3.select("#dropdown-state");

selectState.forEach(st => {
   var cell = stateList.append("option");
   cell.text(st);
});

// Build Drop down list for Country
var cntryList = d3.select("#dropdown-cntry");

selectCountry.forEach(cnty => {
   var cell = cntryList.append("option");
   cell.text(cnty);
});

// Build Drop down list for Shape
var shapeList = d3.select("#dropdown-shape");

selectShape.forEach(shp => {
   var cell = shapeList.append("option");
   cell.text(shp);
});

// ************************************//
// Selection Button and Display Coding

// Assign Button to a variable
var button = d3.select("#filter-btn");

// Button handler Listen for button click
//  gather data that matches selection and display on table
button.on("click", function() {
   
   // Select Values from drop down box selections
   var inDate = d3.select("#dropdown-date");
   var dateValue = inDate.property("value");
   console.log(dateValue);

   var inState = d3.select("#dropdown-state");
   var stateValue = inState.property("value");
   console.log(stateValue);

   var inCntry = d3.select("#dropdown-cntry");
   var cntryValue = inCntry.property("value");
   console.log(cntryValue);

   var inShape = d3.select("#dropdown-shape");
   var shapeValue = inShape.property("value");
   console.log(shapeValue);

   // If drop down slection is set to original key words, then don't include that selection
   //  in the table filter
   //
   if (dateValue !== "Date") {
      var filteredData = tableData.filter(site => site.datetime == dateValue);
   }
   else {
      var filteredData = tableData;      
   };

   if (stateValue !== "State") {
      var filteredData = filteredData.filter(site => site.state == stateValue);
   };

   if (cntryValue !== "Country") {
      var filteredData = filteredData.filter(site => site.country == cntryValue);
   };

   if (shapeValue !== "Shape") {
      var filteredData = filteredData.filter(site => site.shape == shapeValue);
   };
   
   // For Review and Testing 
   // console.log(filteredData);
   
   // Display filterd data to table

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
