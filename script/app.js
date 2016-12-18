$(document).ready(function() {
  var obj, img_set;
  $("#slider-prev").click(function(){
    img_set = document.getElementsByClassName('k-slider__img');
    obj = img_set[5];
    $(img_set[2]).animate({opacity: '0.5'}, 1000);
    $(img_set[1]).animate({opacity: '1'}, 1000);
    $(obj).remove();
    $(".k-container").prepend(obj);
    $(".k-container").css("left", "-=713");
    $(obj).animate({opacity: '0.5'}, 1000);
    $(".k-container").animate({left: '+=713'}, 1000);

  });
  $("#slider-next").click(function(){
    img_set = document.getElementsByClassName('k-slider__img');
    obj = img_set[0];
    $(img_set[2]).animate({opacity: '0.5'}, 1000);
    $(img_set[3]).animate({opacity: '1'}, 1000);
    $(obj).remove();
    $(".k-container").append(obj);
    $(".k-container").css("left", "+=713");
    $(obj).animate({opacity: '0.5'}, 1000);
    $(".k-container").animate({left: '-=713'}, 1000);
  });
});

$(document).ready(function(){
  $(".k-green-button").mouseenter(function(){
    $(".k-button-ellipse__img").animate({
      left: '+=10px',
      opacity: '0.3'
    });
    $(".k-green-button-text").animate({opacity: '0.5'})
    $(".k-button-ellipse__img").animate({
      left: '-=10px',
      opacity: '1'
    });
    $(".k-green-button-text").animate({opacity: '1'})
  });
});

$(document).ready(function(){
  $("#pink-glass").click(function(){
    $("#glass-color").text("розовый");
    $("#glass-image").html('<img class="k-main__img-glass" src="images/pink.png" width="164" height="164">');
  });
  $("#blue-glass").click(function(){
    $("#glass-color").text("синий");
    $("#glass-image").html('<img class="k-main__img-glass" src="images/blue.png" width="164" height="164">');
  });
  $("#orange-glass").click(function(){
    $("#glass-color").text("оранжевый");
    $("#glass-image").html('<img class="k-main__img-glass" src="images/orange.png" width="164" height="164">');
  });
  $("#green-glass").click(function(){
    $("#glass-color").text("зеленый");
    $("#glass-image").html('<img class="k-main__img-glass" src="images/green.png" width="164" height="164">');
  });
});
