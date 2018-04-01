var express = require('express')
var app = express();

const description = {
        creatorFirstName : "Docker",
        creatorLastName : "Man",
        server : "webApp2"
};

app.get('/', (request, result) => {
        result.json(description);;    
});

app.listen(3320, () => 'web app 2 is started');