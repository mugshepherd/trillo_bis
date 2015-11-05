var TrilloView = function( model ){
  var newCard = document.querySelector("#new-card-button")
  this.toDoList = document.querySelector("#todo-column .card-list")
  this.doneList = document.querySelector("#completed-column .card-list")
  this.newCardText = document.querySelector("#new-card-text") 
  this.model = model

  // accept form submission and create new cards
  newCard.addEventListener("click", this.newCard.bind(this) )
  //render (in prototype) will display new cards in appropriate column
  this.render()
}

TrilloView.prototype = {
  
	//create new cards, and clear input field 
  newCard: function( event ){
    event.preventDefault() 
    var card = new Card( this.newCardText.value )
    this.render()
    this.newCardText.value = ""
  },

  //place new todo value into appropriate column
  render: function(){
    this.toDoList.innerHTML = ""
    this.doneList.innerHTML = ""
    for( var i = 0; i < this.model.cards.length; i++ ){
      var cardView = new CardView( this.model.cards[i] )
      if( this.model.cards[i].completed ){
        this.doneList.appendChild( cardView ) 
      } else {
        this.toDoList.appendChild( cardView )
      }
    }
  }
}