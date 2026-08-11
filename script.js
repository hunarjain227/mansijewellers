<script>
window.addEventListener("load", function () {
    const nav = performance.getEntriesByType("navigation");

    if (nav.length > 0 && nav[0].type === "reload") {
        window.location.href = "wellcome.html";
    }
});
</script>
function enterShop(){

    const colors = [
        "#FFD700", // Gold
        "#FF69B4", // Pink
        "#00BFFF", // Blue
        "#ADFF2F", // Green
        "#FF4500", // Orange
        "#BA55D3", // Purple
        "#FFFFFF"  // White
    ];

    const container = document.getElementById("sparkles");

    for(let i=0;i<60;i++){

        let star = document.createElement("div");
        star.className = "sparkle";
        star.innerHTML = "✦";

        star.style.left = Math.random()*100 + "vw";
        star.style.top = Math.random()*100 + "vh";

        star.style.color = colors[Math.floor(Math.random()*colors.length)];

        container.appendChild(star);

        setTimeout(()=>{
            star.remove();
        },1200);
    }

    setTimeout(()=>{
        window.location.href = "index.html";
    },1200);
}