// src/Modules/BuilderImage/BuilderImage.ts

export class BuilderImage {
  /**
   * Friendly name of the builder image
   */
  public name: string;

  /**
   * Docker image
   */
  public image: string;

  public constructor(opts: Partial<BuilderImage>) {
    Object.assign(this, opts);
  }
}
