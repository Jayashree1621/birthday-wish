    function getNameFromURL() {
      const params = new URLSearchParams(window.location.search);
      return params.get('name');
    }

    // Show birthday message
    const name = getNameFromURL();
    const msgElement = document.getElementById('birthdayMsg');
    const wishText = document.getElementById('wishText');

    if (name) {
      msgElement.textContent = `🎉 Happy Birthday, ${decodeURIComponent(name)}! 🎂`;
      wishText.textContent = `Wishing you a day full of love and joy!`;
    } else {
      wishText.textContent = `Enter a name to create a birthday wish link 🎁`;
    }

    // Generate shareable link
    function generateLink() {
      const inputName = document.getElementById('nameInput').value;
      const link = `${window.location.origin}${window.location.pathname}?name=${encodeURIComponent(inputName)}`;
      document.getElementById('generatedLink').innerHTML = `<strong>Share this:</strong><br><a href="${link}">${link}</a>`;
    }

    // Generate balloons
    const colors = ['red', 'blue', 'yellow', 'green', 'purple', 'pink'];
    const balloonContainer = document.getElementById('balloon-container');

    for (let i = 0; i < 30; i++) {
      const balloon = document.createElement('div');
      balloon.classList.add('balloon');
      balloon.style.left = `${Math.random() * 100}%`;
      balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      balloon.style.animationDuration = `${5 + Math.random() * 5}s`;
      balloonContainer.appendChild(balloon);
    }