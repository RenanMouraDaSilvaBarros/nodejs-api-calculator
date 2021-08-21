const express = require('express')
const Calculate = require('./calculate')
const Validate = require('./validate')


const server = express()

const PORT = 3000

server.use(express.json())

server.post('/calculate', (req,res)=>{
   const {numberOne, numberTwo, operation} = req.body


   Validate.oparation(operation,res)
   Validate.numbers(numberOne,res)
   Validate.numbers(numberTwo,res)

   const result = Calculate.calculate(numberOne,numberTwo,operation)
   res.json({result})
})

server.listen(PORT,()=>{
    console.log('server running')
})

