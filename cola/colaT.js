
== // Igual = Se A é igual a B  "Nao diferencia se e um Valor ou uma String";
=== //Iguais = Se A é igual ao B  "Diferencia se e um Valor ou uma String";
<// Menor = "ex: 5 < 8 = true"
>// Maior = "ex: 5 > 8 = false"
&& // E = "ex: (x < 10 && y > 1)"
|| // Ou = "ex: (x == 5 || y == 5) "
! // Não = "ex: !(x == y)"

00 // Number = Numero 
"" // Strings = Textos entres aspas. 
() //
{} // Objetos = Objetos podem conter muitos valores.  "Para acessar o Menbro usar o Nome"
{} // Ação = a vezes uma ação ou uma tarefa q vai ser feita
[] // Array = é uma variavel especial que pode conter mais de um valor. "Para acessar seus Elemento use [0]"

return; // Retorna um Valor que ja tenha cido declarado ou que ainda vai ser declarado;
function; nome (){} // 
var; // 
let; //
const; //  
class {constructor()} // é tipo uma funcao 

if // Se for verdadeiro execulda o bloco de codigo = "1° Opção" 
else if // Se entra em outra condiçao = "2°Opção"
else // Se for Falso = "Ultima Opção" 
switch // Execulta direto um bloco de codigo especifico em vez de passa por todos 
case // sao as opçoes do SWITCH. "acho que é isso"
default: // Se nao acha nada no Switch então excutara ele 0

for (){} // percorre um bloco de código várias vezes "ex: (let i = 0; i < 5; i++){console.log(i)}" "as variaveis nao precisa ser escritas dentro do loop"
* for (in){} // percorre as propriedades de um objeto
* for (of){} // percorre os valores de um objeto iterável
* while (){} // percorre um bloco de código enquanto uma condição especificada é verdadeira
* do/while (){} // também percorre um bloco de código enquanto uma condição especificada é verdadeira

break // pode ser usado para sair de um LOOP ou SWITCH "É usado como uma ação {} no Loop " "ex: if (i === 3) {break;}"
continue // Metodo pula um valor do LOOP ou SWITCH "É usado como uma ação {} no Loop " "ex: if (i === 3) {continue;}"

new Set() // Cria um novo Conjunto. "Amarzena VALORES e VARIAVEIS"
new Map() // Cria um Mapa novo  "Para criar um MAPA e ja inserir elemento use 'ex: Map.set()'"
delete // Metodo para Apagar alguma coisa. "Mas deixa buracos no codigo"
.size // Retorna o numero de quantos elementos tem no MAP.
.set() // Metodo para add ou subescreve um Array no MAPA.
.add() // Adiciona um elemento no conjuto. "Não add elementos iguais" 
.has() // Retorna True se Encotra um elemento especifico "So funciona no new Map()" "ex:console.log(var.has("name"))"
.get() // Metodo para encontra um Valor especifico no MAPA 
* .forEach() //
* .values() // 
* .entries() //

Number.isInteger(0) // método retorna TRUE se o argumento for um inteiro
Number.EPSILON() // Se for um numero flutuante retonara TRUE.  "FLUTUASNTE == 2.24587..."
Math.PI // Retorna o numero de PI 3.14...
Math.round() // Retorna o numero inteiro mais proximo.
Math.ceil() // Retorna o numero interiro a cima.
Math.floor() // Retorna o numero inteiro a baixo.
Math.sign() // Retorna se for nulo ou positivo. "0 ou 1" v2015
Math.pow(0,0) // Retorna o valor de X elevado por Y.
Math.sqrt() // Retorna a raiz quadrade de X.
Math.abs() // Retorna o valor em negativo para positivo. "-4.6 = 4.6"
Math.max() // Usado para achar o valor mais alto em uma lista.
Math.min() // Usado para acha o valor mais Baixo em uma lista.
Math.random() // Metodo usado para gerar um numero aleatorio em 0 e 1. 

new Date() // Cria uma data com as informaçoes dadasa pelo Pc ou pelo codigo na seguinte ordem. (Ano,Mes, Dia, Hora, Minuto, Segundo, Ms)
.setFullYear() // Método para define o ano de um objeto de data.
.getFullYeat() // Retorna o Ano 
.getMonth() // Retorna o Mês
.getDay() // Retorna o Dia da Semana "ex: 0 a 6"
.getDate() // Retorna o Dia
.getHours() //Retorna a Hora "em formato de 24H"
.toString() // Converte a data do NewDate para String de forma masi bonita. 

