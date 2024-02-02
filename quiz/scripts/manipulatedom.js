window.onload = function() {
  document.getElementById('addTableBtn').addEventListener('click', addTable);
}

function createTRNode(colNodes) {
  let trNode = document.createElement("tr");
  colNodes.forEach(function(colNode) {
    trNode.appendChild(colNode);
  })
  return trNode;
}

function createTDNode(childNode) {
  let tdNode = document.createElement("td");
  tdNode.appendChild(childNode);
  return tdNode;
}

function createTxtNode(txt) {
  let txtNode = document.createTextNode(txt);
  return txtNode;
}


function createBtnNode(btnTxt,e,l) {
  let btnNode = document.createElement("button");
  let BtnTxtNode =  document.createTextNode(btnTxt);
  btnNode.appendChild(BtnTxtNode);
  btnNode.addEventListener(e,l);
  return btnNode;
}

function edit(node){
  let currentText = node.textContent; // Capture the current text before it's replaced
  let newNode = document.createElement("input");
  newNode.type = 'text';
  newNode.value = currentText; // Use the captured text as the input's value

  // Once editing is done, replace the input with a new text node containing the updated value
  newNode.addEventListener('blur', function() {
    node.innerHTML = ''; // Clear the TD's contents
    node.appendChild(document.createTextNode(newNode.value)); // Append the new text
  });

  node.innerHTML = ''; // Clear the TD
  node.appendChild(newNode); // Add the input box for editing
  newNode.focus();
}

function addTable() {
  const tableNode = document.createElement("table");
  for(let i = 0; i < 3; i++) {
    let col1 = createTDNode(createTxtNode("Cell (" + i + ", 0)"));
    let col2 = createTDNode(createBtnNode("Edit text ","click",function(){
      edit(col1);
    }));
    tableNode.appendChild(createTRNode([col1,col2]));
  }
  document.getElementById("root").appendChild(tableNode);
}
