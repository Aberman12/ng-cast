angular.module('video-player')
.service('youTube', function($http){
  this.search = function(query, cb){
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      videoEmbeddable:true,
      params: {
        part: 'snippet',
        q: query,
        type: 'video',
        maxResults: 5,
        key: YOUTUBE_API_KEY
      }
    })
    .then(function(data){
      console.log('success', data.data.items);
      cb(data.data.items)
    })
    .catch(function(data){
      console.log('err', data);
    })
  }
});
