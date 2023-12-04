const yargs = require('yargs');
const country=require('./countryApi');

function bilgilendir(){
    yargs.command({
        command:"bilgi",
        describe:"Verilen ülke ve başkentinin hava durumunu verir",
        handler(argv){
            country.ulkeBilgisi(argv.ulke);
        }
    });
    
    yargs.parse();
}
bilgilendir();
module.exports=bilgilendir;