import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import styles from './ThemeToggle.module.css';
import { changeTheme } from '../constants/Themes'
import { useState, useEffect } from 'react';

export default function ThemeToggle(props) {


   //Getting the user's preference in the local storage.
   let initialTheme = localStorage.getItem('darkMode') === null ? false : JSON.parse(localStorage.getItem('darkMode'));
   const [darkMode, setDarkMode] = useState(initialTheme);
   const toggle = () => {
      //Storing the user preference to the local storage.
      localStorage.setItem('darkMode', JSON.stringify(!darkMode))
      setDarkMode(!darkMode)
   }

   function changeThemeOnClick() {
      //Storing the user preference to the local storage.
      toggle();
      changeTheme(darkMode ? 'dark' : 'light')
   }

   useEffect(() => {
      changeTheme(darkMode ? 'dark' : 'light');
   }, [darkMode])

   const changeIcon = () => {

      if (darkMode === true) {
         return <BsFillSunFill className={styles.icon} />

      }

      else if (darkMode === false) {
         return <BsFillMoonFill className={styles.icon} />
      }
   }


   return <a onClick={changeThemeOnClick} className={styles.container}>{changeIcon()}</a>
}