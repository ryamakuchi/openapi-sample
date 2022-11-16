# OpenAPI Generator Sample Code

## OpenAPI Development

```sh
#  watch api-client
yarn watch -p src

# watch cat
yarn watch -p src/services/cat
```

## API Client Generate

```sh
yarn generate
```

## Usage

```ts
// API Request
const client = new CatApi(apiConfig);
const result = await client.getImages();

// Mock
const client = new CatApi(mockApiConfig());
const result = await client.getImages();

// Mock with prefer
const client = new CatApi(mockApiConfig({ status: 500 }));
const result = await client.getImages(); // return 500 error
const client = new CatApi(mockApiConfig({ example: 'notCat' }));
const result = await client.postImages({ imagesRequest: { imageUrl, title } }); // return 400 notCat
```

### Error Handling

```ts
const client = new CatApi(apiConfig);
const result = await client.getImages().catch(async (e) => {
  const error = await apiErrorType(e, {
    exec: () => console.error('isAPI401Error'),
  });
  // 401 のときは早期リターン
  if (!error) return;
  isAPIError(error) ? console.error('APIError') : console.error('OtherError');
});
```
