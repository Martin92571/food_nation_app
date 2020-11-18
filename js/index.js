$(document).ready(initializeApp);

function initializeApp() {
    let countryArray = CountryApi.getAllCountries();
    autoComplete($("input"), countryArray);
    $('.brand').on('click', returnToHomepage);
}

//Click logo to refresh front page and map.
function returnToHomepage() {
    //redirect the browser to page indicated.
    window.location.href = ("index.html");
}

function autoComplete(input$Ele, countryArray) {
    //privateData for lastFoundCountries and sets click handler
    let lastFoundCountries = [];
    $(".search-icon").on('click', sendCountryCode);

    //sets handler to catch changes in <input>
    input$Ele.on('input', function () {
        let val = this.value; //this is the input from dom element
        if (!val) { // check to make sure val exist
            $(".autoCompleteBackground").text(""); //if not clear text in input
            lastFoundCountries = []; //clear out lastfoundcountries
            return;
        } // this is when someone deletes previous inputs its a ''

        //filter countries with similar characters to input val
        let filteredCountryArr = countryArray
            .filter(country => country.name.substr(0, val.length).toUpperCase() === val.toUpperCase());

        //this is a check to see if array has anything, if nothing exist then stop the function.
        if (filteredCountryArr.length === 0) {
            return $(".autoCompleteBackground").text("");
        }

        this.value = capitalizeStr(val); // capitalize first letter of word

        lastFoundCountries = filteredCountryArr.splice(0, 5); // set lastFoundCountries to the last 5 found
        if (true) {
            $('datalist').remove();
            let dropDownMenu = $('<datalist>', {
                id: 'countries'
            });
            for (let countryMenuCount = 0; countryMenuCount < lastFoundCountries.length; countryMenuCount++) {
                let countryDropDown = $('<option>', {
                    value: lastFoundCountries[countryMenuCount].name
                })
                $(dropDownMenu).append(countryDropDown);
            }
            $('.search-container').append(dropDownMenu);
        }
    });

    // checks if enter or right arrow as been pressed
    input$Ele.on("keydown", function (event) {
        if (event.keyCode === 13) { //enter keypressed redirect the browser to page indicated with country code.
            sendCountryCode();
        }
    });

    function capitalizeStr(inputStr) {
        return inputStr[0].toUpperCase() + inputStr.substring(1, inputStr.length);
    }

    function sendCountryCode() {
        try {
            let countryCode = lastFoundCountries[0].code;
            window.location.href = (`resultPage.html?countrycode=${countryCode}`);
        } catch (err) { //if empty then it catches and replaces text.
            $("input").attr("placeholder", 'No country selected.');
            setTimeout(function () { $("input").attr("placeholder", "which country?"); }, 1000);
            console.log('no country selected');
        }
        return;
    }
}