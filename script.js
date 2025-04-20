const chatBox = document.getElementById("chat-box");
    const conversation = [
      { sender: 'Nix', text: "Hey Tarun! What does friendship mean to you?" },
      { sender: 'Tarun', text: "Hey Nix! Friendship is like a home—warm and safe." },
      { sender: 'Nix', text: "Wow, that’s deep. I think it's all about loyalty and fun too." },
      { sender: 'Tarun', text: "Absolutely! And the laughs we’ve shared make it even better." },
      { sender: 'Nix', text: "Remember our first Chats? Still one of my best memories." },
      { sender: 'Tarun', text: "Same here! Those moments stay with you forever." },
      { sender: 'Nix', text: "Glad we’ve got a friendship like this. Cheers to more memories!" },
      { sender: 'Tarun', text: "Cheers, bro! Always got your back." }
    ];
    let convoIndex = 0;
    function showNextAutoMessage() {
      if (convoIndex < conversation.length) {
        const msg = conversation[convoIndex];
        const div = document.createElement('div');
        div.className = `message ${msg.sender.toLowerCase()}`;
        div.textContent = `${msg.sender}: ${msg.text}`;
        chatBox.appendChild(div);
        chatBox.scrollTop = chatBox.scrollHeight;
        convoIndex++;
        setTimeout(showNextAutoMessage, 2500);
      }
    }
    showNextAutoMessage();
    function sendMessage() {
      const input = document.getElementById("message-input");
      const user = document.getElementById("user-select").value;
      const msg = input.value.trim();
      if (!msg) return;
      const div = document.createElement("div");
      div.className = `message ${user.toLowerCase()}`;
      div.textContent = `${user}: ${msg}`;
      const timer = document.createElement("span");
      timer.className = "timer";
      let timeLeft = 30;
      timer.textContent =  `${timeLeft}s`;
      div.appendChild(timer);
      chatBox.appendChild(div);
      input.value = "";
      const interval = setInterval(() => {
        timeLeft--;
        timer.textContent = `⏳ ${timeLeft}s`;
        if (timeLeft <= 0) {
          clearInterval(interval);
          div.remove();
        }
      }, 1000);
      chatBox.scrollTop = chatBox.scrollHeight;
    }
    function createHeart() {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = (Math.random() * 3 + 4) + "s";
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 6000);
    }
    setInterval(createHeart, 500);
    let seconds = 0;
    setInterval(() => {
      seconds++;
      const m = String(Math.floor(seconds / 60)).padStart(2, '0');
      const s = String(seconds % 60).padStart(2, '0');
      document.getElementById("main-timer").textContent = `${m}:${s}`;
    }, 1000);
    function toggleDark() {
      document.body.classList.toggle("dark");
    }
