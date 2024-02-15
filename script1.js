function ejer1(){
    let b=[];
    for (let i=0;i<50;i++){
        if(i%2!=0){
            console.log(i);
            b.push(i);
        }
    }
    alert(b);
}
function ejer2(){
    var pokemons = 
[ 'bulbasaur',
  'ivysaur',
  'venusaur',
  'charmander',
  'charmeleon',
  'charizard',
  'squirtle',
  'wartortle',
  'blastoise',
  'caterpie',
  'metapod',
  'butterfree',
  'weedle',
  'kakuna',
  'beedrill',
  'pidgey',
  'pidgeotto',
  'pidgeot',
  'rattata',
  'raticate',
  'spearow',
  'fearow',
  'ekans',
  'arbok',
  'pikachu',
  'raichu',
  'sandshrew',
  'sandslash',
  'nidoran-f',
  'nidorina',
  'nidoqueen',
  'nidoran-m',
  'nidorino',
  'nidoking',
  'clefairy',
  'clefable',
  'vulpix',
  'ninetales',
  'jigglypuff',
  'wigglytuff',
  'zubat',
  'golbat',
  'oddish',
  'gloom',
  'vileplume',
  'paras',
  'parasect',
  'venonat',
  'venomoth',
  'diglett',
  'dugtrio',
  'meowth',
  'persian',
  'psyduck',
  'golduck',
  'mankey',
  'primeape',
  'growlithe',
  'arcanine',
  'poliwag',
  'poliwhirl',
  'poliwrath',
  'abra',
  'kadabra',
  'alakazam',
  'machop',
  'machoke',
  'machamp',
  'bellsprout',
  'weepinbell',
  'victreebel',
  'tentacool',
  'tentacruel',
  'geodude',
  'graveler',
  'golem',
  'ponyta',
  'rapidash',
  'slowpoke',
  'slowbro',
  'magnemite',
  'magneton',
  'farfetchd',
  'doduo',
  'dodrio',
  'seel',
  'dewgong',
  'grimer',
  'muk',
  'shellder',
  'cloyster',
  'gastly',
  'haunter',
  'gengar',
  'onix',
  'drowzee',
  'hypno',
  'krabby',
  'kingler',
  'voltorb' ];
  alert(pokemons.length);
  let b;
  do{
    b=parseInt(prompt("Ingrese un numero entre 0 y 100"));
  }while(b<0 || b>100);
  for(let i=0;i<pokemons.length;i++){
    if(i==b){
        alert(pokemons[i]);
    }
  }
}
/*Crea un programa que recorra el arreglo [4,”dos”,8,”tres”,5,9,1,”cero”] 
y muestre en consola solo los elementos que son tipo número.*/
function ejer3(){
    var a=[4,"dos",8,"tres",5,9,1,"cero"];
    for(let i=0;i<a.length;i++){
        if(typeof a[i] === 'number'){
            console.log(a[i]);
        }
    }
}
