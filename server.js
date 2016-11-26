var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();

var articleone={
    title:'Article one|monisha',
    heading:'article one',
    date:'sep 29 2016',
    content:`
    <p>This is a content. hey there!hello. This is a content. hey there!hello. This is a content. hey there!hello. This is a content. hey there!hello</p>
            <p>This is a content. hey there!hello. This is a content. hey there!hello. This is a content. hey there!hello. This is a content. hey there!hello</p>
            <p>This is a content. hey there!hello. This is a content. hey there!hello. This is a content. hey there!hello. This is a content. hey there!hello</p>
    `
};
function createTemplate(data)
{
var htmlTemplate=`
<html>
    <head>
        <title>${title}</title>
     <link href="/ui/style.css" rel="stylesheet" />
    
     </head>
    <body>
      <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <div>
            ${date}
        </div>
        <div>
           ${content}
        </div>
       </div>
    </body>
    
    
</html>`;
    return htmlTemplate;
}
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/article-one', function(req,res){
   res.send(createTemplate(articleone));
})

app.get('/article-two', function(req,res){
     res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
})

app.get('/article-three', function(req,res){
     res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
})

app.get('/abt', function(req,res){
     res.sendFile(path.join(__dirname, '', 'abt.html'));
})

app.get('/myarticle', function(req,res){
     res.sendFile(path.join(__dirname, '', 'myarticle.html'));
})

app.get('/post1', function(req,res){
     res.sendFile(path.join(__dirname, '', 'post1.html'));
})

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var counter=0;
app.get('/counter', function(req,res){
    counter=counter+1;
    res.send(counter.toString());
})
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
