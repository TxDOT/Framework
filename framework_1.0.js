// Framework js version 1.0 September 26, 2019
// Created for TPP-Data Management by Michael Chamberlain

//Updated April 27, 2020
// renamed resolveURL to resolveURLSimple, added resolveURLMapService, added calculateBearing, calculateDistance, calculateMidPoint, walkGeom, queryRecordFromServiceGeometry

// <!--This Framework contains the following functions-->

// <!--init()
// function that runs on page load, used to position and resize div elements and test functions included in the framework-->

// <!--adjustApp(layoutType,true,columnOnePCT,columnTwoPCT,columnThreePCT)
// function used to resize and position divs when the page is resized-->
// Inputs: layoutType (1 Column, 2 Column, 3 Column),header (true or false), column one percent (Ex., .25), column two percent (Ex., .50), column three percent (Ex., .25)

// <!--toggleDiv(theDiv)-
// accepts a div ID and hides or shows the div based on it's current state-->

// <!--replaceDIVContents(theDiv,theData)
// accepts a div ID and data, then replaces the current div data with the passed variable-->

// <!--appendToDIV(theDiv,theData)
// accepts a div ID and data, then appends theData the current div data with the passed variable after any existing content-->

// <!--prependToDIV(theDiv,theData)
// accepts a div ID and data, then add theData the current div data with the passed variable before any existing content-->

// <!--reSizeDiv(theDIV,width,height)
// accepts div ID, width, height in pixels, then resizes the div to the passed variables-->

// <!--resetInputs(theDIV,theType)
// accepts a Div ID and HTML element type, checkboxes and radio are set to false, input text is set to default-->

// <!--resolveURLSimple()
// examines the page url for any parameters following the site URL.  Splits URL based on "?" and "=", data following "=" can be separated by commas-->

// <!--resolveURLMapService()
// examines the page url for any parameters following the site URL.  Splits URL based on "?" and "&", then "<" or ">" or "=", data following "=" can be separated by commas-->

// <!--startGPS()
// starts navigation if supported in the browser, page will update location every second calling showStartUpPosition until turned off-->

// <!--showStartUpPosition(position)
// accepts position event from browser, then outputs location to console.  Move position variables outside function to access location by other functions-->

// <!--saveToLocalStorage(theData)
// accepts data variable, then writes varible to browser local storage-->

// <!--clearLocalStorage()
// clears all local storage after verifying with prompt-->

// <!--viewLocalStorage()
// pushes all items in local storage to an array then returns the array-->

// <!--getLocalStorageRecordCount()
// returns a count of all the records in local storage-->

// <!--deleteLastLocalStorageRecord()
// after confirmation, deletes the last item in local storage-->

// <!--beep()
// plays an audible beep-->

// <!--makeDateTime()
// returns a data in this format: month + "/" + day + "/" + year + " " + hour + ":" + minutes-->

// <!--roundToDecimalPlace(value,decimals)
// accepts a number and desired decimal place, returns the number rounded to that place-->

// <!--getRandomIntInclusive(min,max)
// accepts and min and max value, returns a number within that range (inclusive of the min and max passed to function)-->

// <!--findMin(theArray)
// accepts an array, returns the minimum value in that array-->

// <!--findMax(theArray)
// accepts an array, return the maximum value in that array-->

// <!--sumNumericArray(theArray)
// accepts an array, returns the sum of the values in the array-->

// <!--getLeftCharacters(theData,theNumber)
// accepts a string and position number, returns the character from 0 to the position number-->

// <!--getRightCharacters(theData,theNumber)
// accepts a string and number for right most characters to keep, return right most characters-->

// <!--getMiddleCharacters(theData,beginNumber,endNumber)
// accepts a string, begin character number, end character number, returns text between the begin and end numbers-->

// <!--addCommas(nStr)
// accepts a string and return string with commas as needed-->

// <!--removeCommas(nStr)
// accepts a string and return string without commas as needed-->

// <!--replaceCharacter(theText,theReplacement)
// accepts a string and returns a string without any special characters (replaces them with the replacement pass to the function (theReplacement))-->

// <!--drawRectangle(begX,begY,theWidth,theHeight,theColor)
// accepts location, height, width, and color paramaters to draw a rectangle in a canvas element-->

// <!--drawCircle(begX,begY,theRadius,theColor)
// accepts location, radius, and color paramaters to draw a circle in a canvas element-->

// <!--drawPoint(begX,begY,theRadius,theColor)
// accepts location, radius, and color paramaters to draw a circle in a canvas element.  Radius is very small for a point-->

