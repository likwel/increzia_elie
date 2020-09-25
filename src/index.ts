//Exercice 1:
//fonction matrice en JavaScript ES6
const matriceES6=(a,b)=>{
const res1=[a,b,a];
const res2=[b,b,a];
const res3=[a,a,b];
const res=[res1,res2,res3];
return res;
}
const res=matriceES6(0,1);
console.log(res);

//Fonction matrice en TypeScript
function matriceTS(a,b){
  const res1=[a,b,a];
  const res2=[b,b,a];
  const res3=[a,a,b];
  const res=[res1,res2,res3];
  return res;
}
const res2=matriceTS(0,1)
console.log(res2);

//Exercice 2:
//Somme des entiers positifs
function sommeEntier(a,tab){
  var somme=0;
  for (var i=a;i<tab.length;i++){ 
      somme=somme+(tab[i]>0);
  }
  console.log(somme);
}
var tab1=[1,-2,3,5];
sommeEntier(1,tab1);

//for (var i=0;i<tab1.length;i++){
  //var somme=0;
  //somme=somme+tab1[i];
//}
//console.log(somme);


//Rearangement elemnt d'un tableau en ordre inverse
function arrangeTab(tab){
return tab.reverse();
}
var tArray=[0,3,-5,12,-18,-20]
var tab=arrangeTab(tArray);
console.log(tab);