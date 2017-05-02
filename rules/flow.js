module.exports = {
    plugins: [ "flowtype" ],
    rules  : {
        /*
         * Enforces a particular style for boolean type annotations.
         */
        "flowtype/boolean-style": [ "error", "boolean" ],

        /*
         * Marks Flow type identifiers as defined.
         * Used to suppress no-undef reporting of type identifiers.
         */
        "flowtype/define-flow-type": "warn",

        /*
         * Enforces consistent use of trailing commas in Object and Tuple
         * annotations.
         * Same as eslint "comma-dangle".
         */
        "flowtype/delimiter-dangle": [ "error", "always-multiline" ],

        /*
         * Enforces consistent spacing within generic type annotation
         * parameters.
         */
        "flowtype/generic-spacing": [ "error", "never" ],

        /*
         * Checks for duplicate properties in Object annotations.
         * Same as eslint "no-dupe-keys".
         */
        "flowtype/no-dupe-keys": "error",

        /*
         * Disallows use of primitive constructors as types, such as Boolean,
         * Number and String.
         */
        "flowtype/no-primitive-constructor-types": "error",

        /*
         * Disallows Flow type imports, aliases, and annotations in files
         * missing a valid Flow file declaration (or a @noflow annotation).
         */
        "flowtype/no-types-missing-file-annotation": "error",

        /*
         * Warns against weak type annotations any, Object and Function. These
         * types can cause flow to silently skip over portions of your code,
         * which would have otherwise caused type errors.
         */
        "flowtype/no-weak-types": [ "error", {
            Function: false,
            Object  : false,
            any     : true,
        } ],

        /*
         * Enforces consistent separators between properties in Flow object
         * types.
         */
        "flowtype/object-type-delimiter": [ "error", "semicolon" ],

        // Requires that all function parameters have type annotations.
        "flowtype/require-parameter-type": [ "error", {
            excludeArrowFunctions: false,
        } ],

        // Requires that functions have return type annotation.
        "flowtype/require-return-type": [ "error", "always", {
            annotateUndefined    : "never",
            excludeArrowFunctions: false,
        } ],

        /*
         * This rule can optionally report missing or missed placed
         * annotations, common typos (e.g. // @floww), and enforce a
         * consistant annotation style.
         */
        "flowtype/require-valid-file-annotation": [ "error", "always", {
            annotationStyle: "line",
        } ],

        // Requires that all variable declarators have type annotations.
        "flowtype/require-variable-type": [ "error", {
            excludeVariableMatch: "^_",
        } ],

        /*
         * Enforces consistent use of semicolons after type aliases.
         * Same as eslint "semi".
         */
        "flowtype/semi": [ "error", "never" ],

        /*
         * Enforces sorting of Object annotations.
         * Same as eslint "sort-keys"
         */
        "flowtype/sort-keys": [ "error", "asc", {
            caseSensitive: true,
            natural      : true,
        } ],

        /*
         * Enforces consistent spacing after the type annotation colon.
         * Require a space after the type annotation colon (e.g. foo: BarType).
         */
        "flowtype/space-after-type-colon": [ "error", "always", {
            allowLineBreak: false,
        } ],

        /*
         * Enforces consistent spacing before the opening < of generic type
         * annotation parameters.
         */
        "flowtype/space-before-generic-bracket": [ "error", "always" ],

        // Enforces consistent spacing before the type annotation colon.
        "flowtype/space-before-type-colon": [ "error", "never" ],

        // Enforces a consistent naming pattern for type aliases.
        "flowtype/type-id-match": [ "error", "^([A-Z][a-z0-9]+)+Type$" ],

        /*
         * Enforces consistent spacing around union and intersection type
         * separators (| and &).
         */
        "flowtype/union-intersection-spacing": [ "error", "always" ],

        // Marks Flow type alias declarations as used.
        "flowtype/use-flow-type": "warn",

        //
        "flowtype/valid-syntax": "warn",
    },
    settings: {
        flowtype: {
            onlyFilesWithFlowAnnotation: true,
        },
    },
}
