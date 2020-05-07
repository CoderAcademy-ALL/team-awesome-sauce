let body = document.getElementById("background-colour");
let button = document.getElementById("get-new-avatar");

button.addEventListener('click', changeAvatar);

let avatar = document.getElementById("avatar");
let avatarUrl = `https://api.adorable.io/avatars/285/`;

function changeAvatar() {
  avatar.src = `${avatarUrl}${Math.random()}.png`
}



// let url = "http://api.adorable.io/avatars/285/" //identifier.png needs to be added to end

// let name = ; // need to find the name to use as a variable in url

// function getAvatar() {
//   fetch(`${url}${name}.png`).then((response) => response.JSON())
//   .then(())
// }