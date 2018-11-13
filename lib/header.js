module.exports = (directory, meta) => {
  const russian = /^\.\/ru($|\/)/.test(directory);
  return `
<title>
  ${meta.title ? `${meta.title} — ` : ''}Up to Coaching
  ${russian ? 'с Ксенией Романовой' : 'with Ksenia Romanova'}
</title>
`;
};
