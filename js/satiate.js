// Not used for now

var foodTemplate =
    '<div data-role="page" id="{{food}}" data-fullscreen="true" class="photo">\
      <div data-role="header" data-position="fixed">\
        <h1>{{food}}</h1>\
      </div> \
      <div class="photoZone"><img src="images/{{food}}.jpg" /></div>\
      <div data-role="footer" data-position="fixed">\
        <a href="#about">About Satiate</a>\
      </div>\
    </div>';

document.writeln($.mustache(foodTemplate, {food: "ding"}));
