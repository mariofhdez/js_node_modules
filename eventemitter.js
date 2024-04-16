"use strict";

var events = require('events');
var myEmitter = new events.EventEmitter();

myEmitter.on('llamar teléfono', sonarTelefono);
myEmitter.on('llamar teléfono', vibrarTelefono);

function sonarTelefono(quien){
    if(quien === 'madre'){
        return;
    }
    console.log("ring ring ring");
}

function vibrarTelefono(){
    console.log("brr brr brr");
}

myEmitter.emit("llamar teléfono", 'madre');