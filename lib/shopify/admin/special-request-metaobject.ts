import { adminClient, formatPayloadForCustomAttributes } from './client';

export const createSpecialRequestMetaObject = async (data: any) => {
  const fields: any = formatPayloadForCustomAttributes(data);
  console.log('fields: ', fields);

  const res = await adminClient.request(
    `mutation CreateMetaobject($metaobject: MetaobjectCreateInput!) {
      metaobjectCreate(metaobject: $metaobject) {
        metaobject {
          handle
          fields {
            value
          }
        }
        userErrors {
          field
          message
          code
        }
      }
    }`,
    {
      variables: {
        metaobject: {
          type: 'special_request',
          fields
        }
      }
    }
  );

  console.log('createSpecialOrder res: ', res);
  if (res?.errors) {
    const {
      errors: { graphQLErrors }
    } = res;
    console.log('graphQLErrors: ', graphQLErrors);
  }
  return res;
};
