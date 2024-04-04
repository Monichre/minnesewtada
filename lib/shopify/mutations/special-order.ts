export const createMetaObjectSpecialOrderMutation = /* GraphQL */ `
  mutation CreateMetaobject($metaobject: MetaobjectCreateInput!) {
    metaobjectCreate(metaobject: $metaobject) {
      metaobject {
        fields {
          value
        }
      }
    }
  }
`;
