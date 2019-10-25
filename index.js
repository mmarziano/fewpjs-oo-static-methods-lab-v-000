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
      if (s !== arr.find(s)) {
        s.charAt(0).toUpperCase() + str.slice(1)
      }
    console.log('sentence', s)
    
    
    
  }
  
}