// fetch('pagina1.html')
// .then(resposta=>{
//     if(resposta.status !== 200) throw new Error('ERRO 404 NOSSO');
//     return resposta.text();
// })
// .then(html=>console.log(html))
// .catch(e=>console.log(e));

// const request = obj => {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open(obj.method, obj.url, true);
//         xhr.send(null);

//         xhr.addEventListener('load', () => {
//             if (xhr.status >= 200 && xhr.status < 300) {
//                 resolve(xhr.responseText);
//             } else {
//                 reject(xhr.statusText);
//             }
//         });
//     });
// }

document.addEventListener('click', (event) => {
    const element = event.target;
    const tag = element.tagName.toLowerCase();

    if (tag === 'a') {
        event.preventDefault();
        carregaPagina(element);
    }
});

async function carregaPagina(element) {
    const href = element.getAttribute('href');

    const response = await fetch(href);
    try {
        if (response.status !== 200) throw new Error('Erro 404');
        const html = await response.text()
        carregaResultado(html);
    } catch (error) {
        console.log(error);
    }
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}