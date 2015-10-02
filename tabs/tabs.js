(function($){
  $.Tabs = function (el) {
    this.$el = $(el);
    this.$contentTabs = $(this.$el.data("content-tabs"));
    this.$activeTab = this.$contentTabs.find(".active");
    this.bindEvents();
  };

  $.Tabs.prototype.bindEvents = function () {
    this.$el.on("click", "a", this.clickTab.bind(this));
  };

  $.Tabs.prototype.clickTab = function (e) {
    var $makeActive = $($(e.currentTarget).attr('href'));
    this.$activeTab.removeClass("active");
    this.$activeTab.addClass("transitioning");

    this.$activeTab.one("transitionend", transitionOut.bind(this));



    function transitionOut (e) {
      this.$activeTab.removeClass("transitioning");
      $makeActive.addClass("active transitioning"); //.removeClass("transitioning");
      setTimeout(function(){
        $makeActive.removeClass("transitioning");
        this.$activeTab = $makeActive;
      }.bind(this), 0);
    }
  };

  $.fn.tabs = function () {
    return this.each(function () {
      new $.Tabs(this);
    });
  };

})(jQuery);
