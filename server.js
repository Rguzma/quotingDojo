
const express = require('express');

const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quotesSchema', {useNewUrlParser: true});
const {QuoteModel} = require( './models/quoteModel' );


// app.use(express.static(__dirname + "/static"));
app.use( express.urlencoded({extended:true}) );
app.set('views', __dirname + '/views');
app.set('views engine', 'ejs' );

app.get ('/', function(request, response){///aqui estamos creando las rutas.
	response.render('index.ejs');

});
let newQuote = {};
app.get("/quotes", function (request, response){
    QuoteModel.find()
        .then(data => response.render("quotes.ejs", {quotes:data}))
        .catch(err => response.json(err));
});

app.post( '/quotes', function( request, response ){
        let userName = request.body.userName;
        let quote = request.body.quote;
        let created_at=new Date();
        console.log("quotes del form: "+quote);
                comingQuote = {
                    userName,
                    quote,
                    created_at
                };
                console.log(comingQuote);
                QuoteModel.save(comingQuote)
                    .then( newQuoteData => console.log('new quote: ', newQuoteData))
                    .catch(err => console.log(err));
                response.redirect('/quotes')
});


app.listen(8080, function (){//este es el cierre

	console.log("the user server is running in port 8080");
});