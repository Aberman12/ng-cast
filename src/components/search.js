angular.module('video-player')

.component('search', {
  bindings: {
    query: '<'
  },
  controller: function(){
    this.keyEnter = (event) => {
      if(event.keyCode === 13){
        this.query(this.query2);
      }
    }
    this.query2 = '';
  },
  templateUrl: 'src/templates/search.html'
});
