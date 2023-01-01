
const cursor = document.querySelectorAll(".cursor")

window.addEventListener("mousemove", (e)=>{
    cursor.forEach((cercle)=>{
        cercle.style.left= e.x + "px"; 
        cercle.style.top= e.y + "px"; 
    });
})

