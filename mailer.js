const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.post('/api/form',(req,res)=>{
    nodemailer.createTestAccount((err,account)=>{
        const htmlEmail = `
        <h3>Contact Details</h3>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
        </ul>
        <h3>${req.body.message}</h3>
        `
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'santosh.bm302@gmail.com',
                pass: '75039596GsG'
            }
        })
        let mailOptions = {
            from: 'sender@email.com',
            to: 'santosh.bm302@gmail.com',
            subject: 'New Query From SBSC Group',
            html: htmlEmail
        }
        transporter.sendMail(mailOptions, function (err, info) {
            if(err)
              console.log(err)
            else
              console.log(info);
              });
    })
})

const PORT = process.env.PORT || 3001
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})