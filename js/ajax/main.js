var xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.github.com/users/jessicacarneiro");
xhr.send(null);


xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) { // success
        var response = JSON.parse(xhr.response);

        var headerElement = document.querySelector("div.page-header h1");
        var headerText = document.createTextNode(response.name);
        headerElement.appendChild(headerText);

        var pElement = document.querySelector("div.container p.lead");
        var pText = document.createTextNode(response.bio);
        pElement.appendChild(pText);

        var imgElement = document.querySelector("img");
        imgElement.setAttribute("src", response.avatar_url);
        imgElement.setAttribute("width", "100px");
        imgElement.setAttribute("height", "100px");
    }
}
