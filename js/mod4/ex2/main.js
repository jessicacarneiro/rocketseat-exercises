var inputElement = document.querySelector("div#form input[name='user']");
var btnElement = document.querySelector("div#form button[name='sendUser']");
var reposUl = document.querySelector("div#repos ul");

function showRepos(repos) {
    for (let repo of repos) {
        var liElement = document.createElement("li");
        var liText = document.createTextNode(repo.name);
        liElement.appendChild(liText);
        reposUl.appendChild(liElement);
    }
}

btnElement.onclick = function () {
    var url = "https://api.github.com/users/" + inputElement.value + "/repos";
    console.log(url);

    axios.get(url)
    .then(function(response) {
        showRepos(response.data);
    })
    .catch(function(error) {
        console.warn(error);
    });
};