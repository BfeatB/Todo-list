//Form elements:
const form = document.querySelector(".tasks__form");
const input = form.querySelector(".tasks__input");
const submitButton = form.querySelector(".tasks__submit-button")

//List elements:
const container = document.querySelector(".tasks__list");
const listElement = document.querySelector(".tasks__item");
const listElementText = document.querySelector(".tasks__text");
const editButtons = document.querySelectorAll(".tasks__edit-button");
const editButton = document.querySelector(".tasks__edit-button");
const deleteButton = document.querySelector(".tasks__delete-button");

//Template elements:
const itemTemplate = document.querySelector(".tasks__template");

//Item clone function
function itemClone() {
    const itemNode = itemTemplate.content.firstElementChild.cloneNode(true);
    const ElementText = itemNode.querySelector(".tasks__text");
    ElementText.value = input.value;
    itemNode.querySelector(".tasks__delete-button").addEventListener("click", function(evt) {
        evt.target.closest(".tasks__item").remove();
      });
    itemNode.querySelector(".tasks__edit-button").addEventListener("click", function(evt) {
        ElementText.toggleAttribute("readonly");
        if (ElementText.hasAttribute("readonly")) {
          ElementText.blur();
        } 
        else {
          ElementText.focus();

        }
      });

    return itemNode;
}

// Add a new task in order
function formSubmitAddCardHandler(evt) {
    evt.preventDefault();
    container.append(itemClone());
    form.reset();
}

function onKeydownEnter(evt) {
  document.addEventListener(keydown = "enter", () =>
  evt.target.addAttribute("readonly"))
}


submitButton.addEventListener("click", formSubmitAddCardHandler);


