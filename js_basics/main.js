document.getElementById("addButton").addEventListener("click", function() {
    var noteInput = document.getElementById("noteInput");
    var noteText = noteInput.value;
    noteInput.value = "";
  
    if (noteText !== "") {
      var noteContainer = document.getElementById("noteContainer");
      var noteElement = document.createElement("div");
      noteElement.classList.add("note");
  
      var bulletPoint = document.createElement("span");
      bulletPoint.innerHTML = "&#8226; ";
      bulletPoint.style.fontWeight = "bold";
      bulletPoint.style.marginRight = "5px";
  
      var noteTextElement = document.createElement("span");
      noteTextElement.innerText = noteText;
  
      var deleteButton = document.createElement("button");
      deleteButton.classList.add("delete-button");
      deleteButton.innerText = "Supprimer";
      deleteButton.addEventListener("click", function() {
        noteContainer.removeChild(noteElement);
      });
  
      noteElement.appendChild(bulletPoint);
      noteElement.appendChild(noteTextElement);
      noteElement.appendChild(deleteButton);
      noteContainer.appendChild(noteElement);
    }
  });
  