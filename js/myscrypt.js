//event pada saat klik link
$('.page-scroll').on('click',function(e){
    //console.log('OK');
    //ambil isi href
    var tujuan = $(this).attr('href');
    //console.log(tujuan);
    // tangkap sectionya
    var elementTujuan = $(tujuan);
    console.log("body scrolltop " + $('body').scrollTop());
     // $('body').scrollTop('700');//
     // $('body').scrollTop(elementTujuan.offset().top)

    // $('body').animate({
    //   scrollTop: elementTujuan.offset().top-50
    // },1000,'swing');

    e.preventDefault();
})
