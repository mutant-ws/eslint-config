module.exports = {
    rules: {
        // Disallow trailing commas in object literals
        "comma-dangle": [ "error", "always-multiline" ],

        // Disallow assignment in conditional expressions
        "no-cond-assign": [ "error", "always" ],

        // Disallow use of console
        "no-console": 1,

        // Disallow use of constant expressions in conditions
        "no-constant-condition": 1,

        // Disallow control characters in regular expressions
        "no-control-regex": "error",

        // Disallow use of debugger
        "no-debugger": 1,

        // Disallow duplicate arguments in functions
        "no-dupe-args": "error",

        // Disallow duplicate keys when creating object literals
        "no-dupe-keys": "error",

        // Disallow a duplicate case label.
        "no-duplicate-case": "error",

        // Disallow empty statements
        "no-empty": "error",

        // Disallow the use of empty character classes in regular expressions
        "no-empty-character-class": "error",

        // Disallow assigning to the exception in a catch block
        "no-ex-assign": "error",

        // Disallow double-negation boolean casts in a boolean context
        "no-extra-boolean-cast": 0,

        // Disallow unnecessary parentheses
        "no-extra-parens": [ "error", "functions" ],

        // Disallow unnecessary semicolons
        "no-extra-semi": "error",

        // Disallow overwriting functions written as function declarations
        "no-func-assign": "error",

        // Disallow function or variable declarations in nested blocks
        "no-inner-declarations": "error",

        // Disallow invalid regular expression strings in the RegExp
        // Constructor
        "no-invalid-regexp": "error",

        // Disallow irregular whitespace outside of strings and comments
        "no-irregular-whitespace": "error",

        // Disallow negation of the left operand of an in expression
        "no-negated-in-lhs": "error",

        // Disallow the use of object properties of the global object (Math
        // And JSON) as functions
        "no-obj-calls": "error",

        // Disallow multiple spaces in a regular expression literal
        "no-regex-spaces": "error",

        // This rule disallows sparse array literals which have "holes" where
        // Commas are not preceded by elements. It does not apply to a
        // Trailing comma following the last element.
        "no-sparse-arrays": "error",

        // Avoid code that looks like two expressions but is actually one
        "no-unexpected-multiline": 0,

        // Disallow unreachable statements after a return, throw, continue, or
        // Break statement
        "no-unreachable": "error",

        // Disallow comparisons with the value NaN
        "use-isnan": "error",

        // Ensure JSDoc comments are valid
        "valid-jsdoc": 0,

        // Ensure that the results of typeof are compared against a valid
        // String
        "valid-typeof": "error",
    },
}