// <!--drawLine(begX,begY,endX,endY,theWidth,theColor)
// accepts beginning and ending xy location, width, and color paramaters to draw a line in a canvas element-->

// <!--drawPolygon(theCoords,theWidth,fillColor,outlineColor)
// accepts an array of points ([[5,10],[25,50],[125,150]]), line width, fill color (#ffffff), and line color (#dddddd) parameters to draw a polygon in a canvas element-->

// <!--drawText(theText,theX,theY,theColor,theSize)
// accepts a string, xy location, color, and numeric text size to draw a text element on the canvas element-->

// <!--clearDrawings()
// clears all drawings on the canvas element-->

// <!--xmlRequestWithProcessing(theService,callback)
// accepts a service parameter that includes a service URL, query, sorting order, and output fields, also accepts a callback function to process the results-->

// <!--xmlRequestNoProcessing(serviceString,paraString)
// accepts a service and operations parameter (add record, delete record, update record)-->

// <!--queryRecordFromService(theServiceName,theQuery,theOrder,theFields)
// accepts service name, query, order, and fields, returns properly formatted string that is passed to xmlRequestWithProcessing-->

// <!--queryRecordFromServiceGeometry(theServiceName,theField,theAttribute)
// accepts service name, field name, and attribute, returns properly formatted string that is passed to xmlRequestWithProcessing (use to access feature geometry)-->
// var theResult = xmlRequestWithProcessing(queryRecordFromServiceGeometry(theService,theField,theAttribute),walkGeom);

// <!--addRecordToService(theServiceName,theData)
// accepts service name and data that is passed to xmlRequestNoProcessing-->

// <!--deleteRecordFromService(theServiceName,theData)
// accepts service name and data that is passed to xmlRequestNoProcessing)-->

// <!--updateRecordInService(theServiceName,theData)
// accepts service name and data that is passed to xmlRequestNoProcessing)-->

// <!--createJSONAttribute(theRecordID,theFieldName,theAttribute)
// accepts record ID, field name, and attribute, returns properly formatted JSON object for AGO update service call-->

// <!--createJSONGeom(theGeom,theFieldName,theAttribute)
// accepts geometry, field name, and attribute, returns properly formatted JSON object for AGO add shape record service call-->

// <!--confirmDialog(theMessage)
// accepts a string then prompts a confirm dialog, return true or false-->

// <!--infoDialog(theMessage)
// accepts a string then displays string in an alert box-->

// <!--makeTableFromArrayNoHeader(dataArray)
// accepts array and returns a string for an HTML table without header record (Example: [["1", "Michael",43], ["2", "Jessica",40]])-->

// <!--makeTableFromArray(dataArray)
// accepts multi-dimensional array and returns a string for an HTML table with a header record (Example: [["ID","NAME","AGE"],["1", "Michael",43], ["2", "Jessica",40]])-->

// <!--makeTableFromService(dataArray)
// accepts an array that's the result of an AGO Query, results are passed to replaceDIVContents-->

// <!--mergeArrays(arrayOne,arrayTwo)
// accepts two arrays, returns new array of second array concatenated to first array-->

// <!--removeItemFromArray(theArray,theItem)
// accepts an array and item from the array, removes the item from the array then returns the array-->

// <!--prepJSONForTransit(theJSON)
// accepts a json formatted javascript object and adds "'" to all object names, needs to be done before transmitting data to a service-->

// <!--convertStringToJSON(theString)
// accepts a string formatted as json and returns a javscript object-->

// <!--processSearchTerms(dataArray)
// accepts an array of json items from an ESRI service, adds the items to a javascript array for use in the typeAheadSearch-->

// <!--typeAheadSearch(theDIV,searchString)
// accepts a Div ID and text to search for, finds matches in the searchTerms array-->

// <!--showCoords(event)
// accepts an event and returns the x and y position in pixels of the cursor-->

// <!--checkKey(e)
// accepts an event and returns the number of the key pressed on the keyboard-->

// <!-- calculateBearing(fromLat,fromLong,toLat,toLong)
// accepts latitude and longitude values in decimal degrees and returns a bearing in degrees from the first to the second point

// <!-- calculateMidPoint(fromLat,fromLong,toLat,toLong)
// accepts latitude and longitude values in decimal degrees and returns a mid-point in decimal degrees between the first and second point

// <!-- calculateDistance(fromLat,fromLong,toLat,toLong)
// accepts latitude and longitude values in decimal degrees and returns distance in miles between the first and second point

