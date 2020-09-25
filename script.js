//final almost
$(document).ready(function() {
    //$.keyframe.debug = true;
    var state = false;
    var tstate = false;
    var temp = 0;
    var fahrenheit = 0;
    var rotitX = 0;
    var rotitY = 0;
    var rotStat = false;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {

        $.getJSON('http://api.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&units=metric&appid=75a1c8d3035466f613344e7c13d2d4ad', function(data) {

          temp = data.main.temp;
          window.setTimeout(function() {
            $(".one").html('<div id="one" class="animated fadeIn text-center">Weather<h3>' + data.weather[0].main + ', ' + data.weather[0].description + "</h3></div>");

            $(".temp-two").html('<div id="two" class="animated fadeIn text-center">Temperature <h3>' + data.main.temp + ' C</h3> </div>');
            $(".cu").removeClass("hidden");

            $(".four").html('<div id="four" class="animated fadeIn text-center"> Humidity <h4>' + data.main.humidity + ' %</h4>Cloudiness<h4>' + data.clouds.all + ' %</h4> </div>');

            $(".five").html('<div id="five" class="animated fadeIn text-center" > ' + '<h3>' + data.name + '</h3>' + '<img style="height:110px; width:auto;" src="http://openweathermap.org/img/w/' + data.weather[0].icon + '.png">' + "</div>");

            $(".three").html('<div id="three" class="animated fadeIn text-center"> Wind speed <h4>' + data.wind.speed + ' m/s </h4>Wind direction<h4>' + data.wind.deg + ' deg</h4> </div>');

            if (data.hasOwnProperty("rain")) {
              $(".six").html('<div id="six" class="animated fadeIn text-center">Rain vol. in last 3 hours <h4>' + data.rain["3h"] + ' mm</h4> </div>');
            } else {
              $(".six").html('<div id="six" class="animated fadeIn text-center">Rain vol. in last 3 hours <h4> No Rain </h4> </div>');
            }

            $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + location + '&units=imperial&appid=75a1c8d3035466f613344e7c13d2d4ad', function(data) {

              fahrenheit = data.main.temp;
            });
          }, 2500);
        });
      });
    }

    $.keyframe.define({
      name: 'one-sequence',
      '0%': {
        'transform': '-webkit-transform'
      },
      '50%': {
        'transform': 'rotateX(0deg) rotateY(0deg)  '
      },
      '100%': {

        'transform': 'translateX(-105%) translateY(-100px)  translateZ(0px) '
      },
    });
    $.keyframe.define({
      name: 'two-sequence',
      '0%': {
        'transform': '-webkit-transform'
      },
      '50%': {
        'transform': 'rotateX(0deg) rotateY(0deg)  '
      },
      '100%': {

        'transform': 'translateX(105%) translateY(-100px)  translateZ(0px) '
      },
    });
    $.keyframe.define({
      name: 'three-sequence',
      '0%': {
        'transform': '-webkit-transform'
      },
      '50%': {
        'transform': 'rotateX(0deg) rotateY(0deg)  '
      },
      '100%': {

        'transform': 'translateX(105%) translateY(100px)  translateZ(0px) '
      },
    });
    $.keyframe.define({
      name: 'four-sequence',
      '0%': {
        'transform': '-webkit-transform'
      },
      '50%': {
        'transform': 'rotateX(0deg) rotateY(0deg)  '
      },
      '100%': {

        'transform': 'translateX(-105%) translateY(100px)  translateZ(0px) '
      },
    });
    $.keyframe.define({
      name: 'five-sequence',
      '0%': {
        'transform': '-webkit-transform'
      },
      '50%': {
        'transform': 'rotateX(0deg) rotateY(0deg)  '
      },
      '100%': {

        'transform': 'translateX(0) translateY(-100px)  translateZ(0px) '
      },
    });
    $.keyframe.define({
      name: 'six-sequence',
      '0%': {
        'transform': '-webkit-transform'
      },
      '50%': {
        'transform': 'rotateX(0deg) rotateY(0deg)  '
      },
      '100%': {

        'transform': 'translateX(0) translateY(100px)  translateZ(0px) '
      },
    });

    $.keyframe.define({
      name: 'flat-sequence',
      '0%': {
        'transform': '-webkit-transform'
      },
      '100%': {
        'transform': 'rotateX(0deg) rotateY(0deg)  rotateZ(0deg) translateX(0px) translateY(0px)  translateZ(0px) '
      },
    });

    $.keyframe.define({
      name: 'trapdoor-sequence',
      '0%': {
        'transform': '-webkit-transform' //Note that 'transform' will be autoprefixed for you
      },
      '50%': {
        'transform': 'rotateX(0deg) rotateY(0deg)  ' //Note that 'transform' will be autoprefixed for you
      },
      '100%': {
        'transform': '-webkit-transform' //Note that 'transform' will be autoprefixed for you
      },
    });

    $.keyframe.define({
      name: 'faceswap',
      '0%': {
        'background-size': "100% 100%",
        'background-color': 'rgba(135,0,0,.7)' //Note that 'transform' will be autoprefixed for you
      },
      '50%': {
        'background-size': "100% 100%",
        'background-color': 'rgba(0,135,0,.7)' //Note that 'transform' will be autoprefixed for you
      },
      '100%': {
        'background-size': "100% 100%",
        'background-color': 'rgba(0,0,135,.7)' //Note that 'transform' will be autoprefixed for you
      },
    });

    var pauseRotate = function() {
      $(".face").playKeyframe({
        name: 'trapdoor-sequence', // name of the keyframe you want to bind to the selected element
        duration: '4s', // [optional, default: 0, in ms] how long you want it to last in milliseconds
        timingFunction: 'ease', // [optional, default: ease] specifies the speed curve of the animation
        delay: '0s', //[optional, default: 0s]  how long you want to wait before the animation starts
        iterationCount: '1', //[optional, default:1]  how many times you want the animation to repeat
        direction: 'normal', //[optional, default: 'normal']  which direction you want the frames to flow
        fillMode: 'forwards', //[optional, default: 'forward']  how to apply the styles outside the animation time, default value is forwards
        complete: function() {
            state = true;
            $(".face").resetKeyframe(function() {});
            //$(".cube").pauseKeyframe();

          } //[optional] Function fired after the animation is complete. If repeat is infinite, the function will be fired every time the animation is restarted.
      });
    };

    var getFlat = function(dir) {
      $(".face").playKeyframe({
        name: 'flat-sequence',
        duration: '4s',
        timingFunction: 'linear',
        delay: '0s',
        iterationCount: '1',
        direction: dir,
        fillMode: 'forwards',
        complete: function() {
          //$(".cube").resetKeyframe(function(){})
        }
      });
    };

    var oneSpread = function(dir) {
      $(".one").playKeyframe({
        name: 'one-sequence',
        duration: '2s',
        timingFunction: 'linear',
        delay: '0s',
        iterationCount: '1',
        direction: dir,
        fillMode: 'forwards',
        complete: function() {

        }
      });
    };

    var twoSpread = function(dir) {
      $(".two").playKeyframe({
        name: 'two-sequence',
        duration: '2s',
        timingFunction: 'linear',
        delay: '.2s',
        iterationCount: '1',
        direction: dir,
        fillMode: 'forwards',
        complete: function() {}
      });
    };

    var threeSpread = function(dir) {
      $(".three").playKeyframe({
        name: 'three-sequence',
        duration: '2s',
        timingFunction: 'linear',
        delay: '.2s',
        iterationCount: '1',
        direction: dir,
        fillMode: 'forwards',
        complete: function() {}
      });
    };

    var fourSpread = function(dir) {
      $(".four").playKeyframe({
        name: 'four-sequence',
        duration: '2s',
        timingFunction: 'linear',
        delay: '.2s',
        iterationCount: '1',
        direction: dir,
        fillMode: 'forwards',
        complete: function() {}
      });
    };

    var fiveSpread = function(dir) {
      $(".five").playKeyframe({
        name: 'five-sequence',
        duration: '2s',
        timingFunction: 'linear',
        delay: '.2s',
        iterationCount: '1',
        direction: dir,
        fillMode: 'forwards',
        complete: function() {}
      });
    };

    var sixSpread = function(dir) {
      $(".six").playKeyframe({
        name: 'six-sequence',
        duration: '2s',
        timingFunction: 'linear',
        delay: '.2s',
        iterationCount: '1',
        direction: dir,
        fillMode: 'forwards',
        complete: function() {}
      });
    };

    var animeThis = function(elem, animationName, dur, tFunc, d, iterCount, dir, fMode, completeFunc) {
      $(elem).playKeyframe({
        name: animationName,
        duration: dur,
        timingFunction: tFunc,
        delay: d,
        iterationCount: iterCount,
        direction: dir,
        fillMode: fMode,
        complete: function() {
          completeFunc();
        }
      });
    };

    pauseRotate();

    $('#area-loc').keypress(function(e) {
      if (e.which == 13) {
        $('.sw').trigger('click');
        return false;
      }
    })

    $(".sw").on('click', function() {

      pauseRotate();

      if (state === false) {
        animeThis(".cube", 'rotate', '20s', 'linear', '0s', 'infinite', 'normal', 'forwards', function() {});

        /*   $(".cube").playKeyframe({
          name: 'rotate', 
          duration: '20s', 
          timingFunction: 'linear',
          delay: '0s', 
          iterationCount: 'infinite', 
          direction: 'normal',
          fillMode: 'forwards', 
          complete: function() {
          } 
        }); */

      }

      var location = document.getElementById('area-loc').value;

      /* 
       $(".one, .two, .three").playKeyframe({
        name: 'faceswap', 
        duration: '3s', 
        timingFunction: 'linear',
        delay: '0s', 
        iterationCount: 'infinite',
        direction: 'normal', 
        fillMode: 'forwards',
        complete: function() { } 
      });
      */

      $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + location + '&units=metric&appid=75a1c8d3035466f613344e7c13d2d4ad', function(data) {

        temp = data.main.temp;
        window.setTimeout(function() {
          $(".one").html('<div id="one" class="animated fadeIn text-center">Weather<h3>' + data.weather[0].main + ', ' + data.weather[0].description + "</h3></div>");

          $(".temp-two").html('<div id="two" class="animated fadeIn text-center">Temperature <h3>' + data.main.temp + ' C</h3> </div>');
          $(".cu").removeClass("hidden");

          $(".four").html('<div id="four" class="animated fadeIn text-center"> Humidity <h4>' + data.main.humidity + ' %</h4>Cloudiness<h4>' + data.clouds.all + ' %</h4> </div>');

          $(".five").html('<div id="five" class="animated fadeIn text-center" > ' + '<h3>' + data.name + '</h3>' + '<img style="height:110px; width:auto;" src="http://openweathermap.org/img/w/' + data.weather[0].icon + '.png">' + "</div>");

          $(".three").html('<div id="three" class="animated fadeIn text-center"> Wind speed <h4>' + data.wind.speed + ' m/s </h4>Wind direction<h4>' + data.wind.deg + ' deg</h4> </div>');

          if (data.hasOwnProperty("rain")) {
            $(".six").html('<div id="six" class="animated fadeIn text-center">Rain vol. in last 3 hours <h4>' + data.rain["3h"] + ' mm</h4> </div>');
          } else {
            $(".six").html('<div id="six" class="animated fadeIn text-center">Rain vol. in last 3 hours <h4> No Rain </h4> </div>');
          }

          $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + location + '&units=imperial&appid=75a1c8d3035466f613344e7c13d2d4ad', function(data) {

            fahrenheit = data.main.temp;
          });
        }, 2500);
      });

    });

    $(".cu").on('click', function() {
      var location = document.getElementById('area-loc').value;
      if (tstate === false) {

        $(".temp-two").html('<div id="two" class="animated fadeIn text-center">Temperature <h3>' + fahrenheit + ' F</h3> </div>');
        tstate = true;

      } else {
        $(".temp-two").html('<div id="two" class="animated fadeIn text-center">Temperature <h3>' + temp + ' C</h3> </div>');
        tstate = false;
      }
    });

    $(".viewport").on('click', function() {

      if (jQuery(window).width() >= 500) {

        if (state === true) {
          //getFlat('normal');
          // $(".cube").resetKeyframe(function(){})
          oneSpread('normal');
          twoSpread('normal');
          threeSpread('normal');
          fourSpread('normal');
          fiveSpread('normal');
          sixSpread('normal');

          state = false;
          animeThis(".cube", 'rotate', '8s', 'ease', '0s', '1', 'normal', 'forwards', function() {
            $(".cube").resetKeyframe(function() {});
          });

          /*  $(".cube").playKeyframe({
              name: 'rotate',
              duration: '20s',
              timingFunction: 'linear',
              delay: '0s',
              iterationCount: '1',
              direction: 'normal',
              fillMode: 'forwards',
              complete: function() {
              
                 $(".cube").resetKeyframe(function(){})

              }
            }); */

        }

      }

      if (jQuery(window).width() < 500) {
         state = false; //crucial for continuing spinning after sw click
        $(".cube").resetKeyframe(function() {});
        $('.cube').css("transform", "rotateX(" + rotitX + "deg) rotateY(" + rotitY + "deg)");
        console.log(rotitX + ' ' + rotitY);

        if (rotitX > -90 && rotStat === false) {
          rotitX -= 90;
        } else if (rotitX == -90) {
          rotitX = 0;
          rotStat = true;
        }

        if (rotitY < 360 && rotStat === true) {

          if (rotitX == 0 && rotitY == 180 && rotStat === true) {
            rotitX += 90;
          } else if (rotitX == 90 && rotitY == 180 && rotStat === true) {
            rotitX -= 90;
            rotitY += 90;
          } else {
            rotitY += 90;
          }
        } else if (rotitY == 360) {
          rotitY = 0;
          rotStat = false;
        }

      }

    });

  })
  /*
   $(".face").playKeyframe({
      name: 'faceswap', // name of the keyframe you want to bind to the selected element
      duration: '1s', // [optional, default: 0, in ms] how long you want it to last in milliseconds
      timingFunction: 'linear', // [optional, default: ease] specifies the speed curve of the animation
      delay: '0s', //[optional, default: 0s]  how long you want to wait before the animation starts
      iterationCount: 'infinite', //[optional, default:1]  how many times you want the animation to repeat
      direction: 'normal', //[optional, default: 'normal']  which direction you want the frames to flow
      fillMode: 'forwards', //[optional, default: 'forward']  how to apply the styles outside the animation time, default value is forwards
      complete: function() {
        
         //$(".two").resetKeyframe(function(){});
        
      } //[optional] Function fired after the animation is complete. If repeat is infinite, the function will be fired every time the animation is restarted.
    });

  */

