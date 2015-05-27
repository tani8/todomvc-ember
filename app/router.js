import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
<<<<<<< HEAD
  this.resource('todos', {path: '/'});
=======
  this.resource('todos', { path: '/'});
>>>>>>> 096e833cc6ba782f195dfd00fc4ab909b8f76fdc
});

export default Router;
