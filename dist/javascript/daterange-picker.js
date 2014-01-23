/*
 *  jQuery date range picker - v0.1
 *  A date range picker based on Google Analytics.
 *  http://diacode.com/daterange-picker
 *
 *  Made by Víctor Viruete
 *  Under MIT License
 */
(function() {
  (function($, window, document) {
    var Plugin, defaults, pluginName;
    pluginName = "dateRangePicker";
    defaults = {
      property: "value"
    };
    Plugin = (function() {
      function Plugin(element, options) {
        this.element = element;
        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
      }

      Plugin.prototype.init = function() {
        return console.log("xD");
      };

      Plugin.prototype.yourOtherFunction = function() {};

      return Plugin;

    })();
    return $.fn[pluginName] = function(options) {
      return this.each(function() {
        if (!$.data(this, "plugin_" + pluginName)) {
          return $.data(this, "plugin_" + pluginName, new Plugin(this, options));
        }
      });
    };
  })(jQuery, window, document);

}).call(this);
