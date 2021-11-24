const express = require( 'express');
const QuoteRouter = express.Router();
const {QuotesController} = require( '../controllers/quotesController' );

QuoteRouter

    .get ('/', QuotesController.index);


QuoteRouter
    .route ('/quotes')
    .get(QuotesController.toQuotes)
    .post( QuotesController.addQuote );


module.exports = {
    QuoteRouter
};