function calc(){
    let str = document.getElementById("characters").value;
    let count = 0;
    str.split(" ").forEach((ele) => count += ele.length);
    document.querySelector("#noofchar").innerHTML = count
    document.querySelector("#rem").innerHTML = 50-count;
}

document.getElementById("characters").addEventListener("onchange", () => {
    let str = document.getElementById("characters").value;
    let count = 0;
    str.split(" ").forEach((ele) => count += ele.length);
    document.querySelector("#noofchar").innerHTML = count
    document.querySelector("#rem").innerHTML = 50-count;
})

