// default layout (for all routes)
Router.configure({
  layoutTemplate: 'basiclayout'
});

Router.route('/', function () {
  this.render('home');
});

Router.route('/caleb');
Router.route('/ca');
Router.route('/cb');
Router.route('/cba');
Router.route('/cbb');
Router.route('/cab');
Router.route('/cbaa');
Router.route('/cbab');
Router.route('/cbaba');
Router.route('/cbabb');
Router.route('/cbabaa');
Router.route('/cbabab');
Router.route('/cbabaaa');

Router.route('/aaron');


// // SEARCH PAGE
// Router.route('/search', function () {
//   this.layout('navbarlayout');
//   this.render('search');
// });

