/**
 * GUARD DE ACESSO — Squad da Vitória
 * ====================================
 * Incluir como PRIMEIRO script em todas as páginas de estudo.
 * Bloqueia qualquer acesso direto a rota_estudos, teoria_360 e treinamento_360
 * sem o flag de pagamento confirmado.
 *
 * Flag de liberação: localStorage 'recruta_pago' = '1'
 * Setado por: /app/acesso_liberado.html (redirect pós-Kiwify)
 */
(function () {
    const PAGO = localStorage.getItem('recruta_pago') === '1';

    // Permite bypass via parâmetro ?dev=1 apenas em localhost (testes locais)
    const isDev = window.location.hostname === 'localhost' &&
                  new URLSearchParams(window.location.search).get('dev') === '1';

    if (!PAGO && !isDev) {
        // Salva a URL de destino para retornar após o pagamento
        sessionStorage.setItem('intencao_url', window.location.pathname);
        // Redireciona para o início do funil
        window.location.replace('index.html');
    }
})();
