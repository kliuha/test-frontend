module.exports = {
    transpileDependecies: ['vuetify'],
    publicPath: process.env.NODE_ENV === 'production'
      ? '/test-frontend/'
      : '/'
  }