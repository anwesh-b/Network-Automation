const express = require("express");
const app = express();
const port = process.env.PORT||3000;
app.set('view engine','ejs');
app.use(express.static(__dirname+"/public"));
const { PythonShell } = require('python-shell');
const bodyParser = require('body-parser');
const fs = require('fs')
app.use(express.json())
var options = {
    mode: 'text',
    pythonPath: '/usr/bin/python', 
    pythonOptions: ['-u'],
    scriptPath: '/home/anwesh/asian hack',
    args: []
};
app.use(bodyParser.urlencoded({ extended: false }))

// app.get('/',(req,res)=>{
    // PythonShell.run('script.py', options , async (err, results)=> {
    //     if (err) throw err;
    //     console.log(String(results));
    //     console.log('finished');
        // res.render('index.ejs');
              
        
    //   });
// })

app.get('/',async (req,res)=>{
    PythonShell.run('lab.py', options , async (err, results)=> {
        if (err) throw err;
        console.log('finished'); 
    });
    test = fs.readFile('./int.json', "utf8" , async (err, data) => {
        if (err) throw err
        dat = JSON.parse(data)
        console.log(dat)
        res.render('index.ejs',{results:dat});
    })
})

app.post('/inter',async (req,res)=>{
    console.log(req.body.int)
    opts = options.args.push(req.body.int,req.body.type)
    PythonShell.run('dhcp.py', opts , async (err, results)=> {
        if (err) throw err;
        console.log(String(results));
        console.log('finished');
        res.redirect('/');
      });
    }
)

app.post('/acl',async (req,res)=>{
    console.log(req.body.int)
    opts = options.args.push(req.body.int,req.body.type)
    PythonShell.run('dhcp.py', opts , async (err, results)=> {
        if (err) throw err;
        console.log(String(results));
        console.log('finished');
        res.redirect('/');
      });
    }
)

// app.post('/dhcp',async (req,res)=>{
//     console.log(req.body.int)
//     opts = options.args.push(req.body.int)
//     PythonShell.run('dhcp.py', opts , async (err, results)=> {
//         if (err) throw err;
//         console.log(String(results));
//         console.log('finished');
//         res.redirect('/');
//       });
//     }
// )
// app.post('/showip',async (req,res)=>{
//     console.log(req.body.int)
//     opts = options.args.push(req.body.int)
//     PythonShell.run('showip.py', opts , async (err, results)=> {
//         if (err) throw err;
//         console.log(String(results));
//         console.log('finished');
//         res.render('index.ejs',{results:String("Int"+req.body.int+results)});
//       });
//     }
// )

app.listen(port,()=>{
    console.log("Server is created...\nGoto 127.0.0.1:"+port);
});