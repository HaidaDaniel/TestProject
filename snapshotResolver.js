module.exports = {
    testPathForConsistencyCheck: './src/tests/',

    resolveSnapshotPath: (testPath, snapshotExtension) => {
        const newSnapPath = testPath.replace('tests\\', 'tests\\__snapshots__\\').replace('.test', '.snap')
        console.log(newSnapPath)
        return (testPath.replace(/\.test\.([tj]sx?)/, `${snapshotExtension}.$1`))
    },

    resolveTestPath: (snapshotFilePath, snapshotExtension) => {
        const newTestPath = snapshotFilePath.replace(snapshotExtension, '.test')
        console.log(newTestPath + 'ttt')
        return snapshotFilePath.replace(snapshotExtension, '.test')
    }
    ,
}