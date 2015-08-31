/**
 * Created by Erdem on 13.08.2015.
 */


$('input').on('ifChecked', function(event) {
  // var element = $(this).parent().find('input:checkbox:first');
  // element.parent().parent().parent().addClass('highlight');
  $(this).parents('li').addClass("task-done");
  console.log('ok');
});
$('input').on('ifUnchecked', function(event) {
  // var element = $(this).parent().find('input:checkbox:first');
  // element.parent().parent().parent().removeClass('highlight');
  $(this).parents('li').removeClass("task-done");
  console.log('not');
});

$('#noti-box').slimScroll({
  height: '400px',
  size: '5px',
  BorderRadius: '5px'
});

$('input[type="checkbox"].flat-grey, input[type="radio"].flat-grey').iCheck({
  checkboxClass: 'icheckbox_flat-grey',
  radioClass: 'iradio_flat-grey'
});


$(function() {
  "use strict";
  //BAR CHART
  var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        fillColor: "rgba(220,220,220,0.2)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: [65, 59, 80, 81, 56, 55, 40]
      },
      {
        label: "My Second dataset",
        fillColor: "rgba(151,187,205,0.2)",
        strokeColor: "rgba(151,187,205,1)",
        pointColor: "rgba(151,187,205,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(151,187,205,1)",
        data: [28, 48, 40, 19, 86, 27, 90]
      }
    ]
  };
/*  new Chart(document.getElementById("linechart").getContext("2d")).Line(data,{
    responsive : true,
    maintainAspectRatio: false,
  });*/

});
// Chart.defaults.global.responsive = true;
