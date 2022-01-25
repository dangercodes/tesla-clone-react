//assigning location variable
const location = window.location.pathname;

//Javascript split method to get the name of the path in array
const splitLocation = location.split("/");
// console.log(splitLocation[1])

const ConfigSidebarAccount = [
        {id: "1", menu: "Dashboard", link: "/teslaaccount", class:splitLocation[1] === "teslaaccount" ? "active" : "", icon: "HomeOutlinedIcon"}, 
        {id: "2", menu: "Profile Settings", link: "/profilesettings", class:splitLocation[1] === "profilesettings" ? "active" : "", icon: "PermIdentityOutlinedIcon"},
        {id: "3", menu: "Payment Method", link: "/payment-method", class:splitLocation[1] === "payment-method" ? "active" : "", icon: "PaymentOutlinedIcon"},
        {id: "4", menu: "Charging", link: "/", class:splitLocation[1] === "charging" ? "active" : "", icon: "BoltOutlinedIcon"},
        {id: "5", menu: "Order History", link: "/", class:splitLocation[1] === "order-history" ? "active" : "", icon: "ShoppingBagOutlinedIcon"}];

export { ConfigSidebarAccount }