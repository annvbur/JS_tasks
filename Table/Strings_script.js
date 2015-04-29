
var createAndEditTable = function(){

	var getName = document.getElementById("input1").value;
	var getSurname = document.getElementById("input2").value;
	var table = document.getElementById("table");

	var row = table.insertRow(); 
    var removeButton = document.createElement("input");//creating button near every row

    removeButton.setAttribute("type", "button"); 
    removeButton.setAttribute("value", "Remove");
    removeButton.setAttribute("class", "removeButton");

    row.insertCell(0).innerHTML = getName; // insert our getName into first cell
    row.insertCell(1).innerHTML = getSurname;
    row.insertCell(2).appendChild(removeButton);//добавляет нашу кнопочку в конец. appendChild() method appends a node as the last child of a node.

    removeButton.addEventListener('click', function () {
            var getIndex = this.parentNode.parentNode.rowIndex;
            document.getElementById("table").deleteRow(getIndex);
        }, false);


    document.body.appendChild(table)
}






































// function creatingDictionary(){
//   var getName = document.getElementById("input1").value;
//   var getSurname = document.getElementById("input2").value;
//   var input = [{key: "getName", value: "getSurname"}];
//   var result = input.push({key: "getName", value: "getSurname"});
  
//   console.log(getName, getSurname, input, result);
//  }
  



   