document.addEventListener('DOMContentLoaded', function () {

  var clearTime = "";

  function remaining(date) {
    clearTime = setTimeout(() => {
      var now = moment(new Date()); //todays date
      var end = moment(date); // another date
      var d = formatDate(moment.duration(now.diff(end)));

      var text = "";
      text += d.months > 0 ? `${d.months}m ` : ``;
      text += d.days > 0 ? `${d.days}d ` : ``;
      text += `${d.hours}:${d.minutes}:${d.seconds}`
      $(".timelapse").val(text)
      remaining(date)
    }, 1000)
  }

  function fixZero(number) {
    var fixNumber = Math.abs(number);
    if (fixNumber <= 9) {
      return `0${fixNumber}`
    }
    return fixNumber
  }

  function formatDate(dateToFormat) {
    return {
      months: fixZero(dateToFormat.months()),
      days: fixZero(dateToFormat.days()),
      hours: fixZero(dateToFormat.hours()),
      minutes: fixZero(dateToFormat.minutes()),
      seconds: fixZero(dateToFormat.seconds())
    }
  }

  var date = document.querySelectorAll('.datepicker');
  var datepicker = M.Datepicker.init(date, { format: 'mmm dd, yyyy' });

  var time = document.querySelectorAll('.timepicker');
  var timepicker = M.Timepicker.init(time, { duration: 350 });

  $('#description').characterCounter();

  $(".datepicker").on("change", function () {
    var timer = $(".timepicker").val();
    var date = $(".datepicker").val();
    updatedDate(date, timer)
    $("[for=timelapse]").addClass("active");
  })


  $(".timepicker").on("change", function () {
    var timer = $(".timepicker").val();
    var date = $(".datepicker").val();
    updatedDate(date, timer)
  })

  function updatedDate(date, timer) {
    var timer = timer || new Date();
    var date = date || new Date();

    var dateJoin = moment(`${date} ${timer}`, 'MMM DD, YYYY hh:mm a').format()

    clearTimeout(clearTime)
    remaining(dateJoin)

  }


  $("form").on("submit", function(e){
    e.preventDefault();
    var data = $("form").serializeArray();
    $.get("http://localhost:3000/send", data, function(response){
      console.log("response", response)
      $(".image img").remove()
      $(".image").append(`<img src="static/imgs/counter.gif?${Math.random()}">`)
    })
  })
});

