module.exports = options => `
<div class="footer">
  <div class="container">© ${new Date().getFullYear()} <a href>Up to Coaching</a>, ${
  options.russian ? 'Ксения Романова' : 'Ksenia Romanova'
}</div>
</div>
<script src="scripts/index.js" type="module"></script>
`;
