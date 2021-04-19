module.exports = {
  ci: {
    upload: {
      target: 'lhci',
      serverBaseUrl: 'https://lighthouse.fossasia.org',
      token: '9e44d373-096c-4af5-81cb-ccb4a19738da',
    },
    collect: {
      staticDistDir: 'out',
      url: ['http://localhost/index.html'],
    },
  },
}
