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
let planetasComMaisDeDuasLuas = []
let planetasComDensidadeMaior = []
let planetasOrdenadosPorDescobrimento = []
let dadosCorpoCeleste = null
let filtradoTemperatura = []
let planetasFiltradosBodyType = []
let ordenacaoComplexa = [] //14
let planetasComLua = [] // 15
let planetasComLuaTela = null // 15
let mediaMassasPlanetas = 0 // 16
let saturno = []//17
let plutao = []//17
let distanciaMinima = [] //17


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
    planetasFiltrados.sort(function(a, b){return a.meanRadius - b.meanRadius})
    cincoMenoresPlanetas = planetasFiltrados.slice(0, 5);

    massaTotal = cincoMenoresPlanetas.reduce((total, planeta) => {
        return total + planeta.mass.massValue * Math.pow(10,planeta.mass.massExponent);
    }, 0);
}

// 9. Luas e Desidade: verifique se algum planeta tem mais de 2 luas e, em caso afirmativo, listar todos os planetas entre eles que tem densidade maior que 1. 

function verificarLuasEDensidade() {
    planetasComMaisDeDuasLuas = planetasFiltrados.filter((planeta) => planeta.moons !== null && planeta.moons.length > 2);

    planetasComDensidadeMaior = planetasComMaisDeDuasLuas.filter((planeta) => planeta.density > 1);
}

// 10. Ordem de descobrimento: Encontre e imprima na tela todos nomes dos planetas e suas respectivas datas de descoberta, ordenando-os do mais recente ao mais antigo. 

function ordemIdadePlanetas() {

    let idadePlanetas = planetasFiltrados.sort(function(a, b){return a.discoveryDate - b.discoveryDate})

    planetasOrdenadosPorDescobrimento = idadePlanetas.map((planeta) => {
        return `Nome: ${planeta.englishName}, Data de Descoberta: ${(planeta.discoveryDate)}`
    })
}

// 11. Encontrando Astro: Faça uma função que recebe um nome, e retorna a distancia, a massa, gravidade e densidade 

function encontrarAstro(){

    const astro = "Moon"

    function verificaAstro (astro, corposCelestes) {
        return corposCelestes.some(corpo => corpo.englishName === astro)
    }
    let astroExiste = verificaAstro(astro, corposCelestes) 
    if (astroExiste) {
        dadosCorpoCeleste = "Entrei no IF"
        const filtradoEnglishName = corposCelestes.findIndex(corpo => corpo.englishName === astro)
        dadosCorpoCeleste = 
        `
        Nome: ${corposCelestes[filtradoEnglishName].englishName}\n
        Distância: ${corposCelestes[filtradoEnglishName].longAscNode}\n
        Massa: ${corposCelestes[filtradoEnglishName].mass.massValue}*10^${corposCelestes[filtradoEnglishName].mass.massExponent}\n
        Gravidade: ${corposCelestes[filtradoEnglishName].gravity}\n
        Densidade: ${corposCelestes[filtradoEnglishName].density}
        `
    } else {
        dadosCorpoCeleste = "Entrei no else"
    }
}

// 12. Filtro de Temperatura: econtre os planetas que tem uma temperatura de 8 a 30 graus celsius. Cuidado que o AvgTemp está na escala Kelvin. Ordene-os do mais frio ao mais quente.

function filtroTemperatura() {
    const filtradoPorTemperatura = planetasFiltrados.filter(planeta => planeta.avgTemp >= 281.15 && planeta.avgTemp <= 303.15)
    filtradoTemperatura = filtradoPorTemperatura.sort(function(a, b){return a.avgTemp - b.avgTemp})
}

// 13. Separando Planetas. Faça uma função que retorna um objeto, separando todos os planetas pelo seu tipo. bodyType

function filtrarPlanetasPorBodyType() {
    const filtradoPlanetaBodyType = corposCelestes.filter(planeta => planeta.bodyType === "Planet")
    planetasFiltradosBodyType = filtradoPlanetaBodyType
}

// 14. Ordenação Complexa: Use sort e slice para ordenar os planetas primeiro por tipo e depois por tamanho, pegando os 3 maiores de cada tipo.



function sortAndFilterPlanets() {
    planetasFiltrados.sort((a, b) => {
    // Primeiro, ordenar por tipo
    const comparacaoType = a.bodyType.localeCompare(b.bodyType);
    if (comparacaoType !== 0) {
      return comparacaoType;
    }
    return b.meanRadius - a.meanRadius;
  });

  const result = {};
   planetasFiltrados.forEach((planet) => {
    const planetType = planet.bodyType;
    if (!result[planetType]) {
      result[planetType] = [];
    }

    if (result[planetType].length < 3) {
        result[planetType].push({
        name: planet.englishName,
        radius: planet.meanRadius,
      });
    }
  });

  ordenacaoComplexa = result;
}


// 15. Encontrando planetas orbitados. Encontre todos os planetas que são orbitados por pelo menos um corpo celeste. Imprima na tela o nome do planeta e seus orbitadores.