// <!-- walkGeom(theGeometry)
// Traverses the geometry object returned from the ESRI REST API to access the X,Y, and M values

var searchTerms = ['Michael','Jessica','Makayla','Andrew'];

function init(layoutTypes,topHeader,columnOnePCT,columnTwoPCT,columnThreePCT) {
    window.addEventListener("resize", function() {
        adjustApp(layoutTypes,topHeader,columnOnePCT,columnTwoPCT,columnThreePCT)}
    );

    adjustApp(layoutTypes,topHeader,columnOnePCT,columnTwoPCT,columnThreePCT);
}

//Adjusts header, index, contents--------
function adjustApp(layoutTypes,topHeader,columnOnePCT,columnTwoPCT,columnThreePCT) {
    var w = window.innerWidth;
    var h = window.innerHeight;
    if (layoutTypes == "1 Column") {
        if (topHeader) {
            document.getElementById("header").style.display = "block";
            document.getElementById("index").style.display = "none";
            document.getElementById("content").style.display = "block";
            document.getElementById("indexRight").style.display = "none";

            var headerHeight = Math.round(h*.1);
            document.getElementById("header").style.left = "0px";
            document.getElementById("header").style.top = "0px";
            document.getElementById("header").style.width = w + "px";
            document.getElementById("header").style.height = headerHeight + "px";

            document.getElementById("content").style.left = "0px";
            document.getElementById("content").style.top = headerHeight + "px";
            document.getElementById("content").style.width = w + "px";
            document.getElementById("content").style.height = (h-headerHeight) + "px";
        }
        else {
            document.getElementById("header").style.display = "none";
            document.getElementById("index").style.display = "none";
            document.getElementById("indexRight").style.display = "none";

            document.getElementById("content").style.left = "0px";
            document.getElementById("content").style.top = "0px";
            document.getElementById("content").style.width = w + "px";
            document.getElementById("content").style.height = h + "px";
        }
    }
    if (layoutTypes == "2 Column") {
        if (topHeader) {
            document.getElementById("header").style.display = "block";
            document.getElementById("index").style.display = "block";
            document.getElementById("content").style.display = "block";
            document.getElementById("indexRight").style.display = "none";

            var headerHeight = Math.round(h*.1);
            document.getElementById("header").style.left = "0px";
            document.getElementById("header").style.top = "0px";
            document.getElementById("header").style.width = w + "px";
            document.getElementById("header").style.height = headerHeight + "px";

            var indexWidth = Math.round(w*Number(columnOnePCT));
            document.getElementById("index").style.left = "0px";
            document.getElementById("index").style.top = headerHeight + "px";
            document.getElementById("index").style.width = (indexWidth) + "px";
            document.getElementById("index").style.height = (h-headerHeight) + "px";

            document.getElementById("content").style.left = (indexWidth) + "px";
            document.getElementById("content").style.top = headerHeight + "px";
            document.getElementById("content").style.width = (w - indexWidth) + "px";
            document.getElementById("content").style.height = (h-headerHeight) + "px";
        }
        else {
            document.getElementById("header").style.display = "none";
            document.getElementById("indexRight").style.display = "none";

            var indexWidth = Math.round(w*Number(columnOnePCT));
            document.getElementById("index").style.left = "0px";
            document.getElementById("index").style.top = "0px";
            document.getElementById("index").style.width = (indexWidth) + "px";
            document.getElementById("index").style.height = h + "px";

            document.getElementById("content").style.left = (indexWidth) + "px";
            document.getElementById("content").style.top = "0px";
            document.getElementById("content").style.width = (w - indexWidth) + "px";
            document.getElementById("content").style.height = h + "px";
        }
    }
    if (layoutTypes == "3 Column") {
        if (topHeader) {
            document.getElementById("header").style.display = "block";
            document.getElementById("index").style.display = "block";
            document.getElementById("content").style.display = "block";
            document.getElementById("indexRight").style.display = "block";

            var headerHeight = Math.round(h*.1);
            document.getElementById("header").style.left = "0px";
            document.getElementById("header").style.top = "0px";
            document.getElementById("header").style.width = w + "px";
            document.getElementById("header").style.height = headerHeight + "px";

            var indexWidth = Math.round(w*Number(columnOnePCT));
            var contentWidth = Math.round(w*Number(columnTwoPCT));
            var indexWidthRight = Math.round(w*Number(columnThreePCT));
            document.getElementById("index").style.left = "0px";
            document.getElementById("index").style.top = headerHeight + "px";
            document.getElementById("index").style.width = (indexWidth) + "px";
            document.getElementById("index").style.height = (h-headerHeight) + "px";

            document.getElementById("content").style.left = (indexWidth) + "px";
            document.getElementById("content").style.top = headerHeight + "px";
            document.getElementById("content").style.width = contentWidth + "px";
            document.getElementById("content").style.height = (h-headerHeight) + "px";

            document.getElementById("indexRight").style.left =  indexWidth + contentWidth + "px";
            document.getElementById("indexRight").style.top = headerHeight + "px";
            document.getElementById("indexRight").style.width = (indexWidthRight) + "px";
            document.getElementById("indexRight").style.height = (h-headerHeight) + "px";
        }
        else {
            document.getElementById("header").style.display = "none";

            var indexWidth = Math.round(w*Number(columnOnePCT));
            var contentWidth = Math.round(w*Number(columnTwoPCT));
            var indexWidthRight = Math.round(w*Number(columnThreePCT));
            document.getElementById("index").style.left = "0px";
            document.getElementById("index").style.top = "0px";
            document.getElementById("index").style.width = (indexWidth) + "px";
            document.getElementById("index").style.height = h + "px";

            document.getElementById("content").style.left = (indexWidth) + "px";
            document.getElementById("content").style.top = "0px";
            document.getElementById("content").style.width = contentWidth + "px";
            document.getElementById("content").style.height = h + "px";

            document.getElementById("indexRight").style.left =  indexWidth + contentWidth + "px";
            document.getElementById("indexRight").style.top = "0px";
            document.getElementById("indexRight").style.width = (indexWidthRight) + "px";
            document.getElementById("indexRight").style.height = h + "px";
        }
    }

    //Enable when drawing with Canvas
    if (document.getElementById("myCanvas")) {
      var canvas = document.getElementById("myCanvas");
      canvas.style.width ='100%';
      canvas.style.height ='100%';
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
}
//---------------------------------------

//DIV Operations-------------------------
function toggleDiv(theDiv) {
  var theElement = document.getElementById(theDiv);

  if (theElement.style.display == "block") {
    theElement.style.display = "none";
  }
  else {
    theElement.style.display = "block";
  }
}

function replaceDIVContents(theDiv,theData) {
    document.getElementById(theDiv).innerHTML = theData;
}

function appendToDIV(theDiv,theData) {
    var existingData = document.getElementById(theDiv).innerHTML;
    document.getElementById(theDiv).innerHTML = existingData + theData;
}

function prependToDIV(theDiv,theData) {
    var existingData = document.getElementById(theDiv).innerHTML;
    document.getElementById(theDiv).innerHTML = theData + existingData;
}

function reSizeDiv(theDIV,width,height) {
    document.getElementById(theDIV).style.width = width + "px";
    document.getElementById(theDIV).style.height = height + "px";
}

//Input Resets: theType = "checkbox" or "text" or "radio"
function resetInputs(theDIV,theType) {
    var x = document.getElementById(theDIV);
    var y = x.getElementsByTagName("input");
    for (var i = 0; i < y.length; i++) {
        if (y[i].type == theType) {
            y[i].checked = false;
        }
        if (y[i].type == theType) {
            y[i].value = "default";
        }
    }
}
//---------------------------------------

//Retrieve Parameters from URL-----------
function resolveURLSimple() {
    var docURL = document.URL;
    var theURLlen = docURL.length;
    var typeBegin = docURL.indexOf("?");
    var typeEnd = docURL.indexOf("=");
    if (typeBegin<1) {
        console.log("No parameters found in the URL.");
        return;
    }
    else {
        var urlField = docURL.substring(typeBegin+1,typeEnd);
        var urlValue = docURL.substring(typeEnd+1,theURLlen).split(",");

        for (var i = 0; i < urlValue.length; i++) {
            urlValue[i] = urlValue[i].replace("_", " ");
        }

        for (var i = 0; i < urlValue.length; i++) {
            urlValue[i] = "'" + urlValue[i] + "'";
        }

        console.log(urlField,urlValue);
        return urlField, urlValue;
    }
}

function resolveURLMapService() {
      //Sample URL = https://apps.dot.state.tx.us/mapri.html?RIA_RTE_ID=IH0035-KG&DI=14
      var docURL = document.URL;
      var theURLlen = docURL.length;
      var typeBegin = docURL.indexOf("?");
      var theQuery="";
      var queryVariables = [];
      var searchValues = [];
      var theCenter = [];
      var theZoom;
      var theVariables = [];

      if (typeBegin<1) {
        theQuery = "";
        return;
      }

      theVariables = docURL.substring(typeBegin+1,theURLlen).split("&");

      var tempNAI;
      for (var i = 0; i < theVariables.length; i++) {
        var equalOperator = theVariables[i].indexOf("=");
        var greaterThanOperator = theVariables[i].indexOf("%3E");
        var lessThanOperator = theVariables[i].indexOf("%3C");

        if (equalOperator>0) {
          tempNAI = theVariables[i].split("=");
        }

        if (greaterThanOperator>0) {
          tempNAI = theVariables[i].split("%3E");
        }

        if (lessThanOperator>0) {
          tempNAI = theVariables[i].split("%3C");
        }

        if (tempNAI[0].toUpperCase()=="CENTER") {
          theCenter = tempNAI[1].split(",");
        }
        else if (tempNAI[0].toUpperCase()=="ZOOM") {
          theZoom = tempNAI[1];
        }
        else {
          searchValues = tempNAI[1].split(",");

          for (var j = 0; j < searchValues.length; j++) {
            if (isNaN(searchValues[j])) {
              searchValues[j] = searchValues[j].replace("_", " ");
              searchValues[j] = "'" + searchValues[j] + "'";
            }
          }

          if (equalOperator>0) {
            queryVariables.push(tempNAI[0].toUpperCase() + " IN (" + searchValues.toString() + ")");
          }

          if (greaterThanOperator>0) {
            queryVariables.push(tempNAI[0].toUpperCase() + " > " + searchValues[0].toString());
          }

          if (lessThanOperator>0) {
            queryVariables.push(tempNAI[0].toUpperCase() + " < " + searchValues[0].toString());
          }
        }
      }

      for (var i = 0; i < queryVariables.length; i++) {
        if (i==0) {
          theQuery += queryVariables[i];
        }
        else {
          theQuery += " AND " + queryVariables[i];
        }
      }

      console.log(theQuery);
      return theQuery;
    }
//---------------------------------------

//GPS Operations-------------------------
function startGPS() {
	var options = {
	  enableHighAccuracy: true,
	  maximumAge: 0
	};

	if (window.navigator.geolocation) {
		window.navigator.geolocation.watchPosition(showStartUpPosition,null,options);
    }
    else {
    	alert("This device does not support location.  Please use a GPS enabled device.");
    }
}

function showStartUpPosition(position) {
	var positionalAccuracy = Math.round(position.coords.accuracy*100)/100;
	var currentLat = Math.round(position.coords.latitude*100000000)/100000000;
	var currentLong = Math.round(position.coords.longitude*100000000)/100000000;

	if (positionalAccuracy>100) {
        console.log("GPS Accuracy is greater than 100.");
	}

	console.log(currentLat + ", " + currentLong + ", " + positionalAccuracy);
}
//---------------------------------------

//HTML5 Local Storage Operations---------
function saveToLocalStorage(theData) {
	var recNBR = getLocalStorageRecordCount() + 1;
	var storage = window.localStorage;
	storage.setItem(recNBR, theData + "," + makeDateTime());
	console.log(recNBR,theData,makeDateTime());
}

function clearLocalStorage() {
	var r = confirm("Delete all saved records?");
	if (r == true) {
		window.localStorage.clear();
	}
}

function viewLocalStorage() {
    var recArray = new Array();
	var i;
	var storage = window.localStorage;

	//Loop through the data
    for (i=0;i<=storage.length-1;i++) {
		recArray.push(storage.getItem(i+1));
	}

	console.log(recArray);
	return recArray;
}

function getLocalStorageRecordCount() {
	var storage = window.localStorage;
	console.log(storage.length);
	return storage.length;
}

function deleteLastLocalStorageRecord() {
	var r = confirm("Delete last record?");
	if (r == true) {
		window.localStorage.removeItem(getLocalStorageRecordCount());
		console.log("Last record deleted.");
	}
}
//---------------------------------------

//Play a sound---------------------------
function beep() {
   var snd = new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");
   snd.play();
}
//---------------------------------------

//Return the Date and Time---------------
function makeDateTime() {
	var dateObj = new Date();
	var month = dateObj.getUTCMonth() + 1; //months from 1-12
	var day = dateObj.getUTCDate();
	var year = dateObj.getUTCFullYear();
	var hour = dateObj.getUTCHours();
	var minutes = dateObj.getUTCMinutes();
	var newdate = month + "/" + day + "/" + year + " " + hour + ":" + minutes;
	console.log(dateObj);
    return dateObj;
}
//---------------------------------------

//Numberic Operations--------------------
function roundToDecimalPlace(value,decimals) {
    console.log(Number(Math.round(value+'e'+decimals)+'e-'+decimals));
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

//Random Number
function getRandomIntInclusive(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    console.log(Math.floor(Math.random() * (max - min + 1)) + min);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Find Minimum value in an array
function findMin(theArray) {
   var minInArray = Math.min.apply(Math, theArray);
   console.log(minInArray);
   return minInArray;
}

//Find Maximum value in an array
function findMax(theArray) {
   var maxInArray = Math.max.apply(Math, theArray);
   console.log(maxInArray);
   return maxInArray;
}

//Sum Numbers in a Array
function sumNumericArray(theArray) {
    var sum = 0;
    for (var i = 0, len = theArray.length; i < len; i++) {
        sum += theArray[i];
    }
    console.log(sum);
    return sum;
}
//---------------------------------------

//String Operations Left,Right,Mid,Commas
//---------------------------------------
function getLeftCharacters(theData,theNumber) {
    console.log(theData.substring(0, theNumber));
    return theData.substring(0, theNumber);
}

function getRightCharacters(theData,theNumber) {
    console.log(theData.substring(theData.length-theNumber, theData.length));
    return theData.substring(theData.length-theNumber, theData.length);
}

function getMiddleCharacters(theData,beginNumber,endNumber) {
    console.log(theData.substring(beginNumber, beginNumber+endNumber));
    return theData.substring(beginNumber, beginNumber+endNumber);
}

function addCommas(nStr) {
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    console.log(x1 + x2);
    return x1 + x2;
}

function removeCommas(theString) {
    var newStr = theString.replace(/,/g, '');
    console.log(newStr);
    return newStr;
}

function replaceCharacter(theText,theReplacement) {
    var newText = theText.replace(/[^a-zA-Z0-9 ]/g,theReplacement);
    console.log(newText);
    return newText;
}
//---------------------------------------

//HTML 5 Drawing functions -  Requires a Canvas tag with and id of myCanvas, color is hexadecimal (ex. #FFFFFF)
//---------------------------------------
function drawRectangle(begX,begY,theWidth,theHeight,theColor) {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = theColor;
    ctx.fillRect(begX,begY,theWidth,theHeight);
    //   ctx.stroke();
}

function drawCircle(begX,begY,theRadius,theColor) {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle = theColor;
    ctx.arc(begX,begY,theRadius,0,2*Math.PI);
    ctx.fill();
    // ctx.stroke();
}

function drawPoint(begX,begY,theRadius,theColor) {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle = theColor;
    ctx.arc(begX,begY,theRadius,0,2*Math.PI);
    ctx.fill();
}

function drawLine(begX,begY,endX,endY,theWidth,theColor) {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.lineWidth = theWidth;
    ctx.moveTo(begX,begY);
    ctx.lineTo(endX,endY);
    ctx.strokeStyle = theColor;
    ctx.stroke();
}

function drawPolygon(theCoords,theWidth,fillColor,outlineColor,theScale) {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.scale(theScale, theScale);
    ctx.beginPath();
    ctx.lineWidth = theWidth;

    //First point
    ctx.moveTo(theCoords[0][0],theCoords[0][1]);

    //Remainder of points
    for (var i = 0; i < theCoords.length; i++) {
        if (i > 0) {
            ctx.lineTo(theCoords[i][0],theCoords[i][1]);
        }
    }

    //Closing the polygon
    ctx.closePath();

    //Colors and styles
    ctx.fillStyle = fillColor;
    ctx.fill();
    ctx.strokeStyle = outlineColor;
    ctx.stroke();
}

function drawText(theText,theX,theY,theColor,theSize) {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.font = theSize + "px Comic Sans MS";
    ctx.fillStyle = theColor;
    // ctx.textAlign = "center";
    ctx.fillText(theText,theX,theY);
}

function clearDrawings() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
//---------------------------------------

//XML HTTP Request - With callback to handle follow up processing in the onreadystatechange function
//---------------------------------------
function xmlRequestWithProcessing(theService,callback) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.responseType = 'json';

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)	{
            callback(xmlhttp.response);
        }
    };

    xmlhttp.open("POST",theService,true);
    xmlhttp.send();
}
//---------------------------------------

