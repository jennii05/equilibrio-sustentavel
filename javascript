document.addEventListener('DOMContentLoaded', () => {
    // Seleção de Elementos da Interface
    const toggleSolar = document.getElementById('toggle-solar');
    const toggleDrone = document.getElementById('toggle-drone');
    const toggleReflorest = document.getElementById('toggle-reflorest');
    
    const ecoProgress = document.getElementById('eco-progress');
    const ecoScoreText = document.getElementById('eco-score-text');
    const moneySaved = document.getElementById('money-saved');
    
    const waterSavedEl = document.getElementById('water-saved');
    const carbonCreditsEl = document.getElementById('carbon-credits');
    const themeToggle = document.getElementById('theme-toggle');

    // Função Principal de Atualização do Simulador
    function updateSimulation() {
        let ecoScore = 10; // Pontuação ecológica base da fazenda
        let mensalEconomia = 0;
        let aguaEconomizada = 5000;
        let créditosCarbono = 12.4;

        // Regra de impacto para Painéis Solares
        if (toggleSolar.checked) {
            ecoScore += 30;
            mensalEconomia += 850;
            créditosCarbono += 15.2;
        }

        // Regra de impacto para Drones com IA
        if (toggleDrone.checked) {
            ecoScore += 25;
            mensalEconomia += 400;
            aguaEconomizada += 10400;
        }

        // Regra de impacto para Reflorestamento
        if (toggleReflorest.checked) {
            ecoScore += 35;
            créditosCarbono += 15.2;
            mensalEconomia -= 150; // Representa um investimento contínuo em manejo
        }

        // Ajuste caso a economia fique negativa (mínimo zero)
        if (mensalEconomia < 0) mensalEconomia = 0;

        // Atualização dos componentes visuais com animações fluidas
        ecoProgress.style.width = `${ecoScore}%`;
        ecoScoreText.textContent = `${ecoScore}% Ecológico`;
        moneySaved.textContent = `R$ ${mensalEconomia.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
        
        waterSavedEl.textContent = `${aguaEconomizada.toLocaleString('pt-BR')} Litros`;
        carbonCreditsEl.textContent = `${créditosCarbono.toFixed(1)} CO₂e`;
    }

    // Ouvintes de Evento (Event Listeners) nos Botões
    toggleSolar.addEventListener('change', updateSimulation);
    toggleDrone.addEventListener('change', updateSimulation);
    toggleReflorest.addEventListener('change', updateSimulation);

    // Lógica Alternadora do Modo Escuro (Dark Mode)
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i> Alternar Tema';
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i> Alternar Tema';
            localStorage.setItem('theme', 'dark');
        }
    });

    // Manter a preferência de tema do usuário ao recarregar a página
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i> Alternar Tema';
    }

    // Inicializa os dados na primeira renderização da tela
    updateSimulation();
});
