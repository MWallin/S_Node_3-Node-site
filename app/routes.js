"use strict"

// *****************************************************************************
// *****************************************************************************
// Requires and basic setup

const express = require( "express" )
const path    = require( "path" )

const router = express.Router()



// *****************************************************************************
// *****************************************************************************
// Routes

router.get( "/", ( req, res ) => {

  res.render( "pages/index" )

})


router.get( "/about", ( req, res ) => {

  const employees = [
    {
      name  : "Holly",
      email : "holly@site.com",
      avatar: "http://placekitten.com/g/600/600"
    },
    {
      name  : "Michael",
      email : "michael@site.com",
      avatar: "http://placekitten.com/g/300/300"
    },
    {
      name  : "Elise",
      email : "elise@site.com",
      avatar: "http://placekitten.com/g/400/400"
    },
    {
      name  : "Sandy",
      email : "sandy@site.com",
      avatar: "http://placekitten.com/g/500/500"
    },

  ]

  res.render( "pages/about", {
    employees: employees
  })

})


router.route( "/contact" )
  .get( ( req, res ) => {

    res.render( "pages/contact" )

  })

  .post( ( req, res ) => {

    console.log( "req.body.contact:", req.body.contact )

    res.send( `Thanks for contacting us, ${req.body.contact.name}! We will respond shortly` )

  })



// *****************************************************************************
// *****************************************************************************
// Exports

module.exports = router
