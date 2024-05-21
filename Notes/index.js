const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));



app.use(function (req, res, next) {
    console.log("Started......");
    next();
})
app.use(function (req, res, next) {
    console.log("Running......");
    next();
})

app.get('/', function (req, res) {
    fs.readdir('./files', function (err, files) {
        if (err) console.log(err);
        else res.render('index', { files: files });
    })
})
app.get('/filedata/:filename', function (req, res) {
    fs.readFile(`./files/${req.params.filename}`, "utf-8", function (err, filedata) {
        if (err) console.log(err);
        else res.render('show', { filename: req.params.filename, filedata: filedata });
    })
})

app.get('/edit/:filename', function (req, res) {
    res.render('edit', { filename: req.params.filename })
})

app.get('/delete/:filename', function (req, res) {
    fs.rm(`./files/${req.params.filename}`, { recursive: true }, function (err) {
        if (err) console.log(err);
        else res.redirect('/');
    })

})

app.post('/edit', function (req, res) {
    fs.rename(`./files/${req.body.previous}`, `./files/${req.body.new}.txt`, function (err) {
        res.redirect('/')
    })
})

app.post('/create', function (req, res) {
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.message, function (err) {
        res.redirect('/')
    })
})


app.listen(3000, function () {
    console.log("Listening......");
})