<script type="text/javascript">
  $(document).ready(function() {
    $(".slider").each(function () { // обрабатываем каждый слайдер
      var obj = $(this);
      $(obj).append("<div class='nav'></div>");
      $(obj).find("li").each(function () {
      $(obj).find(".nav").append("<span rel='"+$(this).index()+"'></span>"); // добавляем блок навигации
      $(this).addClass("slider"+$(this).index());
      });
      $(obj).find("span").first().addClass("on"); // делаем активным первый элемент меню
   });
  });

  function sliderJS (obj, sl) { // slider function
   var ul = $(sl).find("ul"); // находим блок
   var bl = $(sl).find("li.slider"+obj); // находим любой из элементов блока
   var step = $(bl).width(); // ширина объекта
   $(ul).animate({marginLeft: "-"+step*obj}, 500); // 500 это скорость перемотки
  }
  $(document).on("click", ".slider .nav span", function() { // slider click navigate
   var sl = $(this).closest(".slider"); // находим, в каком блоке был клик
   $(sl).find("span").removeClass("on"); // убираем активный элемент
   $(this).addClass("on"); // делаем активным текущий
   var obj = $(this).attr("rel"); // узнаем его номер
   sliderJS(obj, sl); // слайдим
   return false;
  });
  // var width = 703;
  // var carousel = document.getElementByClass('k-page__carousel');
  // var list = carousel.querySelector('ul');
  // var listElem = carousel.querySelectorAll('li');
  // var position = 0;
  //
  // carousel.querySelector('.prev').onclick = function() {
  //   position = Math.min(position + width, 0);
  //   list.style.marginLeft = position + 'px';
  // }
  //
  // carousel.querySelector('.next').onclick = function() {
  //   position = Math.min(position - width, -width * (listElems.length - 1));
  //   list.style.marginLeft = position + 'px';
  // }
</script>

div.k-page__carousel .nav {
  position: absolute;;
  left: 15px;
  bottom: 12px;
}

.k-page__carousel .nav span {
  opacity: 0.9;
  background: #fff;
  margin: 0 8px 0 0;
  width: 16px;
  height: 16px;
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;
  display: block;
  float: left;
  box-shadow: 0 1px 2px #000;
}

.k-page__carousel .nav span.on {
  background: blue;
}



function drawArrow(){

}
