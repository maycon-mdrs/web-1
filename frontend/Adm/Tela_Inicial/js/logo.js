const colorPicker1 = document.getElementById('cor-btn');
const hexValue1 = document.getElementById('hexValue-1');


const selectedColor1 = colorPicker1.value;
hexValue1.value = selectedColor1.toUpperCase();


colorPicker1.addEventListener('input', () => {
    const selectedColor1 = colorPicker1.value;
    hexValue1.value = selectedColor1.toUpperCase();
});

hexValue1.addEventListener('click', () => {
    colorPicker1.click();
});

// LOGO - IMG
document.getElementById('upload-input').addEventListener('change', function(event) {
    var file = event.target.files[0];
    var reader = new FileReader();

    reader.onload = function(e) {
        var uploadedImage = document.getElementById('uploaded-image');
        uploadedImage.innerHTML = '<img src="' + e.target.result + '" alt="Uploaded Image">';
    }

    reader.readAsDataURL(file);
});