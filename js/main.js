let objectList = [];

let valueSignal = "R$";
let dotOut = ".";
let dotIn = ",";
let updateId = "";

const capitalize = (string) => {
    if (typeof string !== 'string') return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const formatValue = (value) => {
    value = parseFloat(value).toFixed(2) + '';
    value = `${valueSignal} ${value.replace(dotOut, dotIn)}`;
    return value;
};

function getTotal(list) {
    let total = 0;

    for (const object of list) {
        total += object.value * object.amount;
    }

    return formatValue(total);
}

function setList(list) {
    let table = '<thead>' +
        '<tr>' +
        '<th id="tableDesc"></th>' +
        '<th id="tableAmount"></th>' +
        '<th id="tableValue"></th>' +
        '<th id="tableAction"></th>' +
        '</tr>' +
        '</thead>' +
        '<tbody>';

    list.map((element, index) => {

        table += `<tr>
                    <th>${capitalize(element.desc)}</th>
                    <td>${parseInt(element.amount)}</td>
                    <td>${formatValue(element.value)}</td>
                    <td>
                        <button class="btn btn-info m-1 btnEdit" onclick="setUpdate(${index})"></button>
                        <button class="btn btn-danger btnDelete" onclick="delProduct(${index})"></button>
                    </td>
                </tr>`;
    });

    table += '</tbody>';

    document.querySelector('#listTable').innerHTML = table;

    let btnDelAll = document.querySelector('#btnDeleteAll');

    btnDelAll.style.display = ( list != "" ) ? "block" : "none";

    setTotal();
    clearFields();
    setConfig();

}

function addProduct() {

    let descInput = document.querySelector('#desc').value;
    let amountInput = document.querySelector('#amount').value;
    let valueInput = document.querySelector('#value').value;

    let errorList = inputValidate(descInput, amountInput, valueInput);

    if (errorList != "") {

        let errorMessage = "";

        errorList.map((element) => {
            errorMessage += `${element}\n`;
        }); 

        alert(errorMessage);

    } else {
        objectList.push({ "desc": descInput, "amount": amountInput, "value": valueInput });
        
        setList(objectList);
    }

}

function clearFields() {

    let inputs = Array.from(document.querySelector('#addForm').childNodes);

    inputs.map((element) => {
        if (element.tagName == 'INPUT') {
            element.value = "";
        }
    });

}

function setTotal() {
    let outputField = document.querySelector('#total');

    outputField.value = getTotal(objectList);
}

function setUpdate(id) {
    let editProd = objectList[id];

    document.querySelector('#desc').value = editProd.desc;
    document.querySelector('#amount').value = editProd.amount;
    document.querySelector('#value').value = editProd.value;

    $(document.querySelector('#Add')).removeClass("d-flex").addClass("d-none");
    $(document.querySelector('#Update')).removeClass("d-none").addClass("d-flex");

    updateId = id;
}

function updateData() {
    let editProd = objectList[updateId];

    let inpDesc = document.querySelector('#desc').value;
    let inpAmount = document.querySelector('#amount').value;
    let inpValue = document.querySelector('#value').value;

    let errorList = inputValidate(inpDesc, inpAmount, inpValue);

    if (errorList != "") {
        let errorMessage = "";

        errorList.map((element) => {
            errorMessage += `${element}\n`;
        });

        alert(errorMessage);
    }

    else {

        editProd.desc = inpDesc;
        editProd.amount = inpAmount;
        editProd.value = inpValue;

        setList(objectList);

        $(document.querySelector('#Update')).removeClass("d-flex").addClass("d-none");
        $(document.querySelector('#Add')).removeClass("d-none").addClass("d-flex");

    }
}

function delProduct(id) {

    if (confirm("Delete this item?")) {
        objectList.splice(id, 1);

        setList(objectList);

        $(document.querySelector('#Update')).removeClass("d-flex").addClass("d-none");
        $(document.querySelector('#Add')).removeClass("d-none").addClass("d-flex");        
    }


}

function cancelUpdate() {
    setList(objectList);

    $(document.querySelector('#Update')).removeClass("d-flex").addClass("d-none");
    $(document.querySelector('#Add')).removeClass("d-none").addClass("d-flex");
}

function inputValidate(desc, amount, value) {
    let errorList = [];

    if (desc == "") {
        errorList.push(`Description cannot be empty.`);
    }

    if (amount == "") {
        errorList.push(`Amount cannot be empty.`);
    }

    else if (amount != parseInt(amount)) {
        errorList.push(`Check amount field: ${amount} isn't a number`);
    }

    if (value == "" ) {
        errorList.push(`Value cannot be empty.`);
    }

    else if (value != parseFloat(value)) {
        errorList.push(`${value} isn't a number`);
    }

    return errorList;

}

function delList() {

    if (confirm("Delete all items?")) {
        objectList = [];

        setList(objectList);
    }
}

function changeLang() {

    let imageLang = document.querySelector('body > nav > a > img');

    imageLang.alt = (imageLang.alt == "Brasil") ? "USA" : "Brasil";
    imageLang.src = (imageLang.alt == "Brasil") ? "img/brasil-flag.png" : "img/usa-flag.png";
    
    setConfig();
    setList(objectList);

}

setList(objectList);
