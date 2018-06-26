// Copyright (c) 2018, Accurate systems and contributors
// For license information, please see license.txt

frappe.ui.form.on('Najahi', {
	onload: function(frm) {
		frm.set_value("member",frappe.session.user);

		var user1 = frappe.model.get_doc("User", frappe.session.user);
		var user2 = frappe.get_doc("User", frappe.session.user);
		console.log("user1",user1);
		console.log("user2",user2);

		frappe.call({
			"method": "frappe.client.get",
			args: {
				doctype: "User",
				name: frappe.session.user
			},
			callback: function(data) {
				if (data.message) {
					frm.set_value("full_name",data.message.full_name);
					frm.set_value("full_name",data.message.full_name);


					frm.refresh_field("member");
					frm.refresh_field("full_name");
					 console.log("data",data);
				}
			}
		});
	}
});
