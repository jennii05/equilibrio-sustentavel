document.addEventListener('DOMContentLoaded', () => {
    // Captura todas as perguntas da seção faq
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const currentItem = question.parentElement;
            const isActive = currentItem.classList.contains('active');

            // Linha opcional: Fecha qualquer outra aba aberta ao clicar em uma nova
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });

            // Se o item clicado não estava aberto, ele abre agora
            if (!isActive) {
                currentItem.classList.add('active');
            }
        });
    });
});
