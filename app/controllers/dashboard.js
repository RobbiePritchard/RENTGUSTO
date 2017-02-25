import Ember from 'ember';

export default Ember.Controller.extend({
 //
 //  sortProperties: ['dreamDate'],
 //  sortAscending: true,
 //  data: function() {
 //    var dreams = this.get('content');
 //    var data = {
 //      labels: [],
 //      datasets: []
 //    };
 //    var dataset = {
 //      label: "Sleep Data",
 //      fillColor: "rgba(0,138,132, 0.4)",
 //      scaleGridLineColor : "rgba(239,239,239,.4)",
 //      strokeColor: "#efefef",
 //      pointColor: "rgba(220,220,220,1)",
 //      pointStrokeColor: "#fff",
 //      pointHighlightFill: "#fff",
 //      pointHighlightStroke: "rgba(220,220,220,1)",
 //      data: []
 //    };
 //    dreams.forEach(function(dream) {
 //      if (dream.get('id')) {
 //        var hrsSlept = dream.get('hrsSlept');
 //        var dreamDate = dream.get('dreamDate').split("T")[0];
 //        dataset.data.push(hrsSlept);
 //        data.labels.push(dreamDate);
 //     }
 //   });
 //   data.datasets.push(dataset);
 //   return data;
 // }.property('model')
});
