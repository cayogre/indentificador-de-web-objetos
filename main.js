function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier('MobileNet', modeloaded)
}
function draw(){
  image(video, 0, 0, 300, 300)
  classifier.classify(video, gotResults)
}
function modeloaded(){
  console.log("It a Coisa")
}
function gotResults(error, results){
  if(error == true){
    console.log("O palhaço vai te pegar hahahahaha")
  }else{
    var confianca = results[0].confidence
    document.getElementById("resultado_euSouLindo").innerHTML = confianca
    if(confianca > 0.5){
    console.log(results)
    var objeto = results[0].label
    document.getElementById("result_IamTHEBEST").innerHTML = objeto
  }
  }
}



