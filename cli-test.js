exports.handler = function(request, response) {
    
    console.log('hello');
    response.send({"message": "Successfully executed"});
}