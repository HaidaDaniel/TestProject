module.exports = {
    testPathForConsistencyCheck: './src/tests/',

    resolveSnapshotPath: (testPath, snapshotExtension) => {
        const newSnapPath = testPath.replace('tests\\', 'tests\\__snapshots__\\').replace('.test', '.snap')
        return newSnapPath
    },

    resolveTestPath: (snapshotFilePath, snapshotExtension) => {
        const newTestPath = snapshotFilePath.replace('tests\\__snapshots__\\', 'tests\\').replace('.snap', '.test')
        return newTestPath
    }
    ,
}
