import { program } from 'commander';
import { watch } from 'chokidar';
import swaggerMerger from 'swagger-merger';
import SwaggerParser from '@apidevtools/swagger-parser';

program
  .requiredOption(
    '-p, --path <path>',
    'Add yaml file path, Do not add a trailing slash'
  )
  .parse(process.argv);

const optionsPath: string = program.opts().path;
const openApi = `${optionsPath}/_openapi.yaml`;

SwaggerParser.parse(openApi, (err, api): void => {
  if (err || !api) return console.error(err);
  if (!api?.info?.title)
    return console.error('No title found in _openapi.yaml');

  const title: string = api.info.title;

  watch(optionsPath, { ignored: /src\/merged\/.*\.yaml/ }).on(
    'all',
    (event, path) => {
      console.log(event, path);

      swaggerMerger({
        input: openApi,
        output: `src/merged/${title}.yaml`,
      }).catch((err) => {
        console.error(err);
      });
    }
  );
});
