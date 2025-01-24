



app.use(express.static('public'));
app.get ('/users', (req,res) => {
    res.json(users)
})

app.use(express.static('public'))

app.get('/users/:id',(req, res) => {
    const id = req.params.id;
    res.json(users[id])
})

app.post('/users/:id/:field', (req,rep) => {
    const id = res.params.id;
    const field = a
})