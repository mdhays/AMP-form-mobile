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

  $scope.ASA14 = {
    ASA14H: 'Pt assessed for pain in PACU',
    ASA14B: 'Initial pain score < 7 out of 10',
    ASA14A: 'Initial pain score >= 7 out of 10'
  }

  $scope.ASA20 = {
    ASA20C: 'Pt underwent a surgical procedure under general anesthesia',
    ASA20A: 'All applicable safety checks performed before induction of anesthesia',
    ASA20B: 'All applicable safety checks NOT performed before induction of anesthesia'
  }

  $scope.ASA35 = {
    ASA35A: 'Elective surgical procedure to be performed under anesthesia',
    ASA35B: 'Patient arrived at the facility',
    ASA35C: 'Elective surgical procedure was cancelled for any reason on the day of surgery after patient arrived at the facility',
    ASA35D: 'Elective surgical procedure was not cancelled'
  }

})







.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
