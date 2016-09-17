"use strict"

// *****************************************************************************
// *****************************************************************************
// Requires and basics

// Externals
const expressLayouts = require( "express-ejs-layouts" )
const bodyParser     = require( "body-parser" )
const express        = require( "express" )
const path           = require( "path" )

// Own modules
const router = require( "./app/routes" )



// *****************************************************************************
// *****************************************************************************
// App setup

const app = express()


app.use( express.static( path.join( __dirname, "/public" ) ) )

app.set( "view engine", "ejs" )
app.use( expressLayouts )

app.use( bodyParser.urlencoded() )


// *****************************************************************************
// *****************************************************************************
// Routing

app.use( "/", router )



// *****************************************************************************
// *****************************************************************************
// Server start

app.listen( "3000", () => {
  console.log( "Server is started and listening on http://localhost:3000" )
})
