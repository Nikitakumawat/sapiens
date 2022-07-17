import { gql } from '@apollo/client';

export const GET_FAQS = gql`
    query fetchFAQ {
      faqsSapiensystems{
        data{
          id
          attributes{
            Question
            Answer
          }
        }
      }
    }
`;
export const GET_CLIENTS_QUERY = gql`
query lead{
    leads{
      data{
        id
        attributes{
          Name
          email
          date
          Time
          Notes
          createdAt
          updatedAt
          Source
          Status
        }
      }
    }
  }
`;
export const CREATE_LEAD = gql`
    mutation createLead($data: LeadInput!) {
      createLead(data: $data) {
        data{
            id
            attributes{
              Name
              Notes
              email
              Source
              Status
              updatedAt
              createdAt
              Time
              date
            }
          }
      }
    }
  `;
  export const DELETE_LEAD = gql`
  mutation deleteLead($id: ID!) {
      deleteLead(id: $id){
          data{
            id
            attributes{
              Name
              Notes
              Source
              Status
              Time
              date
              createdAt
              updatedAt
              email
            }
          }
        }
  }
`;
export const UPDATE_LEAD = gql`
    mutation updateLead($id: ID!, $data: LeadInput!) {
      updateLead(id: $id, data: $data) {
        data{
            id
            attributes{
              Name
              Notes
              email
              Source
              Status
              updatedAt
              createdAt
              Time
              date
            }
          }
      }
    }
  `;
