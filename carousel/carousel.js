(function ($) {
  $.Carousel = function (el) {
    this.$el = $(el);
    this.activeIdx = 0;
    this.$items = this.$el.children().first();
    this.$items.children().first().addClass("active");
    this.bindEvents();
  };

  $.Carousel.prototype.bindEvents = function(){
    var that = this;
    this.$el.find('.slide-left').on("click", function () {that.slide(-1);});
    this.$el.find('.slide-right').on("click", function () {this.slide(1);}.bind(this));
  };

  $.Carousel.prototype.slide = function(dir) {
    // if (this.transitioning) { return false; }
    // this.transitioning = true;

    $(".active").removeClass("active");
    // var prevIdx = this.activeIdx;
    var carLength = this.$items.children().length;
    this.activeIdx = (this.activeIdx + dir + carLength) % carLength;
    // this.activeIdx += dir;
    // if (this.activeIdx < 0) {
    //   this.activeIdx = carLength;
    // } else if (this.activeIdx > carLength) {
    //   this.activeIdx = 0;
    // }

    // $("ul li:nth-child("+ this.activeIdx +")").addClass("active");
    // debugger;
    var that = this;
    // $("ul li").eq(this.activeIdx).one("transitionend", function () {
    //   that.transitioning = false;
    // });
    var $newItem = $("ul li").eq(this.activeIdx);
    if (dir === -1){
      $newItem.addClass("active right");
      // $("ul li").eq(prevIdx).addClass("left");
      setTimeout(function(){
        $newItem.removeClass("right");
      }, 10);
    } else {
      $newItem.addClass("active left");
      // $("ul li").eq(prevIdx).addClass("right");
      setTimeout(function(){
        $newItem.removeClass("left");
      },10);
    }
  };

  $.fn.carousel = function(){
    return this.each(function(){ // this is jQuery obj
      new $.Carousel(this);      // this here is dom element
    });
  };
})(jQuery);
