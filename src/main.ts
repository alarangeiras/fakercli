import 'module-importer';
import yargs from 'yargs';
import {v4} from 'uuid';
import { cpf, cnpj } from 'cpf-cnpj-validator';

yargs
  .scriptName('fakercli')
  .usage('$0 <cmd> [args]')
  .command('uuid', '', {}, function (argv) {
    console.log(v4());
  })
  .command('cpf', '', {}, function (argv) {
    console.log(cpf.generate());
  })
  .command('cnpj', '', {}, function (argv) {
    console.log(cnpj.generate());
  })
  .help()
  .argv