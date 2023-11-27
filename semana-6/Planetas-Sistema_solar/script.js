// Parte 1: Consumo da API e Manipulação de Dados
// O objetivo desta primeira parte é consumir a API "The Solar System OpenData"
// para obter informações sobre os planetas do sistema solar e realizar operações
// básicas de manipulação de dados usando métodos de array em JavaScript.

// Tarefas

// 1. Consuma a API: Utilize o endpoint /bodies para obter uma lista de corpos celestes. Armazene esses dados em um array para futuras operações. 
// ● Detalhes: Use axios para fazer a requisição à API. Certifique-se de tratar possíveis erros que possam ocorrer durante a requisição. 
let corposCelestes = [];



async function getBodies() {
    console.log("Buscando dados...");
    const result = await axios.get("https://api.le-systeme-solaire.net/rest/bodies/");
    corposCelestes = result.data.bodies;
}


// 2. Filtre os Planetas: Use o método filter para criar um novo array contendo apenas planetas. 
// ● Detalhes: Cada objeto da API contém um campo que especifica o tipo do corpo celeste (por exemplo, planeta, estrela, lua, etc.). Use esse campo como critério para o filtro.

let planetasFiltrados = [];
function filtrarPlanetas() {
    const filtradoPlaneta = corposCelestes.filter(planeta => planeta.isPlanet === true)
    planetasFiltrados = filtradoPlaneta
}


// 3. Encontre a Terra: Use o método find para encontrar o objeto que representa a Terra no array filtrado. 
// ● Detalhes: Você deve procurar pelo objeto cujo campo de nome seja igual a "Earth".
let terraFiltrada = []
function filtarTerra(){
    const filtrandoTerra = corposCelestes.filter(planet => planet.id === "terre")
    terraFiltrada = filtrandoTerra 

}
// 4. Verifique Condições com some: Use o método some para verificar se algum planeta no array filtrado não tem luas. 
// ● Detalhes: Alguns planetas não possuem luas e isso é especificado em um dos campos do objeto. Use esse campo para realizar a verificação. 

let planetaSemLua = []

function planetasSemLuas(){
    const planetaNotLua = planetasFiltrados.some((semLua) => semLua.moons === null)
    planetaSemLua = planetaNotLua
}

// 5. Transforme os Dados com map: Use o método map para criar um novo array contendo apenas os nomes dos planetas. 
// ● Detalhes: O novo array deve ser uma lista de strings, onde cada string é o nome de um planeta. 

let planetasNome = [];

function listarNomesPlanetas() {
    planetasNome = planetasFiltrados.map((planeta) => {
        return `Nome ${planeta.englishName}`;
    });
}

// 6. Classificação por Tamanho: Use os métodos map e sort para criar um novo array que contenha os nomes dos planetas, ordenados pelo seu tamanho (raio). 
// ● Detalhes: Utilize map para extrair os raios e os nomes dos planetas em um novo array. Depois, use sort para ordenar esse array com base no raio. 


// ------------------------------------------------------
getBodies().then(() => {
    filtrarPlanetas()
    filtarTerra()
    planetasSemLuas()
    listarNomesPlanetas()

    console.log("-----1-----");
    console.log(corposCelestes) // 1
    console.log("-----2-----")
    console.log(planetasFiltrados) //2
    console.log("-----3-----")
    console.log(terraFiltrada);
    console.log("-----4-----")
    console.log(planetaSemLua);
    console.log("-----5-----")
    console.log(planetasNome);
}).catch((err) => {
    console.error("Erro", err)
}).finally(() => {
    console.log('Terminou')
});






// 7. Informações Concatenadas: Use o método join para criar uma string que contenha os nomes de todos os planetas do array, separados por vírgulas. 
// ● Detalhes: A string resultante deve ser algo como "Mercúrio, Vênus, Terra, Marte,...". 


// 8. Sistema Solar Compacto: Use os métodos para pegar os 5 menores planetas e calcular a massa total desses planetas. 


// 9. Luas e Desidade: verifique se algum planeta tem mais de 2 luas e, em caso afirmativo, listar todos os planetas entre eles que tem densidade maior que 2.34400. 


// 10. Ordem de descobrimento: Encontre e imprima na tela todos nomes dos planetas e suas respectivas datas de descoberta, ordenando-os do mais recente ao mais antigo. 


// 11. Encontrando Astro: Faça uma função que recebe um nome, e retorna a distancia, a massa, gravidade e densidade 


// 12. Filtro de Temperatura: econtre os planetas que tem uma temperatura de 8 a 30 graus celsius. Cuidado que o AvgTemp está na escala Kelvin. Ordene-os do mais frio ao mais quente.


// 13. Separando Planetas. Faça uma função que retorna um objeto, separando todos os planetas pelo seu tipo. bodyType 


// 14. Ordenação Complexa: Use sort e slice para ordenar os planetas primeiro por tipo e depois por tamanho, pegando os 3 maiores de cada tipo. 


// 15. Encontrando planetas orbitados. Encontre todos os planetas que são orbitados por pelo menos um corpo celeste. Imprima na tela o nome do planeta e seus orbitadores. 


// 16. Média da Massa dos Planetas: Use o método reduce para calcular a média da massa de todos os planetas e imprimir o resultado. 


// 17. Calcule a distância entre Saturno e Plutão. Utilize o perihelion e o aphelion para calcular a menor distância possível entre os planetas 


// 18. Planetas com Luas: liste todos os planetas que têm uma ou mais luas. Imprima na tela o planeta, e quantas luas ele tem. 


// 19. O Desafio Final em Manipulação de Dados e Cálculos 
