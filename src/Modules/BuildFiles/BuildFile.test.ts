// src/Modules/BuildFiles/BuildFile.test.ts
import { TestSuite } from '@k-foss/ts-estests';
import { BuildFile } from './BuildFile';
import { BuilderImage } from '../BuilderImages/BuilderImage';
import { Builder } from '../Builders/Builder';
import { Action } from '../Actions/Action';

export class BuildFileTest extends TestSuite {
  public testName = 'addTest';

  public async test(): Promise<void> {
    const buildFile = new BuildFile();
    const builderImage = new BuilderImage({
      image: 'alpine:latest',
      name: 'AlpineCore',
    });

    function createEchoHelloAction(extraText = 'test1'): Action {
      return new Action({
        command: `echo "${extraText}" > ./file.txt`,
        cwd: '/tmp/out',
      });
    }

    const helloWorld1Builder = new Builder({
      builderImage,
      name: 'helloWorld1',
      setupCommand: [createEchoHelloAction('Test1')],
      outputImage: 'kristianfoss/pepsi:5',
    });

    buildFile.builders.push(helloWorld1Builder);

    console.log('Requesting YAML\n\n', await buildFile.createYAML());
  }
}
