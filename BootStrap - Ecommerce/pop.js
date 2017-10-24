
    var names = [];
    names[0] = document.getElementById("txt").innerHTML;
    localStorage.setItem("item", JSON.stringify(names));
    localStorage.setItem("quantity", JSON.stringify(names));
    localStorage.setItem("unitprice", JSON.stringify(names));
    localStorage.setItem("totprice", JSON.stringify(names));


    $(function () {
    $('[data-toggle="popover"]').popover({
      trigger : 'click',
  placement : 'top',
  html: 'true',
  content : '<textarea class="popover-textarea"></textarea>',
  template: '<div style="text-align:center;"class="popover"><div class="arrow"></div>'+
            '<h3 id="poptitle" style="text-align:center;"class="popover-title"></h3><div id="popcontent" class="popover-content">'+
            '</div><div style="text-align:center;"class="popover-footer"><button type="button" class="btn btn-primary popover-submit">Add to cart</button>'+
            '</div>'
})
    })
