document.addEventListener('keydown', function(e) {
    const btn = document.getElementsByClassName("btn");
    if (e.code == "Enter") {
        btn[0].style.backgroundColor = "blue"
    }
    if (e.code == "KeyB") {
        btn[1].style.backgroundColor = "blue"
    }
    if (e.code == "KeyI") {
        btn[2].style.backgroundColor = "blue"
    }
    if (e.code == "KeyT") {
        btn[3].style.backgroundColor = "blue"
    }
    if (e.code == "KeyM") {
        btn[4].style.backgroundColor = "blue"
    }
    if (e.code == "KeyA") {
        btn[5].style.backgroundColor = "blue"
    }
    if (e.code == "KeyN") {
        btn[6].style.backgroundColor = "blue"
    }
})

document.addEventListener('keyup', function(e) {
    const btn = document.getElementsByClassName("btn");
    if (e.code == "Enter") {
        btn[0].style.backgroundColor = "#33333a"
    }
    if (e.code == "KeyB") {
        btn[1].style.backgroundColor = "#33333a"
    }
    if (e.code == "KeyI") {
        btn[2].style.backgroundColor = "#33333a"
    }
    if (e.code == "KeyT") {
        btn[3].style.backgroundColor = "#33333a"
    }
    if (e.code == "KeyM") {
        btn[4].style.backgroundColor = "#33333a"
    }
    if (e.code == "KeyA") {
        btn[5].style.backgroundColor = "#33333a"
    }

    if (e.code == "KeyN") {
        btn[6].style.backgroundColor = "#33333a"
    }