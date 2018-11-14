module.exports = options => `
<div class="footer">
  <div class="container">© ${new Date().getFullYear()} <a href="${
  options.root
}">Up to Coaching</a>, ${
  options.russian ? 'Ксения Романова' : 'Ksenia Romanova'
}</div>
</div>
<script type="module" src="scripts/index.js"></script>
`;
