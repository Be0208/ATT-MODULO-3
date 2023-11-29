// Parte 1: Consumo da API e Manipulação de Dados
// O objetivo desta primeira parte é consumir a API "The Solar System OpenData"
// para obter informações sobre os planetas do sistema solar e realizar operações
// básicas de manipulação de dados usando métodos de array em JavaScript.

// Tarefas

let corposCelestes = [];
let planetasFiltrados = [];
let terraFiltrada = [];
let planetaSemLua = [];
let planetasNome = [];
let planetasNomeOrdenados = [];
let planetasNomeVirgula = "Teste"
let cincoMenoresPlanetas = []
let massaTotal = []
let somaMassasNotacaoCientifica = []

let planetasComMaisDeDuasLuas = []

let planetasOrdenadosPorDescobrimento = []

let astroEncontrado = []
// ------------------------------------------------------

// 1. Consuma a API: Utilize o endpoint /bodies para obter uma lista de corpos celestes. Armazene esses dados em um array para futuras operações. 
// ● Detalhes: Use axios para fazer a requisição à API. Certifique-se de tratar possíveis erros que possam ocorrer durante a requisição. 

async function getBodies() {
    console.log("Buscando dados...");
    const result = await axios.get("https://api.le-systeme-solaire.net/rest/bodies/");
    corposCelestes = result.data.bodies;
}

// 2. Filtre os Planetas: Use o método filter para criar um novo array contendo apenas planetas. 
// ● Detalhes: Cada objeto da API contém um campo que especifica o tipo do corpo celeste (por exemplo, planeta, estrela, lua, etc.). Use esse campo como critério para o filtro. 

function filtrarPlanetas() {
    const filtradoPlaneta = corposCelestes.filter(planeta => planeta.isPlanet === true)
    planetasFiltrados = filtradoPlaneta
}

// 3. Encontre a Terra: Use o método find para encontrar o objeto que representa a Terra no array filtrado. 
// ● Detalhes: Você deve procurar pelo objeto cujo campo de nome seja igual a "Earth".

function filtrarTerra() {
    const filtroTerra = corposCelestes.filter(planeta1 => planeta1.englishName === "Earth")
    terraFiltrada = filtroTerra
}

// 4. Verifique Condições com some: Use o método some para verificar se algum planeta no array filtrado não tem luas. 
// ● Detalhes: Alguns planetas não possuem luas e isso é especificado em um dos campos do objeto. Use esse campo para realizar a verificação.

function planetasSemLuas(){
    const planetaNotLua = planetasFiltrados.some((semLua) => semLua.moons === null)
    planetaSemLua = planetaNotLua
}

// 5. Transforme os Dados com map: Use o método map para criar um novo array contendo apenas os nomes dos planetas. 
// ● Detalhes: O novo array deve ser uma lista de strings, onde cada string é o nome de um planeta. 

function listarNomesPlanetas() {
    planetasNome = planetasFiltrados.map((planeta) => {
        return `Nome ${planeta.englishName}`;
    });
}

// 6. Classificação por Tamanho: Use os métodos map e sort para criar um novo array que contenha os nomes dos planetas, ordenados pelo seu tamanho (raio). 
// ● Detalhes: Utilize map para extrair os raios e os nomes dos planetas em um novo array. Depois, use sort para ordenar esse array com base no raio. 

function listarPlanetasOrdenados() {
    planetasFiltrados.sort(function(a, b){return a.meanRadius - b.meanRadius})
    planetasNomeOrdenados = planetasFiltrados.map((planeta) => {
        return `Nome: ${planeta.englishName} Raio médio: ${planeta.meanRadius}`;
    });
}

// 7. Informações Concatenadas: Use o método join para criar uma string que contenha os nomes de todos os planetas do array, separados por vírgulas. 
// ● Detalhes: A string resultante deve ser algo como "Mercúrio, Vênus, Terra, Marte,...". 

function listarPlanetasVirgula() {
    let planetasNomeSomente = planetasFiltrados.map((planeta) => {
        return planeta.englishName;
    });
    planetasNomeVirgula = planetasNomeSomente.join(", ")
}

// 8. Sistema Solar Compacto: Use os métodos para pegar os 5 menores planetas e calcular a soma massa total desses planetas.
function somarMassas() {
    cincoMenoresPlanetas = planetasFiltrados
        .sort((a, b) => a.meanRadius - b.meanRadius)
        .slice(0, 5);

    massaTotal = cincoMenoresPlanetas.reduce((total, planeta) => {
        return total + planeta.mass.massValue * Math.pow(10, planeta.mass.massExponent) ;
    }, 0);

    somaMassasNotacaoCientifica = massaTotal.toExponential();
}

