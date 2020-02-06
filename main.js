function myFunction() {
    var rows = document.getElementById("rows").value;
    if (rows > 25) {
        console.clear();
        document.getElementById("message").innerHTML = "merci d'entrer un nombre inferieur à 25";
    } 
    if  (rows < 0){
        console.clear();
        document.getElementById("message").innerHTML = "les pyramides en negative n'existe pas .. merci d'entrer un nombre positive";
        }
    
    else {
        console.clear();
        document.getElementById("message").innerHTML = "";
        for (let i = 0; i < rows; i++) {
            var output = '';
            for (let j = 0; j < rows - i; j++) output += ' ';
            for (let k = 0; k <= i; k++) output += '# ';
            console.log(output);
        }
    }
}

