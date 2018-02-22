module.exports = {
  extends: [
    'airbnb', 'plugin:jest/recommended'
  ],
  plugins: [
    'import', 'flowtype', 'jest'
  ],
  globals: {
    window: true,
    document: true,
    navigator: true,
    fetch: true,
    location: true
  },
  env: {
    browser: true,
    'jest/globals': true
  },
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true
    }
  },
  rules: {
    'no-unused-expressions': ["error", { allowShortCircuit: true, allowTaggedTemplates: true }],
    'no-restricted-syntax': [
      'error', 'WithStatement', 'BinaryExpression[operator=\'in\']'
    ],
    'no-underscore-dangle': [
      'error', {
        enforceInMethodNames: true
      }
    ],
    'class-methods-use-this': 'off',
    'prefer-destructuring': 'off',
    'object-curly-newline': 'off',
    'function-paren-newline': [
      'error', 'consistent'
    ],
    'max-len': 'off',
    'no-shadow': 'off',
    'no-multi-str': 'off',
    'comma-dangle': [
      'error', {
        arrays: 'only-multiline',
        objects: 'only-multiline',
        imports: 'only-multiline',
        exports: 'only-multiline',
        functions: 'never'
      }
    ],
    'react/prefer-stateless-function': 'off',
    'react/jsx-filename-extension': [
      'error', {
        extensions: ['.js', '.jsx']
      }
    ],
    'react/require-default-props': 'off',
    'react/jsx-curly-spacing': [
      'error',
      'always', {
        spacing: {
          objectLiterals: 'never'
        }
      }
    ],
    'react/sort-comp': [
      'error', {
        order: [
          'lifecycle', 'everything-else', 'render'
        ],
        groups: {
          lifecycle: [
            'displayName',
            'props',
            'state',
            'navigationOptions',
            'propTypes',
            'childContextTypes',
            'mixins',
            'contextTypes',
            'statics',
            'defaultProps',
            'constructor',
            'getDefaultProps',
            'getInitialState',
            'getChildContext',
            'componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'componentDidUpdate',
            'componentWillUnmount'
          ]
        }
      }
    ],
    'jsx-a11y/anchor-is-valid': [
      'error', {
        components: ['Link'],
        specialLink: ['to']
      }
    ],
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'import/no-duplicates': 'error',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'flowtype/use-flow-type': 1,
    'flowtype/define-flow-type': 1
  }
};
