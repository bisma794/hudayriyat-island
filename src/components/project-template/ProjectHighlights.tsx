import React from 'react';
import Image from 'next/image';
import { ProjectHighlight } from './ProjectTypes';
import styles from './ProjectHighlights.module.css';

interface ProjectHighlightsProps {
  highlights: ProjectHighlight[];
}

export default function ProjectHighlights({ highlights }: ProjectHighlightsProps) {
  return (
    <section className={styles.highlightsSection}>
      <div className="container">
        <div className={styles.highlightsGrid}>
          {highlights.map((item, idx) => (
            <div key={idx} className={styles.highlightCard}>
              <div className={styles.iconWrapper}>
                <div className={styles.accentCircle} />
                <div className={styles.iconContent}>
                  {item.icon ? (
                    <Image
                      src={item.icon}
                      alt={(item as any).label || (item as any).title || 'highlight'}
                      width={24}
                      height={24}
                      style={{ objectFit: 'contain' }}
                    />
                  ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ae774e" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  )}
                </div>
              </div>
              <div className={styles.highlightInfo}>
                <span className={styles.highlightLabel}>{(item as any).label || (item as any).title}</span>
                <span className={styles.highlightValue}>{item.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
