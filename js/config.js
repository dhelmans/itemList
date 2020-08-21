function setConfig() {

    let lang = document.querySelector('body > nav > a > img').alt;

    var texts = {};

    if (lang == "Brasil") {
        texts = {
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
            "tableAction": "Ação"
        };

    } else {
        texts = {
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
            "tableAction": "Action"
        };

    }

    document.title = texts.title;
    document.querySelector("#navTitle").innerHTML = texts.title;

    document.querySelector("#desc").placeholder = texts.desc;
    document.querySelector("#amount").placeholder = texts.amount;
    document.querySelector("#value").placeholder = texts.value;

    document.querySelector("#btnSave").innerHTML = texts.btnSave;
    document.querySelector("#btnClear").innerHTML = texts.btnClear;
    document.querySelector("#btnCancel").innerHTML = texts.btnCancel;

    document.querySelector("#btnAdd").innerHTML = texts.btnAdd;
    document.querySelector("#btnReset").innerHTML = texts.btnClear;
    document.querySelector("#btnDeleteAll").innerHTML = texts.btnDelList;

    if ( document.querySelector("#tableDesc") != undefined ) {

        document.querySelector("#tableDesc").innerHTML = texts.tableDesc;
        document.querySelector("#tableAmount").innerHTML = texts.tableAmount;
        document.querySelector("#tableValue").innerHTML = texts.tableValue;
        document.querySelector("#tableAction").innerHTML = texts.tableAction;

    }

    if ( document.querySelector(".btnEdit") != undefined ){

        document.querySelector(".btnEdit").innerHTML = texts.btnEdit;
        document.querySelector(".btnDelete").innerHTML = texts.btnDelete;
    }


    valueSignal = texts.valueSignal;
    dotOut = texts.dotOut;
    dotIn = texts.dotIn;
}

setConfig();