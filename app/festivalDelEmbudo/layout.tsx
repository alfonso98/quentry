import styles from '@/app/ui/icarus/purchaseApp.module.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.mainContainer}>    
        <div className={styles.posterContainer}>
            {children}
        </div>
    </div>
  );
}