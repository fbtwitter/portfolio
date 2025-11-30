/**
 * Custom config base for projects using typescript / javascript.
 * @see https://github.com/fbtwitter/shared-dx/tree/main/packages/eslint-config-bases#fbtwittereslint-config-bases
 */

module.exports = {
  overrides: [
    {
      files: ['*.jsx', '*.tsx'],
      plugins: ['perfectionist'],
      rules: {
        'perfectionist/sort-jsx-props': 'error',
      },
    },
  ],
};
