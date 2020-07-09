const express = require ('express');
const path =  require('path');

//Init App
const app = express();


//Load View Engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');

//Home Route
app.get('/',function(req,res){
  let articles = [
    {
      id:1,
      title:'Article One',
      author:'Brad Traversy',
      body:'This is article One'
    },
    {
      id:2,
      title:'Article Two',
      author:'Brad Traversy',
      body:'This is article Two'
    },
    {
      id:3,
      title:'Article Three',
      author:'Brad Traversy',
      body:'This is article Three'
    }
  ];
  res.render('index',{
    title:'Articles',
    articles: articles
  });
});

//Add Route
app.get('/articles/add',function(req,res){
  res.render('add',{
    title:'Add Articles'
  });
});

//Start Server
app.listen(3000,function(){
  console.log('server started on port 3000 ');
});
