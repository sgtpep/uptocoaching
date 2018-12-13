module.exports = options => `
<div class="footer">
  <p>© ${new Date().getFullYear()} <a href>${options.name}</a>, ${
  options.russian ? 'Ксения Романова' : 'Ksenia Romanova'
}</div>
<script src="scripts/index.js" type="module"></script>
`;
