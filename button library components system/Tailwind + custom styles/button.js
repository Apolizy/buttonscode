// 💧 Ripple Effect
export function enableRipple() {
  document.querySelectorAll('.btn-ripple').forEach(btn => {
    btn.addEventListener('click', function (e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      ripple.style.left = `${e.clientX - rect.left}px`;
      ripple.style.top = `${e.clientY - rect.top}px`;
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });
}

// 🟢 Toggle Button
export function enableToggles() {
  document.querySelectorAll('[data-toggle="true"]').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('btn-toggle-active');
      btn.textContent = btn.classList.contains('btn-toggle-active')
        ? 'Active Mode'
        : 'Toggle Mode';
    });
  });
}

// 🧠 Initialize all effects easily
export function initButtons() {
  enableRipple();
  enableToggles();
}