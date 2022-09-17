/**
 * The home page, which the users will land on.
 */
import styles from './css/Home.module.scss'; // Import css modules stylesheet as styles

const Home = () => {
  return (
    <>
      <section className='home'>
      <h2 class={styles.home.welcomeText}>Welcome</h2>
      <span class={styles.welcomeText}>This is my personal development website. It exists for experimentation and to showcase things I've worked on.<br/> Please feel free to take a look around</span>
      </section>
    </>
  );
};
export default Home;
