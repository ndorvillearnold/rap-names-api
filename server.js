const express = require('express')
const app = express()
const PORT = 8017

const rappers = {
    '21 savage': {
        'age': 29,
        'birthName': 'Sheyaa',
        'birthLocation': 'London, England'
    },
    'chance the rapper': {

        'age': 29,
        'birthName': 'chancelor Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'unknown': {

        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    },
}

//this is LOOKS like an event listener
//EXCEPT you make a network request - app.get('/', req, res)
app.get('/', (request, response) => {

    //dirname tells is where to start looking for the file..dirname is the root
    response.sendFile(__dirname + '/index.html')
})

//if they ping or if they make a request /api
//respond with the object above -  response.json(savage) 
// in the broswer =  http://localhost:8014/api = {"birthName":29,"birthLocation":"London, England"}
app.get('/api/:name', (request, response) => {
    const rapperName = request.params.name.toLowerCase()
    if (rappers[rapperName]) {
        response.json(rappers[rapperName])

    } else {
        response.json(rappers['unknown'])

    }
})


//have server listen
app.listen(PORT, () => {
    console.log(`The server is now running n port ${PORT}`)
})


