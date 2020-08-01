var users = [];

var user = new Object();

//create
function CreateUser(nName) {
    this.Name = nName;
}


var user1 = new CreateUser("User1");
var user2 = new CreateUser("User2");
var user3 = new CreateUser("User3");
users[0] = user1
users[1] = user2
users[2] = user3

var contentData = document.querySelector('.contentData')
var contentButtonData = document.querySelector('.contentButton')
var buttonGetData = document.querySelector('.buttonGetData')

function DeleteTest() {

    this.parentNode.remove();
}

//read all
function ReadAllUsers() {


    for (i = 0; i < users.length; i++) {
        var newDiv = document.createElement('div');

        var newSpan = document.createElement('span');
        newSpan.innerHTML = `${users[i].Name}`;
        newSpan.id = "spanValue"

        newDiv.appendChild(newSpan);

        var newButtonEdit = document.createElement('button');
        newButtonEdit.innerHTML = "Edit";
        newButtonEdit.className = "buttonEdit"
        newButtonEdit.id = "button";

        newDiv.appendChild(newButtonEdit);

        var newButtonDelete = document.createElement('button');
        newButtonDelete.innerHTML = "Delete";
        newButtonDelete.className = "buttonDelete"
        newButtonDelete.id = "button";

        newDiv.appendChild(newButtonDelete);
        contentData.append(newDiv);

        buttonGetData.disabled = 'disabled';
    }

    var newButtonAddItem = document.createElement('button');
    newButtonAddItem.innerHTML = "Add item";
    newButtonAddItem.className = "buttonAddItem";
    newButtonAddItem.id = "button";
    contentButtonData.append(newButtonAddItem);


    var newButtonClearAll = document.createElement('button');
    newButtonClearAll.innerHTML = "Clear all";
    newButtonClearAll.className = "buttonClearAll";
    newButtonClearAll.id = "button";
    contentButtonData.append(newButtonClearAll);

    newButtonAddItem.addEventListener('click', CreateNewItem)
    newButtonClearAll.addEventListener('click', ClearAll)



    let buttonsDeleteList = document.querySelectorAll('.buttonDelete');
    let buttonsEditList = document.querySelectorAll('.buttonEdit');

    buttonsDeleteList.forEach(function (item) {
        item.addEventListener('click', DeleteTest)
    });
    buttonsEditList.forEach(function (item) {
        item.addEventListener('click', EditContent)
    });

    function GetValueInput() {
        var input = this.parentNode.firstChild;
        var value = input.value;
        var contentBlock = this.parentNode;

        if (value != "") {
            var newButtonEdit = document.createElement('button');
            newButtonEdit.innerHTML = "Edit";
            newButtonEdit.className = "buttonEdit";
            newButtonEdit.id = "button";

            var newSpan = document.createElement('span');
            newSpan.innerHTML = `${value}`;
            newSpan.className = "span";
            newSpan.id = "spanValue"

            var saveButton = contentBlock.querySelector('.saveButton')

            contentBlock.replaceChild(newButtonEdit, saveButton);
            contentBlock.replaceChild(newSpan, input);

            newButtonEdit.addEventListener('click', EditContent)
        }
    }

    function EditContent() {

        var content = this.parentNode.firstChild;
        content.remove();

        var contentBlock = this.parentNode
        var newButtonSave = document.createElement('button');
        newButtonSave.innerHTML = "Save";
        newButtonSave.className = "saveButton";
        newButtonSave.id = "button";
        contentBlock.prepend(newButtonSave);

        newButtonSave.addEventListener('click', GetValueInput)

        var contentBlock = this.parentNode
        var newInput = document.createElement('input');
        newInput.className = "input"
        newInput.placeholder = "Enter new value"
        contentBlock.prepend(newInput);

        var button = this;
        button.remove();
    }

    function CreateNewItem() {

        var createDiv = document.createElement('div');

        let createInput = document.createElement('input');
        createInput.className = "Input"
        createInput.placeholder = "Enter new value"

        let createButtonSave = document.createElement('button');
        createButtonSave.innerHTML = "Save";        
        createButtonSave.className = "SaveButton";
        createButtonSave.id = "button";

        let createButtonDelete = document.createElement('button');
        createButtonDelete.innerHTML = "Delete";
        createButtonDelete.className = "ButtonDelete"
        createButtonDelete.id = "button";

        createDiv.appendChild(createInput);
        createDiv.appendChild(createButtonSave);
        createDiv.appendChild(createButtonDelete);

        contentData.append(createDiv);

        createButtonSave.addEventListener('click', GetValueInput)
        createButtonDelete.addEventListener('click', DeleteTest)
    }

    function ClearAll() {
        contentData.innerHTML = "";
    }
}
buttonGetData.addEventListener('click', () => ReadAllUsers(users));


