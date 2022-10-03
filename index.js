const express = require('express');
const app = express();
const PORT=3000;
app.use( express.static(__dirname + '/dist/portfolio'));
app.listen(PORT,()=>{console.log(`running on http://localhost:${PORT}`)});
