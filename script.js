document.getElementById('action-btn').addEventListener('click', function() {
    const responseText = document.getElementById('response-text');
    if (responseText.classList.contains('hidden')) {
        responseText.classList.remove('hidden');
        this.textContent = 'Look Down!';
    } else {
        responseText.classList.add('hidden');
        this.textContent = 'Click Me';
    }
});