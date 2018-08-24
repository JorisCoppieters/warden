const cprint = require('color-print');
const fs = require('fs');

export type Human = {
    name: string;
    email: string;
}

export class WardenFile: {
  public readonly filePath: string = '';
  public readonly humans: Array<Human> =[];

  constructor (_filePath: string) {
    this.filePath = _filePath;
    if (this.verifyAndReadWardenFile()) {
      this.humans = require(this.filePath);
    }
  };

  private verifyAndReadWardenFile (): void {
    const checkFile = require(this.filePath);
    console.log(checkFile, typeof(checkFile));
    this.checkWardenFileValidity(checkFile);
    // this.humans = fileContents.humans;
  }

  private checkWardenFileValidity (checkFile: WardenFile): boolean {
    try {
        if (!this.isWardenFileValid(checkFile)) {
            cprint.yellow('Invalid warden file: ' + this.filePath);
            return false;
        }
        return true;
    } catch (e) {
        cprint.yellow('Could not read warden file: ' + this.filePath);
        return false;
    }
  }

  private isWardenFileValid (checkFile: WardenFile): boolean {
    if (!checkFile.humans || (!!checkFile.humans && !checkFile.humans.length)) {
        cprint.yellow('Warden file does not contain humans');
        return false;
    }
    const isHumansInvalid = checkFile.humans.some(human => !human.name || !human.email);
    if (isHumansInvalid) {
        cprint.yellow('Humans in warden file are not in valid format');
        return false;
    }
    return true;
  }
}