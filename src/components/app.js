angular.module('video-player')
.controller('app-controller', function(){
    this.exampleData = window.exampleVideoData;
    this.currentVideo = this.exampleData[0];
    this.changeVid = (video) => {
        console.log('tesetset', video)
        this.currentVideo = this.exampleData[video];
    }
    console.log('currentVideo on app.js', this.currentVideo)
})
.component('app', {
  controller: 'app-controller',
  templateUrl: 'src/templates/app.html'
});
