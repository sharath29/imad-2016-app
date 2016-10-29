var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var article={
    title:'Article one | sharath savasere',
    heading:'Article one',
    date:'Sep 22 2016',
    content:`<p>
                this is the content of my article and i am working hard on it.this is the content of my first article and i am working hard on it.this is the content of my first article and i am working hard on it.
            </p>
            <p>
                this is the content of my article and i am working hard on it.this is the content of my first article and i am working hard on it.this is the content of my first article and i am working hard on it.
            </p>
            <p>
                this is the content of my article and i am working hard on it.this is the content of my first article and i am working hard on it.this is the content of my first article and i am working hard on it.
            </p>` 
};
function createTemplate(data){
var title=data.title;
var date=data.date;
var heading=data.heading;
var content=data.content;
var htmlTemplate=`
<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewpoint" content="width=device-width, initial-scale=1"/>
    <link href="/ui/style.css" rel="stylesheet"/>
    </head>
    <body>
        <div>
            <a href="/">Home</a>
        </div>
        <h3>
            ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
            ${content}
        </div>
    </body>
</html>`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
    res.send(createTemplate(article));
});
app.get('/article-two', function (req, res) {
    res.send(createTemplate(article));
});
app.get('/article-three', function (req, res) {
    res.send(createTemplate(article));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
