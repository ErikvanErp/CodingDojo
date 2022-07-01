var login = "erikvanerp";

// await requires async 
async function getDev(){
    var GitUser = await fetch(`https://api.github.com/users/${login}`);
    var GitUserJSON = await GitUser.json();
    console.log(GitUserJSON);

    var userName = document.querySelector(".userName");
    userName.innerText = GitUserJSON.name;
    var userRepos = document.querySelector(".userRepos");
    userRepos.innerText = `${GitUserJSON.public_repos} repositories`;
    var userPic = document.querySelector(".userPic");
    userPic.src = GitUserJSON.avatar_url;

    return;
}

// get name as user types in input text box
function getName(e) {
    console.log(e.value);
    login = e.value;
    return;
}
