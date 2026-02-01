let body = document.querySelector("body");
let boxes = document.querySelectorAll(".box");
boxes.forEach(function (box) {
    // console.log(box)
    box.addEventListener("click", function (e) {
        // console.log(e)
        // console.log(e.target)

        if (e.target.id === 'red') {
            // body.style.backgroundColor = "green"   // BOTH ARE SAME
            body.style.backgroundColor = e.target.id;  // BOTH ARE SAME
        }
        if (e.target.id === 'blue') {
            // body.style.backgroundColor = "green"   // BOTH ARE SAME
            body.style.backgroundColor = e.target.id;  // BOTH ARE SAME
        }
        if (e.target.id === 'black') {
            body.style.backgroundColor = e.target.id;  // BOTH ARE SAME
        }
        if (e.target.id === 'green') {
            body.style.backgroundColor = e.target.id;  // BOTH ARE SAME
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;  // BOTH ARE SAME
        }
        if (e.target.id === 'pink') {
            body.style.backgroundColor = e.target.id;  // BOTH ARE SAME
        }
    })
})