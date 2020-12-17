// src/Modules/BuildFile/BuildFileServices.ts
import { Service } from 'typedi';
import { timeout } from '../../Utils/timeout';

@Service()
export class BuildFileService {
  /**
   * Create the BuildX "Bake file" YAML
   */
  public async createBuildFile(): Promise<string> {
    console.log(`Creating build file YAML from the following builders: `, this);

    await timeout(500);
    return `version: '3.8'`;
  }
}
