function renderStudents(studentsAbstraction) {

    // We're using a .map() to build a new array containing
    // an HTML string for each student
    let studentsArray = studentsAbstraction.map(function(student) {

        // We're using a ternary operator which is shorthand for writing
        // an if/else block. 
        return `
            <div class="${student.isPresent ? "present" : "absent"}">
                <h2>${student.name}</h2>
                <span>
                    ${student.isPresent ? 'Present' : 'Absent'}
                </span>
            </div>
        `
    // calling join right here because we know at this point we'll have
    // an array
    }).join('');

    // Setting up a string of html that includes the array of HTML strings
    // we created above, and already joined together into one big string. 
    // The result is that newHtml is just one big string of HTML
    let newHtml =  `
        <div class="text-center mt-5">
            <h1> Roll Call! </h1>
            ${studentsArray}
        </div>
    `
    // gotta return it!
    return newHtml;
}

function students() {
    var content = document.getElementById('content');

    var studentsAbstraction = [
        {
            name: "Kamilah",
            isPresent: true
        },
        {
            name: "Kim",
            isPresent: true
        },
        {
            name: "Stuart",
            isPresent: false
        },
        {
            name: "Ron",
            isPresent: true
        },
        {
            name: "Krissy",
            isPresent: false
        }
    ]

    content.innerHTML = renderStudents(studentsAbstraction)
}