module.exports = options => `
<footer class="footer">
  <p>© ${new Date().getFullYear()} <a href>${options.name}</a>, ${
  options.russian ? 'Ксения Романова' : 'Ksenia Romanova'
}</footer>
<script src="scripts/index.js" type="module"></script>
`;
