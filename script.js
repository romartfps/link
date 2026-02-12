const noMessages = ["are you sure? 🥺", "please langg 😭", "yes nana ohh 🥰"];
        let noIndex = 0;

        const question = document.getElementById("question");
        const yesBtn = document.getElementById("yesBtn");
        const noBtn = document.getElementById("noBtn");
        const openLetterBtn = document.getElementById("openLetterBtn");
        const letter = document.getElementById("letter");

        // Make No button run away
        noBtn.addEventListener("mouseover", function () {
            const x = Math.random() * (window.innerWidth - 100);
            const y = Math.random() * (window.innerHeight - 50);
            noBtn.style.left = x + "px";
            noBtn.style.top = y + "px";
        });

        noBtn.addEventListener("click", function () {
            question.textContent = noMessages[noIndex];
            noIndex = (noIndex + 1) % noMessages.length;
        });

        yesBtn.addEventListener("click", function () {
            question.textContent = "I know you'll say yes hehe🥰❤️";
            yesBtn.style.display = "none";
            noBtn.style.display = "none";
            openLetterBtn.style.display = "inline-block";
        });

        openLetterBtn.addEventListener("click", function () {
            letter.style.display = "block";
            openLetterBtn.style.display = "none";
        });

        // Floating hearts generator
        function createHeart() {
            const heart = document.createElement("div");
            heart.classList.add("heart");
            heart.innerHTML = "💖";
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.fontSize = Math.random() * 20 + 15 + "px";
            heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
            document.body.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 6000);
        }

        setInterval(createHeart, 300);