//XML HTTP Request - To update data services on AGO
//---------------------------------------
function xmlRequestNoProcessing(serviceString,paraString) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.responseType = 'json';

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)	{
            console.log(xmlhttp.response);
        }
    };

    console.log(serviceString + paraString);
    xmlhttp.open("POST",serviceString + paraString,true);
    xmlhttp.send();
}
//---------------------------------------

//AGO Service requests for use with XML HTTP
//---------------------------------------
function queryRecordFromService(theServiceName,theQuery,theOrder,theFields) {
    var theRequest = theServiceName + "/query?f=json&orderByFields=" + theOrder + "&returnGeometry=false&where=" + theQuery + "&outFields=" + theFields;
    return theRequest;
}

function queryRecordFromServiceGeometry(theServiceName,theField,theAttribute) {
    var theRequest = theServiceName + "/query?f=json&where=" + theField + "='" + theAttribute + "'&returnGeometry=true&returnM=true";
    return theRequest;
}

function addRecordToService(theServiceName,theData) {
    xmlRequestNoProcessing(theServiceName,"/addFeatures?f=json&features=" + theData);
}

function deleteRecordFromService(theServiceName,theData) {
    xmlRequestNoProcessing(theServiceName,"/deleteFeatures?f=json&objectids=" + theData);
}

