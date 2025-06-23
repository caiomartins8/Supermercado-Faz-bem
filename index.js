 function toggleFavorito(el) {
            el.classList.toggle("favoritado");
        }




let totalItens = 0;
let totalValor = 0;

const botoesAdicionar = document.querySelectorAll('.add-to-cart');
botoesAdicionar.forEach(botao => {
        botao.addEventListener('click', () => {
            const preco = parseFloat(botao.getAttribute('data-price'));

            totalItens++;
            totalValor += preco;

            document.querySelector('#bag-market p:nth-child(1)').textContent = `R$ ${totalValor.toFixed(2).replace('.', ',')}`;
            document.querySelector('#bag-market p:nth-child(2)').textContent = `${totalItens} item${totalItens > 1 ? 's' : ''}`;
        });
    });