const express = require('express');
const chalk = require('chalk');
require('dotenv').config()
const axios = require('axios')
// user routes
const userRoutes = require('./routes/user.route')


const app = express();
const PORT = process.env.PORT || 4500

// express.json() :  is a method inbuilt in express to recognize the incoming Request Object as a JSON Object. 
// express.urlemcoded() : is a method inbuilt in express to recognize the incoming Request Object as strings or arrays.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get("/",(req, res)=>{
    res.send("<h1>Saikrishna Redyy</h1>")
})

app.post('/iin',(req, res)=>{
    console.log(req.body)
    const iin = req.body.iin
  const xml = `
    <NMFIIService>
    <service_request>
        <appln_id>${process.env.NSE_APPL_ID}</appln_id>
        <password>${process.env.NSE_PASSWORD}</password>
        <broker_code>${process.env.NSE_BORKER_CODE}</broker_code>
        <iin>${iin}</iin>
    </service_request>
</NMFIIService>
`
  const config = {
    method: 'post',
    url: 'https://www.nsenmf.com/NMFIITrxnService/NMFTrxnService/IINDETAILS',
    headers: {
      'Content-Type': 'application/xml',
    },
    data: xml
  }

  axios(config)
    .then(async function (response) {
    //   let jsonData =await xmlToJson(response.data)
    //   let data =  jsonData['DataSet']['diffgram']['NMFIISERVICES']
      res.send(response.data)
    })
    .catch(function (error) {
      console.log(error)
      res.send(error)
    })
})
app.get('/test',(req, res)=>{
    res.send({message :"hey"})
})
// user auth routes
app.use('/api', userRoutes)
    // other routes goes here.


// start server
app.listen(PORT, () => {
    console.log(chalk.green.inverse.bold(`Express app listening on.........PORT :  ${PORT}`))
})
