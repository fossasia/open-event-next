module.exports = {
  ci: {
    upload: {
      target: 'temporary-public-storage',
    },
    collect: {
      staticDistDir: 'out',
      url: ['http://localhost/index.html'],
    },
  },
}
