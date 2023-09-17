// page data
const data = { 
    imgs: {  
        profile_pic: "img/profilePic/review.png",
        page_pg: "img/background/bg.jpeg",
        payment_icon: "img/icon/payment_icon.png",
        vcard: "img/vcard.png",
    },
    payments: [
        {
            text: "",
            icon: "img/payment/vietcom.png",
        },
        {
            text: "",
            icon: "img/payment/techcom.png",
        },
        {
            text: "",
            icon: "img/payment/momo.png",
        },
       
    ],
    socials: [
        {
            text: "Follow trên Tiktok",
            link: "https://www.tiktok.com/@leanhreview2",
            icon: "img/icon/t.png",

        },
        {
            text: "Đăng ký Youtube",
            link: "https://youtube.com/@leanhreview",
            icon: "img/icon/y.png",

        },
        
        {
            text: "Đăng ký Facebook",
            link: "https://facebook.com/leanhreview",
            icon: "img/icon/f.png",

        },
        
        {
            text: "Liên hệ Messenger",
            link: "https://www.messenger.com/t/leanhreview",
            icon: "img/icon/m.png",

        },
    
    ]

}


// Thay đổi giá trị trong html có class là payment
data.payments.map(payment=> $('#payment-content')
             .append('<div class="card"><div class="card-body ">'
                     +'<img src="' + payment.icon + '" class="card-img-top rounded" alt=""></div></div>'));

// Thêm thành phần nút mạng xã hội trong html
data.socials.map(social => $('#social-buttons')
            .append('<a class="pulse-on-hover social-button" target="_blank" '
                    +'href="'+social.link +'"> <img class="icon-img" src="'
                    + social.icon+'" alt="" srcset=""></a>'));

// bg image
$('.bg-image').css('background-image', 'url('+data.imgs.page_pg+')');

// Payment
$('#payment-box').toggle();
$('#payment-box').on('click', function () {
    $('#payment-box').toggle();
});
$('.payment-button').on('click', function () {
    $('#payment-box').toggle();
});
