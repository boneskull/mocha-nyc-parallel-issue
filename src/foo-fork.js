process.on('message', () => {
  console.error('received message; sending "polo"');
  process.send('polo');
})
