function shuffleChildren(parent) {
    let children = parent.children
    let i = board.children.length, k , temp
    while(--i > 0){
        k = Math.floor(Math.random() * (i+1))
        temp = board.children[k]
        board.children[k] = board.children[i]
        board.appendChild(temp)
    }
}

function showReaction(type, clickedBox) {
    clickedBox.classList.add(type)
    if(type !== "success"){
        setTimeout(function(){
            clickedBox.classList.remove(type)
        }, 800)
    }
}

let howManyBoxes = prompt("How many boxes do you want to do ?")

const box = document.createElement("div")
box.classList.add("box")

const board = document.querySelector("#board")
let nb = 1

for(let i = 1; i <= howManyBoxes; i++) {
    let newBox = box.cloneNode()
    newBox.innerText = i
    board.appendChild(newBox)

    newBox.addEventListener("click", function() {
        shuffleChildren(board)
        if(i == nb) {
            newBox.classList.add("box-clicked")
            if(nb == board.children.length) {
                board.querySelectorAll(".box").forEach(function(box) {
                    showReaction("success", box)
                })
            }
            nb++
        }
        else if(i > nb){
            showReaction("error", newBox)
            nb = 1
            board.querySelectorAll(".box-clicked").forEach(function(validBox) {
                validBox.classList.remove("box-clicked")
            })
        }
        else{
            showReaction("notice", newBox)
        }
    })
}

shuffleChildren(board)