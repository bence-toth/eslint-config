# Change log

## 1.0.12

Disabled `react/require-default-props`.

Updated configuration for `@getify/proper-arrows/params`:
- Limit of number of arguments is now 20


## 1.0.11

Updated configuration for `fp/no-mutation`:
- Allowed mutations coming from CommonJS syntax
- Allowed object mutations for `.propTypes` and `.defaultProps`


## 1.0.10

Updated grouping rules for `simple-import-sort/sort`.

Grouping is now as follows:

- Side effect imports
- Packages, React-related come first:
- Absolute internal packages
- Relative internal packages
  - Start with parent imports, put `..` last
  - Other relative imports, same-folder imports and `.` last.
- Style imports


## 1.0.9

Removed configuration for `@getify/proper-arrows/params`.


## 1.0.8

Updated configuration for `simple-import-sort/sort`.


## 1.0.7

Registered missing plugins in config.


## 1.0.6

Fixed boo boo in config.


## 1.0.5

Added and configured `eslint-plugin-optimize-regex`.

Added and configured `simple-import-sort`.


## 1.0.4

Updated disabled rule `import-index` to `unicorn/import-index`.

Fixed `allow` pattern for `import/no-unassigned-import` for allowing CSS imports.


## 1.0.3

Disabled rules:
- `import/no-extraneous-dependencies`
- `import-index`

Updated rule `import/no-unassigned-import`
to allow unassigned `css` imports.


## 1.0.2

Fixed plugin list:
- `array-func`
- `fp`
- `jest`
- `react-hooks`
- `sonarjs`
- `unicorn`
- `@getify/proper-arrows`


## 1.0.1

Fixed readme.


## 1.0.0

Initial version.

Based on `airbnb`.

Includes configuration
for the following plugins:
- `array-func`
- `filenames`
- `fp`
- `immutable`
- `jest`
- `react-hooks`
- `sonarjs`
- `unicorn`
- `@getify/proper-arrows`

Contains some globals.
