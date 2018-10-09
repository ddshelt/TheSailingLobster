XMLHttpRequest
let apiRequest = new XMLHttpRequest();
let menuOne = document.getElementById("menuOne");
let menuTwo = document.getElementById("menuTwo");

document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
         getFoods();
       }
    }


function getFoods (){

  let url = "https://entree-f18.herokuapp.com/v1/menu/10"

  apiRequest.onload = onSuccess
  apiRequest.onerror = onError
  apiRequest.open ('get',url,true);
  apiRequest.send();

}


function onError (){
  alert("Menus not working!!")
}

function onSuccess (){
  if (apiRequest.status == "200") {

      let response = JSON.parse(apiRequest.responseText);

      for (i=0; i < response.menu_items.length; i++){

        if (i < menuOne.children.length) {
          menuOne.children[i].innerHTML = response.menu_items[i].description
        } else {
          menuTwo.children[i-5].innerHTML = response.menu_items[i].description
        }
      }
    }
  }
