class Formatter {
  //add static methods here
  
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

 
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }
  
  
  static titleize(sentence) {
    let arr = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let s = sentence.split(' ')
    s.map(function(word) {
       if (word !== arr.find(s => word === s)) {
        s.charAt(0).toUpperCase() + s.slice(1)
      }
    })
  }
  
}