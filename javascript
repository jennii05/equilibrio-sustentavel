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

        // Alerta caso insira algum valor inválido
        if (isNaN(area) || area <= 0) {
            alert('Por favor, digite um número válido de hectares! 🌾🧑‍🌾');
            return;
        }

        // Multiplicadores fictícios calculados por hectare para a simulação
        const calculoAgua = area * 15000;    // 15.000 Litros economizados por Hectare
        const calculoCarbono = area * 320;   // 320 Kg de CO2 retidos por Hectare
        const calculoAdubo = area * 95;      // 95 Kg de defensivos químicos evitados

        // Transfere os valores formatados com pontos de milhar para as caixas
        resAgua.textContent = calculoAgua.toLocaleString('pt-BR');
        resCarbono.textContent = calculoCarbono.toLocaleString('pt-BR');
        resAdubo.textContent = calculoAdubo.toLocaleString('pt-BR');

        // Torna a caixa de resultados visível aplicando animação
        resultBox.classList.remove('hide');
    });

    // === 2. LÓGICA DAS PERGUNTAS EXPANSÍVEIS (ACCORDION) ===
    const accordionBtns = document.querySelectorAll('.accordion-btn');

    accordionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const currentItem = btn.parentElement;
            const isOpen = currentItem.classList.contains('open');

            // Fecha todas as abas abertas para manter o site elegante e limpo
            document.querySelectorAll('.accordion-item').forEach(item => {
                item.classList.remove('open');
            });

            // Se o bloco clicado estava fechado, ele abre
            if (!isOpen) {
                currentItem.classList.add('open');
            }
        });
    });
});
