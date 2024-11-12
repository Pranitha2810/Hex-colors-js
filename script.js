function ChangeColor(){
    var hex_numbers=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    var hex_code= '';
    for(var i=0;i<6;i++)
        {
            var randomindex=Math.floor(Math.random() * hex_numbers.length);
            hex_code+=hex_numbers[randomindex];
        }
        document.getElementById("hex-code").innerHTML = hex_code;
        document.getElementsByTagName("body")[0].style.backgroundColor = "#" + hex_code;
}