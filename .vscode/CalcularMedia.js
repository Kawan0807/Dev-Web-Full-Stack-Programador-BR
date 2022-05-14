var i = 1;
do{
var n1 = parseFloat(prompt("Digite a primeira nota:"));
var n2 = parseFloat(prompt("Digite a segunda nota:"));;
var n3 = parseFloat(prompt("Digite a terceira nota:"));;

var media =((n1*2)+(n2*3)+(n3*5))/10;

if((media>=8)&&(media<=10)){
    alert("Você foi aprovado, a sua media final é << A >> em termos números é << " + media + " >>");
}else if((media>=6)&&(media<=7.9)){
    alert("Você foi aprovado, a sua media final é << B >> em termos números é << " + media + " >>");
} else if((media>=0)&&(media<=5.9)){
    alert("Você foi reprovado, a sua media final é << C >> em termos números é << " + media + " >>");
} else{
    alert("Os valores informados estão incorretos! ");
}
i++;  
}while(i<=3);
