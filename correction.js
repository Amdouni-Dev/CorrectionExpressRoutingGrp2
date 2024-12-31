const express=require('express')
const port=5000
const app=express()
/**
npm init
npm i express nodemon
tu crée un fichier app.js
nodemon
*/
app.use( (req,res,next) => {
    
  // Hichem Method  requestLogs.push(`Method: ${method}, URL: ${url}`);
  console.log(`une requete recue: ${req.method} avec l'url ${req.url} `)  
  next()
 })
// Ex1 /welcome
app.get('/welcome',(req,res)=>{
    res.send('Bienvenue sur ma première route')
 })
// EX2
app.get('/hello/:name',(req,res)=>{
    res.send(` Bonjour ${req.params.name} `)
 })

 // EX2 avec Query
 app.get('/hello2',(req,res)=>{
    res.send(`Bonjour ${req.query.name}`)
  })

/**
/ (route) :parametre ==>req.params.le_nom_du_parametre // navigateur /le_nom_du_parametre
(route) vide  ==>req.query.le_nom_du_parametre  // navigateur /?le_nom_du_parametre=valeur_du_parametre
*/
 // Ex3
app.get('/calculate',(req,res)=>{
    // a
    // b
    // a+b 
    const a=parseFloat(req.query.a)
    const b=parseFloat(req.query.b)
    res.send(`la somme est ${a+b}`)
 })
 // Ex3 avec params
 app.get('/calculate2/:a/:b',(req,res)=>{ 
    const a=parseFloat(req.params.a)
    const b=parseFloat(req.params.b)
    res.send(`la somme est ${a+b}`)
 } )

 // Ex4
 const requestLogs=[]

 /**Hichem Method 
 app.get('/info', (req, res) => {
    if (requestLogs.length > 0) {
        // Retourne toutes les informations enregistrées sous forme de texte
        res.send(requestLogs.join('<br>'));
    } else {
        res.send('Aucune requête enregistrée.');
    }})
        */
app.get('/info',(req,res) => {
    res.send("Informations enregistrées")
})    
app.listen(port,()=>{
console.log('Bien , vous avez bien connecté sur http://localhost:5000/')
})