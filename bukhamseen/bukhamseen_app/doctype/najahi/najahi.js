// Copyright (c) 2018, Accurate systems and contributors
// For license information, please see license.txt

frappe.ui.form.on('Najahi', {
	onload: function(frm) {

		frm.set_value("member",frappe.session.user);


		frappe.call({
			"method": "frappe.client.get",
			args: {
				doctype: "User",
				name: frappe.session.user
			},
			callback: function(data) {
				if (data.message) {
					frm.set_value("full_name",data.message.full_name);


					frm.refresh_field("member");
					frm.refresh_field("full_name");
					 console.log("data",data);
				}
			}
		});



	}
});
