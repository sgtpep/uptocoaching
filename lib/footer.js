module.exports = options => `
<div class="footer">
  <p>© ${new Date().getFullYear()} <a href="">Up to Coaching</a>, ${
  options.russian ? 'Ксения Романова' : 'Ksenia Romanova'
}</p>
</div>
<script type="module" src="scripts/index.js"></script>
`;
