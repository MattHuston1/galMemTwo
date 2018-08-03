// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/coffees'

  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}