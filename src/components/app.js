angular.module('video-player')
.controller('app-controller', function(youTube){
    youTube.search(this.query, (data) => {
        this.exampleData = data;
        this.currentVideo = data[0];
    });
    this.query = 'asdf';
    this.changeQuery = (query) => {
        this.query = query;
        youTube.search(this.query, (data) => {
            this.exampleData = data;
            this.currentVideo = data[0];
        });
    }
    this.changeVid = (video) => {
        this.currentVideo = this.exampleData[video];
    }
})
.component('app', {
  controller: 'app-controller',
  templateUrl: 'src/templates/app.html'
});
