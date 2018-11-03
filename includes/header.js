module.exports = (directoryPath, meta) => `
<title>${meta.title ? `${meta.title} — ` : ''}${
  /^\.\/ru($|\/)/.test(directoryPath)
    ? 'Up to Coaching с Ксенией Романовой'
    : 'Up to Coaching with Ksenia Romanova'
}</title>
`;
