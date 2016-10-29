var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var article={
    num_1:'first',
    num_2:'second',
    num_3:'third',
    title_one:'Article one | sharath savasere',
    title_two:'Article two | sharath savasere',
    title_three:'Article three | sharath savasere',
    heading_one:'Article one',
    heading_two:'Article two',
    heading_three:'Article three',
    date:'Sep 22 2016',
    content:`<p>
                this is the content of my ${num_1} article and i am working hard on it.this is the content of my first article and i am working hard on it.this is the content of my first article and i am working hard on it.
            </p>
            <p>
                this is the content of my ${num_1} article and i am working hard on it.this is the content of my first article and i am working hard on it.this is the content of my first article and i am working hard on it.
            </p>
            <p>
                this is the content of my ${num_1} article and i am working hard on it.this is the content of my first article and i am working hard on it.this is the content of my first article and i am working hard on it.
            </p>` 
};
function createTemplate_1(data){
var title=data.title_one;
var date=data.date;
var heading=data.heading_one;
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
function createTemplate_2(data){
var title=data.title_two;
var date=data.date;
var heading=data.heading_two;
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
function createTemplate_1(data){
var title=data.title_three;
var date=data.date;
var heading=data.heading_three;
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
    res.send(createTemplate_1(article));
});
app.get('/article-two', function (req, res) {
    res.send(createTemplate_2(article));
});
app.get('/article-three', function (req, res) {
    res.send(createTemplate_3(article));
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
