let body = document.getElementById("background-colour");
let button = document.getElementById("get-new-avatar");
let cardDetails = document.getElementById("card-details");
let avatar = document.getElementById("avatar");
let avatarUrl = `https://api.adorable.io/avatars/285/`;

button.addEventListener('click', changeUserDetails);

function changeUserDetails() {
  changeAvatar();
  addCardDetails();
}

function changeAvatar() {
  avatar.src = `${avatarUrl}${Math.random()}.png`
}

function addCardDetails() {
  cardDetails.innerHTML = `<p>Card Type: ${casual.card_type}</p><p>`
}
// louise do I need to push it to develop?

// i think when they have merged, we need to pull from develop?
// i ? 
// its already push to our branch

// i thikn kno wyou can push to our branch that is off of develop
// push to feature/client-side
// ok - i think we maybe wait until they have merged onto develop then we pull
// let url = "http://api.adorable.io/avatars/285/" //identifier.png needs to be added to end

// let name = ; // need to find the name to use as a variable in url

// function getAvatar() {
//   fetch(`${url}${name}.png`).then((response) => response.JSON())
//   .then(())
// }

// name: casual.name,
// address: casual.address,
// colour: casual.rgb_hex,
// cardType: casual.card_type,
// cardNumber: casual.card_number,
// cardExpiry: casual.card_exp,