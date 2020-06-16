const renameDirPath = (pathDirname, pathConfigSource) => {
    const currentPath = pathDirname.split('/');
    const sourcePath = pathConfigSource.split('/').slice(pathConfigSource.split('/').indexOf('**'), -1);

    return currentPath.filter((folder) => !sourcePath.includes(folder)).join('/');
};

module.exports = renameDirPath;
