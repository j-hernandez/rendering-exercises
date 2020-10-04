
function renderRectangle(rectangle) {

    // We'll use inline CSS to style a div according
    // to the properties of the rectangle. 

    // Note - when using this technique, if your CSS
    // property requires some unit of measurement to be
    // supplied, you have to include it. In this case, 
    // we add "px" after the width and height so that 
    // they are recognized as valid CSS property values
    // by the browser
    return `
        <div style="width:${rectangle.width}px;height${rectangle.height}px;background-color:${rectangle.color}">
        </div>
    `
}

function rectangle() {
    var content = document.getElementById('content');

    var rectangleAbstraction = {
        width: 100,
        height: 200,
        color: "#FF00FF"
    }
    content.innerHTML = renderRectangle(rectangleAbstraction);
}
