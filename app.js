/**
 * Module dependencies.
 */
 const express = require('express');
 const path = require('path');
 const cors = require('cors');
 var gets = require('./routes/get');
 
 
 const app = express();
 
 app.use(cors());
 app.use(express.static(path.join(__dirname, 'dist/Movie-TV-Search-AngularJS')));
 app.use('/api/gets',gets)
 app.use('/*', function(req,res){
   res.sendFile(path.join(__dirname + '/dist/Movie-TV-Search-AngularJS/index.html'));
 })
 // Start the server
 const PORT = process.env.PORT || 8080;
 app.listen(PORT, () => {
   console.log(`App listening on port ${PORT}`);
   console.log('Press Ctrl+C to quit.');
 });
 // [END gae_node_request_example]
 
 module.exports = app;
