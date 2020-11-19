$(document).ready(initializeApp);
let food;
function initializeApp() {
    $('.mapContainer, .noResults, .loading').hide();
    //grab url params here
    const { search } = window.location; // gets current url
    const [, countryCode] = search.split("="); // splits url into array and gets the second index.

    const countryName = CountryApi.getCountryNameFromCode(countryCode);
    const countryLogoUrl = CountryApi.getCountryLogoUrl(countryCode);
    getFoodAndMedia(countryCode);
    renderCountryName(countryName); //display's country name
    renderLogoImage(countryLogoUrl); //displays country flag

    addEventHandlers();
}

function getFoodAndMedia(countryCode) {
    var ajaxOptions = {
        url: 'api/result_page_endpoint.php',
        method: 'GET',
        data: {
            'countryCode': countryCode,
        },
        success: function (response) {
            console.log("what is the response from endpoint",response)
            foodObj = JSON.parse(response);
            const { countryName, name, description, image, videoIds } = foodObj.data;
            food = name;
            renderDescriptionSection(name, description, image);
            // const videosArr =  youtubeIDSearch(videoIds);
        
           
            videoIds.forEach(renderVideo)         },
    };
    $.ajax(ajaxOptions)
}



function renderDescriptionSection(foodName, description, image) {
    let headerHtml = makeheader(foodName);
    let foodHeaderTag = $("<h1>").html(headerHtml);
    let foodImgTag = $("<img>").attr(
        "src",
        image
    );
    $(".food-section").prepend(foodHeaderTag);
    $(".foodImageContainer").append(foodImgTag);
    $(".wikiDescription").text(description);
}

function renderVideo(video) {
    console.log("inside renderVideo",video)
    const videoBody = $("<div>", {
        class: `videoDiv video-${video}`,
        on: {
            click: () => {
                openYoutubeModal(video);
            }
        }
    });
    let youtubeVideo = $("<iframe>", {
        width: "100%",
        height: "100%",
        src: `https://www.youtube.com/embed/${video}`,
        frameborder: "1"
    });
    videoBody.append(youtubeVideo);

    $(".youtubeVideos").append(videoBody);
}



function renderYelpResults(businesses) {
    businesses.businesses.forEach(business => {
        const {
            name,
            rating,
            review_count,
            display_phone,
            image_url,
            location,
            url,
            categories
        } = business;

        const $yelpReviewCard = $("<a>", {
            attr: {
                href: url,
                target: "_blank",
                class: "yelp-review-card animated fadeIn"
            }
        });

        const $reviewImg = $("<div>", {
            class: "image",
            style: `background-image: url('${image_url}')`
        });

        const $reviewTitle = $("<h1>", {
            text: name,
            class: "yelpResultTitle",
            style: "overflow-wrap: break-word"
        });

        const $rating = $("<div>", { class: "rating" }).rate({
            step_size: 0.1,
            readonly: true,
            initial_value: rating
        });

        const $categories = $("<p>", {
            class: "categories",
            style: "overflow-wrap: break-word",
            text: categories.reduce((accumulator, next) => {
                return accumulator + next.title + " ";
            }, "")
        });
        const $address = $("<p>", {
            class: "address",
            style: "overflow-wrap: break-word",
            text: `${location.city}`
        });

        const $details = $("<div>", { class: "details" });

        $details.append($reviewTitle, $rating, $categories, $address);
        $yelpReviewCard.append($reviewImg, $details).appendTo(".yelp-list");
    });
    if (businesses.businesses.length === 1) {
        $('.yelp-review-card').css('width', '50%');
    } else {
        $('.yelp-review-card').css('width', '30%');
    }
}

function addEventHandlers() {
    $(".brand").on("click", returnToHomepage);
    $(".modal").on("click", closeYoutubeModal); //closes fixed youtube modal
    document.querySelector(".flag img").addEventListener("error", addDummyFlag);
    $(".search-icon").on("click", sendLocationToYelp);
    $("input.inputField").on("keydown", handleInputBarEnterKey);
    $(window).scroll(hideBlinkScrollBar);
}

function renderCountryName(name) {
    $("h2.name").text(name);
}

function renderLogoImage(url) {
    $(".flag img").attr("src", url);
}

function addDummyFlag() {
    $(".flag img").attr("src", "images/UN_flag.png");
}

function returnToHomepage() {
    window.location.href = "index.html";
}

function makeheader(inputString) {
    let strArray = inputString.split(" "); //splits string into array
    let result = "";
    for (let i = 0; i < strArray.length; i++) {
        // concats html into result for $.html
        result += `<span>${strArray[i][0]}</span>${strArray[i].substr(
            1,
            strArray[i].length
        )} `;
    }
    return result;
}

function sendLocationToYelp() {
    $('.noResults').hide();
    $('.loading').show();
    window.scrollTo(0, document.body.scrollHeight);
    let location = $("input.inputField")[0].value;
    if (location === "") {
        displayNoResults();
        return;
    }
    //Remove click handlers for Yelp search
    $(".search-icon").off();
    $("input.inputField").off();
    $('.yelp-list').empty();
    Geolocation.cityLocation(location).done(( data ) => {
        let results=data.results[0]
        

        if (typeof (results) === "undefined") {
            $(".search-icon").on("click", sendLocationToYelp);
            $("input.inputField").on("keydown", handleInputBarEnterKey);
            displayNoResults();
            return;
        }
        const { location } = results.geometry;
        Yelp.getLocalBusinesses(location, food).done((businesses) => {
           
            businesses = JSON.parse(businesses);
            if (businesses.businesses.length === 0) {
                $(".search-icon").on("click", sendLocationToYelp);
                $("input.inputField").on("keydown", handleInputBarEnterKey);
                displayNoResults();
                return;
            } else {
                $('.noResults').hide();
                const windowSize = $(window).width();
                if (windowSize > 375) {
                    $('.mapContainer').show();
                }
            }
            $('.loading').hide();
            YelpMap(location, businesses.businesses);
            renderYelpResults(businesses);
            window.scrollTo(0, document.body.scrollHeight);
            //Reapply click handlers for Yelp Search
            $(".search-icon").on("click", sendLocationToYelp);
            $("input.inputField").on("keydown", handleInputBarEnterKey);
        });
    });
    return;
}

function handleInputBarEnterKey(event) {
    if (event.keyCode === 13) { //enter keypressed redirect the browser to page indicated with country code.
        sendLocationToYelp();
    }
    return;
}

function hideBlinkScrollBar() {
    $('.blinkScrollBar').css('display', 'none');
}

function displayNoResults() {
    $('.yelp-list').empty();
    $('.mapContainer, .loading').hide();
    $('.noResults').show();
    window.scrollTo(0, document.body.scrollHeight);
}