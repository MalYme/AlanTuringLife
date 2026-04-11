var score = 0
var score_total = 0
function buttonStart(){

    window.open("video.html",'_self');
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