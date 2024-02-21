const express = require('express');
const nodemailer = require("nodemailer");
const cors = require('cors'); 

const app = express();
app.use(express.json());

app.use(cors());
app.get("/",(req,res)=>res.send("HEllo"))
app.post('/send-email',  async (req, res) => {
    console.log("ello")
    const {ma,fe,na}=req.body
    console.log(ma,fe,na)
    try {

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: 'yoge3414@gmail.com',
                pass: 'weyo ijlu rqbv hmrl'
                
            }
        });

        const mailOptions = {
            from: 'sreenidhifeedbackandenquiry@gmail.com',
            to: ma,
            subject: "hello 👋 "+na,
            html: '<h4>Your feedback is truly appreciated and valued. Thank you for taking the time to share your thoughts with us!🥰 </h4>'
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log("Error" + error)
            } else {
                console.log("Email sent:" + info.response);
                res.status(201).json({status:201,info})
            }
        })

        const mailOptions1 = {
            from: 'sreenidhifeedbackandenquiry@gmail.com',
            to: 'eyogeshreddy007@gmail.com',
            subject: "hi"+na,
            html: `<h3> ${fe}</h3>`
        };

        transporter.sendMail(mailOptions1, (error, info) => {
            if (error) {
                console.log("Error" + error)
            } else {
                console.log("Email sent:" + info.response);
                res.status(201).json({status:201,info})
            }
        })
    } catch (error) {
        console.log("Error" + error);
        res.status(401).json({status:401,error})
    }
}
);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