Array.includes("name") // preocura por um elemento se for encontrado retonara TRUE.   v2016
Array.findIndex(MyFunction) // retorna a quantida de valores q passaram pelo filtro.
Array.find(MyFunction) // retorna o primeiro resultdo de um Array filtrado por uma Function. 
Array.reduceRight(MyFunction) // metodo para retorna um valor atraveis da soma todos os valores de um Array. "Direita para Esquerda"
Array.reduce(MyFunction) // metodo para retorna um valor atraveis da soma todos os valores de um Array. "Esquerda para Direita."
Array.myArrayMin() // para encontrar o menor número em uma Array.
Array.myArrayMax() // para encontrar o número mais alto em uma Array.
Array.reverse() // Coloca em ordem (Z-A) o Array.
Array.sort() // Coloca em ordem (A-Z) o Array.
Array.length() // Metodo para add um novo Elemento a um Array. "Em ultima Posição"
Array.unshift() // Matodo para add um novo elemento a um Array. "Na frente dos outros elementos"
Array.shift() // Metodo para remover o primeiro Elemento do Array. "sem deixa burraco"
Array.splice(0,0) // usado para remover algums Elementos. "Cria uma nova matriz"
Array.splice(0,0, "name","name") // Usado para adicionar Elementos a um Array. "Criar uma nova Matriz"
Array.pop() // Metodo de remover o ultimo elemento de um Array.
Array.isArray(Var) // Se for um Array retornara TRUE.
Array.push("name") // Add um novo elemento a um Arrey. "Sera adicionado no final"
Array.concat(Array,...) // Pegara um ou mais Arrays e coloque ele no final de outro Array. "Ela retornara um novo Array"

Var.Array.length // Na Strings Retorna o numero de letras, No Arrey Retorna a quantidade de Array.  
Var.filter() // cria uma nova Variavel que tenha passaado por algum tipo de filtro da sua escolha. "ex: MyFunction"
Var.toPrecision(0) // Retorna uma String com a quantidade de casas decimais decidida, apartir do primeiro numero  
Var.tofixed(0) // Retorna um String com o nume de casas decimais decidido.
Var.toexponential(0) // Retorna uma string, com um número arredondado e escrito usando notação exponencial.
Var.endswith("name",0) // Verifique se uma string do Final pro Inicio Para retonar TRUE ou FALSE.
Var.startswith("name",0) // Retorna TRUE se uma string começa com um valor especificado se nao é FALSE.
Var.includes("Name",0) // se achar uma palavra ou conjuto de letras na string Retona TRUE se não FALSE. 
Var.Search("name") // Mostra o numero da posição de uma palavra em uma Strings.  "Pode receber valores de pesquisa poderosos (expressões regulares)."
Var.lastindexof("name",0) // Mostra o numero da ultima posição de uma palavra em uma Strings.
Var.indexof("name",0) // Mostra o numero da posição de uma palavra em uma Strings. "Pode receber um valor de partida"
Var.split() // Converte uma Strings em um Array
Var.charAt(0) // Retorna um caractere em um posição especifica de strings.  "começa a contagem do 0"
Var.padStart(0,"name") // método preenche uma string na frente de outra string.  "o numero é quanto a var principal vai entra"
Var.padEnd(0,"name") // método preenche uma string no final de outra string.  "o numero é quanto a var principal vai entra"
Var.valueof() // Método para converter objetos Number em valores primitivo s.
Var.trimstart() // Remove os espaços em branco apenas do início de uma string.  v2020
Var.trimEnd() // Remove os espaços em branco apenas do final de uma string.  v2020
Var.concat("name",Var) // junta duas ou mais strings em uma so.
Var.toUpperCase() // Altera toda a Strings para Maiusculo.
Var.toLowerCase() // Altera toda a Strings para Minuculos.
Var.slice(0,0) // é usado para escolher um intervalo de uma Strings.
Var.replaceall("name","name") // ele altera uma palavra por outra por toda a Strings.  v2021
Var.replace("name","name") // é feito uma copia e altera palavra de uma Strings por outra.
    (/name/g,"name") // Para substituir todas as palavras iguais. 
    (/name/i,"name") // Para substituir maiúsculas e minúsculas.
Var.matchall(/name/g) // Mostra o numero de vezes que uma palavras ou sequencias de letras aparece em uma VAR.  v2020  "so acha do mesmo jeito que voce esvreveu"
    (/name/gi) // Mostra intependete se for minuculo ou maiusculo.
Var.match(/name/g) // Mostra o numero de vezes que uma palavras ou sequencias de letras aparece em uma VAR.  "so acha do mesmo jeito que voce esvreveu"
    (/name/gi) // Mostra intependete se for minuculo ou maiusculo.

.call() // Metodo para chama uma FUNCTION. "Aceita argumentos separadamente"
.apply() // Metodo para chama uma FUNCTION. "Recebe argumentos de ARRAY"
.bind() // Metodo para pegar emprestado uma FUNCTION ja declarada anteriomente.
toString() // Usada para converte um numero em Strings / Converte Array em Strings / ou Strings em Array.
parseFloat("",Var) // Analisa uma string e retorna um número, Apenas o primeiro número é retornado:
console.log(Var) // para imprimir alguma coisa no console do navegador.
console.log(popped) // Mostra o ultimo Array q foi apagado.
document.getElementById("ID").innerHTML("") // é usado para alterar alguma coisa no HTML 
document.getElementById("ID Imagen").src = " Imagen Nova" // "Usado para altera uma imagen no HTML"
document.getElementsByTagName("p")[0].innerHTML // Metodo usado para escolher uma posiçao de um <p> e altera
document.getElementsByClassName("test")[0].innerHTML // Metodo para escolher uma posiçao de uma CLASS e altera

document.write() // Metodo para gravar diretamente no fluxo de saida do HTML
this. // ISSO = Refere-se a um objeto. 

JSON.parse() // Metodo para converter uma String em um OBJETO js.
parc