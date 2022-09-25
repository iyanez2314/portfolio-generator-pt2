const fs = require('fs');
const responses = process.argv.slice(2);

const [name, gitHubName] = responses;

const generatePage = (name, gitHubName) => {
    return `
    
    <!DOCTYPE html>
    <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>HTML 5 Boilerplate</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
	<h1>Name: ${name}</h1>
    <h1>Github Username: ${gitHubName}</h1>
  </body>
</html>
    
    `
}

fs.writeFile('index.html', generatePage(name, gitHubName), err => {
    if(err) throw err;

    console.log('portfolio made! checkout the index.html page now in your files!')
});

module.exports = generatePage;