module.exports = {
    testPathForConsistencyCheck: './src/tests/',

    resolveSnapshotPath: (testPath) => {
        const newSnapPath = testPath.replace('tests\\', 'tests\\__snapshots__\\').replace('.test', '.snap');
        console.log(newSnapPath + 'sss' + 'tests\\');
        return newSnapPath;
    },
    resolveTestPath: (snapshotFilePath, snapshotExtension) => {
        const newTestPath = snapshotFilePath.replace(snapshotExtension, '.test');
        console.log(newTestPath + 'ttt');
        return newTestPath;
    }
    ,
}