function updateRecordInService(theServiceName,theData) {
    xmlRequestNoProcessing(theServiceName,"/updateFeatures?f=json&features=" + theData);
}

function createJSONAttribute(theRecordID,theFieldName,theAttribute) {
	var theJSONData = "{'attributes': {'OBJECTID':'" + theRecordID + "','" + theFieldName + "':'" + theAttribute + "'}}";
	console.log(theJSONData);
	return theJSONData;
}

function createJSONGeom(theGeom,theFieldName,theAttribute) {
    var theJSONData = "{'geometry':" + theGeom + ",'attributes':{'" + theFieldName + "':'" + theAttribute + "'}}";
    console.log(theJSONData);
    return theJSONData;
}
//---------------------------------------

//Confirmation Dialog--------------------
function confirmDialog(theMessage) {
    var r = confirm(theMessage);
    if (r == true) {
        return true;
    }
    else {
        return false;
    }
}

function infoDialog(theMessage) {
    alert(theMessage);
}
//---------------------------------------

//HTML Table accepts a multi-dimensional array.  No field names.
//---------------------------------------
function makeTableFromArrayNoHeader(dataArray) {
    var result = "<table>";
    for(var i=0; i<dataArray.length; i++) {
        result += "<tr>";
        for(var j=0; j<dataArray[i].length; j++){
            result += "<td>" + dataArray[i][j] + "</td>";
        }
        result += "</tr>";
    }
    result += "</table>";

    return result;
}
//---------------------------------------

