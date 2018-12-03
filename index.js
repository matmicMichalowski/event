function dragElement(element) {
    var init,
        start, stop, move,
        _x, _y,
        active = false,
        drag = element,
        con = document.getElementById('cubes');
    
    init = function() {
      // Mouse Events
      drag.addEventListener('mousedown', start, false);
      document.documentElement.addEventListener('mousemove', function(event) {
        if (active === true) {
          move(event);
        }
      });
      document.documentElement.addEventListener('mouseup', function(event) {
        stop(event.originalEvent);
      });
    };
  
    start = function(e) {
      e.preventDefault();
      // mouse pos
      var Mx = e.clientX,
          My = e.clientY,
          l = drag.getBoundingClientRect().left,
          t = drag.getBoundingClientRect().top;
      // offset 
      _x = Mx - l;
      _y = My - t;
      return active = true;
    };
  
    move = function(e) {
      e.preventDefault();
      var Mx = e.clientX,
          My = e.clientY,
          l = drag.getBoundingClientRect().left,
          t = drag.getBoundingClientRect().top,
          w = drag.getBoundingClientRect().width,
          h = drag.getBoundingClientRect().height,
          _l = con.getBoundingClientRect().left,
          _t = con.getBoundingClientRect().top,
          _w = con.getBoundingClientRect().width,
          _h = con.getBoundingClientRect().height,
          x, y;
      //check to see if mouse is inside container
      if (Mx - _x > _l && Mx + w - _l < _w + _x) {
        // x = mouseX - offsetX - containerX
        x = Mx - _x - _l ;
      }
      if (My - _y > _t && My + h - _t < _h + _y) {
        // y = mouseY - offsetY - containerY
        y = My - _y - _t;
      }
      return drag.style.left = x + 'px', drag.style.top = y + 'px';
    };
  
    stop = function() {
      return active = false;
    };
  
    init();
  }
  
  ///////////////////////////////
  // -------  rotate  -------- //
  ///////////////////////////////
  
  function rotateElement(element) {
    var init, rotate, start, stop,
      active = false,
      angle = 0,
      rotation = 0,
      startAngle = 0,
      center = {
        x: 0,
        y: 0
      },
      R2D = 180 / Math.PI,
      rot = element;
  
    init = function() {
      rot.addEventListener("mousedown", start, false);
      document.documentElement.addEventListener('mousemove', function(event) {
        if (active === true) {
          event.preventDefault();
          rotate(event);
        }
      });
      document.documentElement.addEventListener('mouseup', function(event) {
        event.preventDefault();
        stop(event);
      });
    };
  
    start = function(e) {
      e.preventDefault();
      var bb = this.getBoundingClientRect(),
        t = bb.top,
        l = bb.left,
        h = bb.height,
        w = bb.width,
        x, y;
      center = {
        x: l + (w / 2),
        y: t + (h / 2)
      };
      x = e.clientX - center.x;
      y = e.clientY - center.y;
      startAngle = R2D * Math.atan2(y, x);
      return active = true;
    };
  
    rotate = function(e) {
      e.preventDefault();
      var x = e.clientX - center.x,
        y = e.clientY - center.y,
        d = R2D * Math.atan2(y, x);
      rotation = d - startAngle;
      return rot.style.webkitTransform = "rotate(" + (angle + rotation) + "deg)";
    };
  
    stop = function() {
      angle += rotation;
      return active = false;
    };
  
    init();

  }