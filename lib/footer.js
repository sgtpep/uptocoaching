module.exports = options => `
<div class="footer">
  <p>© ${new Date().getFullYear()} <a href="">Up to Coaching</a>, ${
  options.russian ? 'Ксения Романова' : 'Ksenia Romanova'
}</p>
</div>
<div class="message">
  <form class="feedback">
    <h2>${
      options.russian
        ? 'У вас есть вопросы? Напишите мне!'
        : 'Do you have any questions? Contact me!'
    }</h2>
    <a onclick="this.parentElement.parentElement.classList.remove('is-active')" title="${
      options.russian ? 'Закрыть' : 'Close'
    }">×</a>
    <input name="email" placeholder="${
      options.russian ? 'Емейл' : 'Email'
    }" type="email" required>
    <input name="name" placeholder="${
      options.russian ? 'Имя' : 'Name'
    }" required>
    <textarea name="message" placeholder="${
      options.russian ? 'Сообщение' : 'Message'
    }" required></textarea>
    <button class="button">${options.russian ? 'Отправить' : 'Send'}</button>
  </form>
  <a onclick="this.parentElement.classList.toggle('is-active')">
    <svg viewBox="0 0 19 17">
      <path d="M3.7 17.5v-4.8H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h14.6c1.1 0 2 .9 2 2v8.8c0 1.1-.9 2-2 2H9l-5.3 4.7zM2 1c-.6 0-1 .4-1 1v8.8c0 .5.4 1 1 1h2.8v3.5l3.8-3.5h8c.5 0 1-.4 1-1V2c0-.5-.4-1-1-1H2z"></path>
    </svg>
    <svg viewBox="0 0 23 23">
      <rect height="30" transform="translate(11.31, 11.31) rotate(-45) translate(-11.31, -11.31)" width="2" x="10.31" y="-3.69"></rect>
      <rect height="30" transform="translate(11.31, 11.31) rotate(-315) translate(-11.31, -11.31)" width="2" x="10.31" y="-3.69"></rect>
    </svg>
  </a>
</div>
<script>(function(element) { element.style.display = 'block' })(Array.prototype.slice.call(document.getElementsByTagName('script'), -1)[0].previousElementSibling)</script>
<script type="module" src="scripts/index.js"></script>
`;
