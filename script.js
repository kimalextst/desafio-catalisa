const imagem1 = document.querySelector('#img1');
const imagem2 = document.querySelector('#img2');
const imagem3 = document.querySelector('#img3');
const botao = document.querySelector('button');
const nomeDoPersonagem1 = document.querySelector('#nome1');
const especie1 = document.querySelector('#especie1');
const condicao1 = document.querySelector('#condicao1');
const nomeDoPersonagem2 = document.querySelector('#nome2');
const especie2 = document.querySelector('#especie2');
const condicao2 = document.querySelector('#condicao2');
const nomeDoPersonagem3 = document.querySelector('#nome3');
const especie3 = document.querySelector('#especie3');
const condicao3 = document.querySelector('#condicao3');

gerarValorAletorio = () => {
    return Math.floor(Math.random() * 671);
}

gerarValorAletorio2 = () => {
    return Math.floor(Math.random() * 671);
}

gerarValorAletorio3 = () => {
    return Math.floor(Math.random() * 671);
}

pegarPersonagem = () => {
    let numeroAleatorio = gerarValorAletorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem1.src = data.image;
        imagem1.alt = data.name;
        nomeDoPersonagem1.innerHTML = data.name;
        especie1.innerHTML = data.species;
        condicao1.innerHTML = data.status;
    });
}

pegarPersonagem2 = () => {
    let numeroAleatorio2 = gerarValorAletorio2();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio2}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem2.src = data.image;
        imagem2.alt = data.name;
        nomeDoPersonagem2.innerHTML = data.name;
        especie2.innerHTML = data.species;
        condicao2.innerHTML = data.status;
    });
}

pegarPersonagem3 = () => {
    let numeroAleatorio3 = gerarValorAletorio3();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio3}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem3.src = data.image;
        imagem3.alt = data.name;
        nomeDoPersonagem3.innerHTML = data.name;
        especie3.innerHTML = data.species;
        condicao3.innerHTML = data.status;
    });
}

usarBotao = () => {
    pegarPersonagem();
    pegarPersonagem2();
    pegarPersonagem3();
}

botao.onclick = usarBotao;