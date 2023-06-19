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