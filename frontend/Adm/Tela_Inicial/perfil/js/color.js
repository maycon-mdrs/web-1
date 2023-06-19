// BACKGROUND COLOR 
const colorPickerBg = document.getElementById('cor-bg-btn');
const hexValueBg = document.getElementById('hexValue-bg');
const selectedColorBg = colorPickerBg.value;

colorPickerBg.addEventListener('input', ()=> {
    const selectedColorBg = colorPickerBg.value;
    hexValueBg.value = selectedColorBg.toUpperCase();
});

hexValueBg.addEventListener('click', ()=> {
    colorPickerBg.click();
});


// TEXT COLOR 
const colorPickerTxt = document.getElementById('cor-txt-btn');
const hexValueTxt = document.getElementById('hexValue-txt');
const selectedColorTxt = colorPickerTxt.value;

colorPickerTxt.addEventListener('input', ()=> {
    const selectedColorTxt = colorPickerTxt.value;
    hexValueTxt.value = selectedColorTxt.toUpperCase();
});

hexValueTxt.addEventListener('click', ()=> {
    colorPickerTxt.click();
});


// COR 1
const colorPickerCor1 = document.getElementById('cor-1-btn');
const hexValueCor1 = document.getElementById('hexValue-color-1');
const selectedColor1 = colorPickerCor1.value;

colorPickerCor1.addEventListener('input', ()=> {
    const selectedColor1 = colorPickerCor1.value;
    hexValueCor1.value = selectedColor1.toUpperCase();
});

hexValueCor1.addEventListener('click', ()=> {
    colorPickerCor1.click();
});

// COR 2
const colorPickerCor2 = document.getElementById('cor-2-btn');
const hexValueCor2 = document.getElementById('hexValue-color-2');
const selectedColor2 = colorPickerCor1.value;

colorPickerCor2.addEventListener('input', ()=> {
    const selectedColor2 = colorPickerCor2.value;
    hexValueCor2.value = selectedColor2.toUpperCase();
});

hexValueCor2.addEventListener('click', ()=> {
    colorPickerCor2.click();
});

// Upper Case
hexValueBg.value = selectedColorBg.toUpperCase();
hexValueTxt.value = selectedColorTxt.toUpperCase();
hexValueCor1.value = selectedColor1.toUpperCase();
hexValueCor2.value = selectedColor2.toUpperCase();

// Event click