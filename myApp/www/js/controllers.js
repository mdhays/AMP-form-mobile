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

  $scope.ASA10 = {
    ASA10A: 'No serious adverse event',
    ASA10B: 'Serious adverse event'
  }

  $scope.ASA11 = {
    ASA11A: 'PT experienced cardiac arrest',
    ASA11B: 'No cardiac arrest'
  }

  $scope.ASA12 = {
    ASA12A: 'Patient died',
    ASA12B: 'Patient did not die'
  }

  $scope.ASA13 = {
    ASA13H: 'Procedure under General Anesthesia by an SGA or ETT',
    ASA13J: 'SGA or ETT was removed in OR or PACU',
    ASA13A: 'Pt required new airway management prior to PACU D/C',
    ASA13B: 'Pt did not require new airway management',
    ASA13G: 'Pt received a planned trial of extubation'
  }

})







.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
