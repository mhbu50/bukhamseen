# -*- coding: utf-8 -*-
# Copyright (c) 2018, Accurate systems and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class Najahi(Document):
	def validate(self):
		user = frappe.get_doc("User", self.member)
		user.accepted_for_mawhipah = self.accepted_for_mawhipah



		user.save()
