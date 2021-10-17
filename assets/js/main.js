const sepia = document.querySelector(".input-sepia");
const brightness = document.querySelector(".input-brightness");
const contrast = document.querySelector(".input-contrast");
const grayscale = document.querySelector(".input-grayscale");
const saturate = document.querySelector(".input-saturate");
const imgFilter = document.querySelector(".image");
const btnFilter = document.querySelector(".btn");
const imgUrl = document.querySelector(".url-value");
const inputs = document.querySelectorAll(".inputs");

btnFilter.addEventListener("click", resetInputs);

inputs.forEach(item => {
    item.addEventListener("input", updateInputs);
});

imgUrl.addEventListener("change", () => {
    imgFilter.src = imgUrl.value;
});

const resetInputValue = {
    grayscale: 0,
    contrast: 100,
    brightness: 100,
    sepia: 0,
    saturate: 100
}

function updateInputs() {
    btnFilter.disabled = false;
    imgFilter.style.filter = `
        grayscale(${grayscale.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        saturate(${saturate.value}%)
    `;
}

function resetInputs() {
    imgFilter.style.filter = `
    grayscale(${resetInputValue.grayscale}%)
    contrast(${resetInputValue.contrast}%)
    brightness(${resetInputValue.brightness}%)
    sepia(${resetInputValue.sepia}%)
    saturate(${resetInputValue.saturate}%)
    `;

    grayscale.value = resetInputValue.grayscale;
    contrast.value = resetInputValue.contrast;
    brightness.value = resetInputValue.brightness;
    sepia.value = resetInputValue.sepia;
    saturate.value = resetInputValue.saturate;

    btnFilter.disabled = true;
}
