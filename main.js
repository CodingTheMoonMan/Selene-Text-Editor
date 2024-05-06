let sideNums = 2
let codeLines = document.getElementById("codeline");

function createNumLine() {
      const numCount = document.createElement("div");     
      const numLine = document.createElement("div");

      numCount.className = "sideNum";
      numCount.innerHTML = sideNums;

      sideNums += 1;

      numLine.className = "codeline";
      numLine.setAttribute("contenteditable", "true")

      const numCountDiv = document.getElementById("sideTab");
      const numLineDiv = document.getElementById("textLines"); 

      numCountDiv.appendChild(numCount);
      numLineDiv.appendChild(numLine);
}

codeLines.addEventListener("keydown", function(event) {
      if (event.code == "Enter"){
            createNumLine();
      }
})