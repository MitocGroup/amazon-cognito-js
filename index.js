var globalScope = typeof window === 'undefined' ? global : window;
globalScope.AWS = require('aws-sdk');

require('./src/CognitoSyncManager');
require('./src/CognitoSyncConflict');
require('./src/CognitoSyncDataset');
require('./src/CognitoSyncDatasetMetadata');
require('./src/CognitoSyncDatasetUpdates');
require('./src/CognitoSyncLocalStorage');
require('./src/CognitoSyncRecord');
require('./src/CognitoSyncRemoteStorage');
require('./src/CognitoSyncStoreInMemory');
require('./src/CognitoSyncStoreLocalStorage');