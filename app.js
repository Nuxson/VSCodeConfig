document.querySelectorAll(".copy-button").forEach((button) => {
	button.addEventListener("click", function () {
		const text = this.getAttribute("data-text");

		// Создаём или находим уведомление
		let notification = document.querySelector(".copy-notification");
		if (!notification) {
			notification = document.createElement("div");
			notification.className = "copy-notification";
			notification.textContent = "Скопировано";
			document.body.appendChild(notification);
		}

		// Показываем уведомление (выезжает снизу)
		setTimeout(() => {
			notification.style.bottom = "20px";
		}, 10);

		// Убираем через 2 секунды (уезжает обратно)
		setTimeout(() => {
			notification.style.bottom = "-50px";

			// Удаляем после завершения анимации
			setTimeout(() => {
				notification.remove();
			}, 400);
		}, 2000);

		// Копируем текст
		navigator.clipboard
			.writeText(text)
			.catch((err) => console.error("Ошибка:", err));
	});
});

const glow = document.getElementById("glow-follow");
const wrapper = document.querySelector(".wrapper");
const buttons = document.querySelectorAll(".copy-button");
const headings = document.querySelectorAll("h4");

let glowHiddenByButton = false;

wrapper.addEventListener("mousemove", (e) => {
	if (glowHiddenByButton) return;

	const rect = wrapper.getBoundingClientRect();
	const x = e.clientX - rect.left;
	const y = e.clientY - rect.top;

	glow.style.left = `${x - 75}px`;
	glow.style.top = `${y - 75}px`;
});

wrapper.addEventListener("mouseenter", () => {
	if (!glowHiddenByButton) {
		glow.style.opacity = "1";
		glow.style.transform = "scale(1)";
	}
});

wrapper.addEventListener("mouseleave", () => {
	if (!glowHiddenByButton) {
		glow.style.opacity = "0";
		glow.style.transform = "scale(0.6)";
	}
});

// Наведение на кнопку
buttons.forEach((btn) => {
	btn.addEventListener("mouseenter", () => {
		glowHiddenByButton = true;
		glow.style.opacity = "0";
		glow.style.transform = "scale(0.4)";
		btn.classList.add("glow-absorbed");
	});

	btn.addEventListener("mouseleave", () => {
		glowHiddenByButton = false;
		glow.style.opacity = "1";
		glow.style.transform = "scale(1)";
		btn.classList.remove("glow-absorbed");
	});
});

function copyJSON() {
	const code = document.getElementById("json-block").innerText;
	navigator.clipboard.writeText(code).then(() => {
		const btn = document.querySelector(".copy-json");
		btn.textContent = "Скопировано!";
		setTimeout(() => (btn.textContent = "Скопировать"), 1500);
	});
}

// const glow = document.getElementById("glow-follow");
// const wrapper = document.querySelector(".wrapper");

// wrapper.addEventListener("mousemove", (e) => {
// 	const rect = wrapper.getBoundingClientRect();
// 	const x = e.clientX - rect.left;
// 	const y = e.clientY - rect.top;

// 	glow.style.left = `${x - 75}px`;
// 	glow.style.top = `${y - 75}px`;
// });

// wrapper.addEventListener("mouseenter", () => {
// 	glow.style.opacity = "1";
// 	glow.style.transform = "scale(1)";
// });

// wrapper.addEventListener("mouseleave", () => {
// 	glow.style.opacity = "0";
// 	glow.style.transform = "scale(0.6)";
// });
