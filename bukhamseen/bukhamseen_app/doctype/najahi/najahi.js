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
					frm.set_value("mobile_number",data.message.mobile_number);
					frm.set_value("certificate_received_in",data.message.certificate_received_in);
					frm.set_value("educational_grade",data.message.educational_grade);
					frm.set_value("academic_qualifications",data.message.academic_qualifications);
					frm.set_value("latest_certificate_percentage",data.message.latest_certificate_percentage);
					frm.set_value("previous_certificate_percentage",data.message.previous_certificate_percentage);
					frm.set_value("latest_gpa_rate",data.message.latest_gpa_rate);
					frm.set_value("previous_gpa_rate",data.message.previous_gpa_rate);
					frm.set_value("gpa_out_of",data.message.gpa_out_of);
					frm.set_value("education_status",data.message.education_status);
					frm.set_value("graduated_from",data.message.graduated_from);
					frm.set_value("accepted_for_mawhipah",data.message.accepted_for_mawhipah);
					frm.set_value("program_title_in_mawhipah",data.message.program_title_in_mawhipah);
					frm.set_value("prize_sponsor",data.message.prize_sponsor);
					frm.set_value("participation_category",data.message.participation_category);
					frm.set_value("participation_type",data.message.participation_type);
					frm.set_value("participation_date",data.message.participation_date);
					frm.set_value("participation_goals",data.message.participation_goals);
					frm.set_value("describe_your_journey",data.message.describe_your_journey);
					frm.set_value("accomplishment_challenges",data.message.accomplishment_challenges);
					frm.set_value("any_previous_competition",data.message.any_previous_competition);
					frm.set_value("competition_title",data.message.competition_title);
					frm.set_value("competition_prize_sponsor",data.message.competition_prize_sponsor);
					frm.set_value("competition_participation_category",data.message.competition_participation_category);
					frm.set_value("competition_participation_type",data.message.competition_participation_type);
					frm.set_value("competition_participation_date",data.message.competition_participation_date);
					frm.set_value("competition_participation_goals",data.message.competition_participation_goals);
					frm.set_value("describe_your_journey2",data.message.describe_your_journey2);
					frm.set_value("competition_challenges",data.message.competition_challenges);
					frm.set_value("any_scientific_literate_artistic_or_research_accomplishments",data.message.any_scientific_literate_artistic_or_research_accomplishments);
					frm.set_value("accomplishment_title",data.message.accomplishment_title);
					frm.set_value("accomplishments_prize_sponsor",data.message.accomplishments_prize_sponsor);
					frm.set_value("accomplishments_participation_category",data.message.accomplishments_participation_category);
					frm.set_value("accomplishments_participation_type",data.message.accomplishments_participation_type);
					frm.set_value("accomplishments_participation_date",data.message.accomplishments_participation_date);
					frm.set_value("accomplishments_participation_goals",data.message.accomplishments_participation_goals);
					frm.set_value("describe_your_journey3",data.message.describe_your_journey3);
					frm.set_value("accomplishment_challenges1",data.message.accomplishment_challenges1);


					frm.refresh_field("member");
					frm.refresh_field("full_name");
					frm.refresh_field("mobile_number");
					frm.refresh_field("certificate_received_in");
					frm.refresh_field("educational_grade");
					frm.refresh_field("academic_qualifications");
					frm.refresh_field("latest_certificate_percentage");
					frm.refresh_field("previous_certificate_percentage");
					frm.refresh_field("latest_gpa_rate");
					frm.refresh_field("previous_gpa_rate");
					frm.refresh_field("gpa_out_of");
					frm.refresh_field("education_status");
					frm.refresh_field("graduated_from");
					frm.refresh_field("accepted_for_mawhipah");
					frm.refresh_field("program_title_in_mawhipah");
					frm.refresh_field("prize_sponsor");
					frm.refresh_field("participation_category");
					frm.refresh_field("participation_type");
					frm.refresh_field("participation_date");
					frm.refresh_field("participation_goals");
					frm.refresh_field("describe_your_journey");
					frm.refresh_field("accomplishment_challenges");
					frm.refresh_field("any_previous_competition");
					frm.refresh_field("competition_title");
					frm.refresh_field("competition_prize_sponsor");
					frm.refresh_field("competition_participation_category");
					frm.refresh_field("competition_participation_type");
					frm.refresh_field("competition_participation_date");
					frm.refresh_field("competition_participation_goals");
					frm.refresh_field("describe_your_journey2");
					frm.refresh_field("competition_challenges");
					frm.refresh_field("any_scientific_literate_artistic_or_research_accomplishments");
					frm.refresh_field("accomplishment_title");
					frm.refresh_field("accomplishments_prize_sponsor");
					frm.refresh_field("accomplishments_participation_category");
					frm.refresh_field("accomplishments_participation_type");
					frm.refresh_field("accomplishments_participation_date");
					frm.refresh_field("accomplishments_participation_goals");
					frm.refresh_field("describe_your_journey3");
					frm.refresh_field("accomplishment_challenges1");
					 console.log("data",data);
				}
			}
		});
	}
});
