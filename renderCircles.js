
function renderCircles(circles) {
    // HINT: You probably need to write a for loop!
    //       Or, if you're feeling fancy, use .map() 
    
    // In this attempt, we're using `forEach` to push 
    // a string of HTML for 1 circle into an array

    // Our array that will contain our strings of HTML
    circlesArray = [];
    // Remember, forEach returns "undefined". Put 
    // another way - forEach doesn't return anything
    // that can be assigned to a variable. So we just
    // invoke it, and use its callback function to 
    // push to the array we created above
    circles.forEach(function(circle) {
        circlesArray.push(`<div style="border-radius:${circle.radius}px;width: ${circle.radius}px;height:${circle.radius}px; background-color:${circle.color};"></div>`);
    })

    // In our return, we join the array with a blank 
    // space 
    return `
        <div class="text-center mt-5">
           ${circlesArray.join('')}
        </div>
    `
}

function circles() {
    var content = document.getElementById('content');

    var circlesAbstraction = [
        {
            radius: 50,
            color: "#FF00FF"
        },
        {
            radius: 30,
            color: "#FF99AA"
        },
        {
            radius: 60,
            color: "#0000FF"
        },
        {
            radius: 10,
            color: "#000000"
        },
    ];

    content.innerHTML = renderCircles(circlesAbstraction);

}