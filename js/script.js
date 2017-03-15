//hamburger-menu

(function ($) {
    $(function () {
        var $header = $('#top-head');
        // Nav Fixed
        $(window).scroll(function () {
            if ($(window).scrollTop() > 350) {
                $header.addClass('fixed');
            } else {
                $header.removeClass('fixed');
            }
        });
        // Nav Toggle Button
        $('#nav-toggle').click(function () {
            $header.toggleClass('open');
        });
    });
})(jQuery);

//hamburger-menu

//more-height

$(document).ready(function () {
    $(".more_height").hide();
    var flg = "close";
    $(".button").click(function () {
        $(".more_height").slideToggle('normal');
        if (flg == "close") {
            $(this).text("× 閉じる");
            flg = "open";
        } else {
            $(this).text("さらに条件をしぼる");
            flg = "close";
        }
    });
});


//more-height

//slider

// $("#slider").rangeSlider();

//slider

//switch-div

$(function () {
    $('input[type=radio]').change(function () {
        $('#popular-talk, #recent-talk').removeClass('invisible');

        if ($("input:radio[name='switch']:checked").val() == "1") {
            $('#recent-talk').addClass('invisible');
        } else if ($("input:radio[name='switch']:checked").val() == "2") {
            $('#popular-talk').addClass('invisible');
        }
    });
});
//switch-div

//modal

//modal
$(function () {
    $("#login, #signup").click(function () {
        //キーボード操作などにより、オーバーレイが多重起動するのを防止する
        $(this).blur(); //ボタンからフォーカスを外す
        if ($("#modal-overlay")[0]) return false; //新しくモーダルウィンドウを起動しない (防止策1)
        //if($("#modal-overlay")[0]) $("#modal-overlay").remove() ;		//現在のモーダルウィンドウを削除して新しく起動する (防止策2)

        //オーバーレイを出現させる
        $("body").append('<div id="modal-overlay"></div>');
        $("#modal-overlay").fadeIn("slow");

        //コンテンツをセンタリングする
        centeringModalSyncer();

        //コンテンツをフェードインする
        $("#modal-content").fadeIn("slow");

        //[#modal-overlay]、または[#modal-close]をクリックしたら…
        $("#modal-overlay,#modal-close").unbind().click(function () {

            //[#modal-content]と[#modal-overlay]をフェードアウトした後に…
            $("#modal-content,#modal-overlay").fadeOut("slow", function () {

                //[#modal-overlay]を削除する
                $('#modal-overlay').remove();

            });

        });

    });

    //リサイズされたら、センタリングをする関数[centeringModalSyncer()]を実行する
    $(window).resize(centeringModalSyncer);

    //センタリングを実行する関数
    function centeringModalSyncer() {

        //画面(ウィンドウ)の幅、高さを取得
        var w = $(window).width();
        var h = $(window).height();

        // コンテンツ(#modal-content)の幅、高さを取得
        // jQueryのバージョンによっては、引数[{margin:true}]を指定した時、不具合を起こします。
        var cw = $("#modal-content").outerWidth({
            margin: true
        });
        var ch = $("#modal-content").outerHeight({
            margin: true
        });
        var cw = $("#modal-content").outerWidth();
        var ch = $("#modal-content").outerHeight();

        //センタリングを実行する
        $("#modal-content").css({
            "left": ((w - cw) / 2) + "px",
            "top": ((h - ch) / 3) + "px"
        });

    }

});

//modal

//switch-button

$(function () {
    $('#login-tab').click(function () {
        $('#login-modal').fadeIn('fast');
        $('#signup-modal').css('display', 'none');
    });
    $('#signup-tab').click(function () {
        $('signup-modal').fadeIn('fast');
        $('#login-modal').css('display', 'none');
    });
})

//switch-button