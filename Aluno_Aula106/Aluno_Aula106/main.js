function iniciar() {
    navigator.mediaDevices.getUserMedia({audio:true});
classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/cCod5Jtwj/model.json",acessarmodelo);}
function  acessarmodelo() {     
    classifier.classify(obterresultado)
}
 function obterresultado(error,results) {
    if (error) {
        console.log(error);
    } else {
      console.log(results);  
      document.getElementById("result_label").innerHTML="posso ouvir"+results[0].label;
    document.getElementById("result_confidence").innerHTML="precisao"+results[0].confidence;
    }
    
 }