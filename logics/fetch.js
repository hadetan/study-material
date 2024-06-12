async function fetchData() {
    try {
        const response = await fetch("https://dummyjson.com/products/2");
        console.log(response);

        const data = await response.json();
        console.log(data);

        loadData(data)
        
    } catch (err) {
        console.log(err)
    }
}
fetchData();

function loadData(data) {
    const title = document.getElementById("title");
    const img = document.getElementById("img")
    title.innerHTML = data.brand
    img.src = data.thumbnail
}