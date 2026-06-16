document.addEventListener('DOMContentLoaded', () => {
    
    // === 1. LÓGICA DA CALCULADORA DO AGRO ===
    const areaInput = document.getElementById('area-input');
    const calcBtn = document.getElementById('calc-btn');
    const resultBox = document.getElementById('result-box');
    
    const resAgua = document.getElementById('res-agua');
    const resCarbono = document.getElementById('res-carbono');
    const resAdubo = document.getElementById('res-adubo');

    calcBtn.addEventListener('click', () => {
        const area = parseFloat(areaInput.value);

        if (isNaN(area) || area <= 0) {
            alert('Por favor, digite um número válido de hectares! 🌾🧑‍🌾');
            return;
        }

        const calculoAgua = area * 15000;    
        const calculoCarbono = area * 320;   
        const calculoAdubo = area * 95;      

        resAgua.textContent = calculoAgua.toLocaleString('pt-BR');
        resCarbono.textContent = calculoCarbono.toLocaleString('pt-BR');
        resAdubo.textContent = calculoAdubo.toLocaleString('pt-BR');

        resultBox.classList.remove('hide');
    });

    // === 2. LÓGICA CORRIGIDA DAS PERGUNTAS EXPANSÍVEIS (ACCORDION) ===
    const accordionBtns = document.querySelectorAll('.accordion-btn');

    accordionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const currentItem = btn.parentElement;
            const isOpen = currentItem.classList.contains('open');

            // 1. Fecha todas as outras abas para o site ficar organizado
            document.querySelectorAll('.accordion-item').forEach(item => {
                item.classList.remove('open');
            });

            // 2. Se a aba clicada estava fechada, adiciona a classe 'open' para abrir
            if (!isOpen) {
                currentItem.classList.add('open');
            }
        });
    });
});
