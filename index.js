const express = require("express");
// const methodOverride = require("method-override");
const app = express();
const port = process.env.PORT||3000;
app.set('view engine','ejs');
app.use(express.static(__dirname+"/public"));
const { PythonShell } = require('python-shell');
// import { ConnectHandler } from 'netmiko'
var options = {
    mode: 'text',
    pythonPath: '/usr/bin/python', 
    pythonOptions: ['-u'],
    // make sure you use an absolute path for scriptPath
    scriptPath: '/home/anwesh/asian hack',
    // args: ['value1', 'value2', 'value3']
  };

app.get('/',async (req,res)=>{
    PythonShell.run('script.py', options , async (err, results)=> {
        if (err) throw err;
        console.log(String(results));
        console.log('finished');
        // res.render('index.ejs',{results: results});
        res.render('index.ejs',{results:String(results)});
        // res.send(5);
      });
})
app.use(express.json());
// app.use(express.urlencoded({extended:false}));
// app.use(methodOverride("_method"));

app.listen(port,()=>{
    console.log("Server is created...\nGoto 127.0.0.1:3000");
});

