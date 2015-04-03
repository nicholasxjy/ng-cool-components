(function() {
  'use strict';
  angular
    .module('app', [
      'ngCoolComponents'
    ])
    .controller('MainCtrl', function($scope) {

      $scope.tip = "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.";

      $scope.unReadNotis = [
        {
          content: "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",
          creator: {
            name: 'Nicholas',
            avatar: './img/demo.png'
          },
          createdAt: new Date()
        },
        {
          content: "She didn’t want to scare her second graders with an eye patch — or have to explain, over and over, why it was there.",
          creator: {
            name: 'Sophia',
            avatar: './img/demo.png'
          },
          createdAt: new Date()
        }
      ];
    });
})();
