function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    const amPm = hours >= 12 ? 'PM' : 'AM';

    // Convert 24-hour time to 12-hour time
    hours = hours % 12 || 12;

    // Format time with leading zeros
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');

    // Update the DOM elements with animations
    flipCard('hours', formattedHours);
    flipCard('minutes', formattedMinutes);
    flipCard('seconds', formattedSeconds);
    document.getElementById('ampm').textContent = amPm;
}

function flipCard(id, newValue) {
    const card = document.getElementById(id);
    const currentValue = card.textContent;

    if (currentValue !== newValue) {
        card.textContent = newValue;
        card.classList.add('flip');

        setTimeout(() => {
            card.classList.remove('flip');
        }, 600);
    }
}

// Initialize and update the clock every second
setInterval(updateClock, 1000);
updateClock();
