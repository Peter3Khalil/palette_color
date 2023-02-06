const refresh = document.querySelector(".refresh-btn");
const container = document.querySelector(".container");
let maxPaletteBox = 32;
const generatePalette = () => {
  container.innerHTML = ""
  for (let i = 0; i < maxPaletteBox; i++) {
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    randomHex = `#${randomHex.padStart(6, "0")}`;
    let color = document.createElement("li");
    color.classList.add("color");
    color.innerHTML = `<div class="rect-box" style="background:${randomHex}"></div>
                        <span class="hex-value">${randomHex}</span>`;
    color.addEventListener("click",()=>copyColor(color,randomHex))
    container.append(color)
  }
};
refresh.addEventListener("click", generatePalette);
generatePalette();
const copyColor = (elem,hexVal)=>{
    let colorElement = elem.querySelector(".hex-value");
    navigator.clipboard.writeText(hexVal).then(()=>{
        colorElement.style.display="flex"
        colorElement.style.justifyContent="center"
        colorElement.style.alignItems="center"
        colorElement.style.color="green"
        colorElement.innerHTML = ` <span class="material-symbols-outlined">
        check
        </span>copied`
        setTimeout(()=>{
            colorElement.style.color="#444"
            colorElement.innerHTML = hexVal
        },1000)
    }).catch((error)=>alert(error.message))
}
