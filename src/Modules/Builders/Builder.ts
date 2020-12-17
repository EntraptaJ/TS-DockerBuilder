// src/Modules/Builders/Builder.ts
import { Action } from '../Actions/Action';
import { BuilderImage } from '../BuilderImages/BuilderImage';

/**
 * Docker image builder instructions
 */
export class Builder {
  /**
   * Friendly name of the builder
   */
  public name: string;

  /**
   * Image the builder uses
   */
  public builderImage: BuilderImage;

  /**
   * Output Image
   */
  public outputImage: string;

  /**
   * Optional command to setup the working environment
   */
  public setupCommand: Action[];

  public constructor(opts: Partial<Builder>) {
    Object.assign(this, opts);
  }
}
