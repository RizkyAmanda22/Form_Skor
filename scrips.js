document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form

    const form = event.target;
    const q1 = parseInt(form.q1.value);
    const q2 = parseInt(form.q2.value);
    const q3 = parseInt(form.q3.value);
    
    const totalScore = q1 + q2 + q3;
    let feedback = '';

    if (totalScore <= 3) {
        feedback = 'Skor Anda rendah. Cobalah untuk meningkatkan pemahaman!';
    } else if (totalScore <= 6) {
        feedback = 'Skor Anda sedang. Teruslah berlatih!';
    } else {
        feedback = 'Skor Anda tinggi. Bagus sekali!';
    }

    document.getElementById('result').innerHTML = `<h4>Total Skor: ${totalScore}</h4><p>${feedback}</p>`;
});
