//constructor function for new cards
var Card = function( description ){
  this.description = description
  this.completed = false
  this.id = trillo.cards.length
  trillo.cards.push( this )
}


Card.prototype = {
  save: function(){
    trillo.cards[this.id] = this	
  },
  update: function( property ){
    for( var value in property ){
      this[value] = property[value]
    }	  
    // this.save()
  }
}