$(document).ready(function() {
    const pfpElement =  document.querySelector('#pfp');
    const linkElement =  document.querySelector('#url_git');
    const nameElement =  document.querySelector('#name');
    const userElement =  document.querySelector('#username');
    const repoElement =  document.querySelector('#repositories');
    const followerElement =  document.querySelector('#followers');
    const followinElement =  document.querySelector('#following');

    fetch('https://api.github.com/users/AnticosmicGatesofparadise')
        .then(function(res) {
            return res.json();
        })
        .then(function(json) {
            pfpElement.src = json.avatar_url;
            linkElement.href = json.html_url;
            nameElement.innerText = json.name;
            userElement.innerText = json.login;
            repoElement.innerText = json.public_repos;
            followerElement.innerText = json.followers;
            followinElement.innerText = json.following;
        })
})