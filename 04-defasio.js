
   

function representacao(){

const sp = 67836.43;
const rj = 3678.66;
const mg = 29229.88;
const es = 27165.48;
const outros = 19849.53;

const total = sp + rj + mg + es + outros;
const perc_sp = (sp/total) * 100;
const perc_rj = (rj/total) * 100;
const perc_mg = (mg/total) * 100;
const perc_es = (es/total) * 100;
const perc_outros = (outros/total) * 100;


console.log(`SP: ${perc_sp.toFixed(2)}%`);
console.log(`RJ: ${perc_rj.toFixed(2)}%`);
console.log(`MG: ${perc_mg.toFixed(2)}%`);
console.log(`ES: ${perc_es.toFixed(2)}%`);
console.log(`Outros: ${perc_outros.toFixed(2)}%`);
   
}
   

   representacao();