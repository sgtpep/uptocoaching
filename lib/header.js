module.exports = (directoryPath, meta) => {
  const russian = /^\.\/ru($|\/)/.test(directoryPath);
  return `
<title>
  ${meta.title ? `${meta.title} — ` : ''}Up to Coaching
  ${russian ? 'с Ксенией Романовой' : 'with Ksenia Romanova'}
</title>
`;
};
