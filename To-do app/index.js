const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addBtn = document.getElementById("add-btn");

addBtn.addEventListener("click", () => {
    if(inputBox.value === ""){
        alert("Please input some task!");
    } else {
        const date = new Date();
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        let img = document.createElement("img")
        let sub = document.createElement("sub")
        span.innerHTML = "\u00d7"
        img.src = "images/edit.png"
        sub.textContent = `Date created: ${date.toLocaleDateString("en-US")}`;
        li.appendChild(sub)
        li.appendChild(span);
        li.appendChild(img);
    } 
    inputBox.value = "";
    saveData()
})

const listCont = listContainer.childNodes;  

listContainer.addEventListener("click", (e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    } else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    } else if (e.target.tagName === "IMG"){  
        let text;
        listCont.forEach(() => {
           text = e.target.parentElement.childNodes[0].textContent;
           inputBox.value = text;
        })
        e.target.parentElement.remove();
        saveData()
    }

}, false)

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function fetchData() {
    listContainer.innerHTML = localStorage.getItem("data")
}

fetchData()

console.log(listCont);
