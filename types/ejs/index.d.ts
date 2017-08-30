// Type definitions for ejs 2.5
// Project: http://ejs.co/
// Definitions by: Ben Liddicott <https://github.com/benliddicott/DefinitelyTyped>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type Data = { [name: string]: any };
type Dependencies = string[];

/**
 * EJS template function cache. This can be a LRU object from lru-cache NPM
 * module. By default, it is utils.cache, a simple in-process
 * cache that grows continuously.
 */
export let cache: Cache;

export interface Cache {
    set(key: string, val: any): any;

    get(key: string): any;

    reset(): any;
}

/**
 * Custom file loader. Useful for template preprocessing or restricting access
 * to a certain part of the filesystem.
 *
 * @param filePath: ejs file path.
 */
export let fileLoader: (filePath: string) => string;
/**
 * Name of the object containing the locals.
 *
 * This variable is overridden by `Options.localsName` if it is not
 * `undefined`.
 */
export let localsName: string;
/**
 * Name for detection of EJS.
 */
export const name: string;
/**
 * Version of EJS.
 */
export const VERSION: string;

/**
 * This is an alias for ejs.renderFile, in order to support Express.js out-of-the-box.
 */
export function __express<T>(path: string, cb: RenderFileCallback<T>): T;
export function __express<T>(path: string, data: Data, cb: RenderFileCallback<T>): T;
export function __express<T>(path: string, data: Data, opts: Options, cb: RenderFileCallback<T>): T;

/**
 * Clear intermediate JavaScript cache. Calls cache#reset.
 */
export function clearCache(): void;

/**
 * Compile the given str of ejs into a template function.
 *
 * @param template: EJS template
 * @param opts: compilation options
 */
export function compile(template: string, opts: ClientOptions): ClientFunction;
export function compile(template: string, opts?: Options): TemplateFunction;

/**
 * Escape characters reserved in XML.
 * If markup is undefined or null, the empty string is returned.
 *
 * @param markup: Input string
 */
export function escapeXML(markup?: string | null): string;

/**
 * Render the given template of ejs.
 *
 * If you would like to include options but not data, you need to explicitly call this function with data being an empty object or null.
 */
export function render(template: string, data?: Data, opts?: Options): string;


export function resolveInclude(name: string, filename: string): string;


type RenderFileCallback<T> = (err: Error, str?: string) => T;

export function renderFile<T>(path: string, cb: RenderFileCallback<T>): T;
export function renderFile<T>(path: string, data: Data, cb: RenderFileCallback<T>): T;
export function renderFile<T>(path: string, data: Data, opts: Options, cb: RenderFileCallback<T>): T;

export function clearCache(): any;

type TemplateFunction = (locals?: Data) => string;
type ClientFunction = (locals?: Data, escape?: EscapeCallback, include?: IncludeCallback, rethrow?: RethrowCallback) => string;
type EscapeCallback = (markup: string) => string;
type IncludeCallback = (path: string, data?: Data) => string;
type RethrowCallback = (err: Error, str: string, filename: string, lineno: string, esc: EscapeFunction) => never;
type EscapeFunction = (input: any) => string;

interface ClientOptions extends Options {
    client: true;
}

interface Options {
    /**
     * Compiled functions are cached, requires `filename`
     */
    cache?: any;
    /**
     * The name of the file being rendered. Not required if you
     * are using `renderFile()`. Used by `cache` to key caches, and for includes.
     */
    filename?: string;
    /**
     * Set project root for includes with an absolute path (/file.ejs).
     */
    root?: string;
    /**
     * Function execution context
     */
    context?: any;
    /**
     * When `false` no debug instrumentation is compiled
     */
    compileDebug?: boolean;
    /**
     * When `true`, compiles a function that can be rendered
     * in the browser without needing to load the EJS Runtime
     * (ejs.min.js).
     */
    client?: boolean;
    /**
     * Character to use with angle brackets for open/close
     */
    delimiter?: string;
    /**
     * Output generated function body
     */
    debug?: boolean;
    /**
     * When set to `true`, generated function is in strict mode
     */
    strict?: boolean;
    /**
     * Whether or not to use `with() {}` constructs. If `false`
     * then the locals will be stored in the `locals` object.
     * Set to `false` in strict mode.
     */
    _with?: boolean;
    /**
     * Name to use for the object storing local variables when not using `with` Defaults to `locals`
     */
    localsName?: string;
    /**
     * Remove all safe-to-remove whitespace, including leading
     * and trailing whitespace. It also enables a safer version of `-%>` line
     * slurping for all scriptlet tags (it does not strip new lines of tags in
     * the middle of a line).
     */
    rmWhitespace?: boolean;
    /**
     * The escaping function used with `<%=` construct. It is
     * used in rendering and is `.toString()`ed in the generation
     * of client functions. (By default escapes XML).
     */
    escape?: EscapeFunction;
}

export class Template {
    constructor(text: string, opts: Options);

    opts: Options;
    templateText: string;
    mode: string;
    truncate: boolean;
    currentLine: number;
    source: string;
    dependencies: Dependencies;

    createRegex(): RegExp;

    compile(): TemplateFunction;

    generateSource(): any;

    parseTemplateText(): string[];

    scanLine(line: string): any;

}

export namespace Template {
    interface MODES {
        EVAL: string;
        ESCAPED: string;
        RAW: string;
        COMMENT: string;
        LITERAL: string;
    }
}

export function escapeRegexChars(s: string): string;


export function shallowCopy<T1>(to: T1, fro: any): T1;


export function resolve(from1: string, to: string): string;
export function resolve(from1: string, from2: string, to: string): string;
export function resolve(from1: string, from2: string, from3: string, to: string): string;
export function resolve(from1: string, from2: string, from3: string, from4: string, to: string): string;
export function resolve(from1: string, from2: string, from3: string, from4: string, from5: string, to: string): string;
export function resolve(from1: string, from2: string, from3: string, from4: string, from5: string, from6: string, to: string): string;
export function resolve(from1: string, from2: string, from3: string, from4: string, from5: string, from6: string, from7: string, to: string): string;
export function resolve(from1: string, from2: string, from3: string, from4: string, from5: string, from6: string, from7: string, from8: string, to: string): string;
export function resolve(from1: string, from2: string, from3: string, from4: string, from5: string, from6: string, from7: string, from8: string, from9: string, to: string): string;
export function resolve(...args: string[]): string;

export function normalize(path: string): string;

export function isAbsolute(path: string): boolean;

export function join(...args: string[]): string;

export function relative(from: string, to: string): string;

export const sep: string;
export const delimiter: string;

export function dirname(path: string): string;

export function basename(path: string): string;

export function extname(path: string): string;

export function filter(xs: any, f: any): any; // TODO WHUT?
