const colorPicker1 = document.getElementById('cor-btn');
const colorPicker2 = document.getElementById('cor-txt-btn');
const hexValue1 = document.getElementById('hexValue-1');
const hexValue2 = document.getElementById('hexValue-2');

const selectedColor1 = colorPicker1.value;
hexValue1.value = selectedColor1.toUpperCase();

const selectedColor2 = colorPicker2.value;
hexValue2.value = selectedColor2.toUpperCase();

colorPicker1.addEventListener('input', () => {
    const selectedColor1 = colorPicker1.value;
    hexValue1.value = selectedColor1.toUpperCase();
});

hexValue1.addEventListener('click', () => {
    colorPicker1.click();
});

colorPicker2.addEventListener('input', () => {
    const selectedColor2 = colorPicker2.value;
    hexValue2.value = selectedColor2.toUpperCase();
});

hexValue2.addEventListener('click', () => {
    colorPicker2.click();
});
