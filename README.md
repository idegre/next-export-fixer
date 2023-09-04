# Next.js Export Fixer

When exporting a dynamic page, Next.JS creates a folder with multiple HTML files within it for every page. This works fine so long as you are navigating within the site and having the hydrated router loaded. But as soon as you directly type the URL into the browser it will return 404 because while the folder exists, there is no index file for it and the url doesn't contain the .html extension on it (and no one has typed .html into a url since 2006)

This problem can show as next not exporting pages as index, not exporting pages into their own folders, not creating index files. (yes, this paragraph is for people to find this in google)

### Description

This tool allows for a quick fix, moving every named html file into it's own folder with the same name and renaim the file _index.html_. This allows browser to actually find pages withouth having to add the extension into the navigation bar.

### Instalation

```
    npm i next-export-fixer -g
```

### Usage

To use the script just run `fixExport <export out directory>` in your terminal from the project root directory.
