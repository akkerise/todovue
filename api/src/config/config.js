module.exports = {
  'port': 8081,
  'db': {
    database: process.env.DB_NAME || 'todovue',
    user: process.env.DB_USER || 'todovue',
    password: process.env.DB_PASS || 'todovue',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './todovue.sqlite'
    }
  }
}
