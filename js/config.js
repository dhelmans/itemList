function setConfig() {

    let lang = document.querySelector('body > nav > a > img').alt;

    var configTexts = {};

    if (lang == "Brasil") {
        configTexts = {
            "title": "Controle de Compras",
            "desc": "Descrição",
            "amount": "Quantidade",
            "value": "Preço",
            "btnSave": "Salvar",
            "btnClear": "Limpar",
            "btnCancel": "Cancelar",
            "btnAdd": "Adicionar",
            "btnDelList": "Limpar Lista",
            "btnEdit": "Editar",
            "btnDelete": "Deletar",
            "valueSignal": "R$",
            "dotOut": ".",
            "dotIn": ",",
            "tableDesc": "Descrição",
            "tableAmount": "Quantidade",
            "tableValue": "Valor",
            "tableAction": "Ação",
            "descEmpty" : "A descrição não pode estar vazia"
        };

    } else {
        configTexts = {
            "title": "Shopping Control",
            "desc": "Description",
            "amount": "Amount",
            "value": "Value",
            "btnSave": "Save",
            "btnClear": "Clear",
            "btnCancel": "Cancel",
            "btnAdd": "Add",
            "btnDelList": "Clear List",
            "btnEdit": "Edit",
            "btnDelete": "Delete",
            "valueSignal": "$",
            "dotOut": ",",
            "dotIn": ".",
            "tableDesc": "Description",
            "tableAmount": "Amount",
            "tableValue": "Value",
            "tableAction": "Action",
            "descEmpty" : "Description cannot be empty"
        };

    }

    document.title = configTexts.title;
    document.querySelector("#navTitle").innerHTML = configTexts.title;

    document.querySelector("#desc").placeholder = configTexts.desc;
    document.querySelector("#amount").placeholder = configTexts.amount;
    document.querySelector("#value").placeholder = configTexts.value;

    document.querySelector("#btnSave").innerHTML = configTexts.btnSave;
    document.querySelector("#btnClear").innerHTML = configTexts.btnClear;
    document.querySelector("#btnCancel").innerHTML = configTexts.btnCancel;

    document.querySelector("#btnAdd").innerHTML = configTexts.btnAdd;
    document.querySelector("#btnReset").innerHTML = configTexts.btnClear;
    document.querySelector("#btnDeleteAll").innerHTML = configTexts.btnDelList;

    if ( document.querySelector("#tableDesc") != undefined ) {

        document.querySelector("#tableDesc").innerHTML = configTexts.tableDesc;
        document.querySelector("#tableAmount").innerHTML = configTexts.tableAmount;
        document.querySelector("#tableValue").innerHTML = configTexts.tableValue;
        document.querySelector("#tableAction").innerHTML = configTexts.tableAction;

    }

    if ( document.querySelector(".btnEdit") != undefined ){

        document.querySelector(".btnEdit").innerHTML = configTexts.btnEdit;
        document.querySelector(".btnDelete").innerHTML = configTexts.btnDelete;
    }


    valueSignal = configTexts.valueSignal;
    dotOut = configTexts.dotOut;
    dotIn = configTexts.dotIn;
}

setConfig();