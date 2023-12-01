import gql from 'graphql-tag'

export const GET_SESSIONS = gql`
  query Sessions {
    airtableData {
      courses {
        CourseName
        CourseImage
        RSVPPageDescription
      }
    }
  }
`
