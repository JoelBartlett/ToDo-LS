var cardContainer = $(".card-container");
var submit = $(".submit-btn");
var currentList = localStorage.getItem('toDo');

submit.on("click", createNewUser);

function createNewUser() {
  var toDo = $(".to-do").val();
  appendNewToDo(toDo);
  clearInputs();
}

function appendNewToDo(toDo) {
    cardContainer.append(`
    <div class="to-do-card">
      <ul>${toDo}</ul>
 <button type="button" class="listButton">Done?</button>
    </div>
  `);
}
updateStorage("toDo");

function updateStorage(toDo) {
    localStorage.setItem("toDo", toDo);
    console.log(localStorage);
  }

function clearInputs() {
  $(".to-do").val("");
}
