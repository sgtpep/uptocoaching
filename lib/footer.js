module.exports = options => `
<div class="footer">
  <p>© ${new Date().getFullYear()} <a href="">Up to Coaching</a>, ${
  options.russian ? 'Ксения Романова' : 'Ksenia Romanova'
}</p>
</div>
<script type="module" src="scripts/index.js"></script>
<img src="//in.getclicky.com/101153150ns.gif" height="1" style="margin-top: -1.5em; position: absolute" width="1">
`;
