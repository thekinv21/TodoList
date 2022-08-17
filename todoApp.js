// -------------------add and clear button id --------------//
const addBtn = document.getElementById("add-btn");
const clearBtn = document.getElementById("clear-btn");
//-----------------input id -----------------//
const myText = document.querySelector(".add-text");
// ------------todo-container id-------------- //

const todoContainer = document.querySelector(".todo-items");

//---------------- alert id -------------------- //
const alertWarning = document.querySelector(".alert");
const alertComplete = document.querySelector(".alert-complated");
const alertDellete = document.querySelector(".alert-clear");

const Ekle = (e) => {
  e.preventDefault();

  // --------------------Boşluk kontrolu fonksyonu--------------------------//
  const isEmpty = (str) => !str.trim().length;
  if (isEmpty(myText.value)) {
    //show warning alert//
    alertWarning.style.display = "block";

    setTimeout(() => {
      alertWarning.style.display = "none";
    }, 1500);
  } else {
    //----------Create main items container------------------------//
    const divİtems = document.createElement("div");
    divİtems.classList.add("items");

    //----------------Create text container div-----------------------------//
    const tododiv = document.createElement("div");
    tododiv.classList.add("text-container");

    //---------------------create p text----------------------//
    const todopText = document.createElement("p");
    todopText.classList.add("todo-text");

    // ---------------my input value to UpperCAse---------------------//
    let newText = myText.value.toUpperCase();
    // ------------------- Add element in dom ---------------//
    todopText.innerText = newText;
    tododiv.appendChild(todopText);

    //-------------- Create icons--------------------//
    const todoİconsli = document.createElement("div");
    todoİconsli.classList.add("todo-buttons");

    const li1 = document.createElement("li");
    li1.innerHTML = "<i class='fa-solid fa-clipboard-check'></i>";
    todoİconsli.appendChild(li1);

    const li2 = document.createElement("li");
    li2.innerHTML = "<i class='fa-solid fa-pen-to-square'></i>";
    todoİconsli.appendChild(li2);

    const li3 = document.createElement("li");
    li3.innerHTML = "  <i class='fa-solid fa-trash-can'></i>";
    todoİconsli.appendChild(li3);

    divİtems.appendChild(tododiv);
    divİtems.appendChild(todoİconsli);
    todoContainer.appendChild(divİtems);

    //------------------Complate Todo------------------------- //

    li1.addEventListener("click" , Complate = () => {

      tododiv.classList.toggle("todo-complated");


    })









    //------------------Edit Todo------------------------- //
    li2.addEventListener(
      "click",
      (Edit = () => {
        
    
        todopText.innerText = prompt("Edit Todo : " ).toUpperCase();

        



      })
    );

       //------------------Delete Todo------------------------- //

    li3.addEventListener(
      "click",
      (Delete = () => {


        
        todoContainer.removeChild(divİtems)
        
     

        //-------------------Show delete alert------------------//
        alertDellete.style.display = "block";

        setTimeout(() => {
          alertDellete.style.display = "none";
        }, 1000);
      })
    );

    //---------------------Show complete alert--------------------------------//
    alertComplete.style.display = "block";

    setTimeout(() => {
      alertComplete.style.display = "none";
    }, 1000);

    //---------------clear inputs after adding item -------------///

    myText.value = "";
  }
};

addBtn.addEventListener("click", Ekle);

// -------------remove all items in dom---------------------------- //
const Clear = () => {
  if (todoContainer.innerHTML === "") {
    swal({
      title: "Todo Yok!",
      text: "Silinecek Todo Kalmadı!",
      icon: "error",
      button: "Okey !",
      
    });

    
  } else {
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
