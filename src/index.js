#!/usr/bin/env node

import commander from 'commander'
import colors from 'colors'

commander.version('0.0.1')

commander
  .command('gen <operation> [filename]')
  .description(
    'Creates the main project dir structure and main files with configurations and integrations for the builders.'
  )
  .action( (operation, filename) => {
    if ( operation && filename) {
      console.log( `created ${ operation} script ${filename}` )
    } else {
      if ( operation !== 'seed' && operation !== 'migration' ) {
        console.log( 'invalid operation'.red )
      } else {
        console.log( `missing filename parameter`.red )  
      }
    }
  })

commander
  .command('migrate')
  .description(
    'Runs migration scripts to apply schema modifications'
  )
  .action( () => {
    console.log( "running migrations... " )
  })

commander
  .command('seed')
  .description(
    'Populate mongo collections based on seed files'
  )
  .action( () => {
    console.log( "running seeds... " )
  })

commander.parse(process.argv)