function encontrarLuas() {
    const filtradoPlanetaComLua = planetasFiltrados.filter(planeta => planeta.moons !== null)
    planetasComLua = filtradoPlanetaComLua

    document.write("Questão 15<br>")
filtradoPlanetaComLua.forEach(planeta => {document.write(`Planeta: ${planeta.englishName}<br>${planeta.moons.forEach(moon => {document.write(`Lua: ${moon.moon}<br>`)})}`)
    });
}

// 16. Média da Massa dos Planetas: Use o método reduce para calcular a média da massa de todos os planetas e imprimir o resultado.

function mediaMassas() {
    mediaMassasPlanetas = (planetasFiltrados.reduce((total, planeta) => {
        return total + planeta.mass.massValue * Math.pow(10,planeta.mass.massExponent);
    }, 0)) / planetasFiltrados.length;
}

// 17. Calcule a distância entre Saturno e Plutão. Utilize o perihelion e o aphelion para calcular a menor distância possível entre os planetas 

function distanciaSaturnoPlutao () {

  // Encontrar Saturno e Plutão no array de corpos celestes
  saturno = corposCelestes.find((corpo) => corpo.englishName === "Saturn");
  plutao = corposCelestes.find((corpo) => corpo.englishName === "Pluto");


  // Verificar se ambos os planetas foram encontrados no array
  if (saturno && plutao) {
    //pegar as distâncias do periélio e afélio para ambos os planetas
    const periélioSaturno = saturno.semimajorAxis - saturno.aphelion;
    const periélioPlutao = plutao.semimajorAxis - plutao.aphelion;

    // Calcular a distância mínima entre Saturno e Plutão
    distanciaMinima = periélioSaturno + periélioPlutao;
    return distanciaMinima;
  } 
}



// 18. Planetas com Luas: liste todos os planetas que têm uma ou mais luas. Imprima na tela o planeta, e quantas luas ele tem.

function contarLuas() {

    document.write("Questão 18<br>")
    planetasComLua.forEach(planeta => {document.write(`${planeta.englishName} tem ${planeta.moons.length} luas<br>`)
    });

}


// 19. O Desafio Final em Manipulação de Dados e Cálculos 
// Análise Estatística do Sistema Solar: Utilize os métodos para realizar uma análise estatística completa dos planetas do sistema solar. 
// - Crie um novo array que contém apenas planetas (excluindo luas, asteroides, etc.). 
// - Crie um novo array que contém apenas as massas dos planetas. - Ordene o array de massas em ordem crescente. 
// - Calcule a mediana das massas dos planetas. A mediana é o valor do meio em um conjunto de dados ordenado. Se o conjunto tem um número ímpar de observações, a mediana é o valor do meio. Se o conjunto tem um número par de observações, a mediana é a média dos dois valores do meio. 
// - Encontrar Planeta Mais Próximo da Mediana: encontre o planeta cuja massa é mais próxima da mediana calculada.




getBodies().then(() => {
    document.write("<h1>Exercício API Planetas</h1>")
    document.write("<h2>Abra o console (F12) para ver todas as respostas</h2>")
    filtrarPlanetas()
    filtrarTerra()
    planetasSemLuas()
    listarNomesPlanetas()
    listarPlanetasOrdenados()
    listarPlanetasVirgula()
    somarMassas()
    verificarLuasEDensidade()
    ordemIdadePlanetas()
    encontrarAstro()
    filtroTemperatura()
    filtrarPlanetasPorBodyType()
    sortAndFilterPlanets()
    encontrarLuas() //15
    mediaMassas() //16
    distanciaSaturnoPlutao(); //17

    contarLuas() //18

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
    console.log(`Massa total dos 5 menores planetas: ${massaTotal}`);
    console.log("Questão 9");
    console.log(planetasComMaisDeDuasLuas);
    console.log(planetasComDensidadeMaior);
    console.log("Questão 10");
    console.log(planetasOrdenadosPorDescobrimento);
    console.log("Questão 11");
    console.log(dadosCorpoCeleste);
    console.log("Questão 12");
    console.log(filtradoTemperatura);
    console.log("Questão 13");
    console.log(planetasFiltradosBodyType);
    console.log("Questão 14");
    console.log(ordenacaoComplexa);
    console.log("Questão 15 - Na tela, conforme solicitado no exercício e aqui no console");
    console.log(planetasComLua);
    console.log("Questão 16");
    console.log(`Média das massas de todos os planetas: ${mediaMassasPlanetas}`);
    console.log("Questão 17");
    console.log('Saturno:', saturno);
    console.log('Plutão:', plutao);
    console.log(`Distância mínima entre Saturno e Plutão: ${distanciaMinima} unidades.`);
    ;
    

    console.log("Questão 18 - Na tela, conforme solicitado no exercício");
    
}).catch((err) => {
    console.error("Erro", err);
}).finally(() => {
    console.log('Terminou');
});