const express=require('express');
const app=express();
const userModel=require('./models/user'); 
const path=require('path');
app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.get('/',function(req,res){
    res.render("index");
});
app.get("/read", async function (req, res) {
   let users= await userModel.find(); 
  res.render("read",{users});
});
app.get("/dalete/:id", async function (req, res) {
  let users = await userModel.findOneAndDelete({_id:req.params.id});
  res.redirect("/read");
});
app.get("/edit/:id", async function (req, res) {
  let users = await userModel.findOne({ _id: req.params.id });
  res.render("edit",{users});
});
app.post("/update/:id", async function (req, res) {
   let { name, email, image } = req.body;
  let users = await userModel.findOneAndUpdate({ _id: req.params.id },{image,email,name},{new:true});
  res.redirect("/read");
});//media.gettyimages.com/id/1398566330/photo/baltimore-maryland-andrew-taggart-of-the-chainsmokers-performs-during-infieldfest-preakness.jpg?s=612x612&w=gi&k=20&c=QB71xDWx-i5h4y18wQwmoFWgVIEKn83UxhoPGA7zmuE=
https: app.post("/create", async function (req, res) {
  let { name, email, image } = req.body;
  let createdUser = await userModel.create({
    name,
    email,
    image,
  });
  res.redirect("/read");
});
app.listen(3000);