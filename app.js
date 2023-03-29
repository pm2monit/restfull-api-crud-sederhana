const express = require('express')
const app = express()
const cors = require("cors")
const port = process.env.PORT || 3000;

//Router
const api = require('./routes/api.js')

const corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
    methods: ['GET', 'PUT', 'POST', 'DELETE'] 
};
  
app.use(cors(corsOptions));
app.use(express.json());

app.use('/', api);

app.use((req, res) => {
    res.status(404);
    let host = 'http://' + req.rawHeaders[13];

    // let list_route = ({
    //     'method > GET ALL': `${host}/tugas`,
    //     'method > POST': { 
    //         url: `${host}/tugas`,
    //         param: {
    //             judul: 'STRING',
    //             desc: 'STRING'
    //         }
    //     },
    //     'method > GET ByID': `${host}/task/:id`,
    //     'method > PUT ByID': `${host}/task/:id`,
    //     'method > DELETE ByID': `${host}/task/:id`,
    // })
    
    res.json({ 
        code: 404,
        message: 'Route not found',
        data: []
    });
    return;  
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})