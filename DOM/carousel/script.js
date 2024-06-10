const images = [
    "https://images.unsplash.com/photo-1717674503351-0f4db9cc1109?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1674635613809-d0999f380f07?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1692560175975-f653f74d4de3?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1716441975260-40c57a97f233?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1716441975277-39d04db07124?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1587643643152-c6ee11b12983?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1606562985356-46d14995e62c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

let n = images.length;
const flexContainer = document.getElementById("flex-container");
const leftButton = document.getElementById("left-btn");
const rightButton = document.getElementById("right-btn");

const containerWidth = 80;
const flexContainerWidth = n*containerWidth;
flexContainer.style.width = flexContainerWidth

for(i = 0; i < n; i++) {
    const newImg = document.createElement("img");
    newImg.src = images[i];
    newImg.classList.add("img-style")
    flexContainer.appendChild(newImg)
}

let curPosition = 0;
leftButton.addEventListener("click", () => {
    if(curPosition > 0) {
        curPosition--;
        } else {
            curPosition = n-1
    }
        showImg();
})

rightButton.addEventListener("click", () => {
    if(curPosition < n-1) {
        curPosition++;
    } else {
        curPosition = 0
    }
    showImg();
})

function showImg() {
    const translateX = -curPosition * containerWidth;
    flexContainer.style.transform = `translate(${translateX}vw)`
}

