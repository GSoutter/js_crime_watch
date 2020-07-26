const express = require('express');
const app = express();

app.use(express.static(__dirname + "/dist"))

const port = process.env.PORT || 3000 

app.listen(port, function () {
    console.log(`Listening on port ${ this.address().port }`);
});