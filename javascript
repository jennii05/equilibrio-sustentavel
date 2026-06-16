document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os botões de perguntas da tela
    const questions = document.querySelectorAll('.quiz-question');

    questions.forEach(button => {
        button.addEventListener('click', () => {
            const currentItem = button.parentElement;
            const isActive = currentItem.classList.contains('active');

            // Fecha todas as perguntas antes de abrir a nova (opcional, deixa mais limpo)
            document.querySelectorAll('.quiz-item').forEach(item => {
                item.classList.remove('active');
            });

            // Se o item clicado não estava ativo, ele abre
            if (!isActive) {
                currentItem.classList.add('active');
            }
        });
    });
});
