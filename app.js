const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(name, github);


// fs.writeFile('./index.html', generatePage(name, github), err => {
//   if (err) throw new Error(err);
//   console.log('complete')
// });

inquirer
  .prompt([
    {
      type:'input',
      name: 'name',
      message: 'what your name'
    }
  ])
  .then(answers=>console.log(answers));



console.log(inquirer)