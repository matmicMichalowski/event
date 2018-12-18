containerJson = {
    elementToEdit: "HTML ELEMENT",
    parentNode: "parentNode class/id",
    containerType: "small/big",
    orientation: "horizontal/vertical"
}

function createTextEditorContainer(config){
    let containerDiv = document.createElement("div");
    let elementPositionInsideParent = document.getElementById(parent).getBoundingClientRect();
    


    if (config.containerType === 'small'){
       containerDiv.style.position = 'absolute';
       containerDiv.style.top = elementPositionInsideParent.top - 50 + 'px';
       containerDiv.style.left = elementPositionInsideParent.left + 'px';
       containerDiv.appendChild(createModal({element: config.elementToEdit, parent: config.parentNode, orientation:config.orientation}))
    }else if (config.containerType === 'big'){
       containerDiv.appendChild(createBigToolbar({element: config.elementToEdit, parent: config.parentNode, orientation:config.orientation}))
    }else {
        throw {
            name: "Value missing",
            message: "Value 'containerType' is missing"
        };
    }
}

function createModal(modalConfig){
    let
}
