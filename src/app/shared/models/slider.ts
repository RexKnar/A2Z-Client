// Home Slider
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

export class Slider {
    id: number;
    navigationUrl: string;
    imageUrl: string;
    discountText: string;
    discountCategory: string;
    location: string;
}