"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

import styles from "../resume.module.css";
import {
  resumeEducation,
  resumeExperience,
  resumeProjects,
  resumeSkills,
} from "../resume-data";

const sections = [
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
  { id: "education", label: "education" },
  { id: "skills", label: "skills" },
] as const;

function highlightSlashCommands(text: string): ReactNode {
  return text.split(/(\/goal)/g).map((part, index) =>
    part === "/goal" ? (
      <span key={index} className={styles.slashCommand}>
        {part}
      </span>
    ) : (
      part
    ),
  );
}

export function ResumeExplorer() {
  const [activeSection, setActiveSection] = useState("experience");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [progressPx, setProgressPx] = useState(0);
  const [activeRole, setActiveRole] = useState(0);
  const [activeProject, setActiveProject] = useState(0);
  const [activeSkill, setActiveSkill] = useState(resumeSkills[0]);
  const navLinksRef = useRef<HTMLDivElement>(null);
  const highlightedSection = hoveredSection ?? activeSection;

  const updateProgress = useCallback(() => {
    const row = navLinksRef.current;
    if (!row) {
      return;
    }

    const activeLink = row.querySelector<HTMLAnchorElement>(
      `a[href="#${highlightedSection}"]`,
    );

    if (!activeLink) {
      return;
    }

    setProgressPx(activeLink.offsetLeft + activeLink.offsetWidth);
  }, [highlightedSection]);

  useLayoutEffect(() => {
    updateProgress();

    const row = navLinksRef.current;
    if (!row || typeof ResizeObserver === "undefined") {
      return;
    }

    const observer = new ResizeObserver(updateProgress);
    observer.observe(row);
    window.addEventListener("resize", updateProgress);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateProgress);
    };
  }, [updateProgress]);

  useEffect(() => {
    const sectionNodes = document.querySelectorAll<HTMLElement>(
      "[data-resume-section]",
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
          visibleSection.target.setAttribute("data-visible", "true");
        }
      },
      { threshold: [0.25, 0.5, 0.75] },
    );

    sectionNodes.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const role = resumeExperience[activeRole];
  const project = resumeProjects[activeProject];

  const selectPreviousRole = () => {
    setActiveRole((current) =>
      current === 0 ? resumeExperience.length - 1 : current - 1,
    );
  };

  const selectNextRole = () => {
    setActiveRole((current) => (current + 1) % resumeExperience.length);
  };

  const selectPreviousProject = () => {
    setActiveProject((current) =>
      current === 0 ? resumeProjects.length - 1 : current - 1,
    );
  };

  const selectNextProject = () => {
    setActiveProject((current) => (current + 1) % resumeProjects.length);
  };

  return (
    <div className={styles.explorer}>
      <nav className={styles.sectionNav} aria-label="Resume sections">
        <div
          ref={navLinksRef}
          className={styles.sectionNavLinks}
          onMouseLeave={() => setHoveredSection(null)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node)) {
              setHoveredSection(null);
            }
          }}
        >
          {sections.map((section, index) => (
            <a
              key={section.id}
              className={styles.sectionNavLink}
              data-active={activeSection === section.id}
              href={`#${section.id}`}
              aria-current={activeSection === section.id ? "location" : undefined}
              onMouseEnter={() => setHoveredSection(section.id)}
              onFocus={() => setHoveredSection(section.id)}
            >
              <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              {section.label}
            </a>
          ))}
        </div>
        <div className={styles.progressTrack} aria-hidden="true">
          <span
            className={styles.progressBar}
            style={{
              width: progressPx
                ? `${progressPx}px`
                : `${
                    ((sections.findIndex(({ id }) => id === activeSection) + 1) /
                      sections.length) *
                    100
                  }%`,
            }}
          />
        </div>
      </nav>

      <section
        id="experience"
        className={styles.explorerSection}
        data-resume-section
        aria-labelledby="experience-heading"
      >
        <div className={styles.sectionTerminal}>
          <header className={styles.sectionHeader}>
            <p className={styles.command}>
              <span className={styles.syntaxBlue}>experience</span> ={" "}
              <span className={styles.syntaxYellow}>next</span>(
              <span className={styles.syntaxBlue}>role</span>{" "}
              <span className={styles.syntaxPink}>for</span>{" "}
              <span className={styles.syntaxBlue}>role</span>{" "}
              <span className={styles.syntaxPink}>in</span>{" "}
              <span className={styles.syntaxBlue}>roles</span>)
            </p>
            <h2 id="experience-heading" className={styles.sectionHeading}>
              Experience
            </h2>
            <p className={styles.sectionHint}>
              Choose a role or run the next command.
            </p>
          </header>

          <div className={styles.selectorRail} aria-label="Select an employer">
            {resumeExperience.map((item, index) => (
              <button
                key={item.company}
                type="button"
                className={styles.selectorButton}
                aria-pressed={activeRole === index}
                onClick={() => setActiveRole(index)}
              >
                <span className={styles.selectorIndex}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={styles.selectorLabel}>{item.company}</span>
              </button>
            ))}
          </div>

          <article
            key={`${role.company}-${activeRole}`}
            className={styles.focusPanel}
            aria-live="polite"
          >
            <div className={styles.focusPanelHeader}>
              <div>
                <p className={styles.objectKey}>company</p>
                <h3 className={styles.company}>{role.company}</h3>
              </div>
              <p className={styles.period}>{role.period}</p>
            </div>
            <p className={styles.role}>{role.title}</p>
            <p className={styles.techStack}>
              <span className={styles.objectKey}>stack</span>
              {role.technologies}
            </p>
            <ul className={styles.highlightList}>
              {role.highlights.map((highlight, index) => (
                <li
                  key={highlight}
                  style={{ "--line-index": index } as CSSProperties}
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </article>

          <div className={styles.panelControls}>
            <button type="button" onClick={selectPreviousRole}>
              <ArrowLeft aria-hidden="true" size={16} />
              previous
            </button>
            <span>
              {activeRole + 1} / {resumeExperience.length}
            </span>
            <button type="button" onClick={selectNextRole}>
              next
              <ArrowRight aria-hidden="true" size={16} />
            </button>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className={styles.explorerSection}
        data-resume-section
        aria-labelledby="projects-heading"
      >
        <div className={styles.sectionTerminal}>
          <header className={styles.sectionHeader}>
            <p className={styles.command}>
              <span className={styles.syntaxPink}>await</span>{" "}
              <span className={styles.syntaxBlue}>projects</span>.
              <span className={styles.syntaxYellow}>launch</span>();
            </p>
            <h2 id="projects-heading" className={styles.sectionHeading}>
              Projects
            </h2>
            <p className={styles.sectionHint}>
              Select a build to inspect its output.
            </p>
          </header>

          <div className={styles.projectSelector}>
            {resumeProjects.map((item, index) => (
              <button
                key={item.name}
                type="button"
                className={styles.projectSelectorButton}
                aria-pressed={activeProject === index}
                onClick={() => setActiveProject(index)}
              >
                <span
                  className={`${styles.fileIcon} ${
                    activeProject === index ? styles.fileIconActive : ""
                  }`}
                  aria-hidden="true"
                />
                <span className={styles.selectorLabel}>{item.name}</span>
              </button>
            ))}
          </div>

          <article
            key={`${project.name}-${activeProject}`}
            className={`${styles.focusPanel} ${styles.projectFocusPanel}`}
            aria-live="polite"
          >
            <p className={styles.objectKey}>selected_project</p>
            <h3 className={styles.projectName}>{project.name}</h3>
            <p className={styles.projectDescription}>
              {highlightSlashCommands(project.description)}
            </p>
            <a
              className={styles.projectLink}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              open project
              <ExternalLink aria-hidden="true" size={15} />
            </a>
          </article>

          <div className={styles.panelControls}>
            <button type="button" onClick={selectPreviousProject}>
              <ArrowLeft aria-hidden="true" size={16} />
              previous
            </button>
            <span>
              {activeProject + 1} / {resumeProjects.length}
            </span>
            <button type="button" onClick={selectNextProject}>
              next
              <ArrowRight aria-hidden="true" size={16} />
            </button>
          </div>
        </div>
      </section>

      <section
        id="education"
        className={styles.explorerSection}
        data-resume-section
        aria-labelledby="education-heading"
      >
        <div className={styles.sectionTerminal}>
          <header className={styles.sectionHeader}>
            <p className={styles.command}>
              <span className={styles.syntaxGreen}>$</span>{" "}
              <span className={styles.syntaxPink}>cat</span> education.json
            </p>
            <h2 id="education-heading" className={styles.sectionHeading}>
              Education
            </h2>
          </header>

          <article className={`${styles.focusPanel} ${styles.educationPanel}`}>
            <div className={styles.codeLine}>
              <span className={styles.lineNumber}>1</span>
              <span>{"{"}</span>
            </div>
            <div className={styles.codeLine}>
              <span className={styles.lineNumber}>2</span>
              <span>
                <span className={styles.syntaxBlue}>&quot;school&quot;</span>:{" "}
                <span className={styles.syntaxYellow}>
                  &quot;{resumeEducation.school}&quot;
                </span>
                ,
              </span>
            </div>
            <div className={styles.codeLine}>
              <span className={styles.lineNumber}>3</span>
              <span>
                <span className={styles.syntaxBlue}>&quot;degree&quot;</span>:{" "}
                <span className={styles.syntaxYellow}>
                  &quot;{resumeEducation.degree}&quot;
                </span>
              </span>
            </div>
            <div className={styles.codeLine}>
              <span className={styles.lineNumber}>4</span>
              <span>{"}"}</span>
            </div>
          </article>
        </div>
      </section>

      <section
        id="skills"
        className={styles.explorerSection}
        data-resume-section
        aria-labelledby="skills-heading"
      >
        <div className={styles.sectionTerminal}>
          <header className={styles.sectionHeader}>
            <p className={styles.command}>
              <span className={styles.syntaxGreen}>$</span>{" "}
              <span className={styles.syntaxPink}>npx</span> skills list
            </p>
            <h2 id="skills-heading" className={styles.sectionHeading}>
              Skills
            </h2>
            <p className={styles.sectionHint}>
              Select a skill to inspect the toolchain.
            </p>
          </header>

          <div className={styles.skillsGrid}>
            {resumeSkills.map((skill, index) => (
              <button
                key={skill}
                type="button"
                className={styles.skillChip}
                aria-pressed={activeSkill === skill}
                onClick={() => setActiveSkill(skill)}
                style={{ "--skill-index": index } as CSSProperties}
              >
                <span aria-hidden="true">+</span>
                {skill}
              </button>
            ))}
          </div>

          <p className={styles.terminalSuccess}>
            <span aria-hidden="true">✓</span> selected{" "}
            <span className={styles.syntaxYellow}>{activeSkill}</span> from{" "}
            {resumeSkills.length} packages
          </p>
        </div>
      </section>
    </div>
  );
}
