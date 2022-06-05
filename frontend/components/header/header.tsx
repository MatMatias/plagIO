import styles from "@/styles/Header.module.css";
interface HeaderProps {
  title?: string;
}

const Header = ({ title = "Plagon" }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      <h1>Doidera</h1>
      <h1>máxima</h1>
    </header>
  );
};

export { Header };
