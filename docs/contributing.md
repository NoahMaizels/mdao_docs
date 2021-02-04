---
id: contributing
title: How to Contribute to the Docs
---

This page is a guide to help users with updating this documentation page. It's written for users with minimal technical knowledge. For those with web development experience, we recommend clonging the entire project locally from the [official repo](https://github.com/MantraDAO/docs), and following the instructions on the official [Docusaurus 2.0 documentation website](https://v2.docusaurus.io/docs/installation#running-the-development-server). 

## Basic Concepts

To get started, you should understand some basic concepts first:

### Markdown

The documents on the docs site are written using Markdown, which is a markup language like HTML that is used for defining how content will display on a web page. However, it is much much simpler and easier than HTML, and anyone can pick it up and get started in a few minutes - no need for programming skills. 

The [markdownguide.org](https://www.markdownguide.org/) website has some great guides and tutorials which will get you up to speed in no time. Their [cheat sheet](https://www.markdownguide.org/cheat-sheet/) is the quickest way to get started.

### Docusaurus 2.0

The site is made with [Docusaurus 2.0](https://v2.docusaurus.io/docs/), which is a React based framework for building static websites. It's aimed at documentation websites, but can actually be used to make almost static site you can think of. 

When using Docusaurus 2.0, each Markdown file you create inside the `docs` folder will become a new page on your site, and will be accessible from the URL matching that filename.

Docusaurus has many useful tools and presets for building and customizing documentation websites, and can also draw on the full power of React. 

If you're just concerned with adding new pages and editing existing ones, you don't really need to know anything about how Docusaurus works, but it's good to know what's possible so you can ask your web developer or add or modify some feature.

### How does the website get updated with new content?

The documentation website source files are hosted on GitHub, and the live website files are hosted on Netlify (or potentially another site in the future, this doesn't really matter to you as the editor). 

Whenever the source files on GitHub are changed, Netlify will detect that a change occured, and update the live website with the changed content. There are several ways to change the GitHub source files:

## Different ways to edit the site:

Depending on your skill level and the type of editing you want to do, you will want to choose a different method for editing:

### 1. Clone the files and run a local dev server 
:::caution
This method is recommended only for programmers
:::

If you have a bit of experience with HTML/CSS and JavaScript, you may want to try cloning the entire project locally from the [official repo](https://github.com/MantraDAO/docs), and following the instructions on the official [Docusaurus 2.0 documentation website](https://v2.docusaurus.io/docs/installation#running-the-development-server) to run a local dev server, make changes there, and push your local commits to the main repo. 

We won't have step by step instructions for this method as it is aimed at web developers who should be able to get started from just the [official docs](https://v2.docusaurus.io/).

**Benefits of this method:**

+ The local dev server features hot module replacement so you can see the changes you make in the code immediately reflected on the dev server in your browser without a full page reload
+ You can see the whole project file structure in order to navigate and edit it easily
+ Easy access to config files to change how the site looks, functions, and is organized

**Downsides**

- Requires knowledge of Javascript, Git, Github, CSS, and more
- Takes a long time if you just need to do one or two quick edits
- You need to do the editing in your code editor or desktop Markdown editor, which generally don't have all the great editing features you will find in modern browser based Markdown editors like [HackMD](https://hackmd.io/) and [StackEdit](https://stackedit.io/)

Don't worry if you don't know how to do that, there's a few other much easier ways to edit the website content:

### 1. Directly on GitHub

GitHub has a built in Markdown editor which allows you to open, edit, preview, and commit new changes for any Markdown files (files ending in `.md`). You can use this method from any browser without any special tools or set up. This is the best option for small edits which need to be made quickly such as typos, broken links, or any other very small edits.

1. *Open the `docs` folder:*  
    
  From the main repo for the docs site, open up the `docs` folder in order to view all the Markdown files which are used to make individual pages on the docs site.     
   
    ![](https://cdn-images-1.medium.com/max/1200/1*hNrrFq8DGFmhWI4xyDaRsQ.png)     
  
2. *Open the `docs` folder:*

  From the main repo for the docs site, open up the `docs` folder in order to view all the Markdown files which are used to make individual pages on the docs site.

    ![](https://cdn-images-1.medium.com/max/1200/1*hNrrFq8DGFmhWI4xyDaRsQ.png)

**Benefits of this method:**

+ It's probably the easiest and quickest way to make simple changes to the docs

**Downsides**

- It lacks a lot of the tools you would want for making more extensive edits:
- No spell check
- No live preview (you can toggle back and forth between preview and edit, but this can get very annoying and time consuming if you are making larger edits)
- No easy way to do collaborative editing so a few team members can work on the file together before pushing edits live


## Editing Tips:

There are some quirks fdsaffds dsadffdfds 


