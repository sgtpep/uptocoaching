module.exports = options => `
<div class="footer">
  <div>© ${new Date().getFullYear()} <a href="">Up to Coaching</a>, ${
  options.russian ? 'Ксения Романова' : 'Ksenia Romanova'
}</div>
</div>
<script type="module" src="scripts/index.js"></script>
`;
