const express = require('express');
const bodyParser =  require('body-parser');
const cors = require('cors');
const config = require('./config/config');
const appRouter = require('./routes');
const reqResLogger = require('./config/req-res.logger');
const app = express();
const router = express.Router();
const pid = process.pid;


app.use(reqResLogger());
app.use(router);
app.use(cors());
app.use(bodyParser.json());
appRouter.registerRoutes(app);



router.get('/',(req,res)=> {
    res.send(`Hello World : ${pid}`);
});


// setTimeout(()=> {
//     if(Math.random()< 0.5) {
//         process.exit(1);
//     }
// }, 3000);

app.listen(config.port,()=> {
    console.log(`Express web server (${pid}) is listening on port : ${config.port}`);
});