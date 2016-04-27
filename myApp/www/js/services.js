angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Container for patients.
  var pts = [];

  return {
    all: function() {
      return pts;
    },
    remove: function(pt) {
      pts.splice(pts.indexOf(pt), 1);
    },
    get: function(ptId) {
      for (var i = 0; i < pts.length; i++) {
        if (pts[i].mrn === parseInt(ptId)) {
          return pts[i];
        }
      }
      return null;
    },
    // Service to be called when adding patient to list.
    addPt: function(pt) {
      console.log('running');
      pts.push(pt);
      console.log(pts);
    },
    saveChanges: function(pt) {
      console.log('running');
      pts.splice(pts.indexOf(pt), 1, pt)
    }
  };
});
