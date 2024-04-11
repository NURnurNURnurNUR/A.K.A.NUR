const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes.js');
const cookieParser = require('cookie-parser');
const path = require("path");
const prod_router = require("./routes/prodRoutes.js");
const multer = require("multer");
const Product = require("./models/Product.js");



const app = express();

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(authRoutes);
app.use(prod_router);


const dist = path.join(__dirname, "../front_end/dist");
app.use(express.static(dist));

//database connection 
const dbURI = 'mongodb+srv://akerkrnur:AmirAmir2011@aka.zl3nrv3.mongodb.net/akanur';
mongoose.connect(dbURI)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

const storage = multer.diskStorage({
destination: function (req, file, cb) {
    cb(null, './uploads')
},
filename: function (req, file, cb) {
    cb(null, file.originalname)
}
})

const upload = multer({ storage: storage })

//routes
app.post("/api/submit", upload.single("file"), async (req, res) => {
    try {
        const { name, color, price, description} = req.body;
        const orig = req.file.originalname;

        const product = await Product.create( { name, color, price, description, file : orig });
        res.send(product);
    }
    catch (error) {
        console.log(error);
    };
});

app.get("/api/image/:file", (req, res) => {
    const { file } = req.params;
    res.sendFile("C:/Users/Admin/OneDrive/Рабочий стол/A.K.A. NUR/back_end/uploads" +picture)
});

app.get("*", (req, res) => {
    res.sendFile(path.join(dist, "index.html"));
});

// authMiddleware.js
const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  // Check if token exists and is verified
  if (token) {
    jwt.verify(token, 'your_secret_key', (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.redirect('/login'); // Redirect to login if token is invalid
      } else {
        console.log(decodedToken);
        next(); // Call next middleware or route handler
      }
    });
  } else {
    res.redirect('/login'); // Redirect to login if no token is found
  }
};

module.exports = { requireAuth };