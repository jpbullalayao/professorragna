import type { Metadata } from "next";
import { ChevronDown, Folder } from "lucide-react";

import { ResumeExplorer } from "./_components/resume-motion";
import styles from "./resume.module.css";
import { resumeProfile } from "./resume-data";

export const metadata: Metadata = {
  title: "Resume - Jourdan Bul-lalayao",
  description:
    "Resume for Jourdan Bul-lalayao - full-stack engineer, product builder, and investor",
};

const ResumePage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.shell}>
        <section className={styles.hero} aria-label="Profile">
          <div className={styles.terminal}>
            <div className={styles.terminalBar} aria-hidden="true">
              <span className={`${styles.terminalDot} ${styles.dotRed}`} />
              <span className={`${styles.terminalDot} ${styles.dotYellow}`} />
              <span className={`${styles.terminalDot} ${styles.dotGreen}`} />
              <span className={styles.terminalTitle}>
                <Folder aria-hidden="true" size={13} />
                resume.sh
              </span>
            </div>

            <div className={styles.terminalBody}>
              <span className={styles.prompt}>
                <span className={styles.promptPath}>
                  ~/professorragna/resume
                </span>
                <span className={styles.promptDollar}>$</span>
                <span className={styles.promptInput}>
                  <span className={styles.promptCommand}>whoami</span>
                  <span className={styles.promptCursor} aria-hidden="true" />
                </span>
              </span>

              <div className={styles.profileContent}>
                <h1 className={styles.nameLine}>
                  {resumeProfile.firstName} {resumeProfile.lastName}
                </h1>
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
                    <span className={styles.profileLabel}>linkedin</span>
                    <a
                      className={styles.profileLink}
                      href={resumeProfile.linkedInHref}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {resumeProfile.linkedIn}
                    </a>
                  </li>
                  <li className={`${styles.profileItem} ${styles.profileObjective}`}>
                    <span className={styles.profileLabel}>objective</span>
                    <p className={styles.profileValue}>{resumeProfile.objective}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.scrollCueWrap}>
            <a
              className={styles.scrollCue}
              href="#experience"
              aria-label="Explore resume"
            >
              <span>explore</span>
              <ChevronDown aria-hidden="true" size={18} />
            </a>
          </div>
        </section>

        <main>
          <ResumeExplorer />
        </main>
      </div>
    </div>
  );
};

export default ResumePage;
