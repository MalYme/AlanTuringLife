var score = 0
var score_total = 0
function buttonFinish(){
    
    alert("Votre score final est de "+score+"/"+score_total)
    alert("Merci de votre visite, site créer par Merlin et Zakriya")
    score = 0
    score_total = 0
}


// 1ère Q° du quiz 

function buttonreponseB() {
    score ++
    score_total ++
    alert("réponse correct, score = "+score+"/"+score_total)
}
function buttonreponseF() {
    score_total ++
    alert("réponse fausse, score = "+score+"/"+score_total)
}