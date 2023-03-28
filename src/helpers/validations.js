export default {
  validationMandatory (val) {
     return !!val || 'Mandatory Field'
  },
  validationNoSymbols(val){
     return !val.match(/\W/i) || 'Symbols not Allowed'
  }
 }
