import nodemon from 'nodemon'
const esm = require.resolve('esm')
export default () => {
  nodemon({
    script: `${__dirname}/staticServer.js`,
    ext: 'js json',
    execMap: {
      js: `node -r ${esm}`
    }
  })

  nodemon.on('start', () => {
    console.log('App has started')
  }).on('quit', () => {
    console.log('App has quit')
    process.exit()
  }).on('restart', files => {
    console.log('App restarted due to: ', files)
  })
}
