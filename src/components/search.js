angular.module('video-player')

.component('search', {
  bindings: {
    query: '<'
  },
  controller: function(){

    this.query2 = '';
    this.func = () =>{
      // query = this.query2;
      console.log('query2', this.query2)
    }

  },
  templateUrl: 'src/templates/search.html'
});
