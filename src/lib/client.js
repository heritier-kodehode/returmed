import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'ze5a670s',
  dataset: 'medretur',
  apiVersion: '2022-09-14',
  useCdn: true,
});
