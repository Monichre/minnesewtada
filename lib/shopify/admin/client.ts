const { createAdminApiClient } = require('@shopify/admin-api-client');

export const adminClient = createAdminApiClient({
  storeDomain: process.env.SHOPIFY_STORE_DOMAIN || '',
  apiVersion: '2024-07',
  accessToken: process.env.SHOPIFY_ADMIN_API_ACCESS_TOKEN || ''
});

export const formatPayloadForCustomAttributes = (data: any) => {
  const { address: addressData, firstName, lastName, phone, description, size, email } = data;
  const address = JSON.stringify(`
${addressData.address1}
${addressData.address2}
${addressData.city}
${addressData.provinceCode}
${addressData.zip}
`);

  const payload: any = {
    name: `${firstName}${lastName}`,
    address,
    description,
    phone,
    size,
    email
  };
  const fields = Object.keys(payload).map((key: any) => {
    return {
      key,
      value: payload[key]
    };
  });
  console.log('fields: ', fields);
};
