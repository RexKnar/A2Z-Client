export const ROUTE_CONFIG = {
    baseUrl: "http://kumaria2z-001-site1.ftempurl.com/api"
};
export const FOOTER_API_CONFIG = {
    topSellingCategoryURL: "/Category/GetTopSellingCategory/5",
    subscriptionURL: "/Subscription"
};
export const HEADER_API_CONFIG = {
    menuCategoryURL: "/Category/GetMenuCategories"
};
export const BANNER_API_CONFIG = {
    BannerURL: "/Banner/GetBannerByBannerLocation/"
};
export const PRODUCT_API_CONFIG = {
    TopSellingProductURL: "/Product/GetTopSellingProducts/",
    ProductDetailsURL: "/Product/GetProductDetailsByProductId/",
    reviewsRatingURL: "/Rating/AddRatingByStockIdandUserId",
    AddToCartURL: "/Cart/AddCartByUserId",
    AddToWishlistURL: "/Wishlist/AddToWhishlistByUserId",
    ProductListURL: "assets/product.json"
};
export const SLIDER_API_CONFIG = {
    SliderURL: "/Banner/GetBannerByBannerLocation/"
};
export class Apiresponce {
    responseCode: string;
}
