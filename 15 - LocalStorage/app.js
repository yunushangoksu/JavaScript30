const addItems = document.querySelector(".add-items");
const inputField = document.querySelector("#inputField");
const itemsList = document.querySelector(".plates");
const loadingNode = document.querySelector("#loadingNode");
let items = JSON.parse(localStorage.getItem("food")) || [];

render();

function render() {
  if (items.length > 0) {
    loadingNode.remove();
  }
  for (let index = 0; index < items.length; index++) {
    const itemNode = document.createElement("li");
    itemNode.setAttribute("class", "foodrow");
    const itemNodeCheckbox = document.createElement("div");
    itemNodeCheckbox.setAttribute("class", "checkbox");
    itemNodeCheckbox.innerText = items[index].checked ? "🌮" : "◻️";
    //////////
    itemNodeCheckbox.addEventListener("click", () => {
      if (items[index].checked == true) {
        items[index].checked = false;
        localStorage.setItem("food", JSON.stringify(items));
        itemsList.innerHTML = null;
      } else {
        items[index].checked = true;
        localStorage.setItem("food", JSON.stringify(items));
        itemsList.innerHTML = null;
      }
      render();
    });
    /////////
    itemNode.innerText = items[index].name;
    itemNode.appendChild(itemNodeCheckbox);
    itemsList.appendChild(itemNode);
  }
}

function handleSubmit(item) {
  let newItem = { name: item, checked: false };
  items.push(newItem);
  localStorage.setItem("food", JSON.stringify(items));
  inputField.value = "";
  itemsList.innerHTML = null;

  render();
}

addItems.addEventListener("submit", (event) => {
  event.preventDefault();
  handleSubmit(inputField.value);
});
const checkboxes = document.querySelectorAll(".checkbox");
