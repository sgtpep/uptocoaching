module.exports = options => `
</main>
<footer class="footer">
  <div>© 2019-${new Date().getFullYear()} <a href>${options.name}</a>, ${
  options.russian ? 'Ксения Романова' : 'Ksenia Romanova'
}</div>
</footer>
<script src="scripts/index.js" type="module"></script>
`;