/*
$(function() {

  var el = document.createElement('div'),
    transformProps = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' '),
    transformProp = support(transformProps),
    transitionDuration = 'transitionDuration WebkitTransitionDuration MozTransitionDuration OTransitionDuration msTransitionDuration'.split(' '),
    transitionDurationProp = support(transitionDuration);

  function support(props) {
    for (var i = 0, l = props.length; i < l; i++) {
      if (typeof el.style[props[i]] !== "undefined") {
        return props[i];
      }
    }
  }

  var mouse = {
    start: {}
  };
  var touch = document.ontouchmove !== undefined;
  var viewport = {
    x: -10,
    y: 20,
    el: $('.cube')[0],
    move: function(coords) {
      if (coords) {
        if (typeof coords.x === "number") this.x = coords.x;
        if (typeof coords.y === "number") this.y = coords.y;
      }

      this.el.style[transformProp] = "rotateX(" + this.x + "deg) rotateY(" + this.y + "deg)";
    },
    reset: function() {
      this.move({
        x: 0,
        y: 0
      });
    }
  };

  viewport.duration = function() {
    var d = touch ? 50 : 500;
    viewport.el.style[transitionDurationProp] = d + "ms";
    return d;
  }();

  $(document).bind('mousedown touchstart', function(evt) {
    
    delete mouse.last;
    
    if ($(evt.target).is('a, iframe')) {
      return true;
    }

    evt.originalEvent.touches ? evt = evt.originalEvent.touches[0] : null;
    mouse.start.x = evt.pageX;
    mouse.start.y = evt.pageY;
    $(document).bind('mousemove touchmove', function(event) {
      // Only perform rotation if one touch or mouse (e.g. still scale with pinch and zoom)
      if (!touch || !(event.originalEvent && event.originalEvent.touches.length > 1)) {
        event.preventDefault();
        // Get touch co-ords
        event.originalEvent.touches ? event = event.originalEvent.touches[0] : null;
        $('.viewport').trigger('move-viewport', {
          x: event.pageX,
          y: event.pageY
        });
      }
    });

    $(document).bind('mouseup touchend', function() {
      $(document).unbind('mousemove touchmove');
    });
  });

  $('.viewport').bind('move-viewport', function(evt, movedMouse) {

    // Reduce movement on touch screens
    var movementScaleFactor = touch ? 4 : 1;

    if (!mouse.last) {
      mouse.last = mouse.start;
    } else {
      if (forward(mouse.start.x, mouse.last.x) != forward(mouse.last.x, movedMouse.x)) {
        mouse.start.x = mouse.last.x;
      }
      if (forward(mouse.start.y, mouse.last.y) != forward(mouse.last.y, movedMouse.y)) {
        mouse.start.y = mouse.last.y;
      }
    }

    viewport.move({
      x: viewport.x + parseInt((mouse.start.y - movedMouse.y) / movementScaleFactor),
      y: viewport.y - parseInt((mouse.start.x - movedMouse.x) / movementScaleFactor)
    });

    mouse.last.x = movedMouse.x;
    mouse.last.y = movedMouse.y;

    function forward(v1, v2) {
      return v1 >= v2 ? true : false;
    }
  });

 

});
*/