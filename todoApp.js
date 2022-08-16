// -------------------add and clear button id --------------//
const addBtn = document.querySelector(".add-btn");
const clearBtn = document.querySelector(".clear-btn");
//-----------------input id -----------------//
const myText = document.querySelector(".add-text");
// ------------todo-container id-------------- //
const todoContainer = document.querySelector(".todo-container");

//---------------- alert id -------------------- //
const alertWarning = document.querySelector(".alert");
const alertComplete = document.querySelector(".alert-complated");
const alertDellete = document.querySelector(".alert-clear");

const Ekle = (e) => {
  e.preventDefault();

  //boşluk kontrolu fonksyonu
  const isEmpty = (str) => !str.trim().length;
  if (isEmpty(myText.value)) {
    //show warning alert//
    alertWarning.style.display = "block";

    setTimeout(() => {
      alertWarning.style.display = "none";
    }, 1500);
  } else {
    //create div
    const tododiv = document.createElement("div");
    tododiv.classList.add("todo-list");

    //create li text
    const todoliText = document.createElement("li");
    todoliText.classList.add("myTodotext");

    // my input value to UpperCAse
    let newText = myText.value.toUpperCase();

    todoliText.innerText = newText;
    tododiv.appendChild(todoliText); //  add elements

    // create icons
    const todoİconsli = document.createElement("li");
    todoİconsli.classList.add("icons");

    const todoEdit = document.createElement("button");
    todoEdit.classList.add("edit-btn");
    todoEdit.innerText = "Edit";
    todoİconsli.appendChild(todoEdit);

    //Edit my Text
    todoEdit.addEventListener(
      "click",
      (Edit = () => {
        todoliText.innerText = prompt("Yeni değer : ").toUpperCase();
      })
    );

    const todoDelete = document.createElement("button");
    todoDelete.classList.add("delete-btn");
    todoDelete.innerText = "Delete";
    todoİconsli.appendChild(todoDelete);

    todoDelete.addEventListener(
      "click",
      (Delete = () => {
        todoContainer.removeChild(tododiv);

        //show delete alert//
        alertDellete.style.display = "block";

        setTimeout(() => {
          alertDellete.style.display = "none";
        }, 1000);
      })
    );

    tododiv.appendChild(todoİconsli); // add elements

    // append full elements to container
    todoContainer.appendChild(tododiv);

    //clear input after add something
    myText.value = "";

    //show complete alert//
    alertComplete.style.display = "block";

    setTimeout(() => {
      alertComplete.style.display = "none";
    }, 1000);
  }
};

addBtn.addEventListener("click", Ekle);

//-------------remove all items in dom---------------------------- //
const Clear = () => {
  if (todoContainer.innerHTML === "") {
    swal({
      title: "Todo Yok!",
      text: "Silinecek Todo Kalmadı!",
      icon: "error",
      button: "Okey !",
    });
  } 
  
  else {
    todoContainer.innerHTML = "";
    swal({
      title: "Good job!",
      text: "TodoList Silindi!",
      icon: "success",
      button: "Okey!",
    });
  }
};

clearBtn.addEventListener("click", Clear);
