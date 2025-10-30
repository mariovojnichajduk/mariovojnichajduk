# Portfolio Configuration Guide

All content in this portfolio is managed through the `src/config.json` file. You can easily edit any section without touching the code!

## How to Edit Your Portfolio

Simply open `src/config.json` and modify the values. The changes will be reflected in your portfolio immediately (with hot reload).

### Configuration Sections

#### 1. **Personal Information**
```json
"personal": {
  "name": "Your Full Name",
  "title": "Your Job Title",
  "subtitle": "A short subtitle",
  "description": "Longer description about yourself",
  "email": "your.email@example.com",
  "phone": "+1 234 567 8900",
  "linkedin": "https://linkedin.com/in/yourprofile",
  "location": "City, Country"
}
```

#### 2. **Badges**
Quick skill badges shown in the hero section:
```json
"badges": [
  "Skill 1",
  "Skill 2",
  "Skill 3"
]
```

#### 3. **Experience**
Your work history:
```json
"experience": [
  {
    "role": "Job Title",
    "company": "Company Name",
    "location": "City, Country",
    "period": "2022 - 2025",
    "highlights": [
      "Achievement 1",
      "Achievement 2",
      "Achievement 3"
    ]
  }
]
```

#### 4. **Education**
Your educational background:
```json
"education": [
  {
    "degree": "Degree Name",
    "institution": "University/School Name",
    "location": "City, Country",
    "period": "2019 - 2024",
    "gpa": "9/10",  // Optional
    "description": "What you studied and learned"
  }
]
```

#### 5. **Projects**
Featured projects with available icons:

Available icons: `Brain`, `Code2`, `Briefcase`

```json
"projects": [
  {
    "title": "Project Name",
    "description": "What this project does",
    "tech": ["Tech 1", "Tech 2", "Tech 3"],
    "icon": "Code2"
  }
]
```

#### 6. **Skills**
Organized by category:
```json
"skills": {
  "Category Name": [
    "Skill 1",
    "Skill 2",
    "Skill 3"
  ]
}
```

#### 7. **Recommendations**
Professional testimonials:
```json
"recommendations": [
  {
    "text": "Long recommendation text here...",
    "author": {
      "name": "Person Name",
      "title": "Job Title",
      "company": "Company Name",
      "location": "City, Country",
      "image": "./image.jpg"  // Path to author image
    }
  }
]
```

#### 8. **Section Titles** (Optional)
Customize section heading text:
```json
"sections": {
  "about": "About",
  "experience": "Experience",
  "projects": "Featured Projects",
  "recommendations": "Recommendations",
  "skills": "Skills & Expertise",
  "education": "Education",
  "contact": "Let's Connect",
  "contact_description": "Custom contact description"
}
```

## Quick Tips

1. **Adding/Removing Sections**: Simply add or remove items from arrays (experience, education, projects, recommendations)

2. **Icons for Projects**: Use one of these icon names as strings:
   - `Brain` - For AI/ML projects
   - `Code2` - For general development
   - `Briefcase` - For business/enterprise projects
   - `Mail` - For email
   - `Phone` - For phone
   - `Linkedin` - For LinkedIn
   - `GraduationCap` - For education

3. **Formatting**: Keep JSON valid:
   - Use proper commas (between items but not after the last one)
   - Use double quotes for strings
   - Special characters (quotes, backslashes) should be escaped

4. **Hot Reload**: The dev server will automatically reload when you save changes to `config.json`

## JSON Example

```json
{
  "personal": {
    "name": "John Doe",
    "title": "Full Stack Developer",
    "email": "john@example.com"
  },
  "badges": ["React", "Node.js", "MongoDB"],
  "experience": [
    {
      "role": "Senior Developer",
      "company": "Tech Corp",
      "location": "New York, USA",
      "period": "2023 - Present",
      "highlights": [
        "Led development of main features",
        "Improved performance by 50%"
      ]
    }
  ]
}
```

## Deploying

When you deploy your portfolio:
1. All your content is in `src/config.json`
2. Simply edit that file to update content
3. No need to rebuild or redeploy the entire application!

---

For code-level customization (styles, layout, etc.), edit the React components and CSS files.
