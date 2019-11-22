import commander from 'commander'
import colors from 'colors'

const program = new commander.Command()

program
  .command('seed') // sub-command name
  .alias('s') // alternative sub-command is `al`
  .description('add records from seeds to database') // command description

  // function to execute when command is uses
  .action(function () {
    console.log('hello world'.green); // outputs green text
    // console.log('i like cake and pies'.underline.red) // outputs red underlined text
    // console.log('inverse the color'.inverse); // inverses the color
    // console.log('OMG Rainbows!'.rainbow); // rainbow
    // console.log('Run the trap'.trap); // Drops the bass        
  });
program.version('0.0.1');

program.parse(process.argv)

// console.log(process.cwd())