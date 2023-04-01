const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = documentElementById("company-list");
    const product = document.querySelectorAll(".company");
    const cname = document.getElementByTagName("h2");

    for(var i = 0; i < cname.length; i++) {
        let match = product[i].getElementsByTagName('h2')[0];

        if(match) {
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchbox) > -1) {
                product[i].style.display = "";
            } else {
                product[i].style.display = "none";
            }
        }
    }
}