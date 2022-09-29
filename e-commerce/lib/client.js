import sanityClient from '@sanity/client';
import imageUrlBuildier from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'no2a1z7c',
    dataset: 'production',
    apiVersion: '2022-09-29',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builder = imageUrlBuildier(client);

export const urlFor = (source) => builder.image(source);