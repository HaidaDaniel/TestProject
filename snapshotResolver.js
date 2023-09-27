module.exports = {
    // resolves from test to snapshot path
    resolveSnapshotPath: (testPath, snapshotExtension) => {
        if (testPath.includes('/components/')) {
            return testPath.replace('/components/', '/__snapshots__/components/') + snapshotExtension;
        }
        if (testPath.includes('/pages/')) {
            return testPath.replace('/pages/', '/__snapshots__/pages/') + snapshotExtension;
        }
        // return testPath.replace('tests', '__snapshots__') + snapshotExtension;
    },
    // resolveTestPath: (snapshotFilePath, snapshotExtension) => {
    //     if (snapshotFilePath.includes('/components/')) {
    //         return snapshotFilePath.replace('/__snapshots__/components/', '/components/').slice(0, -snapshotExtension.length);
    //     }
    //     if (snapshotFilePath.includes('/pages/')) {
    //         return snapshotFilePath.replace('/__snapshots__/pages/', '/pages/').slice(0, -snapshotExtension.length);
    //     }
    //     // return snapshotFilePath.replace('/__snapshots__/', 'tests/').slice(0, -snapshotExtension.length);
    // },

    testPathForConsistencyCheck: 'src/tests/components/',
};