//HTML Table accepts a multi-dimensional array.  First set in the array should contain field names.  Example: [["ID","NAME","AGE"],["1", "Michael",43], ["2", "Jessica",40]]
//---------------------------------------
function makeTableFromArray(dataArray) {
    var result = "<table>";
    for(var i=0; i<dataArray.length; i++) {
        result += "<tr>";
        for(var j=0; j<dataArray[i].length; j++){
            if (i==0) {
                result += "<th>" + dataArray[i][j] + "</th>";
            }
            else {
                result += "<td>" + dataArray[i][j] + "</td>";
            }
        }
        result += "</tr>";
    }
    result += "</table>";

    return result;
}
//---------------------------------------

//HTML Table from AGO Service------------
function makeTableFromService(dataArray) {
    //Get field names
    var fieldNames = [];
    for(var i=0; i<dataArray.fields.length; i++) {
        fieldNames.push(dataArray.fields[i].name);
    }

    //Build header record
    var result = "<table>";
    result += "<tr>";
    for (var i=0; i<fieldNames.length; i++) {
        result += "<th>" + fieldNames[i] + "</th>";
    }
    result += "</tr>";

    //Build the table
    for(var i=0; i<dataArray.features.length; i++) {
        result += "<tr>";
        for (var x in dataArray.features[i].attributes) {
            result += "<td>" + dataArray.features[i].attributes[x]; + "</td>";
        }
        result += "</tr>";
    }
    result += "</table>";

    replaceDIVContents("content", result);
}
//---------------------------------------

