const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    const filename = 'logo'; // Defina o nome desejado para o arquivo
    const extension = path.extname(file.originalname);
    cb(null, `${filename}${extension}`);
  }
});

const upload = multer({ storage });

const uploadImagemMiddleware = upload.single('imagem');

module.exports = uploadImagemMiddleware;
