beforeEach(function() {
  var matchers = {};
  function fragment_includes(root, fragment) {
    if (_.isObject(root) && _.isObject(fragment)) {
      var still_true = true;
      for (var key in fragment) {
        //iterate through keys and make sure that each value associated with them in root and fragment are recursively the same
        if (root[key] && fragment[key]) {
          still_true = still_true && fragment_includes(root[key], fragment[key])
        } else if(!root[key]) {
          still_true = false
        }
      }
      return still_true
    } else {
      return root == fragment
    }
  }
  matchers.toIncludeFragment = function(fragment) {
    return fragment_includes(this.actual, fragment);

  }
  matchers.toNotIncludeFragment = function(fragment) {
    return !fragment_includes(this.actual, fragment);

  }
  this.addMatchers(matchers);
})

