import graphene
from django.contrib.auth import get_user_model
from graphene_django import DjangoObjectType


from .integrations.airtable_api import AirtableApi
from .models import ExportLog


class ExportLogType(DjangoObjectType):
    class Meta:
        model = ExportLog


class UserType(DjangoObjectType):
    export_status_update = graphene.List(ExportLogType, survey_id=graphene.String(required=True))

    def resolve_export_status_update(self, info, survey_id):
        logs = ExportLog.objects.filter(survey_id=survey_id).order_by("-datetime_created")
        return logs

    class Meta:
        model = get_user_model()
        exclude = ("password",)


class SessionType(graphene.ObjectType):
    Course_Name = graphene.String()
    Course_Image = graphene.String()
    RSVP_Page_Description = graphene.String()


class AirtableDataType(graphene.ObjectType):
    courses = graphene.List(SessionType)

    def resolve_courses(self, info):
        courses = AirtableApi.get_table_records("Courses")
        sessions = [
            SessionType(Course_Name=course.get("fields").get("Course Name"),
                        RSVP_Page_Description=course.get("fields").get("RSVP Page Description"),
                        Course_Image=course.get("fields").get("Course Image")[0]['url'])
            for course in courses
        ]
        return sessions


class CourseRecordType(graphene.ObjectType):
    report_no = graphene.Int()
    Response_ID = graphene.String()
    Report_15 = graphene.String()
    Name = graphene.String()
    A5_Creativity = graphene.String()
    A5_Expertise = graphene.String()
    A5_Income = graphene.String()
    A5_Meaning = graphene.String()
    A5_Relationships = graphene.String()
    A5_Status = graphene.String()
    A4 = graphene.String()
    A8 = graphene.String()
    A11 = graphene.String()
    A12 = graphene.String()
    A14 = graphene.String()
    A21 = graphene.String()
    A27 = graphene.String()
    A33 = graphene.String()
    S2 = graphene.String()
    S7 = graphene.String()
    S10 = graphene.String()
    S14 = graphene.String()
    S17 = graphene.String()
    S22 = graphene.String()
    S25 = graphene.String()
    I2 = graphene.String()
    C2 = graphene.String()
    Email = graphene.String()
    Created_Time = graphene.String()
    Connection_List = graphene.String()
    Composition_Text = graphene.String()
    ActivatingNetwork_Text = graphene.String()
    BuildingNetwork_Text = graphene.String()
    S3_Attachments_from_Milestone_Link = graphene.String()
    S3_A9_image_from_A8_Energy_Style_Link = graphene.String()
    S3_A12_image_from_A11_Predictability_Link_2 = graphene.String()
    S3_A15_image_from_A14_Salary_Expectation_OpenTextLink = graphene.String()
    S3_A26_image_from_A26_Experience_Link = graphene.String()
    S3_A29_from_A29_Strengths_Image_Link = graphene.String()
    strength_lcol = graphene.String()
    Milestone_from_Milestone_Link = graphene.String()
    DM_S3_A26_image_from_A26_Experience_Link = graphene.String()
    DM_S3_Attachments_from_Milestone_Link = graphene.String()
    Predictability_Score = graphene.String()
    Energy_Score = graphene.String()
    A26_text = graphene.String()
    Do_this_next = graphene.String()
    Do_this_next_part_1_from_user_profile = graphene.String()
    Application_Volume_Text_from_Application_Volume = graphene.String()
    Instance_Name = graphene.String()

    def resolve_Report_15(self, info):
        return self.get("15_Report")

    def resolve_Url_15(self, info):
        return self.get("15_Url")
