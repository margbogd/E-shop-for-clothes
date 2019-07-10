app.service('ClothesService', function() {


    //fake DB
    this.clothes = [
                    {
                        id: "100232325",
                        url: "https://makeupworld.gr/image/cache/Katigories/Woman/Ypokatigories/%20%CE%A1%CE%BF%CF%8D%CF%87%CE%B1-200x200.jpg",
                        category: "Female",
                        name: "Red Dress",
                        description: "Red dress for special cases.",
                        color: "Red dress",
                        size: "XS, S, M, L, XL",
                        price: "$19.99"
                    },
                    {
                        id: "100232326",
                        url: "http://www.northlondonboilerrepair.co.uk/bmz_cache/a/DOUDOULU%20Women%20Clothes%20Birds%20and%20Flowers%20Print%20Sleeveless%20Jumpsuit%20summer%20Clubwear%20Wide%20Leg%20Pants%20Ladies%20Elegant%20Clothing%20SS%20ali-18587806_4_200x200.jpg",
                        category: "Female",
                        name: "Floral Trousers",
                        description: "Pink floral trousers for your casual spring mood.",
                        color: "Pink",
                        size: "S, M, L",
                        price: "$15.99"
                    },
                    {
                        id: "10023342",
                        url: "https://dekathlo.gr/wp-content/uploads/sites/10/2019/02/Under-Armour-1328964-001-0-200x200.jpg",
                        category: "Female",
                        name: "Black T-shirt",
                        description: "Summer black t-shirt.",
                        color: "Black",
                        size: "S, L",
                        price: "$29.99"
                    },
                    {
                        id: "10023442",
                        url: "http://www.markbergerchicago.com/image/cache/data/category_36/casual-cotton-new-women-clothes-long-sleeve-hoodie-sweatshirt-jumper-sweater-pullove-3820-200x200_0.jpg",
                        category: "Female",
                        name: "Sweatshirt",
                        description: "New warm pink hoodie pullover with Drake print.",
                        color: "Pink",
                        size: "S, M, L, XL",
                        price: "$29.99"
                    },
                    {
                        id: "10023455",
                        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiuhMjBqLyfXXK0AHx84A9FKLSQM90YqBYrmDE7k2M0wzkWgLhCA",
                        category: "Female",
                        name: "Maxi Dress",
                        description: "Maxi beautiful summer dress with floral details.",
                        color: "Blue Royal",
                        size: "M, L",
                        price: "$39.99"
                    },
                    {
                        id: "10023456",
                        url: "https://images-na.ssl-images-amazon.com/images/I/71WVQWLIiWL._AC_UL200_SR200,200_.jpg",
                        category: "Female",
                        name: "Black Dress",
                        description: "Black dress with details for every occasion.",
                        color: "Black",
                        size: "XS, S, M, L",
                        price: "$15.99"
                    },
                    {
                        id: "10023477",
                        url: "https://www.dressinn.com/l/13718/137182351/calvin-klein-j20j209556.jpg",
                        category: "Female",
                        name: "Grey fitness form",
                        description: "Grey fitness form.",
                        color: "Grey",
                        size: "M, L, XL",
                        price: "$17.99"
                    },
                    {
                        id: "10023556",
                        url: "https://ae01.alicdn.com/kf/HTB1jFB5X5HrK1Rjy0Flq6AsaFXag/Womens-Tops-And-Blouses-Vintage-Button-Plaid-Long-Sleeve-Blouse-2018-Women-Clothes-Streetwear-Ladies-Tops.jpg_200x200.jpg",
                        category: "Female",
                        name: "Black Dress with Details",
                        description: "Black dress will keep you warm.",
                        color: "Black",
                        size: "M, L, XL",
                        price: "$17.99"
                    },
                    {
                        id: "10023559",
                        url: "https://ae01.alicdn.com/kf/HTB1bPubXPvuK1Rjy0Faq6x2aVXa2/2019-Spring-Print-Vintage-Dress-Women-Clothes-50s-60s-Square-Collar-A-Line-Swing-Retro-Party.jpg_640x640.jpg",
                        category: "Female",
                        name: "Black dress with details",
                        description: "Black dress with details for everyday.",
                        color: "Black",
                        size: "XS, S, M, L, XL",
                        price: "$9.99"
                    },
                    {
                        id: "10023519",
                        url: "https://ae01.alicdn.com/kf/HTB1TqOBGv5TBuNjSspmq6yDRVXaG/Casual-High-Waist-Wide-Leg-Pants-Women-Clothes-2018-New-Ladies-Lace-Up-Loose-Trousers-Female.jpg_200x200.jpg",
                        category: "Female",
                        name: "Casual High Pants",
                        description: "Casual high pink pants for every occasion.",
                        color: "Pink",
                        size: "S, M, L, XL",
                        price: "$19.99"
                    },
                    {
                        id: "10023588",
                        url: "https://www.dhresource.com/200x200s/f2-albu-g6-M01-33-C7-rBVaR1szaaGAXMF0AANW0EqY9CQ466.jpg/summer-dress-women-clothing-2018-korean-2.jpg",
                        category: "Female",
                        name: "Navy Dress",
                        description: "Navy grey-blue dress with details.",
                        color: "Grey-blue",
                        size: "S, M",
                        price: "$14.99"
                    },
                    {
                        id: "10023678",
                        url: "https://img1.cfcdn.club/79/8c/79d85b8609a7c88db19e949984333c8c_200x200.jpg",
                        category: "Male",
                        name: "Green Jacket",
                        description: "Warm winter jacket.",
                        color: "Green",
                        size: "S, M, L",
                        price: "$39.99"
                    },
                    {
                        id: "10023688",
                        url: "https://cdn.shopify.com/s/files/1/2168/9863/products/2018-New-Autumn-Fashion-Brand-Men-Clothes-Slim-Fit-Men-Long-Sleeve-Shirt-Men-Polka-Dot_d672691a-6a03-446b-9c17-b3f3be3b2df7_200x200.jpg?v=1525731575",
                        category: "Male",
                        name: "Red Shirt",
                        description: "Red shirt with details.",
                        color: "Red",
                        size: "S, M, L, XL",
                        price: "$25.99"
                    },
                    {
                        id: "10023598",
                        url: "https://img1.cfcdn.club/63/3a/63d07cbc48a57d6216804b658bd9b23a_200x200.jpg",
                        category: "Male",
                        name: "Shirt",
                        description: "New Collection Shirt.",
                        color: "Black",
                        size: "M, L, XL",
                        price: "$19.99"
                    },
                    {
                        id: "10023509",
                        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCW59BwT4ZVcqKzex8nKVLbJtkDTF7MtUl3oIZhWTpMjQTHq2rfQ",
                        category: "Male",
                        name: "Gray Trousers",
                        description: "Athletic trousers.",
                        color: "Pink",
                        size: "S, M",
                        price: "$19.99"
                    },
                    {
                        id: "10023907",
                        url: "https://sc02.alicdn.com/kf/HTB1ZBM8j46I8KJjy0Fgq6xXzVXau/Dubai-Wholesale-Rock-Men-Clothes-100-Organic.jpg_200x200.jpg",
                        category: "Male",
                        name: "Habibi Dubai T-shirt",
                        description: "Habibi Dubai t-shirt.",
                        color: "White",
                        size: "S, M, L, XL",
                        price: "$12.99"
                    },
                    {
                        id: "10023450",
                        url: "https://www.dhresource.com/200x200s/f2-albu-g7-M01-51-BD-rBVaSVrexB-ALy90AAFx4UC1nXQ543.jpg/athletic-men-women-jacket-fall-casual-sports.jpg",
                        category: "Male",
                        name: "Athletic Jacket",
                        description: "Blue & black winter jacket.",
                        color: "Blue",
                        size: "S, M, L",
                        price: "$59.99"
                    },
                    {
                        id: "10023468",
                        url: "https://ae01.alicdn.com/kf/HTB1utKUdi6guuRkSnb4q6zu4XXan/Men-s-Cargo-Pants-Casual-Mens-Pants-Multi-Pocket-Military-Overall-Men-Outdoors-Men-Clothes-2019.jpg_200x200.jpg",
                        category: "Male",
                        name: "Casual Pants",
                        description: "Casual black pants.",
                        color: "black",
                        size: "XS, S, M, L, XL",
                        price: "$17.99"
                    },
                    {
                        id: "10023340",
                        url: "https://www.dhresource.com/200x200s/f2-albu-g6-M01-02-E3-rBVaR1tUI8CAY7zIAAC9Hvu_Xu8955.jpg/men-fashion-nerd-shirt-mens-printed-t-shirt.jpg",
                        category: "Male",
                        name: "Office T-shirt",
                        description: "Grey t-shirt with office style print.",
                        color: "Grey",
                        size: "XS, S, M, L, XL",
                        price: "$19.99"
                    },
                    {
                        id: "10023500",
                        url: "https://www.dhresource.com/200x200s/f2-albu-g5-M01-A7-27-rBVaI1m7kjmAcxe_AAIpm7Z69kM529.jpg/2018-diy-men-clothes-t-shirttropical-turtle.jpg",
                        category: "Male",
                        name: "Blue T-shirt",
                        description: "Blue t-shirt with black print.",
                        color: "Blue",
                        size: "S, M, L",
                        price: "$12.99"
                    },
                    {
                        id: "10023309",
                        url: "https://ae01.alicdn.com/kf/HTB1UIZAd8cXBuNjt_Xoq6xIwFXah/Hip-hop-Plus-Size-XS-4XL-cat-men-clothes-Hoodies-man-Sweatshirt-long-sleeve-Winter-Warm.jpg_200x200.jpg",
                        category: "Male",
                        name: "Sweatshirt with print",
                        description: "Grey sweatshirt with panda print.",
                        color: "Grey",
                        size: "M, L, XL",
                        price: "$19.99"
                    },
                    {
                        id: "10023288",
                        url: "https://i.pinimg.com/236x/8e/a6/66/8ea6660a14149719529b27e1dc2e943b--tee.jpg",
                        category: "Male",
                        name: "Green T-shirt",
                        description: "Green t-shirt with print.",
                        color: "Green",
                        size: "S, XL",
                        price: "$9.99"
                    }
                ];

    // Get clothes
    this.getAll = function(filter = 'Female') {
        return this.clothes.filter(element => element.category === filter);
    }
    this.get = function(id) {
        for (let cloth of this.clothes) {
            if (cloth.id === id) return cloth;
        }
        return null;
    }
});
