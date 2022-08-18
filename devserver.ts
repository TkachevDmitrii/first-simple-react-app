import fs from 'fs'
import path from 'path'
import dotenv from 'dotenv'
// eslint-disable-next-line import/no-named-as-default
import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'

if (process !== undefined)
  process.env = {
    HOST: 'localhost',
    PORT: '3000',
    ...dotenv.parse(fs.readFileSync(path.join(__dirname, '.env'))),
    ...process?.env,
  }

async function bootstrap() {
  const { config } = await import('./webpack.config')
  const compiler = webpack(config)

  const { HOST: host, PORT: port } = process.env
  const devServerOptions: WebpackDevServer.Configuration = {
    host,
    port,
    historyApiFallback: true,
    client: {
      progress: true,
    },
    hot: true,
  }

  const server = new WebpackDevServer(devServerOptions, compiler)
  await server.start()
}

bootstrap()
