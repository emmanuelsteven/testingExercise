const stringLength=(string) => {
    if(string.length < 1){
        throw new Error('input string greater than 1 char')
    } 
    else if(string.length > 10){
        throw new Error ('string not more than 10 char')

    }
    
        else {
            return string.length
        }
  }
  module.exports = stringLength;