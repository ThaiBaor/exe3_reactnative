const express = require('express')
const app = express()

app.use(express.json())
const mysql = require('mysql')
const dbcon = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'res'
})
dbcon.connect(() => console.log('da ket noi dtb'));

app.get('/food', function (req, res) {
    dbcon.query('SELECT * FROM food', function (err, result) {
        if (err) throw err;
        return res.send({ data: result })
    })
})
app.get('/getfoodbyid', function (req, res) {
    const id_food = req.query.id_food;
    dbcon.query('SELECT * FROM food where id_food=?', id_food, function (err, result) {
        if (err) throw err;
        return res.send({ data: result })
    })
})

app.get('/food/id', function (req, res) {
    const id_food = req.query.id_food;
    dbcon.query('SELECT * FROM food where id_food=?', id_food, function (err, results) {
        if (err) throw err;
        return res.send({ data: results })
    })
})

app.post('/create', function (req, res) {
    let name = req.query.name;
    let price = req.query.price;
    let description = req.query.description;
    let id_category = req.query.id_category;
    let image = req.query.image;
    dbcon.query('Insert into food(name, price, description, id_category, image) values(?, ?, ?, ?, ?)', [name, price, description, id_category, image], function (err, result) {
        if (err) throw err;
        return res.send({ data: result, message: "Created" })
    })
})
app.post('/createcart', function (req, res) {
    let id_user = req.query.id_user;
    let id_food = req.query.id_food;
    let name = req.query.name;
    let price = req.query.price;
    let description = req.query.description;
    let id_category = req.query.id_category;
    let image = req.query.image;
    let note = req.query.note;
    let numberoffood = req.query.numberoffood;
    dbcon.query('Insert into cart(id_user,id_food,name, price, description, id_category, image, note, numberoffood) values(?,?,?,?,?, ?, ?, ?, ?)', [id_user, id_food, name, price, description, id_category, image, note, numberoffood], function (err, result) {
        if (err) throw err;
        return res.send({ data: result, message: "Created" })
    })
})
app.delete('/delete', function (req, res) {
    let id_food = req.query.id;
    dbcon.query('delete from food where id_food = ?', id_food, function (err, result) {
        if (err) throw err;
        return res.send({ data: result, message: "Deleted" })
    })
})
app.put('/update', function (req, res) {
    let id_food = req.query.id_food;
    let name = req.query.name;
    let price = req.query.price;
    let description = req.query.description;
    let id_category = req.query.id_category;
    let image = req.query.image;
    dbcon.query('update food set name=?, price=?, description=?, id_category=?, image=? where id_food=?', [name, price, description, id_category, image, id_food], function (err, result) {
        if (err) throw err;
        return res.send({ data: result, message: "Updated" })
    })
})

/*------------------------------------------------------------Get API user------------------------------------------------------------*/
app.get('/user', function (req, res) {
    dbcon.query('SELECT * FROM user', function (err, result) {
        if (err) throw err;
        return res.send({ data: result })
    })
})

app.get('/username', function (req, res) {
    const id = req.query.id;
    dbcon.query('SELECT * FROM user where id=?', id, function (err, results) {
        if (err) throw err;
        return res.send({ data: results })
    })
})

app.post('/email', function (req, res) {
    const email = req.query.email;
    dbcon.query('SELECT COUNT(*) AS count FROM user WHERE email = ?', email, function (err, result) {
        if (err) throw err;
        return res.send({ data: result })
    })
})

app.post('/login', function (req, res) {
    const email = req.query.email;
    const pass = req.query.pass;
    dbcon.query('SELECT * FROM user where email=? AND password=?', [email, pass], function (err, results) {
        if (err) throw err;
        return res.send({ data: results })
    })
})

app.post('/them', function (req, res) {
    let name = req.query.name;
    let password = req.query.password;
    let phone = req.query.phone;
    let email = req.query.email;
    let admin = req.query.admin;
    dbcon.query('Insert into user(username, password, phone, email, admin) values(?, ?, ?, ?, ?)', [name, password, phone, email, admin], function (err, result) {
        if (err) throw err;
        return res.send({ data: result, message: "Da them" })
    })
})
app.delete('/xoa', function (req, res) {
    let id = req.query.id;
    dbcon.query('delete from user where id = ?', id, function (err, result) {
        if (err) throw err;
        return res.send({ data: result, message: "Da Xoa" })
    })
})
app.put('/sua', function (req, res) {
    let id = req.query.id;
    let name = req.query.name;
    let password = req.query.password;
    let phone = req.query.phone;
    let email = req.query.email;
    let admin = req.query.admin;
    dbcon.query('update user set username=?, password=?, phone=?, email=?, admin=? where id=?', [name, password, phone, email, admin, id], function (err, result) {
        if (err) throw err;
        return res.send({ data: result, message: "Da sua" })
    })
})
app.listen(3000)

