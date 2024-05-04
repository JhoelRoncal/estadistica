function showNextQuestion(currentQuestion) {
    var current = document.getElementById('question' + currentQuestion);
    var next = document.getElementById('question' + (currentQuestion + 1));
    if (next) {
        current.classList.remove('active');
        current.classList.add('hidden');
        next.classList.remove('hidden');
        next.classList.add('active');
    } else {
        // No hay más preguntas, mostrar botón de enviar
        current.classList.remove('active');
        current.classList.add('hidden');
        document.getElementById('submitBtn').classList.remove('hidden');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('question1').classList.add('active');
    document.getElementById('question1').classList.remove('hidden');
});