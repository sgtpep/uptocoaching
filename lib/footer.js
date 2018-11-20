module.exports = options => `
<div class="footer">
  <p>© ${new Date().getFullYear()} <a href="">Up to Coaching</a>, ${
  options.russian ? 'Ксения Романова' : 'Ksenia Romanova'
}</p>
</div>
<script type="module" src="scripts/index.js"></script>
<script src="//static.getclicky.com/js"></script>
<script>try { clicky.init(101153150); } catch (error) {}</script>
<noscript><img src="//in.getclicky.com/101153150ns.gif" height="1" width="1"></noscript>
`;
