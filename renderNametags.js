
function renderNametags(nametags) {
    // An attempt using a map instead of a for loop
    // or forEach

    // namesHtml is going to be an array - we know this
    // because we are setting it equal to `nametags.map()`
    // and we know `.map()` returns a new array
    let namesHtml = nametags.map(function(name) {
        // Inside this callback function, the `name`
        // variable represents one of the names in the 
        // nametags variable. We know this because
        // when we invoke this `renderNameTags` function below
        // we pass it the `nametagsAbstraction` variable
        // as an argument, which is an array of names
        
        // In order for `.map()` to build an array, we need
        // to return something from this callback

        // Since we are returning a string of html, our
        // namesHtml variable is going to wind up being an
        // array of HTML strings for every name
        return `
        <div class="nametag">
            <div class="nametag-header">Hello, my name is</div>
            <div class="nametag-body">
                <h1>${name}</h1>
            </div>
        </div>
        `;
    // Note - because we know that `.map()` returns an array, 
    // we can call join right here. 
    }).join('');

    // We could also use `namesHtml.join('')` in this return to 
    // acheive the same result.
    return `
        <div class="text-center mt-5">
            ${namesHtml}
        </div>
    `
}

function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
       "Kamilah",
       "Kim",
       "Stuart",
       "Ron",
       "Krissy"
    ]

    content.innerHTML = renderNametags(nametagsAbstraction);

}