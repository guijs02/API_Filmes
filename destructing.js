const letras1 = ['a','b','c']

const letras2 = ['f','h','j','k']

const letras = [...letras1,...letras2]

console.log(letras)

const [num1,num2,...outros] = [1,2,3,4,5,7,3,3]

const heroi={
    nome:"stark",
    poder:"inteligencia",
    idade:35
}
const {nome,idade} = heroi
console.log(nome,idade)