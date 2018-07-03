# -*- coding: utf-8 -*-
# Copyright (c) 2018, Accurate systems and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class Najahi(Document):
	def validate(self):
		user = frappe.get_doc("User", self.member)
		user.full_name = self.full_name
		user.gender = self.gender
		user.mobile_no = self.mobile_no
		user.birth_date = self.birth_date
		user.id_number = self.id_number
		user.certificate_received_in = self.certificate_received_in
		user.educational_grade = self.educational_grade
		user.academic_qualifications = self.academic_qualifications
		user.latest_certificate_percentage = self.latest_certificate_percentage
		user.previous_certificate_percentage = self.previous_certificate_percentage
		# user.latest_gpa_rate = self.latest_gpa_rate
		user.previous_gpa_rate = self.latest_gpa
		user.gpa_out_of = self.gpa_out_of
		user.education_status = self.education_status
		user.graduated_from = self.graduated_from
		user.accepted_for_mawhipah = self.accepted_for_mawhipah
		user.program_title_in_mawhipah = self.program_title_in_mawhipah
		user.prize_sponsor = self.prize_sponsor
		user.participation_category = self.participation_category
		user.participation_type = self.participation_type
		user.participation_date = self.participation_date
		user.participation_goals = self.participation_goals
		user.describe_your_journey = self.describe_your_journey
		user.accomplishment_challenges = self.accomplishment_challenges
		user.any_previous_competition = self.any_previous_competition
		user.competition_title = self.competition_title
		user.competition_prize_sponsor = self.competition_prize_sponsor
		user.competition_participation_category = self.competition_participation_category
		user.competition_participation_type = self.competition_participation_type
		user.competition_participation_date = self.competition_participation_date
		user.competition_participation_goals = self.competition_participation_goals
		user.describe_your_journey2 = self.describe_your_journey2
		user.competition_challenges = self.competition_challenges
		user.any_accomplishments = self.any_accomplishments
		user.accomplishment_title = self.accomplishment_title
		user.accomplishments_prize_sponsor = self.accomplishments_prize_sponsor
		user.accomplishments_participation_category = self.accomplishments_participation_category
		user.accomplishments_participation_type = self.accomplishments_participation_type
		user.accomplishments_participation_date = self.accomplishments_participation_date
		user.accomplishments_participation_goals = self.accomplishments_participation_goals
		user.describe_your_journey3 = self.describe_your_journey3
		user.accomplishment_challenges1 = self.accomplishment_challenges1



		user.save()
