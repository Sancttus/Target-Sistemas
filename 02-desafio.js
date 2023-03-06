// Função para calcular a sequência de Fibonacci até um determinado limite
function sequencia(param) {

    let a = 0
    let b = 1;    
    let arr = [a, b];
  

    while (b <= param) {
      [a, b] = [b, a + b];
      
      console.log(b);

      arr.push(b)
    }
    return arr;
  }

function verificador(num) {
    const seq = sequencia(num);
    if (seq.includes(num)) {
      return `O número ${num} pertence à sequência de Fibonacci!`;
    } else {
      return `O número ${num} não pertence à sequência de Fibonacci.`;
    }
  }
  console.log(verificador(5)); 
console.log(verificador(10)); 

