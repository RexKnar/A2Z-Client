export let ProductSlider: any = {
    loop: true,
    dots: false,
    autoplay: true,
    navSpeed: 2000,
    responsive: {
        991: {
            items: 4
        },
        767: {
            items: 3
        },
        420: {
            items: 2
        },
        0: {
            items: 1
        }
    }
};
export let HomeSlider: any = {
    loop: true,
    nav: true,
    dots: false,
    navContainerClass: 'owl-nav',
    navClass: ['owl-prev', 'owl-next'],
    navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
    responsive: {
        0: {
            items: 1
        },
        400: {
            items: 1
        },
        740: {
            items: 1
        },
        940: {
            items: 1
        }
    },
};
export let ProductDetailsMainSlider: any = {
    items: 1,
    nav: false,
    dots: false,
    autoplay: false,
    slideSpeed: 300,
    loop: true
};
export let ProductDetailsThumbSlider: any = {
    items: 3,
    loop: true,
    margin: 10,
    dots: false
};
