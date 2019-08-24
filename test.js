const express = require("express");
const methodOverride = require("method-override");
const app = express();
const port = process.env.PORT||3000;
app.set('view engine','ejs');
app.use(express.static(__dirname+"/public"));
const { PythonShell } = require('python-shell');

app.get('/', async (req,res)=>{
    PythonShell.run('test.py', null, async function (err, results) {
      if (err) throw err;
      console.log(String(results));
      console.log('finished');
      res.render('index.ejs',{results:String(results)});
      });
})
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(methodOverride("_method"));
// app.use('/',routes);

app.listen(port,()=>{
    console.log("Server is created...\nGoto 127.0.0.1:3000");
});

