# Warden

Warden is a tool for managing repository ownership.

Ownership of a specific area is signified by creating a .warden file in the folder, any subfolders are also owned by that warden, unless another .warden file exists.

Warden compares your current working branch against `default` to generate a list of changes, then identify the person from the relevant
warden file for a change path.

### Installation

Warden requires [Node.js](https://nodejs.org/) v4+ to run.

Then:

```sh
$ npx repository-warden
```

### Usage

Repository-warden takes a few commands,

```sh
$ warden -V, --version
```

Will print the version number.

```sh
$ warden -h, --help
```

Will print a simple 'help' message with a summary of commands.

```sh
$ warden dir <file path>
```

Will print warden file information for the given directory within the project. If no path is given,
defaults to current working directory.

```sh
$ warden
```

Without commands, will print warden file information for every change on your branch against `default`.

### Development

Clone this repo from GitHub, navigate to the root directory of repository-warden:

```sh
$ cd path/to/repository-warden/
```
And create a link token with:

```sh
$ yarn link
```
Provide this link token to your project repository with:

```sh
$ yarn link repository-warden
```

This will override your global installation with the locally served code.

Now, back to the repository-warden path:

```sh
$ yarn watch
```

Will start serving the local version of the program.

Calls to warden from your linked project repository will respond from this local version.
