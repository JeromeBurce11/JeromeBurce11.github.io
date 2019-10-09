

// basic functionalities
$(document).ready(function () {

  // var topic1 = $("input[name='topic']").val();
  // $("#btn-disconnect").click(function () {
  //   client.end();
  //   alert("session ended");
  //   $("#status").val("Disconnected !");
  //   location.reload();
  // })
  // $("#btn-connect").click(function () {

  client = mqtt.connect('wss://test.mosquitto.org:8081/mqtt')

  client.on("connect", function () {
    $("#status").val("Connected !");
    console.log("successfully connected");
    $("#Onbutton").click(function () {

      var topic = 'burce/device/status';
      var payload = 'Turn On:' + moment().format('MMMM Do YYYY, h:mm:ss a');
      $("#Sstatus").val('The device is on');
      client.publish(topic, payload);
    });

    $("#Offbutton").click(function () {
      var topic = 'burce/device/status';
      var payload = 'Turn off:' + moment().format('MMMM Do YYYY, h:mm:ss a');
      $("#Sstatus").val('The device is Off');
      client.publish(topic, payload);
    });
  })



  // $("#btn-subscribe").click(function () {
  //   var topic = $("input[name='topicSub']").val();
  //   var row = "<tr><td>" + topic + "</td><td>" + moment().format('MMMM Do YYYY, h:mm:ss a') + "</td></tr>";
  //   $("#tbsubscribe").append(row);
  //   $("#btn-publish").click(function () {
  //     var payload = $("input[name='payload']").val();
  //     if (topic == topic1) {
  //       var row = "<tr><td>" + topic + "</td><td>" + payload + "</td><td>" + moment().format('MMMM Do YYYY, h:mm:ss a') + "</td></tr>";
  //       $("#tbbroker").append(row);
  //     }

  //   });
  //   topic1 = $("input[name='topic']").val();

  //   client.subscribe(topic)
  //   client.on("message", function (topic, payload) {
  //     console.log([topic, payload].join(": "));
  //     var row = "<tr><td>" + topic + "</td><td>" + payload + "</td><td>" + moment().format('MMMM Do YYYY, h:mm:ss a') + "</td></tr>";
  //     $("#tbbroker").append(row);
  //   })

  // })
  // $("#btn-unsubscribe").click(function () {
  //   var topic = $("input[name='topicSub']").val();
  //   client.unsubscribe(topic)
  //   topic1 = "";

  // })

  // })
})





