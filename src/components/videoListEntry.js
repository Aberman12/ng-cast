angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video: '<',
    change: '<'
  },

  templateUrl: 'src/templates/videoListEntry.html'
});
