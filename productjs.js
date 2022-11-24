// head
class product {
    constructor(img, status ,price ) {
        this.img = img;
        this.status= status;
        this.price= price;
    }
    getImg() {
        return this.img;
    }
    setImg(value) {
        this.img = value;
    }
    getStatus() {
        return this.status;
    }
    setStatus(value) {
        this.status = value;
    }
    getprice() {
        return this.price;
    }
    setPrice(value) {
        this.price = price ;
    }
}
var product0 = new product("./caseimg/1.jpg","THUÊ","300K/1day" ) ;
var product1 = new product("./caseimg/2.jpg","THUÊ","1000K/1day") ;
var product2 = new product("./caseimg/3.jpg","BÁN","1500K/1day") ;
var product3 = new product("./caseimg/4.jpg","THUÊ", "900K/1day");
var product5 = new product("./caseimg/5.jpg","THUÊ"," 950K/1day") ;
var product6 = new product("./caseimg/6.jpg", "BÁN", "700K/1day") ;
var product7 = new product("./caseimg/7.jpg", "THUÊ","1200K/1day") ;
var product8 = new product("./caseimg/10.jpg", "THUÊ","1450K/1day") ;

let productArr1 = [product0, product1,product2,product3,product6,product5,product7,product8];
var productArr0 = [product0, product1,product2];
var productArr2 = [product3, product6,product5];
var productArr3 = [product7, product8];
var productArr4 = [product2,product7];
function display(arr) {
  const editmang = document.getElementsByClassName("edit");
    let user = localStorage.getItem("user");
    if (user !== null) {
        document.getElementById("login").innerHTML = "<a>" + user + "</a>"
        document.getElementById("exitt").style.display = "block";
        document.getElementById("addproduct").style.display = "block";
        // // for (let i=0;i<editmang.length; i++) {
        // //     editmang.getElementsByClassName('edit')[i].style.display = "block";
        // //     editmang.getElementsByClassName('delet')[i].style.display = "block";
        //
        // }
    }
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        result +=
            "<ul class='listProduct'>" +

            "<li><img class='img-main' src='" + arr[i].getImg() + "' alt=''></li>" +

            "<li class='status'> <button class='btn-tt'> " + arr[i].getStatus() + "</button></li>" +

            "<li class='price' >" + arr[i].getprice() + "</li>" +

            "<li class='edit'> <button class='edittag' onclick='edit("+i +")'>" +"Edit" +" </button></li> " +

            "<li class='delet'> <button class='deletag' onclick='deleteProd("+i +")'>" +"Delete" +" </button>  </li>" +

            "</ul>"
    }
    document.getElementById("productMain").innerHTML = result;
}
function noibat() {
    display(productArr0)
}
function luachon() {
    display(productArr4)

}
function ngayle() {
    display(productArr2)

}
function sukien() {
    display(productArr3)

}
function allop() {
    display(productArr1)

}

    function edit(index) {
        let img = prompt("Input url");
        let status = prompt("status Rent Or Buy: ")
        let price = prompt("Input price:");
        productArr1[index] = new product(img, status, price);
        display(productArr1);
    }


function add() {
        let img = prompt("Input url");
        let input = prompt("status Rent Or Buy: ");
        let status = input.toUpperCase()
        let inputPrice = prompt("Input price:");
        let price = inputPrice.toUpperCase()
        let productNew = new product (img, status, price);
         productArr1.push(productNew);
        display(productArr1);
    }

    function deleteProd(index) {
        productArr1.splice(index,1);
        display(productArr1)
    }

