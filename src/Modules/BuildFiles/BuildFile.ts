// src/Modules/BuildFiles/BuildFile.ts
import { timeout } from '../../Utils/timeout';
import { Builder } from '../Builders/Builder';

export class BuildFile {
  /**
   * Builders within the build file
   */
  public builders: Builder[] = [];

  public createBuilderImageAnchors(): string {
    const builderImages = this.builders.map(({ builderImage }) => builderImage);

    return builderImages
      .map(
        ({ image, name }) => `x-${name}Args: &${name}Args
      BUILD_IMAGE: '${image}'`,
      )
      .join('\n\n');
  }

  public createServices(): string {
    return this.builders
      .map(
        ({
          builderImage: { name: builderName },
          name,
          setupCommand,
          outputImage,
        }) => {
          return `\n  ${name}:\n    build:\n      <<: *coreBuilder\n      args:\n        <<: *${builderName}Args\n        SETUP_CMD: |          ${setupCommand
            .map(({ command }) => `\n          ${command}`)
            .join('\n')}\n    image: ${outputImage}`;
        },
      )
      .join('\n');
  }

  /**
   * Create the BuildX "Bake file" YAML
   */
  public async createYAML(): Promise<string> {
    console.log(
      `Creating build file YAML from the following builders: `,
      this.builders,
    );

    await timeout(500);

    return `version: '3.8'\n\nx-Core: &coreBuilder\n  context: ./Builders\n  dockerfile: CoreBuilder.Dockerfile\n\n${this.createBuilderImageAnchors()}\n\nservices:\n${this.createServices()}`;
  }
}
