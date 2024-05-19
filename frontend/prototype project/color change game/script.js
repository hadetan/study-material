const btn = document.getElementById("button");

const randomColor = () => {
    let val = "0123456789ABCDEF";
    let hash = "#";
    for(let i = 0; i < 6; i++){
        hash = hash + val[Math.floor(Math.random() * 16)];
    }
    return hash;
};

console.log(randomColor());

function changeRandomColor(){
    document.body.style.backgroundColor = randomColor();
}

btn.addEventListener("click", changeRandomColor);