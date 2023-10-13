# **Virittämö Helsinki**

This is the new homepage for Virittämö Helsinki, an employment service run by the City of Helsinki that connects jobseekers and companies seeking ICT, software development, and media experts. The website has been created using React.js (vite + million.js for improved speed), JavaScript, SCSS for the frontend and the [Strapi Content Management System](https://strapi.io/) for the backend (view specific packages in the package.json file).

![Repo Preview Image](client/public/repo-preview.webp?raw=true "preview image")

## **Introduction**

Virittämö Helsinki is a groundbreaking employment service that benefits everyone. For jobseekers, it provides an opportunity to gain new work experience and develop their skills while earning a fair wage. For companies, it offers access to skilled digital and media professionals to work on short or long-term projects. The service is also a way for companies to demonstrate their social responsibility. In addition, the partnership provides skilled labor to society and helps jobseekers re-enter the workforce.

## **Usage**

```sh
git clone https://github.com/VirittamoHelsinki/virittamo-website.git
cd virittamo-website

npm install
npm run dev

```

Runs the app in the development mode.\
Open **[http://localhost:5173](http://localhost:5173)** to view the frontend in your browser.
\
Open **[http://localhost:1337/admin](http://localhost:1337/admin)** to access the Strapi CMS dashboard.

.env file contents can be found @

```
Virittämö Teams > Softa > General > Files > Projektit > Virittämön Nettisivut + CMS
```

The page will reload when you make changes.\
You may also see any lint errors in the console.
<br><br>

## **Changing Text Content (for now)**

The text contents for the site can be found and changed at:\

- Note: Once the Strapi CMS has been fully implemented, these will no longer be used and will become legacy/deprecated.

```js
virittamo-website/src/langLocal/fi.js (finnish translation)
virittamo-website/src/langLocal/en.js (english translation)
```

_Keep in mind **when adding content to either of the files**, you also have to add it's translation to the other file._

(The carousels and slides on the Projects page are also included within the files due to their summaries having to be translate).
<br><br>

## **Home Page Carousel**

You can find, add, modify and delete the component slides being shown on the **Homepage main carousel** here:

```js
virittamo-website/src/pages/Home/Carousel/Content.jsx

virittamo-website/src/pages/Home/Carousel/SubComponents/
    - Article.jsx (for text based articles with a background image)
    - Companies.jsx (displays "Our employees have move on to" companies list component)
    - Feedback.jsx (shows our "grade" given by former employees)
    - Image.jsx (used to display just an image/photograph)
    - Instagram.jsx (Virittamo Instagram profile embed)
    - Video.jsx (used to display any online or local video file)
    - LoadingSlides.jsx (displayed in case a slide is taking long to load)
```

**If modifying or adding slides:** make sure to include the necessary translations on text based slides to ensure the website's useability to non-finnish speakers.
<br><br>

## **Future Features / Improvements**

- Strapi CMS Implementation:
  - Modify and change each text- & image field on the site
  - Add, modify and remove slides from carousels + modify their contents
  - Being done to save the developers' time so that content teams can edit the contents of the site without having to ask the developer to hard code said changes
    <br><br>

## **Other / Miscellaneous**

Husky, lint-staged, vitest, eslint and prettier are used together to enforce code quality and consistency in a project. They are typically configured to run on every commit, so any code changes will go through the pipeline of checks.

### **Here is what happens on each commit:**

- **Husky** is a Git hook manager that is used to set up hooks that run scripts when a certain Git event occurs. In this case, the prepare script in package.json installs the hooks using Husky.

- **Lint-staged** is a tool that runs linters on git-staged files. It is configured in package.json under the lint-staged property, which lists the file types to be checked, and the commands to run on each file. In this case, the commands are to run Prettier, Jest, and Eslint on the changed files.

- **Vitest** is a testing framework for JavaScript that is used to run automated tests. Vitest is set up to run tests on changed files only, to save time on each commit.

- **Eslint** is a linter for JavaScript and is used to enforce code quality and consistency. Eslint is set up to fix any issues that it can automatically fix, such as code formatting.

- **Prettier** is a code formatter that helps maintain consistent coding style across the entire codebase.

By using all of these tools together, code changes are checked for code quality, consistency, and proper functioning on each commit. If any issues are found, the developer is notified and the commit is rejected until the issues are fixed. This ensures that the codebase stays clean and consistent, making it easier to maintain over time.
<br><br>

## **Credits / The Team (so far)**

We would like to extend our sincerest gratitude to all the individuals who have been part of the Virittämö team, both past and present. Each one of you has contributed immensely to our success by consistently delivering high-quality work and completing projects with excellence. Your dedication and hard work have made it possible for us to showcase a range of impressive content on our website that represents the best of Virittämö.

We appreciate the expertise and unique perspectives that each team member has brought to the table. Through your creative input and valuable feedback, we have been able to create innovative designs, compelling media content, and robust software systems. Your willingness to collaborate and work together as a team has made all the difference in our projects.

**In particular, we would like to recognize the following people for their contributions to the website:**

Tarja Kurvinen and Jaakko Hyytiä for their management skills, leadership, and guidance
Karoliina Myllymäki for her outstanding layout designs
Emilia Rautio for her beautiful photography
Jenni Aaltonen and Warda Mohamed for their exceptional content writing and media skills
Jesse Hamberg for his web development expertise
Once again, thank you to all the members of the Virittämö team for your dedication, commitment, and hard work. Your contributions are greatly appreciated, and we are proud to have you as part of our team.
