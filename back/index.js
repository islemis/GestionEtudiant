
const mysql =require('mysql'); 
const bodyParser = require('body-parser');
const express=require('express');
var app=express();
const bodyparser= require('body-parser');
const { getRequireExtensions } = require('stringify/src/stringify');
const { json } = require('body-parser');
let Book = require('../back/models/student');
const cors=require("cors");
app.use(bodyparser.json());
app.use(cors()
);

var mysqlConnection=mysql.createConnection({
    host : "localhost",
    user :"root",
    password:"",
    database:"mini_projet",
    
})

   mysqlConnection.connect((err)=>
   {
    if(!err)
    
        console.log('connection succeded');
    else
    console.log('connection failed        ERROR : '  +JSON.stringify(err,undefined,2) );
}
   ) ;
app.listen(4000,()=>
console.log('Express server is running at port no :4000  '));
//get all students 
app.get('/student',(req,res)=>{
    mysqlConnection.query('select * from student',(err,rows,fields)=>
    {
        if(!err)
        res.send(rows);
        else 
        console.log(err);
    } )
});
//get a student
app.get('/getstudent/:Sid',(req,res)=>{
    mysqlConnection.query('select * from student where Sid =?',[req.params.Sid],(err,rows,fields)=>
    {
        if(!err)
        {
            res.send(rows);
            console.log(rows);
        }
        
        else 
        console.log(err);
    } )
});
//delete a student
app.delete('/student/:Sid',(req,res)=>{
    mysqlConnection.query('DELETE FROM `student` WHERE Sid =?',[req.params.Sid],(err,rows,fields)=>
    {
        if(!err)
        {
             return res.status(200).json("deleted");
          
        }
        
        else 
        console.log(err);
    } )
});
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15


// add student
app.post('/ajoutstudent/',(req,res)=>{
    let st=req.body;
var sql=` INSERT INTO student (  nom, prenom, classe, cin) VALUES (?,?,?,?)`; 
    mysqlConnection.query(sql,[st.nom,st.prenom,st.classe,st.cin],(err,rows,fields)=>
    {
        if(!err)
        {
           
            return res.status(200).json("saved");
            
            
          
        }
        
        else 
        console.log(err);
    } )
});



// update student
app.put('/editstudent/:Sid',(req,res)=>{
    let st=req.body;
    var sql=`UPDATE student  SET  nom=? ,prenom=? , classe=?, cin=? WHERE Sid=?   `  ;
  
    mysqlConnection.query(sql,[st.nom,st.prenom,st.classe,st.cin,req.params.Sid],(err,rows,fields)=>
    {

        if(!err)
        
            
        res.send('updated succesfuly');
               
           else 
           console.log(err);
    }
    
     
    )
});


