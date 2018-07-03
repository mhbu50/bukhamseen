
frappe.ui.form.on('Payment Form', {
	// setup:function(frm){
	// 	cur_frm.set_query("test", function(frm) {
	// 		return {
	// 		  "filters": {
	// 			"city": frm.doc.city
	// 		  }
	// 		};
	// 	  });
	// },
	
	sponser:function(frm){
		frappe.call({
			"method": "frappe.client.get",
			args: {
				doctype: "User",
				name: frm.doc.sponser
			},
			callback: function(data) {
				if (data.message) {
					frm.set_value("s_full_name",data.message.full_name);
					frm.set_value("s_mobile_no",data.message.mobile_no);
					frm.set_value("s_id_number",data.message.id_number);
					frm.set_value( 's_city', data.message.city);
				}
			}
		});	
	},
	najahi_subscription:function(frm){
		frappe.call({
			"method": "frappe.client.get",
			args: {
				doctype: "Najahi",
				name: frm.doc.najahi_subscription
			},
			callback: function(data) {
				if (data.message) {
					frm.set_value("subscribed_member",data.message.full_name);
					frm.set_value("full_name",data.message.full_name);
					frm.set_value("mobile_no",data.message.mobile_no);
					frm.set_value("id_number",data.message.id_number);
				}
			}
		});	
	},
	bank_account:function(frm){
		frappe.call({
			"method": "frappe.client.get",
			args: {
				doctype: "Bank Account",
				name: frm.doc.bank_account
			},
			callback: function(data) {
				if (data.message) {
					frm.set_value("iban_of_account",data.message.iban_of_account);
					frm.set_value("account_bank",data.message.account_bank);
				}
			}
		});
	},
	test:function(frm){
		console.log("frm.doc",frm.doc);
		console.log("frm.doc.test",frm.doc.test);
		frappe.call({
			"method": "frappe.client.get",
			args: {
				doctype: "Cash Recipient",
				name: frm.doc.test
			},
			callback: function(data) {
				if (data.message) {
					frm.set_value("recipient_name",data.message.recipient);
					frm.set_value("recipient_mobile_no",data.message.mobile_no);
				}
			}
		});
	}
	
})

// cur_frm.set_query("cash_recipient", function(frm) {
// 	return{
// 		filters: [
// 			['city', '=',frm.doc.city]
// 		]
// 	}
// });
// cur_frm.set_query("test", function(frm) {
// 	console.log("frm.doc.city",frm.doc.city)
// 	return{
// 		filters: [
// 			['city', '=',frm.doc.city]
// 		]
// 	}
// });