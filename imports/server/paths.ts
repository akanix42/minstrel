import path from 'path';
const rootPath = __meteor_bootstrap__.serverDir;
const paths = {
  root: rootPath,
  assets: path.join(rootPath, 'assets/app'),
  public: path.join(rootPath, '../web.browser/app'),
  audio: path.join(rootPath, '../../../../../audio'),
};
export default paths;
