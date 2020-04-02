module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
  },
  rules: {
    'jsx-a11y/label-has-associated-control': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'no-console': 'off',
    'jsx-a11y/anchor-has-content': 'off',
    'no-restricted-syntax': 'off',
    'no-bitwise': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
};
