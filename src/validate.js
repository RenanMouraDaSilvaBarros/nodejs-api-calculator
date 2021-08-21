class Validate{
  static  oparation(operator, res){
        const opetations = ['+','-','*','/']
        if(!opetations.includes(operator)){
            return res.status(500).json({error:"invalid operator"})
        }
    }

    static  numbers(number, res){
        const numberPattern = /\d+/g;
        if(!String(number).match(numberPattern)){
            return res.status(500).json({error:"invalid numbers"})
        }
    }
}

module.exports = Validate


 