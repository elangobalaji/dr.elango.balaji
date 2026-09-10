const fs = require('fs');
const path = require('path');

function replaceInFile(filePath, replacements) {
    let content = fs.readFileSync(filePath, 'utf8');
    for (const [search, replace] of Object.entries(replacements)) {
        // use regex to only replace text content (between > and <, or quotes if careful)
        // simpler: string replace if we are sure it's unique
        content = content.replace(search, replace);
    }
    fs.writeFileSync(filePath, content, 'utf8');
}

// Navbar.tsx
replaceInFile('src/components/Navbar.tsx', {
    ">news<": ">News<",
    ">publications<": ">Publications<",
    ">research<": ">Research<",
    ">experience<": ">Experience<",
    ">contact<": ">Contact<",
    ">cv<": ">CV<",
    ">github<": ">GitHub<",
    ">linkedin<": ">LinkedIn<"
});

// Hero.tsx
replaceInFile('src/components/Hero.tsx', {
    ">email<": ">Email<",
    ">scholar<": ">Google Scholar<",
    ">github<": ">GitHub<",
    ">linkedin<": ">LinkedIn<",
    ">phone<": ">Phone<"
});

// News.tsx
replaceInFile('src/components/News.tsx', {
    ">news<": ">News<",
    ">news<": ">News<", // might need regex for multiple?
    "'show less' : 'view all announcements'": "'Show Less' : 'View All Announcements'"
});

// Publications.tsx
replaceInFile('src/components/Publications.tsx', {
    ">publications<": ">Publications<",
    ">grants & funding<": ">Grants & Funding<",
    ">conferences & workshops": ">Conferences & Workshops",
    ">first author<": ">First Author<",
    ">bibtex<": ">BibTeX<",
    ">doi<": ">DOI<",
    ">abstract<": ">Abstract<",
    ">copied<": ">Copied<",
    ">copy<": ">Copy<"
});

// Projects.tsx
replaceInFile('src/components/Projects.tsx', {
    ">research<": ">Research<",
    ">details<": ">Details<",
    ">paper / doi<": ">Paper / DOI<",
    ">code<": ">Code<"
});

// Experience.tsx
replaceInFile('src/components/Experience.tsx', {
    ">experience<": ">Experience<",
    ">research appointments<": ">Research Appointments<",
    ">education<": ">Education<"
});

// Contact.tsx
replaceInFile('src/components/Contact.tsx', {
    ">contact<": ">Contact<",
    ">github<": ">GitHub<",
    ">linkedin<": ">LinkedIn<"
});

// Skills.tsx
replaceInFile('src/components/Skills.tsx', {
    ">skills & expertise<": ">Skills & Expertise<",
    "diagnostics:": "Diagnostics:",
    "characterization:": "Characterization:",
    "synthesis:": "Synthesis:",
    "computation:": "Computation:",
    "domains:": "Domains:"
});

console.log("Done");
