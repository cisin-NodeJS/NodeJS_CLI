#!/usr/bin/env node

//NPM require for program
var prompt = require('prompt');
fs = require('fs');

// Prompt service start
prompt.start();

// Prompt user to get input
prompt.get(['primaryBackgroundColor', 'primaryTextColor', 'title'], function(err, result) {
  if (err) {
    return onErr(err);
  }

  // Reading test.jade file to chagne value
  fs.readFile('test.jade', 'utf8', function(err, data) {
    if (err) {
      //Rerturn complete error on console
      return console.log(err);
    }
    //Replacing string with user-input value
    test = data.replace("~primaryBackgroundColor~", result.primaryBackgroundColor)
      .replace("~primaryTextColor~", result.primaryTextColor)
      .replace("~title~", result.title)

    // Writing test.jade file with new values 
    fs.writeFile('test.jade', test, function(err, data) {
      console.log(data);
    })

    //Show new content of file on console.
    console.log(test);
  });

});

/**
  Function to handle Error message and print on console
  err (Object) - Error object that get in exception
  return (int) - After print error object on console return value 1
**/

function onErr(err) {
  console.log(err);
  return 1;
}
