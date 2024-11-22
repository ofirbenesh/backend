import loadMockCatalogs from './scripts/loadMockCatalogs';

loadMockCatalogs().then(() => {
  console.log('Mock data loaded. Exiting...');
  process.exit();
});
