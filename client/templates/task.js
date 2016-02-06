Template.task.helpers({
  tasks: function() {
    if(Session.get('hideCompleted')) {
      return Tasks.find({checked: {$ne: true}}, {sort: {createdAt: -1}});
    } else {
      return Tasks.find({}, {sort: {createdAt: -1}});
    }
  },
  hideCompleted: function() {
    return Session.get('hideCompleted');
  },
  incompleteCount: function() {
    return Tasks.find({checked: {$ne: true}}).count();
  }
});

Template.task.events({
  'click .toggle-checked': function() {
    Tasks.update(this._id, {
      $set: {checked: !this.checked}
    });
  },
  'click .delete': function() {
    Tasks.remove(this._id);
  }
});
