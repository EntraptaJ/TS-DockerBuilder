// src/Modules/Actions/Action.ts

/**
 * Action performed within a container
 */
export class Action {
  /**
   * Working directory for the action
   */
  public cwd?: string;

  /**
   * Environment variables
   */
  public env?: Record<string, string>;

  /**
   * Command to execute;
   */
  public command: string;

  public constructor(opts: Partial<Action>) {
    Object.assign(this, opts);
  }
}
