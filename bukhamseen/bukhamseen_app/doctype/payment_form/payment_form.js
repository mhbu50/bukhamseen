
frappe.ui.form.on('Payment Form', {
	sponser:function(frm){
		frappe.call({
			"method": "frappe.client.get",
			args: {
				doctype: "User",
				name: frm.doc.sponser
			},
			callback: function(data) {
				if (data.message) {					
					frappe.set_value( 'city', data.message.city);
				}
			}
		});	
	}
})

cur_frm.set_query("cash_recipient", function(frm) {
	return{
		filters: [
			['city', '=',frm.doc.city]
		]
	}
});