// 9. Luas e Desidade: verifique se algum planeta tem mais de 2 luas e, em caso afirmativo, listar todos os planetas entre eles que tem densidade maior que 2.34400. 

function verificarLuasEDensidade() {
    planetasComMaisDeDuasLuas = planetasFiltrados.filter((planeta) => planeta.moons !== null && planeta.moons.length > 2);
    
    if (planetasComMaisDeDuasLuas.length > 0) {
        const planetasComDensidadeMaior = planetasFiltrados.filter((planeta) => planeta.density > 2.34400);
        console.log("Planetas com mais de 2 luas:", planetasComMaisDeDuasLuas);
        console.log("Planetas com densidade maior que 2.34400:", planetasComDensidadeMaior);
    } else {
        console.log("Nenhum planeta tem mais de 2 luas.");
    }
}

// 10. Ordem de descobrimento: Encontre e imprima na tela todos nomes dos planetas e suas respectivas datas de descoberta, ordenando-os do mais recente ao mais antigo. 

function ordemIdadePlanetas() {

    let idadePlanetas = planetasFiltrados.filter((planeta)=> planeta.discoveryDate).sort((a, b) => new Date(b.discoveryDate) - new Date(a.discoveryDate))

    planetasOrdenadosPorDescobrimento = idadePlanetas.map((planeta) => {
        return `Nome: ${planeta.englishName}, Data de Descoberta: ${planeta.discoveryDate}`
    })
}

// 11. Encontrando Astro: Faça uma função que recebe um nome, e retorna a distancia, a massa, gravidade e densidade 

function encontrarAstro(astro){

    astroEncontrado = corposCelestes.find((astro) => astro.englishName.toLowerCase() === nomeAstro.toLowerCase());

    if (astroEncontrado) {
        const { semimajorAxis, mass, gravity, density } = astroEncontrado;

        console.log(`Informações sobre ${astroEncontrado.englishName}:`);
        console.log(`- Distância média do Sol: ${semimajorAxis} UA`);
        console.log(`- Massa: ${mass.massValue} ${mass.massExponent} kg`);
        console.log(`- Gravidade: ${gravity} m/s²`);
        console.log(`- Densidade: ${density} g/cm³`);
    } else {
        console.log(`Astro com o nome '${nomeAstro}' não encontrado.`);
    }

}

// 12. Filtro de Temperatura: econtre os planetas que tem uma temperatura de 8 a 30 graus celsius. Cuidado que o AvgTemp está na escala Kelvin. Ordene-os do mais frio ao mais quente.


// 13. Separando Planetas. Faça uma função que retorna um objeto, separando todos os planetas pelo seu tipo. bodyType 


// 14. Ordenação Complexa: Use sort e slice para ordenar os planetas primeiro por tipo e depois por tamanho, pegando os 3 maiores de cada tipo. 


// 15. Encontrando planetas orbitados. Encontre todos os planetas que são orbitados por pelo menos um corpo celeste. Imprima na tela o nome do planeta e seus orbitadores. 


// 16. Média da Massa dos Planetas: Use o método reduce para calcular a média da massa de todos os planetas e imprimir o resultado. 



// 17. Calcule a distância entre Saturno e Plutão. Utilize o perihelion e o aphelion para calcular a menor distância possível entre os planetas 



// 18. Planetas com Luas: liste todos os planetas que têm uma ou mais luas. Imprima na tela o planeta, e quantas luas ele tem. 


// 19. O Desafio Final em Manipulação de Dados e Cálculos 



getBodies().then(() => {
    filtrarPlanetas()
    filtrarTerra()
    planetasSemLuas()
    listarNomesPlanetas()
    listarPlanetasOrdenados()
    listarPlanetasVirgula()
    somarMassas()
    verificarLuasEDensidade()
    ordemIdadePlanetas()
    encontrarAstro(prompt('Digite o nome do astro que deseja encontar'))

    console.log("Questão 1");
    console.log(corposCelestes);
    console.log("Questão 2");
    console.log(planetasFiltrados);
    console.log("Questão 3");
    console.log(terraFiltrada);
    console.log("Questão 4");
    console.log("Existe planeta sem lua? " + planetaSemLua);
    console.log("Questão 5");
    console.log(planetasNome);
    console.log("Questão 6");
    console.log(planetasNomeOrdenados);
    console.log("Questão 7");
    console.log(planetasNomeVirgula);
    console.log("Questão 8");
    console.log(`Massa total dos 5 menores planetas: ${somaMassasNotacaoCientifica}`)
    console.log("Questão 9");
    console.log(planetasComMaisDeDuasLuas);
    console.log("Questão 10");
    console.log(planetasOrdenadosPorDescobrimento);
    console.log("Questão 11");
    console.log(astroEncontrado);

}).catch((err) => {
    console.error("Erro", err);
}).finally(() => {
    console.log('Terminou');
});