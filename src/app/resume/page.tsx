import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { ChevronDown } from "lucide-react";

import { ResumeMotion } from "./_components/resume-motion";
import styles from "./resume.module.css";
import {
  resumeEducation,
  resumeExperience,
  resumeProfile,
  resumeProjects,
  resumeSkills,
} from "./resume-data";

export const metadata: Metadata = {
  title: "Resume - Jourdan Bul-lalayao",
  description:
    "Interactive resume for Jourdan Bul-lalayao — senior full-stack engineer, product builder, and investor.",
};

const ResumePage = () => {
  let revealIndex = 0;

  const nextRevealIndex = () => {
    const current = revealIndex;
    revealIndex += 1;
    return current;
  };

  return (
    <ResumeMotion>
      <div className={styles.page}>
        <div className={styles.shell}>
          <section className={styles.hero} aria-label="Profile">
            <div className={styles.terminal}>
              <div className={styles.terminalBar} aria-hidden="true">
                <span className={styles.terminalDot} />
                <span className={styles.terminalDot} />
                <span className={styles.terminalDot} />
                <span className={styles.terminalTitle}>profile.sh</span>
              </div>

              <div className={styles.terminalBody}>
                <span className={styles.prompt}>$ whoami</span>

                <h1 className={styles.nameLine}>
                  <span className={styles.nameFirst}>{resumeProfile.firstName}</span>
                  <span className={styles.nameLast}> {resumeProfile.lastName}</span>
                  <span className={styles.cursor} aria-hidden="true">
                    |
                  </span>
                </h1>

                <div className={styles.profileDetails}>
                  <ul className={styles.profileList}>
                    <li className={styles.profileItem}>
                      <span className={styles.profileLabel}>phone</span>
                      <a className={styles.profileLink} href={resumeProfile.phoneHref}>
                        {resumeProfile.phone}
                      </a>
                    </li>
                    <li className={styles.profileItem}>
                      <span className={styles.profileLabel}>email</span>
                      <a
                        className={styles.profileLink}
                        href={`mailto:${resumeProfile.email}`}
                      >
                        {resumeProfile.email}
                      </a>
                    </li>
                    <li className={styles.profileItem}>
                      <span className={styles.profileLabel}>x</span>
                      <a
                        className={styles.profileLink}
                        href={resumeProfile.xHref}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {resumeProfile.xHandle}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.scrollCueWrap}>
              <a
                className={styles.scrollCue}
                href="#experience"
                aria-label="Scroll to experience section"
              >
                <ChevronDown aria-hidden="true" size={22} />
              </a>
            </div>
          </section>

          <main className={styles.content}>
            <section
              id="experience"
              className={styles.section}
              aria-labelledby="experience-heading"
            >
              <h2 id="experience-heading" className={styles.sectionHeading}>
                Experience
              </h2>

              {resumeExperience.map((role) => (
                <article
                  key={`${role.company}-${role.period}`}
                  className={styles.card}
                  data-reveal
                  style={{ "--reveal-index": nextRevealIndex() } as CSSProperties}
                >
                  <div className={styles.cardHeader}>
                    <div className={styles.cardTitleRow}>
                      <h3 className={styles.company}>{role.company}</h3>
                      <p className={styles.period}>{role.period}</p>
                    </div>
                    <p className={styles.role}>{role.title}</p>
                  </div>

                  <p className={styles.techStack}>
                    <strong>Technologies:</strong> {role.technologies}
                  </p>

                  <ul className={styles.highlightList}>
                    {role.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </section>

            <section className={styles.section} aria-labelledby="projects-heading">
              <h2 id="projects-heading" className={styles.sectionHeading}>
                Projects
              </h2>

              {resumeProjects.map((project) => (
                <article
                  key={project.name}
                  className={styles.projectCard}
                  data-reveal
                  style={{ "--reveal-index": nextRevealIndex() } as CSSProperties}
                >
                  <h3 className={styles.projectName}>{project.name}</h3>
                  <a
                    className={styles.projectLink}
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.href}
                  </a>
                  <p className={styles.projectDescription}>{project.description}</p>
                </article>
              ))}
            </section>

            <section className={styles.section} aria-labelledby="education-heading">
              <h2 id="education-heading" className={styles.sectionHeading}>
                Education
              </h2>

              <article
                className={styles.educationCard}
                data-reveal
                style={{ "--reveal-index": nextRevealIndex() } as CSSProperties}
              >
                <h3 className={styles.educationSchool}>{resumeEducation.school}</h3>
                <p className={styles.educationDegree}>{resumeEducation.degree}</p>
              </article>
            </section>

            <section className={styles.section} aria-labelledby="skills-heading">
              <h2 id="skills-heading" className={styles.sectionHeading}>
                Skills
              </h2>

              <div
                className={styles.skillsGrid}
                data-reveal
                style={{ "--reveal-index": nextRevealIndex() } as CSSProperties}
              >
                {resumeSkills.map((skill) => (
                  <span key={skill} className={styles.skillChip}>
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </ResumeMotion>
  );
};

export default ResumePage;
