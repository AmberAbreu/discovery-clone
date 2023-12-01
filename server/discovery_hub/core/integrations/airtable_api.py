import json

import requests
from django.conf import settings
from pyairtable import Table


class AirtableApi:
    @staticmethod
    def get_table(table_name):
        base_id = settings.AIRTABLE_BASE_ID

        table = Table(settings.AIRTABLE_API_KEY, base_id, table_name)

        return table

    @staticmethod
    def get_table_records(table_name):
        table = Table(settings.AIRTABLE_API_KEY, settings.AIRTABLE_BASE_ID, table_name)

        return table.all(sort=["Course Order"])

    @staticmethod
    def update_record_after_mongo(record_id, prod_test):
        base_id = settings.AIRTABLE_BASE_ID_TESTING if prod_test else settings.AIRTABLE_BASE_ID
        table = Table(settings.AIRTABLE_API_KEY, base_id, "Diagnostic Results")
        return table.update(record_id, {"Uploaded to Mongo": "Yes"})

    @staticmethod
    def get_unuploaded_records(prod_test):
        base_id = settings.AIRTABLE_BASE_ID_TESTING if prod_test else settings.AIRTABLE_BASE_ID
        url = f"https://api.airtable.com/v0/{base_id}/Diagnostic%20Results?filterByFormula={{Uploaded%20to%20Mongo}}='No'"
        header = {"Authorization": "Bearer " + settings.AIRTABLE_API_KEY}
        result = requests.get(url, headers=header)
        obj = json.loads(result.text)
        return obj

    @staticmethod
    def get_record_by_response_id(response_id, prod_test):
        base_id = settings.AIRTABLE_BASE_ID_TESTING if prod_test else settings.AIRTABLE_BASE_ID
        url = f"https://api.airtable.com/v0/{base_id}/Diagnostic%20Results?filterByFormula={{Response%20ID}}='{response_id}'"
        header = {"Authorization": "Bearer " + settings.AIRTABLE_API_KEY}
        result = requests.get(url, headers=header)
        obj = json.loads(result.text)
        return obj
