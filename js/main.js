// подсказки для форм (можноу удалить)

$(function(){
    var mr_input="input[type=text]";
    $(mr_input).each(function() {    $(this).data('stext',$(this).val());                                               });
    $(mr_input).focus(function(){	 $(this).val()==$(this).data('stext')  ?   $(this).val(''): "0";	               	});
    $(mr_input).blur(function() {    $(this).val().length<=0               ?   $(this).val($(this).data('stext')): "0"; });
});


$(".btn-popup").fancybox({
    "padding" : 0
});


timer();

// Подключние Яндекс-Карты

ymaps.ready(init);

function init () {
    var myMap1 = new ymaps.Map("map1", {
        center: [56.3112,44.0038],
        zoom: 14,
        controls: []
    });

    var myMap2 = new ymaps.Map("map2", {
        center: [56.3112,44.0038],
        zoom: 14,
        controls: []
    });

    myMap1.geoObjects
        .add(new ymaps.Placemark([56.3112,44.0038], {
            balloonContent: 'Нижний Новгород, Тверская,17. оф.15'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/placemark.png',
            iconImageSize: [45, 68],
            iconImageOffset: [-22, -69]
        }));

    myMap1.behaviors.disable('scrollZoom');

    myMap2.geoObjects
        .add(new ymaps.Placemark([56.3112,44.0038], {
            balloonContent: 'Нижний Новгород, Тверская,17. оф.15'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/placemark.png',
            iconImageSize: [45, 68],
            iconImageOffset: [-22, -69]
        }));

    myMap2.behaviors.disable('scrollZoom');
}



function timer() //в блоке таймера дописывайте содежрание блоков '00' !!!! тоесть <div class="day">00</div>
{
    var now = new Date();
    newDate = new Date((now.getMonth()+1)+"/"+now.getDate()+"/"+now.getFullYear()+" 23:59:59");
    var totalRemains = (newDate.getTime()-now.getTime());

    if (totalRemains>1)
    {
        var Days = (parseInt(parseInt(totalRemains/1000)/(24*3600)));
        var Hours = (parseInt((parseInt(totalRemains/1000) - Days*24*3600)/3600));
        var Min = (parseInt(parseInt((parseInt(totalRemains/1000) - Days*24*3600) - Hours*3600)/60));
        var Sec = parseInt((parseInt(totalRemains/1000) - Days*24*3600) - Hours*3600) - Min*60;
        if (Sec<10){Sec="0"+Sec}
        if (Min<10){Min="0"+Min}
        if (Hours<10){Hours="0"+Hours}
        if (Days<10){Days="0"+Days}
        $(".day").each(function() { $(this).text(Days); });
        $(".hour").each(function() { $(this).text(Hours); });
        $(".min").each(function() { $(this).text(Min); });
        $(".sec").each(function() { $(this).text(Sec); });
        setTimeout(timer, 1000);
    }
}



$(document).ready(function() {
    $('.clients__hide').hide();

    $('.clients_more').click(function(event) {
        event.preventDefault(); // Для того чтобы при нажатии на ссылку не кидало вверх
        $('.clients__hide').slideToggle();
        location.hash = this.hash;
    });

    if (location.hash == '.clients__hide') {
        $('.clients_more').click();
    }
});