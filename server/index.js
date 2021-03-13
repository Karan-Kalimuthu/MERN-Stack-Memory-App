const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

// const postRoutes = require('./routes/posts');

const postRoutes = require('./routes/posts');

const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//mongodb+srv://Karan:apple@cluster0.gjgop.mongodb.net/memory-app
const CONNECTION_URL = 'mongodb+srv://Karan:apple@cluster0.gjgop.mongodb.net/memory-app';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on posrt : ${PORT}`)
        })
    })
    .catch((error) => {
        console.log('Not connected to DataBase');
        console.log(error.message);
    });
mongoose.set('useFindAndModify', false);