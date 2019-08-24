const express = require("express");
const app = express();
const port = process.env.PORT||3000;
app.set('view engine','ejs');
app.use(express.static(__dirname+"/public"));
const { PythonShell } = require('python-shell');

var options = {
    mode: 'text',
    pythonPath: '/usr/bin/python', 
    pythonOptions: ['-u'],
    scriptPath: '/home/anwesh/asian hack',
    args: []
};

app.get('/',async (req,res)=>{
    PythonShell.run('script.py', options , async (err, results)=> {
        if (err) throw err;
        console.log(String(results));
        console.log('finished');
        res.render('index.ejs',{results:String(results)});
      });
})

app.post('/dhcp',async (req,res)=>{
    options.args.push(req.body.int)
    // options.push({args: [String(req.body.inter)]})
    PythonShell.run('dhcp.py', options , async (err, results)=> {
        if (err) throw err;
        console.log(String(results));
        console.log('finished');
        res.redirect('/');
      });
    }
)

app.listen(port,()=>{
    console.log("Server is created...\nGoto 127.0.0.1:3000");
});