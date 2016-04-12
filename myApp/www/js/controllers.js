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

  $scope.PQRS76 = {
    _6030F: 'All elements of Maximal Sterile Barrier techniques followed',
    _6030F_1P: 'Medical Reason for not following Maximal Sterile Barrier techniques',
    _6030F_8P: 'Maximal Sterile Barrier techniques not followed, not otherwise specified'
  }

  $scope.PQRS404 = {
    G9642: 'Current Cigarrete Smoker',
    G9643: 'Elective Surgery',
    G9497: 'Seen preoperatively by anesthesiologist or proxy PRIOR TO DAY OF SURGERY and advised not to smoke before surgery',
    G9644: 'Pt abstained from smoking',
    G9645: 'Pt DID NOT abstain from smoking on the day of the surgery'
  }

  $scope.PQRS424 = {
    _4255F: 'Anesthesia of 60 min. duration or longer',
    _4559F: 'Temp of at least 35.5 degrees Celcius taken 30 min. before or 15 min. immediately following anesthesia end time',
    _4559F_1P: 'Medical reason(s) for not achieving at least 1 body temperature measurement equal to or greater than 35.5 degrees Celcius within the 30 min. immediately before or the 15 min. immediately after anesthesia end time (e.g, Emergency cases, Intentional hypothermia, etc.)',
    _4559F_8P: 'Temp of 35.5 degrees Celcius not recorded 30 min. before or 15 min. immediately following anesthesia end time, not otherwise specified'
  }

  $scope.PQRS426 = {
    G9656: 'Pt transferred directly from anesthetizing location to PACU',
    G9657: 'Transfer of care during an anesthetic to the ICU',
    G9655: 'Transfer of care checklist or protocol used',
    G9658: 'Transfer of care checklist or protocol NOT used'
  }

  $scope.PQRS427 = {
    _0581F: 'Pt transferred directly from anesthetizing location to critical care unit',
    _0583F: 'Transfer of care checklist or protocol used',
    _0583F_8P: 'Transfer of care checklist or protocol NOT used'
  }


})







.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