//Working with  arrays-------------------
function mergeArrays(arrayOne,arrayTwo) {
    var newArray = arrayOne.concat(arrayTwo);
    console.log(newArray);
    return newArray;
}

function removeItemFromArray(theArray,theItem) {
    var theIndex = theArray.indexOf(theItem);
    theArray.splice(theIndex,1);
    console.log(theArray);
    return theArray;
}

function prepJSONForTransit(theJSON) {
    var theReport = JSON.stringify(theJSON);
    console.log(theReport);
    return theReport;
}

function convertStringToJSON(theString) {
    var jsonObj = JSON.parse(theString);
    console.log(jsonObj);
    return jsonObj;
}
//---------------------------------------

//Type ahead search----------------------
function processSearchTerms(dataArray) {
    for(var i=0; i<dataArray.features.length; i++) {
        for (var x in dataArray.features[i].attributes) {
            searchTerms.push(dataArray.features[i].attributes[x]);
        }
    }
}

function typeAheadSearch(theDIV,searchString) {
    // An array can be used to store the results if desired
    // var matches = [];
    // matches.push([searchTerms[i]]);
    var matches = "";
    for (var i = 0; i < searchTerms.length; i++) {
        if (searchTerms[i].substr(0, searchString.length).toUpperCase() == searchString.toUpperCase()) {
        matches += [searchTerms[i]] + "<br>";
        }
    }
   replaceDIVContents(theDIV, matches);
}
//---------------------------------------

