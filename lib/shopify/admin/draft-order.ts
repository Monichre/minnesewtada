import { adminClient, formatPayloadForCustomAttributes } from './client';

export const createSpecialRequestDraftOrder = async (payload: any): Promise<any> => {
  const { email, firstName, lastName, phone, address } = payload;

  const fields = formatPayloadForCustomAttributes(payload);

  const res = await adminClient.request(
    `mutation draftOrderCreate($input: DraftOrderInput!) {
      draftOrderCreate(input: $input) {
        draftOrder {
          id
        }
      }
    }`,
    {
      variables: {
        input: {
          note: JSON.stringify(payload),
          email,
          phone,
          visibleToCustomer: false,
          tags: ['custom'],

          shippingAddress: {
            firstName,
            lastName,
            phone,
            ...address
          },

          lineItems: [
            {
              title: 'Special Request',
              originalUnitPrice: 100,
              quantity: 1
            }
          ],
          customAttributes: fields
        }
      }
    }
  );

  if (res?.errors) {
    const {
      errors: { graphQLErrors }
    } = res;
    console.log('graphQLErrors: ', graphQLErrors);
  }
  console.log('draft order res: ', res);
};
