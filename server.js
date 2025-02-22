const express = require('express');
const app = express();  

app.set('view engine', 'ejs');


app.get("/", (req, res) => {
    // res.render('index');

    const articles = [
        {
            title: "Article 1",
            createdAt: new Date(),
            description: "This is article 1"
        },
        {
            title: "Article 2",
            createdAt: new Date(),
            description: "This is article 2"
        },
        {
            title: "Article 3",
            createdAt: new Date(),
            description: "This is article 3"
        }
    ];

    res.render('index', { articles: articles });
});

const articlesRouter = require("./routes/articles")    
app.use("/articles", articlesRouter)        



app.listen(5000);



