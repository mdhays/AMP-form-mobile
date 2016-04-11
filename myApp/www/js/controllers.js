angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

// Added for the form view.
.controller('NewCaseCtrl', function($scope) {

  $scope.checkChanged = function(item){
    if(item.winner) $scope.checked++;
    else $scope.checked--;
  }

  $scope.ASA10 = {
    ASA10A: 'No serious adverse event',
    ASA10B: 'Serious adverse event'
  }

  $scope.ASA11 = {
    ASA11A: 'PT experienced cardiac arrest',
    ASA11B: 'No cardiac arrest'
  }

})







.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
