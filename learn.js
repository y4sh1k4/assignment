const express=require('express');
const app=express();
app.use(express.urlencoded({extended:true}))
let array= [{
    id:1,
    name:'yashika',
    password:'Yashi@143',
    email:"mehndirattayashika5@gmail.com"
},
{
    id:2,
    name:'saksham',
    password:"gygbjb",
    email:"sakshambhugra5@gmail.com"
},
{
    id:3,
    name:'teena',
    password:"teena546",
    email:"teena5@gmail.com"
}
];
app.get("/",async(req,res)=>{
    res.json(array)
})
app.get('/:id',(req,res)=>{
    const idval=req.params.id;
    for(i=0;i<array.length;i++){
        if(array[i].id==idval){
            res.send(array[i])
        }
    }
})
app.post("/",(req,res)=>{
    let idval=req.body.id;
    let name=req.body.name;
    let password=req.body.password;
    let email=req.body.email;
    array.push({
        id:idval,
        name:name,
        password:password,
        email:email
    })
    res.json(array)
})
app.put("/:id",(req,res)=>{
    const idval=req.params.id;
    let namev=req.body.name;
    let passwordv=req.body.password;
    let emailv=req.body.email;
    for(i=0;i<array.length;i++){
        if(array[i].id==idval){
            array[i].name=namev;
            array[i].password=passwordv;
            array[i].email=emailv;
        }
    }
    res.json(array)
})
app.delete("/:id",(req,res)=>{
    const idval=req.params.id;
    const newarr=array.filter(element=>element.id!=idval);
    res.send(newarr)
})
app.listen(3000,()=>{
    console.log("Server have been strted")
})