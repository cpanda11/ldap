function serachGroupByUID(ele) {
    if(event.key === "Enter"){
        if(ele.value === ""){
            return;
        }
        console.log(ele.value);
        $.ajax({
            type: 'GET',
            url: '/search_group',
            data: { uid: ele.value},
            success: function (response) {
                if(response.result)
                    console.log('ajax result success.')
            }
        });
    }
}

// $("uid").keypress(function (e) {
//     console.log(e);
// });

function group_list_view(){

}