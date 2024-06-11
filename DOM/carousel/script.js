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
const carouselNav = document.getElementById("carousel-nav")

const containerWidth = 80;
const flexContainerWidth = n*containerWidth;
flexContainer.style.width = flexContainerWidth

for(i = 0; i < n; i++) {
    const newImg = document.createElement("img");
    newImg.src = images[i];
    newImg.classList.add("img-style");
    flexContainer.appendChild(newImg);

    const dotDiv = document.createElement("div");
    dotDiv.classList.add("carousel-dots");
    carouselNav.appendChild(dotDiv);
    dotDiv.addEventListener("click", (event) => {
        const index = [...carouselNav.children].indexOf(event.target);
        // curPosition = index;
        showImg(index);
    })
}

let curPosition = 0;
showImg(0);

setInterval(() => {
    if(curPosition < n-1) {
        showImg(curPosition + 1);
    } else {
        showImg(0);
    }
}, 3000);

leftButton.addEventListener("click", () => {
    if(curPosition > 0) {
        showImg(curPosition - 1);
        } else {
            showImg(n - 1);
    }
})

rightButton.addEventListener("click", () => {
    if(curPosition < n-1) {
        showImg(curPosition + 1);
    } else {
        showImg(0);
    }
})

function showImg(position) {
    const prevDot = carouselNav.children[curPosition];
    prevDot.classList.remove("active");
    curPosition = position;

    const curDot = carouselNav.children[curPosition];
    curDot.classList.add("active");

    const translateX = -curPosition * containerWidth;
    flexContainer.style.transform = `translate(${translateX}vw)`
}

