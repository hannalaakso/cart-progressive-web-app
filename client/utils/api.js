let metaContents = document.head.querySelector('meta[name="fegrocer-api-endpoint"]').content;
//let apiEndpoint = new URL(metaContents);
//apiEndpoint.protocol = window.location.protocol;
let apiEndpoint = 'https://10.0.2.2:3100/'; // debug in Android simulator

export const endpoint = apiEndpoint.toString();
