declare module "babel-minify-webpack-plugin" {
    import { Plugin } from "webpack";
    export interface IMinifyOpts {
      booleans?: boolean;
      builtIns?: boolean;
      consecutiveAdds?: boolean;
      deadcode?: boolean;
      evaluate?: boolean;
      flipComparisons?: boolean;
      guards?: boolean;
      infinity?: boolean;
      mangle?: boolean;
      memberExpressions?: boolean;
      mergeVars?: boolean;
      numericLiterals?: boolean;
      propertyLiterals?: boolean;
      regexpConstructors?: boolean;
      removeConsole?: boolean;
      removeDebugger?: boolean;
      removeUndefined?: boolean;
      replace?: boolean;
      simplify?: boolean;
      simplifyComparisons?: boolean;
      typeConstructors?: boolean;
      undefinedToVoid?: boolean;
    }
    export interface IPluginOpts {
      test?: string;
      include?: string;
      exclude?: string;
      comments?: (() => boolean) | string | any;
      sourceMap?: string;
      parserOpts?: string;
      babel: any;
    }
    export default class BabelMinifyPlugin extends Plugin {
      constructor(minifyOpts?: IMinifyOpts, pluginOpts?: IPluginOpts);
    }
  }