//Screen Coordinates on Mouse Move-------
function showCoords(event) {
    var x = event.screenX;  //Applies to the entire screen
    var y = event.screenY;  //Applies to the entire screen
    // var x = event.clientX;  //Applies to a Div or HTML element
    // var y = event.clientY;  //Applies to a Div or HTML element
    console.log(x,y);
    return x,y;
}
//---------------------------------------

//Return key pressed on keyboard---------
function checkKey(e) {
    console.log(e.keyCode);
    return e.keyCode;
}
//---------------------------------------

//Calculate Bearing ---------------------
//Extend Number object with methods to convert between degrees & radians
Number.prototype.toRadians = function() { return this * Math.PI / 180; };
Number.prototype.toDegrees = function() { return this * 180 / Math.PI; };

function calculateBearing(fromLat,fromLong,toLat,toLong) {
    var lat1 = fromLat.toRadians();
    var lat2 = toLat.toRadians();
    var longDifference = (fromLong-toLong).toRadians();

    var x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(longDifference);
    var y = Math.sin(longDifference) * Math.cos(lat2);
    var radians = Math.atan2(y, x);
    var bearing = radians.toDegrees();

    var adjustedBearing = 0;
    if (bearing<0) {
        adjustedBearing = bearing * -1;
    }
    if (bearing>0) {
        adjustedBearing = bearing + 180;
    }
    if (bearing==180) {
        adjustedBearing = bearing;
    }
    if (bearing==0) {
        adjustedBearing = bearing;
    }

    console.log(adjustedBearing);
    return adjustedBearing;
}
//---------------------------------------

//Calculate mid-point -------------------
function calculateMidPoint(fromLat,fromLong,toLat,toLong) {
    var midPoint = [];
    var midX = ((Math.abs(fromLong) + Math.abs(toLong)) / 2) * -1;
    var midY = (fromLat + toLat) / 2;

    midPoint.push([midX,midY]);

    console.log(midPoint);
    return midPoint;
}
//---------------------------------------

//Calculate Distance --------------------
function calculateDistance(fromLat,fromLong,toLat,toLong) {
    var radius = 6378137;  //radius of the earth in meters

    var lat1 = fromLat.toRadians()
    var long1 = fromLong.toRadians();
    var lat2 = toLat.toRadians()
    var long2 = toLong.toRadians();
    var latDiff = lat2 - lat1;
    var longDiff = long2 - long1;

    var a = Math.sin(latDiff/2)*Math.sin(latDiff/2) + Math.cos(lat1)*Math.cos(lat2) * Math.sin(longDiff/2)*Math.sin(longDiff/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = roundToDecimalPlace((radius * c) / 1609.344,3);

    console.log(d);
    return d;
}
//---------------------------------------

//Traverse Geometry from ESRI RestAPI ---
function walkGeom(theGeometry) {
    var theGeomPart;
    var coordX;
    var coordY;
    var coordM;

    for (var a=0; a < theGeometry.features.length; a++) {
        theGeomPart= theGeometry.features[a].geometry.paths;

        for (var i = 0; i < theGeomPart.length; i++) {
            for (var j = 0; j < theGeomPart[i].length; j++) {
                coordX = theGeomPart[i][j][0];
                coordY = theGeomPart[i][j][1];
                coordM = roundToDecimalPlace(theGeomPart[i][j][2],3);
                console.log("X:"+ roundToDecimalPlace(coordX,0),"Y:"+roundToDecimalPlace(coordY,0),"M:"+coordM);
            }
        }
    }
}
//---------------------------------------
