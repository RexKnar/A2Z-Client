export const ROUTE_CONFIG = {
    baseUrl: "http://a2zkumari-001-site1.atempurl.com/api"
};
export const FOOTER_API_CONFIG = {
    topSellingCategoryURL: "/Category/GetTopSellingCategory/5",
    subscriptionURL: "/Subscription/PostSubscription"
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
    // ProductListURL: "assets/product.json",
    ProductListURL: "/Product/GetProductsList"

};
export const CART_API_CONFIG = {
    AddToCartURL: "/Cart/AddCartByUserId",
    GetCartItemsURL: "/Cart/GetCartByUserId",
    UpdateCartItemsURL: "/Cart/UpdateCartByCartId",
    RemoveCartItemsURL: "/Cart/DeleteCartByCartId"
};
export const WISHLIST_API_CONFIG = {
    GetWishlistItemsURL: "/Wishlist/GetWhishlistByUserId",
    AddToWishlistURL: "/Wishlist/AddToWhishlistByUserId",
    UpdateWishlistItemsURL: "/Wishlist/UpdateWhishlistByUserIdAndWhishlistId",
    RemoveWishlistItemsURL: "/Wishlist/DeleteWhishlistByWhishlistId?id="
};
export const SLIDER_API_CONFIG = {
    SliderURL: "/Banner/GetBannerByBannerLocation/"
};
export const USER_LOGIN_API_CONFIG = {
    loginPageURL: "/User/Login",
    registerPageURL: "/User/Registration",
    verifyUserURL: "/User/VerifyOtp",
    resendOtpURL: "/User/ResendOtp",
    forgotPasswordURL: "/User/ForgotPassword",
    changePasswordURL: "/User/ChangePassword",
    changeNumberRequestURL: "/User/UserNameChangeRequest?userName=",
    updateNumberURL: "/User/ChangeUserName"
};
export const PROFILE_API_CONFIG = {
    updateUserProfileURL: "/Profile/UpdateProfileByProfileIdAndUserId",
    getUserprofileURL: "/Profile/GetProfileByUserId"
};
export const ADDRESS_API_CONFIG = {
    addUserAddressURL: "/Address/AddNewAddress",
    getUserAddressURL: "/Address/GetAddressByUserId",
    getUserCurrrentAddressURL: "/Address/GetAddressByUserId?id=",
    updateAddressURL: "/Address/UpdateAddressByAddressId",
    deleteAddressURL: "/Address/DeleteAddressByAddressId?id=",
    defaultAddressURL: "/Address/MakeDefaultAddressById?id="
};
export class Apiresponce {
    responseCode: string;
}
