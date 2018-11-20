module.exports = options => `
<div class="footer">
  <p>© ${new Date().getFullYear()} <a href="">Up to Coaching</a>, ${
  options.russian ? 'Ксения Романова' : 'Ksenia Romanova'
}</p>
</div>
<script type="module" src="scripts/index.js"></script>
<script>var clicky_custom = { cookies_disable: 1 };</script>
<script src="//static.getclicky.com/js"></script>
<script>try { clicky.init(101153150); } catch (error) {}</script>
`;
