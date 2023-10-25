//---------open-log-reg-btn

document.getElementById("open-modal-btn").addEventListener("click", function() {
    document.getElementById("log-reg-modal").classList.add("open")
})


//----------close-log-reg-btn

document.getElementById("close-modal-btn").addEventListener("click", function(){
    document.getElementById("log-reg-modal").classList.remove("open")
})


//----------close-log-reg-esc

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("log-reg-modal").classList.remove("open")
    }
})