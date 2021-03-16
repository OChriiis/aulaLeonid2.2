'mode strict'

const links = {
    "nome": "REALZÃO DA MASSA",
    "img": "./imagens/realmadrid.png",
    "links": [
        {
            "titulo": "SITE DO CLUBE",
            "url": "https://www.realmadrid.com/pt"
        },
        {
            "titulo": "youtube",
            "url": "https://www.youtube.com/user/realmadridcf"
        },
        {
            "titulo": "linkedin",
            "url": "https://www.linkedin.com/company/realmadrid"
        },
        {
            "titulo": "twitter",
            "url": "https://twitter.com/realmadrid"
        }
    ]
}

const realmadrid = document.getElementById('realmadrid');
realmadrid.src = links.img;

const titulo = document.getElementById('titulo');
titulo.textContent = links.nome;

const endereco = document.getElementsByTagName('a')[0];
endereco.textContent = links.links[0].titulo;
endereco.href = links.links [0].url;

const endereco1 = document.getElementsByTagName('a')[1];
endereco1.textContent = links.links[1].titulo;
endereco1.href = links.links [1].url;

const endereco2 = document.getElementsByTagName('a')[2];
endereco2.textContent = links.links[2].titulo;
endereco2.href = links.links [2].url;

const endereco3 = document.getElementsByTagName('a')[3];
endereco3.textContent = links.links[3].titulo;
endereco3.href = links.links [3].url;

