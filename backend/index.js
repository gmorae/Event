const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mysql = require('mysql')
const jwt = require('jsonwebtoken')
const cors = require('cors')

function conexao() {
    return mysql.createConnection({
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: '',
        database: 'easyTalk'
    })
}

app.use(bodyParser())
app.use(cors())
app.use(bodyParser.json({ limit: '5mb' }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATH, PUT, DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})


app.listen(8080, () => {
    console.log('Servidor funcionando !')
})

app.get("/", (req, res) => {
    res.send("Bem-vindo")
})

/** API de categorias */
app.get("/category", (req, res) => {
    const sql = "select * from category"
    conexao().query(sql, (erro, ln, cl) => {
        console.log("Listagem")
        res.json(ln)

    })
})

app.post('/category', (req, res) => {
    var name_category = req.body.name_category
    var description_category = req.body.description_category

    const sql = "INSERT INTO category (name_category, description_category) VALUES ( ?, ?);"
    conexao().query(sql, [name_category, description_category], (erro, result, fields) => {
        if (erro) {
            console.log("Erro: " + erro)
            res.sendStatus(500)
            return
        }
        console.log("Inserido com sucesso  => " + name_category + ' ' + description_category)
    })
    res.end()
})

/**Fim da API de categorias */

/** Começo da API de Usuarios */

app.get("/users", (req, res) => {
    const sql = "select * from user"
    conexao().query(sql, (erro, ln, cl) => {
        console.log("Listagem")
        res.json(ln)

    })
})

app.get("/community", (req, res) => {
    const sql = "select * from user where id_type_user = 2"
    conexao().query(sql, (erro, ln, cl) => {
        console.log("Listagem")
        res.json(ln)

    })
})


app.post('/user', (req, res) => {
    var name_user = req.body.name_user
    var email_user = req.body.email_user
    var phone_user = req.body.phone_user
    var password_user = req.body.password_user
    var id_type_user = 2

    const sql = "INSERT INTO user (name_user, email_user, phone_user, password_user, id_type_user) VALUES ( ?, ?, ?, ?, ?);"
    conexao().query(sql, [name_user, email_user, phone_user, password_user, id_type_user], (erro, result, fields) => {
        if (erro) {
            console.log("Erro: " + erro)
            res.sendStatus(500)
            return
        }
    })
    res.end()
})

/** Fim da API de usuarios */

/** Começo da API de eventos  */

app.put("/event/:id", (req, res) => {
    var id_event = req.body.id_event
    var id_responsible = req.body.id_responsible
    var id_active = req.body.id_active
    const sql = "UPDATE event SET id_responsible = ?, id_active = ? WHERE id_event = ?;"
    conexao().query(sql, [id_responsible,id_active, id_event], (erro, ln, cl) => {
        console.log("Listagem")
        res.json(ln)
    })
})
app.put("/event/decline/:id", (req, res) => {
    var id_event = req.params.id_event
    var id_active = req.body.id_active
    const sql = "UPDATE event SET id_active = ? WHERE id_event = ?;"
    conexao().query(sql, [id_active, id_event], (erro, ln, cl) => {
        console.log("Listagem")
        res.json(ln)
    })
})

app.get("/event", (req, res) => {
    const sql = "SELECT * FROM event AS e JOIN category AS c ON e.id_category = c.id_category where id_active = 0"
    conexao().query(sql, (erro, ln, cl) => {
        console.log("Listagem")
        res.json(ln)
    })
})

app.get("/event/approved", (req, res) => {
    const sql = "select * from event where id_active = 1"
    conexao().query(sql, (erro, ln, cl) => {
        console.log("Listagem")
        res.json(ln)
    })
})

app.get("/event/decline", (req, res) => {
    const sql = "select * from event where id_active = 2"
    conexao().query(sql, (erro, ln, cl) => {
        console.log("Listagem")
        res.json(ln)
    })
})

app.get("/event/pending", (req, res) => {
    const sql = "select * from event where id_active = 0"
    conexao().query(sql, (erro, ln, cl) => {
        console.log("Listagem")
        res.json(ln)
    })
})

app.get("/event/approved/:id", (req, res) => {
    const sql = "select * from event where id_user = ? and id_active = 1"
    conexao().query(sql, [req.params.id], (erro, ln, cl) => {
        console.log("Listagem")
        res.json(ln)
    })
})

app.get("/event/pending/:id", (req, res) => {
    const sql = "select * from event where id_user = ? and id_active = 0"
    conexao().query(sql, [req.params.id], (erro, ln, cl) => {
        console.log("Listagem")
        res.json(ln)
    })
})

app.get("/event/decline/:id", (req, res) => {
    const sql = "select * from event where id_user = ? and id_active = 2"
    conexao().query(sql, [req.params.id], (erro, ln, cl) => {
        console.log("Listagem")
        res.json(ln)
    })
})
app.post('/event', (req, res) => {
    var name_event = req.body.name_event
    var description_event = req.body.description_event
    var date_event = req.body.date_event
    var id_active = 0
    var location = 'Escola senai de informatica'
    var id_category = req.body.id_category
    var id_user = req.body.id_user
    var id_responsible = '0'
    var coffe = req.body.coffe

    const sql = "INSERT INTO event (name_event, description_event, date_event, id_active, location, id_category, id_user, id_responsible, coffe) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?);"
    conexao().query(sql, [name_event, description_event, date_event, id_active, location, id_category, id_user, id_responsible, coffe], (erro, result, fields) => {
        if (erro) {
            console.log("Erro: " + erro)
            res.sendStatus(500)
            return
        }
    })
    res.end()
})


/** Fim da API de eventos */
app.post('/login', (req, res) => {
    var email_user = req.body.email_user;
    var password_user = req.body.password_user;
    conexao().query('SELECT * FROM user WHERE email_user = ?', [email_user], function (error, results, fields) {
        if (error) {
            // console.log("error ocurred",error);
            res.send({
                "code": 400,
                "error": "error ocurred"
            })
        } else {
            // console.log('The solution is: ', results);
            if (results.length > 0) {
                let user = results[0]
                if (results[0].password_user == password_user) {
                    jwt.sign({ user }, 'secretkey', (err, token) => {
                        res.send({
                            token
                        })

                    })
                }
                else {
                    res.send({
                        "code": 204,
                        "error": "Email ou senha inválidos"
                    });
                }
            }
        }
    });

})

function vetifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization']
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ')
        const bearerToken = bearer[1]
        req.token = bearerToken
        next()
    } else {
        res.sendStatus(403)
    }
}