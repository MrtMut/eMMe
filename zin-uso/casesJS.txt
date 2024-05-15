/**
 * This code is executed when the page is loaded.
 * This code fetches 3 random users from the API and sets their name and image in the HTML.
 * The API used is randomuser.me, which provides a free API for generating random user data.
 * The API is called using the fetch() method, which returns a Promise that resolves to a Response object.
 * If an error occurs during the fetch, it is caught and logged to the console.
 */
fetch("https://randomuser.me/api/?page=3&results=3&seed=amtabcda&nat=es&inc=gender,name,dob,picture&noinfo")
    .then((response) => response.json())
    .then((data) => {
        for (let i = 0; i < 4; i++) {
            let user_api = data.results[i];
            let name_api = user_api.name.first + " " + user_api.name.last;
            let img_case_api = user_api.picture.large;

            let cases_item = document.querySelectorAll(".case-item");
            let cases_item_name = document.querySelectorAll(".case-item-name");
            cases_item[i].setAttribute("src", img_case_api);
            cases_item_name[i].innerHTML = name_api;
        }
    })
    .catch((error) => {
        console.error(error);
    });
